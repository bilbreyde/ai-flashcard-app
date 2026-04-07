const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const DB_PATH = path.join(__dirname, "data.json");

function load() {
  if (!fs.existsSync(DB_PATH)) {
    const empty = { users: [], sessions: [], question_results: [] };
    fs.writeFileSync(DB_PATH, JSON.stringify(empty, null, 2));
    return empty;
  }
  return JSON.parse(fs.readFileSync(DB_PATH, "utf8"));
}

function save(data) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

const db = {
  // Users
  createUser(email, password_hash) {
    const data = load();
    if (data.users.find(u => u.email === email)) throw new Error("UNIQUE constraint failed");
    const user = { id: Date.now(), email, password_hash, created_at: new Date().toISOString() };
    data.users.push(user);
    save(data);
    return user;
  },
  getUserByEmail(email) {
    return load().users.find(u => u.email === email) || null;
  },

  // Sessions
  createSession(user_id, cert_id, score, total) {
    const data = load();
    const session = { id: Date.now(), user_id, cert_id, score, total, started_at: new Date().toISOString() };
    data.sessions.push(session);
    save(data);
    return session;
  },

  // Question results
  createResults(session_id, user_id, results) {
    const data = load();
    for (const r of results) {
      data.question_results.push({
        id: crypto.randomInt(1000000),
        session_id, user_id,
        category: r.category,
        question_text: r.question_text,
        correct: r.correct ? 1 : 0
      });
    }
    save(data);
  },

  // Progress summary
  getSummary(user_id, cert_id) {
    const data = load();
    const sessions = data.sessions
      .filter(s => s.user_id === user_id && s.cert_id === cert_id)
      .sort((a, b) => new Date(b.started_at) - new Date(a.started_at));

    const myResults = data.question_results.filter(r => r.user_id === user_id);

    // Category stats
    const catMap = {};
    for (const r of myResults) {
      if (!catMap[r.category]) catMap[r.category] = { total: 0, correct: 0 };
      catMap[r.category].total++;
      if (r.correct) catMap[r.category].correct++;
    }
    const categoryStats = Object.entries(catMap).map(([category, s]) => ({
      category,
      total: s.total,
      correct: s.correct,
      accuracy: Math.round((s.correct / s.total) * 100 * 10) / 10
    })).sort((a, b) => a.accuracy - b.accuracy);

    const weakCategories = categoryStats
      .filter(c => c.accuracy < 70)
      .map(c => ({ category: c.category, accuracy: c.accuracy, total: c.total }));

    return {
      sessions: sessions.slice(0, 10),
      categoryStats,
      weakCategories,
      latest: sessions[0] || null,
      totalSessions: sessions.length
    };
  }
};

module.exports = db;

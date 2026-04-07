const express = require("express");
const { getDb, run, all } = require("../db");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/session", auth, async (req, res) => {
  const { cert_id = "google-ai-leadership", score, total, results } = req.body;
  if (score == null || !total || !results) return res.status(400).json({ error: "Missing session data." });
  try {
    await getDb();
    const session = run("INSERT INTO sessions (user_id, cert_id, score, total) VALUES (?, ?, ?, ?)",
      [req.user.userId, cert_id, score, total]);
    for (const r of results) {
      run("INSERT INTO question_results (session_id, user_id, category, question_text, correct) VALUES (?, ?, ?, ?, ?)",
        [session.lastInsertRowid, req.user.userId, r.category, r.question_text, r.correct ? 1 : 0]);
    }
    res.json({ ok: true, sessionId: session.lastInsertRowid });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save session." });
  }
});

router.get("/summary", auth, async (req, res) => {
  const { cert_id = "google-ai-leadership" } = req.query;
  try {
    await getDb();
    const sessions = all("SELECT * FROM sessions WHERE user_id = ? AND cert_id = ? ORDER BY started_at DESC LIMIT 20",
      [req.user.userId, cert_id]);
    const categoryStats = all(`
      SELECT category,
        COUNT(*) as total,
        SUM(correct) as correct,
        ROUND(100.0 * SUM(correct) / COUNT(*), 1) as accuracy
      FROM question_results
      WHERE user_id = ?
      GROUP BY category
      ORDER BY accuracy ASC
    `, [req.user.userId]);
    const weakCategories = categoryStats.filter((c) => c.accuracy < 70)
      .map((c) => ({ category: c.category, accuracy: c.accuracy, total: c.total }));
    res.json({ sessions: sessions.slice(0, 10), categoryStats, weakCategories, latest: sessions[0] || null, totalSessions: sessions.length });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to load progress." });
  }
});

module.exports = router;

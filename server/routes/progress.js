const express = require("express");
const db = require("../db");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/session", auth, (req, res) => {
  const { cert_id = "google-ai-leadership", score, total, results } = req.body;
  if (score == null || !total || !results) return res.status(400).json({ error: "Missing session data." });
  try {
    const session = db.createSession(req.user.userId, cert_id, score, total);
    db.createResults(session.id, req.user.userId, results);
    res.json({ ok: true, sessionId: session.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save session." });
  }
});

router.get("/summary", auth, (req, res) => {
  const { cert_id = "google-ai-leadership" } = req.query;
  try {
    const summary = db.getSummary(req.user.userId, cert_id);
    res.json(summary);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to load progress." });
  }
});

module.exports = router;

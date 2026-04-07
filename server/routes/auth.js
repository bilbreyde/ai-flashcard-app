const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { getDb, run, get } = require("../db");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: "Email and password required." });
  if (password.length < 8) return res.status(400).json({ error: "Password must be at least 8 characters." });
  try {
    await getDb();
    const hash = await bcrypt.hash(password, 12);
    const result = run("INSERT INTO users (email, password_hash) VALUES (?, ?)", [email.toLowerCase().trim(), hash]);
    const token = jwt.sign({ userId: result.lastInsertRowid, email }, process.env.JWT_SECRET, { expiresIn: "7d" });
    res.json({ token, user: { id: result.lastInsertRowid, email } });
  } catch (err) {
    if (err.message && err.message.includes("UNIQUE")) return res.status(409).json({ error: "An account with that email already exists." });
    console.error(err);
    res.status(500).json({ error: "Registration failed." });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: "Email and password required." });
  try {
    await getDb();
    const user = get("SELECT * FROM users WHERE email = ?", [email.toLowerCase().trim()]);
    if (!user) return res.status(401).json({ error: "Invalid email or password." });
    const valid = await bcrypt.compare(password, user.password_hash);
    if (!valid) return res.status(401).json({ error: "Invalid email or password." });
    const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "7d" });
    res.json({ token, user: { id: user.id, email: user.email } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Login failed." });
  }
});

module.exports = router;

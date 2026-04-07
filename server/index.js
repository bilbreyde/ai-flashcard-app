require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const { getDb } = require("./db");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: process.env.CLIENT_ORIGIN || "http://localhost:3000" }));
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/progress", require("./routes/progress"));
app.use("/api/questions", require("./routes/questions"));
app.get("/api/health", (req, res) => res.json({ status: "ok" }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
  app.get("*", (req, res) => res.sendFile(path.join(__dirname, "../client/build/index.html")));
}

// Init DB before starting server
getDb().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch((err) => {
  console.error("Failed to initialize database:", err);
  process.exit(1);
});

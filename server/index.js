require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/progress", require("./routes/progress"));
app.use("/api/questions", require("./routes/questions"));
app.get("/api/health", (req, res) => res.json({ status: "ok" }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
  app.get("*", (req, res) => res.sendFile(path.join(__dirname, "../client/build/index.html")));
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

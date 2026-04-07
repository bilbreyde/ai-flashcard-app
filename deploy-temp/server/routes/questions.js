const express = require("express");
const { AzureOpenAI } = require("openai");
const auth = require("../middleware/auth");

const router = express.Router();

const client = new AzureOpenAI({
  endpoint: process.env.AZURE_OPENAI_ENDPOINT,
  apiKey: process.env.AZURE_OPENAI_KEY,
  apiVersion: process.env.AZURE_API_VERSION || "2025-01-01-preview",
  deployment: process.env.AZURE_DEPLOYMENT_NAME,
});

router.post("/generate", auth, async (req, res) => {
  const { count = 10, weakCategories = [], certId = "google-ai-leadership" } = req.body;

  const weakFocus =
    weakCategories.length > 0
      ? `The user is struggling most with these categories (focus more questions here):\n${weakCategories.map((w) => `- ${w.category} (${w.accuracy}% accuracy)`).join("\n")}`
      : "The user has no prior history — generate a balanced set across all categories.";

  const prompt = `You are an expert exam question writer for the Google AI Leadership certification.

Generate exactly ${count} multiple-choice questions. ${weakFocus}

Categories to draw from:
- Responsible AI
- Google AI Principles
- LLM Concepts
- AI Governance
- AI Leadership

Rules for every question:
1. Each question must have exactly 4 answer options
2. CRITICAL: Vary which option is correct — distribute correct answers roughly evenly across positions 0, 1, 2, and 3. Do NOT make the longest answer always correct.
3. All 4 options must be similar in length — within 10 words of each other
4. Distractors must be plausible, not obviously wrong
5. Include a brief explanation for the correct answer
6. Include a brief explanation for what to study if wrong

Respond ONLY with a valid JSON array, no markdown, no preamble, no code fences:
[
  {
    "category": "Category Name",
    "question": "Question text?",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "answerIndex": 2,
    "feedbackCorrect": "Explanation when correct.",
    "feedbackWrong": "Explanation when wrong."
  }
]`;

  try {
    const response = await client.chat.completions.create({
      model: process.env.AZURE_DEPLOYMENT_NAME,
      messages: [{ role: "user", content: prompt }],
      max_completion_tokens: 4000,
    });

    const raw = response.choices[0].message.content.trim();
    const clean = raw.replace(/```json|```/g, "").trim();
    const questions = JSON.parse(clean);

    res.json({ questions });
  } catch (err) {
    console.error("Question generation error:", err.message, err.status, JSON.stringify(err.error));
    res.status(500).json({ error: "Failed to generate questions. Please try again." });
  }
});

module.exports = router;

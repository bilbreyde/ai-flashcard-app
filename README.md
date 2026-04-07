# Google AI Leadership Flashcards

A React flashcard app for studying the Google AI Leadership certification.

## Features
- 25 questions across 5 categories (Responsible AI, Google AI Principles, LLM Concepts, AI Governance, AI Leadership)
- Adjustable question count (5–25)
- Category filter — drill specific topics
- Instant feedback after every answer with explanations
- End-of-session summary with score and topic breakdown
- Review section showing missed questions with correct answers

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)

### Install & run

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm start
```

The app will open at **http://localhost:3000**

### Build for production

```bash
npm run build
```

This creates an optimized build in the `build/` folder you can deploy anywhere (Netlify, Vercel, GitHub Pages, etc.).

## Project Structure

```
src/
├── App.jsx                  # Root component, manages screen state
├── index.js                 # Entry point
├── index.css                # Global styles
├── data/
│   └── questions.js         # All 25 questions — add more here!
└── components/
    ├── Setup.jsx            # Start screen (count + category filter)
    ├── Quiz.jsx             # Question + answer + feedback screen
    └── Summary.jsx          # Results + review screen
```

## Adding More Questions

Open `src/data/questions.js` and add objects to the `QUESTIONS` array:

```js
{
  id: 26,                          // unique id
  category: "LLM Concepts",        // must match an existing category or add a new one
  q: "Your question here?",
  opts: ["Option A", "Option B", "Option C", "Option D"],
  answer: 1,                       // 0-indexed — index of the correct option
  fb_correct: "Explanation shown when the user gets it right.",
  fb_wrong: "Explanation shown when the user gets it wrong.",
}
```

Categories are derived automatically from the data — no extra config needed.

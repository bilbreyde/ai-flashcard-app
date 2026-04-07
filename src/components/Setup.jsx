import { useState } from "react";
import { CATEGORIES, QUESTIONS } from "../data/questions";

export default function Setup({ onStart }) {
  const [count, setCount] = useState(10);
  const [selectedCats, setSelectedCats] = useState([]);

  const toggleCat = (cat) => {
    setSelectedCats((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const available = selectedCats.length === 0
    ? QUESTIONS.length
    : QUESTIONS.filter((q) => selectedCats.includes(q.category)).length;

  const maxCount = Math.min(available, 25);

  const handleStart = () => {
    onStart({ count: Math.min(count, maxCount), categories: selectedCats });
  };

  return (
    <div className="screen setup-screen">
      <div className="setup-header">
        <div className="badge">Google AI Leadership Certification</div>
        <h1 className="title">Practice Flashcards</h1>
        <p className="subtitle">
          Test your knowledge and get instant feedback on every answer.
        </p>
      </div>

      <div className="setup-card">
        <div className="field">
          <div className="field-header">
            <label className="field-label">Number of questions</label>
            <span className="field-value">{Math.min(count, maxCount)}</span>
          </div>
          <input
            type="range"
            min={5}
            max={maxCount}
            step={5}
            value={Math.min(count, maxCount)}
            onChange={(e) => setCount(Number(e.target.value))}
            className="slider"
          />
          <div className="slider-labels">
            <span>5</span>
            <span>{maxCount}</span>
          </div>
        </div>

        <div className="field">
          <label className="field-label">Filter by category</label>
          <p className="field-hint">Leave all unselected to include every category.</p>
          <div className="category-grid">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`cat-chip ${selectedCats.includes(cat) ? "active" : ""}`}
                onClick={() => toggleCat(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="setup-footer">
          <span className="pool-info">{available} questions available</span>
          <button className="primary-btn" onClick={handleStart}>
            Start quiz →
          </button>
        </div>
      </div>
    </div>
  );
}

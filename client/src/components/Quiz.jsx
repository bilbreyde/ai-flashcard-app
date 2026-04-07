import { useState } from "react";

export default function Quiz({ questions, onFinish }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [results, setResults] = useState([]);

  const q = questions[current];
  const answered = selected !== null;
  const isCorrect = selected === q.answerIndex;
  const progress = (current / questions.length) * 100;

  const handleSelect = (idx) => {
    if (answered) return;
    setSelected(idx);
  };

  const handleNext = () => {
    const newResults = [
      ...results,
      {
        question: q,
        selectedIdx: selected,
        correct: selected === q.answerIndex,
        category: q.category,
        question_text: q.question,
      },
    ];
    if (current + 1 >= questions.length) {
      onFinish(newResults);
    } else {
      setResults(newResults);
      setCurrent((c) => c + 1);
      setSelected(null);
    }
  };

  const getOptClass = (idx) => {
    if (!answered) return "option-btn";
    if (idx === q.answerIndex) return "option-btn correct";
    if (idx === selected && idx !== q.answerIndex) return "option-btn wrong";
    return "option-btn dimmed";
  };

  return (
    <div className="screen quiz-screen">
      <div className="quiz-meta">
        <span className="q-counter">{current + 1} / {questions.length}</span>
        <span className="cat-tag">{q.category}</span>
      </div>

      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <div className="stats-row">
        <div className="stat correct-stat">
          <span className="stat-num">{results.filter((r) => r.correct).length}</span>
          <span className="stat-lbl">Correct</span>
        </div>
        <div className="stat wrong-stat">
          <span className="stat-num">{results.filter((r) => !r.correct).length}</span>
          <span className="stat-lbl">Wrong</span>
        </div>
        <div className="stat">
          <span className="stat-num">{questions.length - current - 1}</span>
          <span className="stat-lbl">Remaining</span>
        </div>
      </div>

      <div className="question-card">
        <p className="question-text">{q.question}</p>
        <div className="options">
          {q.options.map((opt, idx) => (
            <button
              key={idx}
              className={getOptClass(idx)}
              onClick={() => handleSelect(idx)}
              disabled={answered}
            >
              <span className="opt-letter">{String.fromCharCode(65 + idx)}</span>
              <span className="opt-text">{opt}</span>
            </button>
          ))}
        </div>

        {answered && (
          <div className={`feedback ${isCorrect ? "feedback-correct" : "feedback-wrong"}`}>
            <span className="feedback-icon">{isCorrect ? "✓" : "✗"}</span>
            <p className="feedback-text">
              {isCorrect ? q.feedbackCorrect : q.feedbackWrong}
            </p>
          </div>
        )}

        {answered && (
          <button className="next-btn" onClick={handleNext}>
            {current + 1 >= questions.length ? "See results" : "Next question"} →
          </button>
        )}
      </div>
    </div>
  );
}

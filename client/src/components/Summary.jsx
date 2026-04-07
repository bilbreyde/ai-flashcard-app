import { useEffect, useState } from "react";
import { api } from "../api";

export default function Summary({ results, onRestart, onRetry }) {
  const [saved, setSaved] = useState(false);

  const total = results.length;
  const correct = results.filter((r) => r.correct).length;
  const pct = Math.round((correct / total) * 100);

  const grade =
    pct >= 90 ? { label: "Excellent", color: "grade-excellent" } :
    pct >= 75 ? { label: "Good", color: "grade-good" } :
    pct >= 60 ? { label: "Fair", color: "grade-fair" } :
    { label: "Keep studying", color: "grade-poor" };

  const msg =
    pct >= 90 ? "Outstanding — you're ready for the exam." :
    pct >= 75 ? "Strong performance. Review the topics you missed and you'll be set." :
    pct >= 60 ? "Good progress. Focus on the categories below and try again." :
    "Keep at it — review the concepts and retake to build confidence.";

  useEffect(() => {
    const sessionResults = results.map((r) => ({
      category: r.category || r.question?.category,
      question_text: r.question_text || r.question?.question,
      correct: r.correct,
    }));

    api.saveSession("google-ai-leadership", correct, total, sessionResults)
      .then(() => setSaved(true))
      .catch((err) => console.error("Failed to save session:", err));
  }, []);

  // Group wrong answers by category
  const wrongByCat = {};
  results.filter((r) => !r.correct).forEach((r) => {
    const cat = r.category || r.question?.category;
    if (!wrongByCat[cat]) wrongByCat[cat] = [];
    wrongByCat[cat].push(r);
  });

  return (
    <div className="screen summary-screen">
      <div className="summary-header">
        <div className={`score-ring ${grade.color}`}>
          <span className="score-pct">{pct}%</span>
          <span className="score-grade">{grade.label}</span>
        </div>
        <p className="summary-msg">{msg}</p>
        {saved && <p className="saved-note">Progress saved — next quiz will adapt to your weak areas.</p>}
        <div className="summary-stats">
          <div className="sum-stat correct-stat">
            <span className="sum-num">{correct}</span>
            <span className="sum-lbl">Correct</span>
          </div>
          <div className="sum-stat wrong-stat">
            <span className="sum-num">{total - correct}</span>
            <span className="sum-lbl">Wrong</span>
          </div>
          <div className="sum-stat">
            <span className="sum-num">{total}</span>
            <span className="sum-lbl">Total</span>
          </div>
        </div>
      </div>

      {Object.keys(wrongByCat).length > 0 && (
        <div className="review-section">
          <h2 className="review-title">Review these topics</h2>
          {Object.entries(wrongByCat).map(([cat, items]) => (
            <div key={cat} className="review-cat">
              <div className="review-cat-header">
                <span className="review-cat-name">{cat}</span>
                <span className="review-cat-count">{items.length} missed</span>
              </div>
              {items.map((r, i) => (
                <div key={i} className="review-item">
                  <p className="review-q">{r.question_text || r.question?.question}</p>
                  <p className="review-answer">
                    <span className="review-label">Correct: </span>
                    {r.question?.options?.[r.question?.answerIndex]}
                  </p>
                  <p className="review-explanation">{r.question?.feedbackWrong}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      <div className="summary-actions">
        <button className="secondary-btn" onClick={onRestart}>Back to setup</button>
        <button className="primary-btn" onClick={onRetry}>New adaptive quiz →</button>
      </div>
    </div>
  );
}

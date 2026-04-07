import { useState, useCallback } from "react";
import Setup from "./components/Setup";
import Quiz from "./components/Quiz";
import Summary from "./components/Summary";
import { QUESTIONS } from "./data/questions";

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

export default function App() {
  const [screen, setScreen] = useState("setup"); // setup | quiz | summary
  const [config, setConfig] = useState({ count: 10, categories: [] });
  const [questions, setQuestions] = useState([]);
  const [results, setResults] = useState([]); // { question, selectedIdx, correct }

  const startQuiz = useCallback((cfg) => {
    setConfig(cfg);
    let pool = QUESTIONS;
    if (cfg.categories.length > 0) {
      pool = pool.filter((q) => cfg.categories.includes(q.category));
    }
    const selected = shuffle(pool).slice(0, cfg.count);
    setQuestions(selected);
    setResults([]);
    setScreen("quiz");
  }, []);

  const finishQuiz = useCallback((res) => {
    setResults(res);
    setScreen("summary");
  }, []);

  const restart = useCallback(() => setScreen("setup"), []);

  return (
    <div className="app">
      {screen === "setup" && <Setup onStart={startQuiz} />}
      {screen === "quiz" && (
        <Quiz questions={questions} onFinish={finishQuiz} />
      )}
      {screen === "summary" && (
        <Summary results={results} config={config} onRestart={restart} onRetry={() => startQuiz(config)} />
      )}
    </div>
  );
}

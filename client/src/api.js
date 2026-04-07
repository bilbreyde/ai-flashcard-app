const BASE = process.env.REACT_APP_API_URL || "https://ai-flashcard-app-apb0f0fabmfucjgj.eastus2-01.azurewebsites.net";

async function request(path, options = {}) {
  const token = localStorage.getItem("token");
  const res = await fetch(`${BASE}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    ...options,
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Request failed");
  return data;
}

export const api = {
  register: (email, password) =>
    request("/api/auth/register", { method: "POST", body: JSON.stringify({ email, password }) }),

  login: (email, password) =>
    request("/api/auth/login", { method: "POST", body: JSON.stringify({ email, password }) }),

  generateQuestions: (count, weakCategories, certId) =>
    request("/api/questions/generate", {
      method: "POST",
      body: JSON.stringify({ count, weakCategories, certId }),
    }),

  saveSession: (certId, score, total, results) =>
    request("/api/progress/session", {
      method: "POST",
      body: JSON.stringify({ cert_id: certId, score, total, results }),
    }),

  getProgress: (certId = "google-ai-leadership") =>
    request(`/api/progress/summary?cert_id=${certId}`),
};

// src/api.js

// IMPORTANT: on a real device, use your machine's LAN IP instead of localhost
// Example: "http://192.168.1.5:5243"
export const API_BASE_URL = "http://localhost:5046/"; // change to your backend http URL

export async function fetchConditions() {
  const res = await fetch(`${API_BASE_URL}/api/conditions`);
  if (!res.ok) throw new Error("Failed to load conditions");
  return res.json();
}

export async function createCondition(condition) {
  const res = await fetch(`${API_BASE_URL}/api/conditions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(condition),
  });
  if (!res.ok) throw new Error("Failed to create condition");
  return res.json();
}

export async function updateCondition(id, condition) {
  const res = await fetch(`${API_BASE_URL}/api/conditions/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...condition, id }),
  });
  if (!res.ok) throw new Error("Failed to update condition");
}

export async function deleteCondition(id) {
  const res = await fetch(`${API_BASE_URL}/api/conditions/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete condition");
}

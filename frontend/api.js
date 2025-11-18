// src/api.js

// IMPORTANT: on a real device, use your machine's LAN IP instead of localhost
// Example: "http://192.168.1.5:5243"
export const API_BASE_URL = "http://localhost:5046"; // change to your backend http URL

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

export async function registerUser(data) {
  const res = await fetch(`${API_BASE_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function loginUser(data) {
  const res = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function getUserProfile(userId) {
  const res = await fetch(`${API_BASE_URL}/users/${userId}`);
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

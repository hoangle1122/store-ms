// src/api/client.js
// Minimal API client with graceful fallback

const BASE = ""; // proxied to http://localhost:5000 via CRA proxy

async function request(path, opts = {}) {
  const url = `${BASE}${path}`;
  const res = await fetch(url, {
    headers: { "Content-Type": "application/json" },
    ...opts,
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

export const api = {
  health: () => request("/api/health"),
  // Return array; unwrap {items} if server uses pagination envelope
  producers: async (params = {}) => {
    const q = new URLSearchParams(params).toString();
    const data = await request(`/api/producers${q ? `?${q}` : ""}`);
    return Array.isArray(data) ? data : data.items ?? [];
  },
  tracks: async (params = {}) => {
    const q = new URLSearchParams(params).toString();
    const data = await request(`/api/tracks${q ? `?${q}` : ""}`);
    return Array.isArray(data) ? data : data.items ?? [];
  },
  topTracks: () => request("/api/top-tracks"),
  genres: () => request("/api/genres"),
  followProducer: (id) =>
    request(`/api/producers/${id}/follow`, { method: "POST" }),
  purchaseTrack: (id) =>
    request(`/api/tracks/${id}/purchase`, { method: "POST" }),
  // Paged helpers returning envelope
  producersPaged: (params = {}) => {
    const q = new URLSearchParams(params).toString();
    return request(`/api/producers${q ? `?${q}` : ""}`);
  },
  tracksPaged: (params = {}) => {
    const q = new URLSearchParams(params).toString();
    return request(`/api/tracks${q ? `?${q}` : ""}`);
  },
};

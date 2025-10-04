# Music Store

Full-stack demo app with React frontend and Express backend.

## Quick start

1. Install backend dependencies:

- `npm run setup`

2. Run client + server together:

- `npm run dev`

Frontend: http://localhost:3000 | Backend: http://localhost:5000

## Scripts

- `npm start` — React dev server
- `npm run server` — Backend dev (watch)
- `npm run server:start` — Backend prod mode
- `npm run setup` — Install backend deps
- `npm run dev` — Run client + server concurrently

## Environment

Create `server/.env` (optional):

```
PORT=5000
CORS_ORIGIN=http://localhost:3000
```

## API

- GET `/api/health`
- GET `/api/producers` — supports `?q=search&page=1&limit=50`, returns `{ items, total, page, limit }`
- GET `/api/tracks` — supports `?q=search&page=1&limit=50`, returns `{ items, total, page, limit }`
- GET `/api/top-tracks`
- GET `/api/genres`
- GET `/api/producers/:id`
- GET `/api/tracks/:id`
- POST `/api/producers/:id/follow`
- POST `/api/tracks/:id/purchase`

Frontend fetches via CRA proxy (configured in `package.json`). If backend is down, UI gracefully falls back to mock data.

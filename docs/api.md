# API (Draft)

Base URL (local): `http://localhost:8787`

## Endpoints
- `GET /health` → `{ ok: true }`
- `GET /events` → list daily events (mock for now)
- `GET /latest` → latest event (mock for now)

> The API is read-only. Keeper writes events on-chain; API aggregates for UI.

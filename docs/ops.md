# Ops Runbook (Prototype)

## Daily checks
- CI green on main
- Keeper log: flywheel run printed once/day
- API health: `/health` returns `{ ok: true }`

## Incident playbook
### Keeper key suspected compromised
1) Rotate keeper key
2) Set on-chain keeper to new pubkey (admin only)
3) Reduce max daily spend cap to minimal safe value
4) Post public incident note

### Bad swap / wrong mint selected
1) Pause keeper execution (stop service)
2) Inspect randomness seed + mint list
3) Re-run in dry mode (mock) for verification

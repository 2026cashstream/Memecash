import http from "node:http";

type EventRow = {
  day: string;
  randomMint: string;
  spentSOL: number;
  receivedAmount: number;
  airdropTx: string;
};

const mem: EventRow[] = [
  {
    day: "2025-12-28",
    randomMint: "So11111111111111111111111111111111111111112",
    spentSOL: 1.23,
    receivedAmount: 2314.2,
    airdropTx: "mock_tx_1735350000000"
  }
];

function json(res: http.ServerResponse, body: unknown, code = 200) {
  res.statusCode = code;
  res.setHeader("content-type", "application/json");
  res.end(JSON.stringify(body));
}

const port = Number(process.env.API_PORT ?? 8787);

const server = http.createServer((req, res) => {
  const url = new URL(req.url ?? "/", `http://${req.headers.host}`);
  if (url.pathname === "/health") return json(res, { ok: true });
  if (url.pathname === "/events") return json(res, { events: mem.slice().reverse() });
  if (url.pathname === "/latest") return json(res, mem[mem.length - 1] ?? null);

  return json(res, { error: "not found" }, 404);
});

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`[api] listening on http://localhost:${port}`);
});

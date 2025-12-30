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
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-allow-methods", "GET,POST,OPTIONS");
  res.setHeader("access-control-allow-headers", "content-type");
  res.end(JSON.stringify(body));
}

const server = http.createServer((req, res) => {
  if (req.method === "OPTIONS") return json(res, { ok: true });

  const url = new URL(req.url ?? "/", `http://${req.headers.host}`);
  if (url.pathname === "/health") return json(res, { ok: true });
  if (url.pathname === "/version") return json(res, { name: "memecash-api", version: "0.1.0" });
  ...
});

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`[api] listening on http://localhost:${port}`);
});

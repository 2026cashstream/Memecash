type FlywheelRun = {
  day: string;
  claimedSOL: number;
  randomMint: string;
  spentSOL: number;
  receivedAmount: number;
  recipients: number;
  airdropTx: string;
};

function todayYYYYMMDD() {
  return new Date().toISOString().slice(0, 10);
}

function pseudoRand(seed: string) {
  let h = 2166136261;
  for (const c of seed) {
    h ^= c.charCodeAt(0);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

const mintUniverse = [
  { symbol: "BONK", mint: "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263" },
  { symbol: "WIF", mint: "EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm" },
  { symbol: "POPCAT", mint: "7GCihgDB8fe6KNjn2MYtkzZcRjQy7Y4qL9Vv9bH5uQ8a" }
];

async function runMockFlywheel(): Promise<FlywheelRun> {
  const day = todayYYYYMMDD();
  const claimedSOL = Number((Math.random() * 1.2).toFixed(4));

  const idx = pseudoRand(`memecash:${day}`) % mintUniverse.length;
  const mint = mintUniverse[idx];

  const maxSpend = Number(process.env.MAX_DAILY_SPEND_SOL ?? 1);
  const spentSOL = Math.min(claimedSOL, maxSpend);
  const receivedAmount = Math.floor(spentSOL * (1000 + Math.random() * 2000));
  const recipients = 50;

  return {
    day,
    claimedSOL,
    randomMint: `${mint.symbol}:${mint.mint}`,
    spentSOL,
    receivedAmount,
    recipients,
    airdropTx: `mock_tx_${Date.now()}`
  };
}

(async () => {
  const run = await runMockFlywheel();
  // eslint-disable-next-line no-console
  console.log("[keeper] flywheel run:", run);
})();

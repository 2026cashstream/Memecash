export type DailyEvent = {
  day: string;
  randomMint: string;
  spentSOL: number;
  receivedAmount: number;
  airdropTx: string;
};

export type EventsResponse = { events: DailyEvent[] };
export type HealthResponse = { ok: boolean };

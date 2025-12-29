import type { DailyEvent, EventsResponse, HealthResponse } from "./types";

export class MemeCashClient {
  constructor(private readonly baseUrl: string) {}

  async health(): Promise<HealthResponse> {
    const r = await fetch(`${this.baseUrl}/health`);
    return (await r.json()) as HealthResponse;
  }

  async events(): Promise<DailyEvent[]> {
    const r = await fetch(`${this.baseUrl}/events`);
    const data = (await r.json()) as EventsResponse;
    return data.events ?? [];
  }

  async latest(): Promise<DailyEvent | null> {
    const r = await fetch(`${this.baseUrl}/latest`);
    return (await r.json()) as DailyEvent | null;
  }
}

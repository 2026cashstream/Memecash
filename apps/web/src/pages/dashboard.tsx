import { useEffect, useMemo, useState } from "react";
import { StatsCard } from "../components/StatsCard";

type EventRow = {
  day: string;
  randomMint: string;
  spentSOL: number;
  receivedAmount: number;
  airdropTx: string;
};

const API_BASE = process.env.NEXT_PUBLIC_API_BASE ?? "http://localhost:8787";

export default function Dashboard() {
  const [events, setEvents] = useState<EventRow[]>([]);
  const latest = useMemo(() => events[0], [events]);

  useEffect(() => {
    fetch(`${API_BASE}/events`)
      .then((r) => r.json())
      .then((d) => setEvents(d.events ?? []))
      .catch(() => setEvents([]));
  }, []);

  return (
    <main style={{ padding: 24, fontFamily: "ui-sans-serif, system-ui" }}>
      <h1 style={{ marginBottom: 8 }}>Dashboard</h1>
      <p style={{ opacity: 0.8, marginTop: 0 }}>
        Read-only view. Data is mock today; keeper writes on-chain events later.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: 12,
          marginTop: 16
        }}
      >
        <StatsCard title="Latest Day" value={latest?.day ?? "-"} />
        <StatsCard title="Spent (SOL)" value={latest ? String(latest.spentSOL) : "-"} />
        <StatsCard title="Recipients" value={latest ? "50" : "-"} />
      </div>

      <div style={{ marginTop: 20 }}>
        <h2 style={{ marginBottom: 8 }}>Daily Events</h2>
        {events.length === 0 ? (
          <p>No events yet.</p>
        ) : (
          <div style={{ display: "grid", gap: 12 }}>
            {events.map((e) => (
              <div
                key={e.day}
                style={{
                  border: "1px solid #e5e7eb",
                  borderRadius: 14,
                  padding: 14
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                  <div>
                    <div style={{ fontWeight: 700 }}>{e.day}</div>
                    <div style={{ opacity: 0.75 }}>Random Mint: {e.randomMint}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div>Spent: {e.spentSOL} SOL</div>
                    <div>Received: {e.receivedAmount}</div>
                  </div>
                </div>
                <div style={{ marginTop: 8, opacity: 0.8 }}>Airdrop TX: {e.airdropTx}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

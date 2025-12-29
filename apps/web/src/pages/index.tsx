import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 24, fontFamily: "ui-sans-serif, system-ui" }}>
      <h1 style={{ marginBottom: 8 }}>memecash (CASH)</h1>
      <p style={{ opacity: 0.8, marginTop: 0 }}>
        Prototype dashboard for daily flywheel events. Website: <b>2026.cash</b>
      </p>

      <div style={{ marginTop: 16 }}>
        <Link href="/dashboard">Open Dashboard →</Link>
      </div>

      <hr style={{ margin: "24px 0" }} />

      <ul style={{ lineHeight: 1.7 }}>
        <li>Claim creator rewards (adapter)</li>
        <li>Buy a random coin of the day</li>
        <li>Airdrop purchased tokens to top 50 CASH holders</li>
      </ul>

      <p style={{ opacity: 0.6, marginTop: 24 }}>
        Experimental software. Not financial advice.
      </p>
    </main>
  );
}

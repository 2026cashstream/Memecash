export function StatsCard(props: { title: string; value: string }) {
  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: 14,
        padding: 14
      }}
    >
      <div style={{ opacity: 0.7, fontSize: 12 }}>{props.title}</div>
      <div style={{ fontSize: 20, fontWeight: 700, marginTop: 6 }}>{props.value}</div>
    </div>
  );
}

function StatsCard({ title, value }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "12px", margin: "8px" }}>
      <h3>{title}</h3>
      <h2>{value}</h2>
    </div>
  );
}

export default StatsCard;

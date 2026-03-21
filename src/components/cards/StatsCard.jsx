export default function StatsCard({ label, value, trend }) {
  return (
    <div className="card stats-card">
      <p className="muted">{label}</p>
      <h3>{value}</h3>
      {trend ? <p className="trend">{trend}</p> : null}
    </div>
  );
}

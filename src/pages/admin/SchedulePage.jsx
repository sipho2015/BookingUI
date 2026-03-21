import StatusBadge from '../../components/ui/StatusBadge';

const daySchedule = [
  { time: '09:00 AM', service: 'Premium Oil Change Service', client: 'Sarah Lin', status: 'Confirmed' },
  { time: '11:00 AM', service: 'Brake System Inspection', client: 'Jordan Bell', status: 'Pending' },
  { time: '01:30 PM', service: 'Engine Diagnostics Scan', client: 'Tanya Ruiz', status: 'Confirmed' },
  { time: '03:00 PM', service: 'Detailing Wash & Interior Care', client: 'Omar Shah', status: 'Completed' },
];

export default function SchedulePage() {
  return (
    <div className="admin-page">
      <div className="card schedule-grid">
        <div>
          <h3>Daily service appointments</h3>
          <div className="stack">
            {daySchedule.map((item) => (
              <div key={item.time} className="row-item">
                <strong>{item.time}</strong>
                <div>
                  <p>{item.service}</p>
                  <span className="muted">{item.client}</span>
                </div>
                <StatusBadge status={item.status} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3>Weekly overview</h3>
          <div className="weekly-overview">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="week-day">
                <strong>{day}</strong>
                <p>8-14 bookings</p>
                <span className="dot" />
              </div>
            ))}
          </div>
          <div className="schedule-legend">
            <span><i className="legend confirmed" /> Confirmed</span>
            <span><i className="legend pending" /> Pending</span>
            <span><i className="legend completed" /> Completed</span>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Link } from 'react-router-dom';
import StatsCard from '../../components/cards/StatsCard';
import Table from '../../components/ui/Table';
import StatusBadge from '../../components/ui/StatusBadge';
import { bookings } from '../../data/bookings';

const weekLoad = [
  { day: 'Mon', jobs: 12 },
  { day: 'Tue', jobs: 18 },
  { day: 'Wed', jobs: 14 },
  { day: 'Thu', jobs: 9 },
  { day: 'Fri', jobs: 21 },
];

export default function AdminDashboardPage() {
  const confirmed = bookings.filter((booking) => booking.status === 'Confirmed' || booking.status === 'Pending');
  const completed = bookings.filter((booking) => booking.status === 'Completed');
  const cancelled = bookings.filter((booking) => booking.status === 'Cancelled');

  const rows = bookings.slice(0, 5).map((booking) => ({
    id: booking.id,
    cells: [
      booking.id,
      booking.service,
      booking.staff,
      `${booking.date} ${booking.time}`,
      <StatusBadge key={booking.id} status={booking.status} />,
    ],
  }));

  const staffLoad = bookings.reduce((acc, booking) => {
    acc[booking.staff] = (acc[booking.staff] || 0) + 1;
    return acc;
  }, {});

  const topStaff = Object.entries(staffLoad)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  const maxJobs = Math.max(...weekLoad.map((item) => item.jobs));

  return (
    <div className="admin-page admin-dashboard-wow">
      <div className="card admin-hero-strip">
        <div className="admin-hero-item">
          <span>Open Jobs</span>
          <strong>{confirmed.length}</strong>
        </div>
        <div className="admin-hero-item">
          <span>Completed</span>
          <strong>{completed.length}</strong>
        </div>
        <div className="admin-hero-item">
          <span>Cancelled</span>
          <strong>{cancelled.length}</strong>
        </div>
        <div className="admin-hero-item">
          <span>Peak Day</span>
          <strong>Friday</strong>
        </div>
      </div>

      <div className="grid grid-4 admin-kpi-grid">
        <StatsCard label="Total bookings" value={bookings.length} trend="Live overview" />
        <StatsCard label="Today's service jobs" value={confirmed.length} trend={`${completed.length} completed`} />
        <StatsCard label="Total customers" value="840" trend="+24 new" />
        <StatsCard label="Revenue preview" value="$18.4k" trend="This month" />
      </div>

      <div className="admin-wow-panels">
        <div className="card admin-panel-bookings">
          <div className="admin-panel-head">
            <h3>Recent service bookings</h3>
            <Link to="/admin/bookings" className="panel-link">Manage all</Link>
          </div>
          <Table
            columns={['Booking', 'Service', 'Technician', 'Schedule', 'Status']}
            rows={rows}
          />
        </div>

        <div className="card admin-panel-week">
          <div className="admin-panel-head">
            <h3>Weekly load</h3>
            <Link to="/schedule" className="panel-link">Open schedule</Link>
          </div>
          <div className="admin-week-bars">
            {weekLoad.map((item) => (
              <div className="week-bar-item" key={item.day}>
                <div className="week-bar-meta">
                  <span>{item.day}</span>
                  <strong>{item.jobs} jobs</strong>
                </div>
                <div className="week-bar-track">
                  <div className="week-bar-fill" style={{ width: `${(item.jobs / maxJobs) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card admin-panel-team">
          <h3>Team activity</h3>
          <div className="stack">
            {topStaff.map(([name, total]) => (
              <div key={name} className="admin-team-item">
                <div className="avatar small">{name.split(' ').map((n) => n[0]).join('')}</div>
                <div>
                  <strong>{name}</strong>
                  <p className="muted">{total} active bookings</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card admin-panel-customers">
          <h3>Recent customers</h3>
          <div className="stack">
            {['Sarah Lin', 'Jordan Bell', 'Tanya Ruiz', 'Omar Shah'].map((name) => (
              <div key={name} className="admin-customer-item">
                <div className="avatar small">{name.split(' ').map((n) => n[0]).join('')}</div>
                <div>
                  <strong>{name}</strong>
                  <p className="muted">New service booking - Today</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

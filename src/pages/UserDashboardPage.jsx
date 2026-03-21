import { Link } from 'react-router-dom';
import SectionTitle from '../components/ui/SectionTitle';
import StatsCard from '../components/cards/StatsCard';
import StatusBadge from '../components/ui/StatusBadge';
import { bookings } from '../data/bookings';

const MS_DAY = 1000 * 60 * 60 * 24;
const toDateTime = (booking) => new Date(`${booking.date} ${booking.time}`);

const formatLongDate = (value) =>
  new Date(value).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

const relativeDayLabel = (value) => {
  const target = new Date(value);
  const now = new Date();
  target.setHours(0, 0, 0, 0);
  now.setHours(0, 0, 0, 0);

  const diff = Math.round((target - now) / MS_DAY);
  if (diff === 0) return 'Today';
  if (diff === 1) return 'Tomorrow';
  if (diff > 1) return `In ${diff} days`;
  return `${Math.abs(diff)} days ago`;
};

export default function UserDashboardPage() {
  const upcoming = bookings
    .filter((booking) => booking.status === 'Confirmed' || booking.status === 'Pending')
    .sort((a, b) => toDateTime(a) - toDateTime(b));

  const completed = bookings.filter((booking) => booking.status === 'Completed');
  const cancelled = bookings.filter((booking) => booking.status === 'Cancelled');
  const nextBooking = upcoming[0];
  const completionRate = bookings.length
    ? Math.round((completed.length / bookings.length) * 100)
    : 0;

  const nextThreeUpcoming = upcoming.slice(0, 3);

  const recentActivity = [...bookings]
    .sort((a, b) => toDateTime(b) - toDateTime(a))
    .slice(0, 5);

  const inSevenDays = upcoming.filter((booking) => {
    const current = new Date();
    const from = new Date(current.setHours(0, 0, 0, 0));
    const until = new Date(from.getTime() + MS_DAY * 7);
    const itemDate = new Date(booking.date);
    return itemDate >= from && itemDate <= until;
  }).length;

  return (
    <div className="section">
      <div className="container">
        <div className="user-dashboard dashboard-wow">
          <SectionTitle
            eyebrow="Dashboard"
            title="Welcome back, Sipho"
            subtitle="Monitor your service schedule, track appointment progress, and move fast with cleaner actions."
          />

          <div className="card dashboard-intel-strip">
            <div className="dashboard-intel-item">
              <span>Service Health</span>
              <strong>Excellent</strong>
            </div>
            <div className="dashboard-intel-item">
              <span>Appointments in 7 days</span>
              <strong>{inSevenDays}</strong>
            </div>
            <div className="dashboard-intel-item">
              <span>Completion Rate</span>
              <strong>{completionRate}%</strong>
            </div>
          </div>

          <div className="card dashboard-hero-modern dashboard-hero-wow">
            <div className="dashboard-hero-main">
              <p className="card-eyebrow">Next Appointment</p>
              <h3>{nextBooking ? nextBooking.service : 'No upcoming appointment yet'}</h3>
              <p className="muted">
                {nextBooking
                  ? `${formatLongDate(nextBooking.date)} at ${nextBooking.time} with ${nextBooking.staff}`
                  : 'Book your next vehicle service to keep maintenance on schedule.'}
              </p>
              <div className="dashboard-hero-keypoints">
                <span>{nextBooking ? relativeDayLabel(nextBooking.date) : 'No schedule yet'}</span>
                <span>{upcoming.length} upcoming appointments</span>
                <span>{completed.length} completed this period</span>
              </div>
              <div className="dashboard-hero-cta">
                <Link to="/booking" className="btn btn-primary">Book New Service</Link>
                <Link to="/my-bookings" className="btn btn-ghost">View All Bookings</Link>
              </div>
            </div>

            <div className="dashboard-hero-side">
              <h4>Upcoming timeline</h4>
              <div className="dashboard-timeline">
                {nextThreeUpcoming.length ? (
                  nextThreeUpcoming.map((booking) => (
                    <div key={booking.id} className="timeline-item">
                      <div className="timeline-dot" aria-hidden="true" />
                      <div>
                        <strong>{booking.time}</strong>
                        <p>{booking.service}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="muted">No appointments in your timeline.</p>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-4 dashboard-stats-grid">
            <StatsCard label="Total bookings" value={bookings.length} trend="All appointments" />
            <StatsCard label="Upcoming" value={upcoming.length} trend={nextBooking ? `Next: ${nextBooking.time}` : 'No pending booking'} />
            <StatsCard label="Completed" value={completed.length} trend="Successfully serviced" />
            <StatsCard label="Cancelled" value={cancelled.length} trend="Review and reschedule" />
          </div>

          <div className="dashboard-panels-modern">
            <div className="card dashboard-panel-lg">
              <div className="dashboard-panel-head">
                <h3>Upcoming service appointments</h3>
                <Link to="/my-bookings" className="panel-link">Manage</Link>
              </div>
              <div className="stack">
                {upcoming.length ? (
                  upcoming.map((booking) => (
                    <div className="appointment-item" key={booking.id}>
                      <div className="appointment-id">{booking.id}</div>
                      <div className="appointment-main">
                        <strong>{booking.service}</strong>
                        <p>{formatLongDate(booking.date)} - {booking.time}</p>
                      </div>
                      <div className="appointment-side">
                        <p>{booking.staff}</p>
                        <StatusBadge status={booking.status} />
                        <Link to={`/booking/${booking.id}`} className="panel-mini-link">View</Link>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="muted">No upcoming appointments yet.</p>
                )}
              </div>
            </div>

            <div className="card dashboard-panel-sm">
              <h3>Recent activity</h3>
              <div className="stack">
                {recentActivity.map((booking) => (
                  <div className="activity-item" key={booking.id}>
                    <div>
                      <strong>{booking.service}</strong>
                      <p className="muted">{booking.id} - {booking.staff}</p>
                    </div>
                    <div className="activity-side">
                      <StatusBadge status={booking.status} />
                      <span>{formatLongDate(booking.date)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card dashboard-panel-sm">
              <h3>Quick actions</h3>
              <div className="quick-action-grid">
                <Link to="/booking" className="btn btn-primary btn-block">New Booking</Link>
                <Link to="/services" className="btn btn-secondary btn-block">Browse Services</Link>
                <Link to="/profile" className="btn btn-ghost btn-block">Profile Settings</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

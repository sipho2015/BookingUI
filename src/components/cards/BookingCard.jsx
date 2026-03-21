import StatusBadge from '../ui/StatusBadge';

export default function BookingCard({ booking, onView, onReschedule, onCancel }) {
  const canCancel = booking.status !== 'Cancelled' && booking.status !== 'Completed';

  return (
    <div className="card booking-card booking-card-modern">
      <div className="booking-card-main">
        <div className="booking-card-head">
          <p className="card-eyebrow">Booking {booking.id}</p>
          <StatusBadge status={booking.status} />
        </div>

        <h3>{booking.service}</h3>

        <div className="booking-meta">
          <span>{booking.date}</span>
          <span>{booking.time}</span>
          <span>{booking.staff}</span>
        </div>
      </div>

      <div className="booking-actions">
        <div className="action-group">
          <button className="btn btn-ghost btn-sm" onClick={onView}>View</button>
          <button className="btn btn-secondary btn-sm" onClick={onReschedule}>Reschedule</button>
          {canCancel ? (
            <button className="btn btn-danger btn-sm" onClick={onCancel}>Cancel</button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

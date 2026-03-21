import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SectionTitle from '../components/ui/SectionTitle';
import SearchBar from '../components/ui/SearchBar';
import BookingCard from '../components/cards/BookingCard';
import Modal from '../components/ui/Modal';
import EmptyState from '../components/ui/EmptyState';
import FormInput from '../components/ui/FormInput';
import FormSelect from '../components/ui/FormSelect';
import Button from '../components/ui/Button';
import ActionToast from '../components/ui/ActionToast';
import { bookings as mockBookings } from '../data/bookings';

const statusOptions = ['All', 'Confirmed', 'Pending', 'Completed', 'Cancelled'];
const rescheduleSlots = ['09:00 AM', '10:30 AM', '12:00 PM', '02:00 PM', '04:30 PM'];

export default function MyBookingsPage() {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState(mockBookings);
  const [openCancel, setOpenCancel] = useState(false);
  const [openReschedule, setOpenReschedule] = useState(false);
  const [selected, setSelected] = useState(null);
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('All');
  const [toast, setToast] = useState({ message: '', type: 'success' });
  const [rescheduleForm, setRescheduleForm] = useState({ date: '', time: '' });

  useEffect(() => {
    if (!toast.message) return undefined;
    const timer = setTimeout(() => setToast({ message: '', type: 'success' }), 2800);
    return () => clearTimeout(timer);
  }, [toast]);

  const metrics = useMemo(() => {
    return {
      total: bookings.length,
      upcoming: bookings.filter((booking) => booking.status === 'Confirmed' || booking.status === 'Pending').length,
      completed: bookings.filter((booking) => booking.status === 'Completed').length,
      cancelled: bookings.filter((booking) => booking.status === 'Cancelled').length,
    };
  }, [bookings]);

  const filteredBookings = useMemo(() => {
    return bookings.filter((booking) => {
      const matchesStatus = status === 'All' || booking.status === status;
      const text = `${booking.id} ${booking.service} ${booking.staff}`.toLowerCase();
      const matchesQuery = text.includes(query.toLowerCase());
      return matchesStatus && matchesQuery;
    });
  }, [bookings, query, status]);

  const handleCancel = (booking) => {
    setSelected(booking);
    setOpenCancel(true);
  };

  const handleReschedule = (booking) => {
    setSelected(booking);
    setRescheduleForm({ date: booking.date, time: booking.time });
    setOpenReschedule(true);
  };

  const confirmCancel = () => {
    setBookings((prev) =>
      prev.map((booking) =>
        booking.id === selected.id ? { ...booking, status: 'Cancelled' } : booking,
      ),
    );
    setOpenCancel(false);
    setToast({ message: `${selected.id} has been cancelled.`, type: 'danger' });
  };

  const confirmReschedule = () => {
    if (!rescheduleForm.date || !rescheduleForm.time) return;
    setBookings((prev) =>
      prev.map((booking) =>
        booking.id === selected.id
          ? {
              ...booking,
              date: rescheduleForm.date,
              time: rescheduleForm.time,
              status: booking.status === 'Cancelled' ? 'Pending' : booking.status,
            }
          : booking,
      ),
    );
    setOpenReschedule(false);
    setToast({ message: `${selected.id} has been rescheduled.`, type: 'success' });
  };

  return (
    <div className="section">
      <div className="container">
        <SectionTitle
          eyebrow="My Bookings"
          title="Your Service Timeline"
          subtitle="Track upcoming jobs, review completed services, and manage changes in one place."
        />

        <ActionToast message={toast.message} type={toast.type} />

        <div className="bookings-overview">
          <div className="card booking-stat-card">
            <p className="muted">Total Bookings</p>
            <h3>{metrics.total}</h3>
          </div>
          <div className="card booking-stat-card">
            <p className="muted">Upcoming</p>
            <h3>{metrics.upcoming}</h3>
          </div>
          <div className="card booking-stat-card">
            <p className="muted">Completed</p>
            <h3>{metrics.completed}</h3>
          </div>
          <div className="card booking-stat-card">
            <p className="muted">Cancelled</p>
            <h3>{metrics.cancelled}</h3>
          </div>
        </div>

        <div className="card bookings-toolbar">
          <SearchBar value={query} onChange={setQuery} placeholder="Search by booking, service, or technician" />
          <div className="status-tabs" role="tablist" aria-label="Filter bookings by status">
            {statusOptions.map((option) => (
              <button
                key={option}
                className={`status-tab ${status === option ? 'active' : ''}`}
                onClick={() => setStatus(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {filteredBookings.length === 0 ? (
          <EmptyState
            title="No matching bookings"
            description="Try adjusting your search or status filters to find a booking."
          />
        ) : (
          <div className="bookings-list">
            {filteredBookings.map((booking) => (
              <BookingCard
                key={booking.id}
                booking={booking}
                onView={() => navigate(`/booking/${booking.id}`)}
                onReschedule={() => handleReschedule(booking)}
                onCancel={() => handleCancel(booking)}
              />
            ))}
          </div>
        )}

        <Modal
          title="Cancel booking"
          description="Are you sure you want to cancel this booking? You can always reschedule later."
          open={openCancel}
          onClose={() => setOpenCancel(false)}
          onConfirm={confirmCancel}
        />

        {openReschedule ? (
          <div className="modal-overlay">
            <div className="modal booking-modal reschedule-modal">
              <div className="modal-header">
                <h3>Reschedule Booking</h3>
                <button className="modal-close" onClick={() => setOpenReschedule(false)} aria-label="Close dialog">
                  X
                </button>
              </div>
              <p className="modal-description">
                Choose a new date and time for {selected?.id}. We will keep your preferred technician.
              </p>
              <div className="reschedule-fields">
                <FormInput
                  label="New Date"
                  type="date"
                  value={rescheduleForm.date}
                  onChange={(event) => setRescheduleForm((prev) => ({ ...prev, date: event.target.value }))}
                />
                <FormSelect
                  label="New Time"
                  value={rescheduleForm.time}
                  onChange={(event) => setRescheduleForm((prev) => ({ ...prev, time: event.target.value }))}
                  options={rescheduleSlots.map((slot) => ({ value: slot, label: slot }))}
                />
              </div>
              <div className="modal-actions">
                <Button variant="ghost" className="modal-btn" onClick={() => setOpenReschedule(false)}>
                  Keep Current Slot
                </Button>
                <Button
                  variant="primary"
                  className="modal-btn"
                  onClick={confirmReschedule}
                  disabled={!rescheduleForm.date || !rescheduleForm.time}
                >
                  Save New Slot
                </Button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

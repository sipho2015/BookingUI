import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import SectionTitle from '../components/ui/SectionTitle';
import StatusBadge from '../components/ui/StatusBadge';
import Button from '../components/ui/Button';
import Modal from '../components/ui/Modal';
import FormInput from '../components/ui/FormInput';
import FormSelect from '../components/ui/FormSelect';
import ActionToast from '../components/ui/ActionToast';
import { bookings } from '../data/bookings';

const rescheduleSlots = ['09:00 AM', '10:30 AM', '12:00 PM', '02:00 PM', '04:30 PM'];

const formatLongDate = (value) =>
  new Date(value).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

export default function BookingDetailsPage() {
  const { id } = useParams();
  const booking = bookings.find((item) => item.id === id) || bookings[0];
  const [status, setStatus] = useState(booking.status);
  const [appointmentDate, setAppointmentDate] = useState(booking.date);
  const [appointmentTime, setAppointmentTime] = useState(booking.time);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showRescheduleModal, setShowRescheduleModal] = useState(false);
  const [toast, setToast] = useState({ message: '', type: 'success' });
  const [rescheduleForm, setRescheduleForm] = useState({ date: booking.date, time: booking.time });

  const summary = useMemo(() => {
    return [
      { label: 'Booking ID', value: booking.id },
      { label: 'Service Type', value: booking.service },
      { label: 'Technician', value: booking.staff },
      { label: 'Appointment Date', value: formatLongDate(appointmentDate) },
      { label: 'Time Slot', value: appointmentTime },
      { label: 'Location', value: 'Victoria Falls Service Center' },
    ];
  }, [booking, appointmentDate, appointmentTime]);

  const handleConfirmCancel = () => {
    setStatus('Cancelled');
    setShowCancelModal(false);
    setToast({ message: `${booking.id} has been cancelled.`, type: 'danger' });
    setTimeout(() => setToast({ message: '', type: 'success' }), 2800);
  };

  const handleOpenReschedule = () => {
    setRescheduleForm({ date: appointmentDate, time: appointmentTime });
    setShowRescheduleModal(true);
  };

  const handleSaveReschedule = () => {
    if (!rescheduleForm.date || !rescheduleForm.time) return;
    setAppointmentDate(rescheduleForm.date);
    setAppointmentTime(rescheduleForm.time);
    if (status === 'Cancelled') setStatus('Pending');
    setShowRescheduleModal(false);
    setToast({ message: `${booking.id} has been rescheduled successfully.`, type: 'success' });
    setTimeout(() => setToast({ message: '', type: 'success' }), 2800);
  };

  return (
    <div className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Booking Details"
          title={`Booking ${booking.id}`}
          subtitle="Review your appointment information and manage your service request."
        />

        <ActionToast message={toast.message} type={toast.type} />

        <div className="booking-details-shell">
          <div className="card booking-detail-main">
            <div className="booking-detail-head">
              <div>
                <p className="card-eyebrow">Vehicle Service Appointment</p>
                <h3>{booking.service}</h3>
                <p className="muted">Scheduled for {formatLongDate(appointmentDate)} at {appointmentTime}</p>
              </div>
              <StatusBadge status={status} />
            </div>

            <div className="booking-detail-grid">
              {summary.map((item) => (
                <div key={item.label} className="booking-detail-item">
                  <p>{item.label}</p>
                  <h4>{item.value}</h4>
                </div>
              ))}
            </div>

            <div className="booking-detail-notes">
              <p className="muted">Notes</p>
              <p>
                Please arrive 10 minutes early. Our service advisor will check your vehicle
                and confirm your requested service before work begins.
              </p>
            </div>
          </div>

          <div className="card booking-detail-side">
            <h3>Manage this booking</h3>
            <p className="muted">Need to update your appointment? Choose an action below.</p>

            <div className="detail-side-actions">
              <Button variant="secondary" className="detail-action-btn" onClick={handleOpenReschedule}>
                Reschedule
              </Button>
              <Button
                variant="danger"
                className="detail-action-btn detail-action-danger"
                onClick={() => setShowCancelModal(true)}
                disabled={status === 'Cancelled' || status === 'Completed'}
              >
                Cancel Booking
              </Button>
              <Link to="/my-bookings" className="btn btn-ghost detail-action-btn">Back to Bookings</Link>
            </div>

            <div className="detail-help-box">
              <h4>Need help?</h4>
              <p>Call +263 789 652 298 or email siphomoyo893@gmail.com for quick support.</p>
            </div>
          </div>
        </div>

        <Modal
          title="Cancel booking"
          description="Are you sure you want to cancel this booking? This action can be reversed later by creating a new booking."
          open={showCancelModal}
          onClose={() => setShowCancelModal(false)}
          onConfirm={handleConfirmCancel}
        />

        {showRescheduleModal ? (
          <div className="modal-overlay">
            <div className="modal booking-modal reschedule-modal">
              <div className="modal-header">
                <h3>Reschedule Booking</h3>
                <button className="modal-close" onClick={() => setShowRescheduleModal(false)} aria-label="Close dialog">
                  X
                </button>
              </div>
              <p className="modal-description">
                Select a new date and time for this service appointment.
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
                <Button variant="ghost" className="modal-btn" onClick={() => setShowRescheduleModal(false)}>
                  Keep Current Slot
                </Button>
                <Button
                  variant="primary"
                  className="modal-btn"
                  onClick={handleSaveReschedule}
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

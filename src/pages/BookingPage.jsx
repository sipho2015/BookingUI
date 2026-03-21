import { useMemo, useState } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import FormInput from '../components/ui/FormInput';
import FormSelect from '../components/ui/FormSelect';
import TimeSlotButton from '../components/ui/TimeSlotButton';
import Button from '../components/ui/Button';
import Breadcrumb from '../components/ui/Breadcrumb';
import { services } from '../data/services';
import { staffMembers } from '../data/staff';
import { formatCurrency } from '../utils/format';

const timeSlots = {
  Morning: ['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM'],
  Afternoon: ['12:00 PM', '12:30 PM', '01:30 PM', '02:00 PM'],
  Evening: ['04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM'],
};

export default function BookingPage() {
  const [selectedServiceId, setSelectedServiceId] = useState(services[0].id);
  const [selectedDate, setSelectedDate] = useState('2026-03-25');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedStaff, setSelectedStaff] = useState(staffMembers[0].id);
  const [form, setForm] = useState({ fullName: '', email: '', phone: '', notes: '' });
  const [success, setSuccess] = useState(false);

  const selectedService = useMemo(
    () => services.find((service) => service.id === selectedServiceId),
    [selectedServiceId],
  );

  const staffOptions = staffMembers.map((staff) => ({ value: staff.id, label: staff.name }));

  return (
    <div className="section">
      <div className="container">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Booking' }]} />

        <SectionTitle
          eyebrow="Booking"
          title="Book your vehicle service"
          subtitle="Choose service, technician, and time in a flow built for speed and clarity."
        />

        <div className="booking-grid booking-shell">
          <div className="card booking-form">
            <h3>Service Selection</h3>

            <FormSelect
              label="Service"
              value={selectedServiceId}
              onChange={(event) => setSelectedServiceId(event.target.value)}
              options={services.map((service) => ({ value: service.id, label: service.name }))}
            />

            <div className="service-summary">
              <p className="muted">Selected Service</p>
              <h4>{selectedService?.name}</h4>
              <p>{selectedService?.description}</p>
              <div className="service-pills">
                <span>{selectedService?.duration}</span>
                <span>{formatCurrency(selectedService?.price)}</span>
              </div>
            </div>

            <div className="field-grid">
              <FormInput
                label="Appointment Date"
                type="date"
                value={selectedDate}
                onChange={(event) => setSelectedDate(event.target.value)}
              />
              <FormSelect
                label="Technician"
                value={selectedStaff}
                onChange={(event) => setSelectedStaff(event.target.value)}
                options={staffOptions}
              />
            </div>

            <div className="slot-group">
              <p className="muted">Select a time</p>
              {Object.entries(timeSlots).map(([label, slots]) => (
                <div key={label}>
                  <h5>{label}</h5>
                  <div className="slot-grid">
                    {slots.map((slot) => (
                      <TimeSlotButton
                        key={slot}
                        label={slot}
                        selected={selectedTime === slot}
                        onClick={() => setSelectedTime(slot)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="field-grid">
              <FormInput
                label="Full Name"
                placeholder="Jane Carter"
                value={form.fullName}
                onChange={(event) => setForm({ ...form, fullName: event.target.value })}
              />
              <FormInput
                label="Email"
                type="email"
                placeholder="jane@email.com"
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
              />
              <FormInput
                label="Phone"
                placeholder="+1 (555) 456-2049"
                value={form.phone}
                onChange={(event) => setForm({ ...form, phone: event.target.value })}
              />
              <FormInput
                label="Vehicle Notes"
                placeholder="Any dashboard lights, sounds, or special checks needed?"
                value={form.notes}
                onChange={(event) => setForm({ ...form, notes: event.target.value })}
              />
            </div>
          </div>

          <div className="booking-summary">
            <div className="card sticky-summary">
              <h3>Booking Summary</h3>
              <div className="summary-item">
                <span>Service</span>
                <strong>{selectedService?.name}</strong>
              </div>
              <div className="summary-item">
                <span>Date & Time</span>
                <strong>{selectedDate} · {selectedTime || 'Select time'}</strong>
              </div>
              <div className="summary-item">
                <span>Technician</span>
                <strong>{staffMembers.find((staff) => staff.id === selectedStaff)?.name}</strong>
              </div>
              <div className="summary-item">
                <span>Duration</span>
                <strong>{selectedService?.duration}</strong>
              </div>
              <div className="summary-item">
                <span>Booking Type</span>
                <strong>{form.notes ? 'Custom diagnostic request' : 'Standard service request'}</strong>
              </div>
              <div className="summary-total">
                <span>Total</span>
                <strong>{formatCurrency(selectedService?.price)}</strong>
              </div>
              <Button
                className="btn-block"
                onClick={() => setSuccess(true)}
                disabled={!selectedTime || !form.fullName}
              >
                Confirm Booking
              </Button>
            </div>

            {success ? (
              <div className="card success-card">
                <h4>Booking submitted</h4>
                <p>Your vehicle service request has been received. A confirmation will arrive shortly.</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

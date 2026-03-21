import { useState } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import TimeSlotButton from '../components/ui/TimeSlotButton';

const slots = {
  Morning: ['08:30 AM', '09:00 AM', '09:30 AM', '10:00 AM'],
  Afternoon: ['12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM'],
  Evening: ['04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM'],
};

const bookedSlots = ['09:30 AM', '12:30 PM', '05:00 PM'];

export default function TimeSlotsPage() {
  const [date, setDate] = useState('2026-03-25');
  const [selected, setSelected] = useState('');

  return (
    <div className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Availability"
          title="Available time slots"
          subtitle="Select a time that works for you." 
        />

        <div className="card date-picker">
          <label>
            <span>Select date</span>
            <input type="date" value={date} onChange={(event) => setDate(event.target.value)} />
          </label>
        </div>

        {Object.entries(slots).map(([label, list]) => (
          <div className="card" key={label}>
            <h3>{label}</h3>
            <div className="slot-grid">
              {list.map((slot) => (
                <TimeSlotButton
                  key={slot}
                  label={slot}
                  selected={selected === slot}
                  disabled={bookedSlots.includes(slot)}
                  onClick={() => setSelected(slot)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

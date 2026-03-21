import { Link } from 'react-router-dom';

export default function StaffCard({ staff }) {
  return (
    <div className="card staff-card modern-staff-card">
      <div className="staff-card-head">
        <div className="avatar">{staff.name.split(' ').map((part) => part[0]).join('')}</div>
        <span className="chip staff-availability-chip">{staff.availability}</span>
      </div>

      <div className="staff-card-body">
        <h3>{staff.name}</h3>
        <p className="staff-role">{staff.role}</p>
        <p className="muted">{staff.specialty}</p>
      </div>

      <div className="staff-card-stats">
        <div>
          <span>Rating</span>
          <strong>{staff.rating}</strong>
        </div>
        <div>
          <span>Experience</span>
          <strong>{staff.experience}</strong>
        </div>
        <div>
          <span>Next Slot</span>
          <strong>{staff.nextSlot}</strong>
        </div>
      </div>

      <div className="staff-card-tags">
        {staff.skills.slice(0, 2).map((item) => (
          <span key={item} className="chip">{item}</span>
        ))}
      </div>

      <div className="staff-card-actions">
        <Link to="/booking" className="btn btn-ghost">Book Now</Link>
        <Link to={`/staff/${staff.id}`} className="btn btn-secondary">View Profile</Link>
      </div>
    </div>
  );
}

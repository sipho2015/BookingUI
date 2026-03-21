import SectionTitle from '../components/ui/SectionTitle';
import StaffCard from '../components/cards/StaffCard';
import { staffMembers } from '../data/staff';

export default function StaffPage() {
  const availableToday = staffMembers.filter((staff) => staff.availability.includes('Available Today')).length;

  return (
    <div className="section staff-page">
      <div className="container">
        <SectionTitle
          eyebrow="Our Team"
          title="Meet the technicians"
          subtitle="Experienced professionals ready to inspect, repair, and maintain your vehicle."
        />

        <div className="staff-overview">
          <div className="card staff-overview-card">
            <p className="muted">Total Technicians</p>
            <h3>{staffMembers.length}</h3>
          </div>
          <div className="card staff-overview-card">
            <p className="muted">Available Today</p>
            <h3>{availableToday}</h3>
          </div>
          <div className="card staff-overview-card">
            <p className="muted">Average Rating</p>
            <h3>4.8</h3>
          </div>
        </div>

        <div className="grid grid-3 staff-grid">
          {staffMembers.map((staff) => (
            <StaffCard key={staff.id} staff={staff} />
          ))}
        </div>
      </div>
    </div>
  );
}

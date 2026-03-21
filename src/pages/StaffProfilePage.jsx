import { Link, useParams } from 'react-router-dom';
import Breadcrumb from '../components/ui/Breadcrumb';
import { staffMembers } from '../data/staff';

const profileMeta = {
  'stf-01': {
    experience: '8 years',
    rating: '4.9/5',
    jobs: '1,240 jobs',
    nextSlot: 'Today, 4:30 PM',
    bio: 'Specializes in engine performance, preventive maintenance, and long-term vehicle health planning.',
    certifications: ['Engine Systems', 'Hybrid Maintenance', 'Advanced Diagnostics'],
    strengths: [
      'Fast root-cause troubleshooting',
      'Clear repair recommendations',
      'Preventive maintenance planning',
    ],
  },
  'stf-02': {
    experience: '6 years',
    rating: '4.8/5',
    jobs: '980 consults',
    nextSlot: 'Tomorrow, 9:00 AM',
    bio: 'Focuses on clear diagnostics planning and helping customers understand repair priorities and timelines.',
    certifications: ['Service Advisory', 'Repair Planning', 'Customer Support'],
    strengths: [
      'Detailed service explanations',
      'Transparent cost estimates',
      'Priority-based job scheduling',
    ],
  },
  'stf-03': {
    experience: '7 years',
    rating: '4.9/5',
    jobs: '1,110 jobs',
    nextSlot: 'Today, 2:00 PM',
    bio: 'Known for precise brake and suspension inspections with a strong focus on safety and road confidence.',
    certifications: ['Brake Systems', 'Suspension Setup', 'Road Safety Inspection'],
    strengths: [
      'Accurate safety checks',
      'Brake performance optimization',
      'Suspension balance tuning',
    ],
  },
  'stf-04': {
    experience: '5 years',
    rating: '4.7/5',
    jobs: '860 details',
    nextSlot: 'Tomorrow, 11:30 AM',
    bio: 'Expert in detailing finishes, paint protection, and interior restoration for premium vehicle presentation.',
    certifications: ['Paint Care', 'Interior Restoration', 'Ceramic Protection'],
    strengths: [
      'Premium detailing quality',
      'Long-lasting finish protection',
      'Interior refresh precision',
    ],
  },
};

const defaultMeta = {
  experience: '5 years',
  rating: '4.8/5',
  jobs: '900 jobs',
  nextSlot: 'Tomorrow, 10:00 AM',
  bio: 'Experienced technician focused on quality service and clear customer communication.',
  certifications: ['General Service', 'Diagnostics'],
  strengths: ['Quality checks', 'Efficient turnaround', 'Service consistency'],
};

export default function StaffProfilePage() {
  const { id } = useParams();
  const staff = staffMembers.find((item) => item.id === id);

  if (!staff) {
    return (
      <div className="section">
        <div className="container">
          <div className="empty-state">
            <h3>Technician not found</h3>
            <p>The selected team member profile does not exist.</p>
            <Link to="/staff" className="btn btn-primary">Back to Technicians</Link>
          </div>
        </div>
      </div>
    );
  }

  const meta = profileMeta[staff.id] || defaultMeta;
  const initials = staff.name.split(' ').map((part) => part[0]).join('');

  return (
    <div className="section staff-profile-page">
      <div className="container">
        <Breadcrumb items={[{ label: 'Technicians', href: '/staff' }, { label: staff.name }]} />

        <div className="card staff-profile-hero">
          <div className="staff-profile-identity">
            <div className="avatar large staff-profile-avatar">{initials}</div>
            <div>
              <p className="card-eyebrow">Technician Profile</p>
              <h2>{staff.name}</h2>
              <p className="staff-role">{staff.role}</p>
              <p className="muted">{staff.specialty}</p>
            </div>
          </div>

          <div className="staff-profile-quick">
            <span className="chip staff-status-chip">{staff.availability}</span>
            <div className="staff-pill-row">
              <span className="staff-pill"><strong>{meta.rating}</strong> Rating</span>
              <span className="staff-pill"><strong>{meta.experience}</strong> Experience</span>
              <span className="staff-pill"><strong>{meta.jobs}</strong> Completed</span>
            </div>
          </div>
        </div>

        <div className="staff-profile-grid">
          <div className="card staff-profile-content">
            <div className="staff-detail-section">
              <h3>About</h3>
              <p>{meta.bio}</p>
            </div>

            <div className="staff-detail-section">
              <h3>Certifications</h3>
              <div className="staff-tags">
                {meta.certifications.map((item) => (
                  <span key={item} className="chip">{item}</span>
                ))}
              </div>
            </div>

            <div className="staff-detail-section">
              <h3>Service Strengths</h3>
              <ul className="staff-strengths">
                {meta.strengths.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="card staff-profile-aside">
            <h3>Booking Snapshot</h3>
            <div className="staff-stats">
              <div>
                <span>Next Available Slot</span>
                <strong>{meta.nextSlot}</strong>
              </div>
              <div>
                <span>Customer Rating</span>
                <strong>{meta.rating}</strong>
              </div>
              <div>
                <span>Completed Services</span>
                <strong>{meta.jobs}</strong>
              </div>
            </div>

            <Link to="/booking" className="btn btn-primary btn-block">Book With This Technician</Link>
            <Link to="/staff" className="btn btn-ghost btn-block">Back to Team</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

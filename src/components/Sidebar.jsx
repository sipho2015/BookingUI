import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-brand">
          <img
            src="/apex-logo.png"
            alt="Apex AutoCare logo"
            className="sidebar-logo"
            onError={(event) => {
              event.currentTarget.style.display = 'none';
            }}
          />
          <div>
            <h3>Apex AutoCare</h3>
            <p>Admin Console</p>
          </div>
        </div>
      </div>
      <nav className="sidebar-links">
        <NavLink to="/admin">Overview</NavLink>
        <NavLink to="/admin/bookings">Manage Bookings</NavLink>
        <NavLink to="/schedule">Schedule</NavLink>
        <NavLink to="/staff">Technicians</NavLink>
      </nav>
      <div className="sidebar-footer">
        <span>Automotive Booking Suite</span>
      </div>
    </aside>
  );
}

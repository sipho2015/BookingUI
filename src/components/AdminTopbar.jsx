import { useState } from 'react';
import NotificationDropdown from './NotificationDropdown';

export default function AdminTopbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="admin-topbar">
      <div>
        <h2>Welcome back, Admin</h2>
        <p>Here is what is happening with service bookings today.</p>
      </div>
      <div className="admin-actions">
        <input className="topbar-search" placeholder="Search bookings" />
        <button className="icon-btn" onClick={() => setOpen(!open)}>
          !
        </button>
        <div className="profile-pill">
          <span className="avatar small">AL</span>
          <span>Operations Lead</span>
        </div>
      </div>
      <NotificationDropdown open={open} />
    </div>
  );
}

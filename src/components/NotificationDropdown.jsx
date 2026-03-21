import { notifications } from '../data/notifications';

export default function NotificationDropdown({ open }) {
  if (!open) return null;

  return (
    <div className="notification-dropdown">
      <h4>Notifications</h4>
      {notifications.map((item) => (
        <div key={item.id} className="notification-item">
          <p className="notification-title">{item.title}</p>
          <p className="notification-desc">{item.description}</p>
          <span>{item.time}</span>
        </div>
      ))}
    </div>
  );
}

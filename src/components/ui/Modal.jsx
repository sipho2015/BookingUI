import Button from './Button';

export default function Modal({ title, description, open, onClose, onConfirm }) {
  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal booking-modal">
        <div className="modal-header">
          <h3>{title}</h3>
          <button className="modal-close" onClick={onClose} aria-label="Close dialog">
            X
          </button>
        </div>
        <p className="modal-description">{description}</p>
        <div className="modal-actions">
          <Button variant="ghost" className="modal-btn modal-btn-keep" onClick={onClose}>
            Keep Booking
          </Button>
          <Button variant="danger" className="modal-btn modal-btn-cancel" onClick={onConfirm}>
            Cancel Booking
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function ActionToast({ message, type = 'success' }) {
  if (!message) return null;

  return (
    <div className={`action-toast action-toast-${type}`} role="status" aria-live="polite">
      <span className="action-toast-dot" aria-hidden="true" />
      <p>{message}</p>
    </div>
  );
}

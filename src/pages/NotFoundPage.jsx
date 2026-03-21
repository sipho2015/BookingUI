import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="not-found">
      <div className="not-found-card">
        <span>404</span>
        <h2>We lost this page</h2>
        <p>Let’s get you back to a safe place.</p>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    </div>
  );
}

import { Link } from 'react-router-dom';
import FormInput from '../components/ui/FormInput';
import Button from '../components/ui/Button';

export default function LoginPage() {
  return (
    <div className="auth-page auth-page-login">
      <div className="auth-card auth-card-premium">
        <div className="auth-intro">
          <p className="auth-chip">Apex Access</p>
          <h2>Welcome back</h2>
          <p>Sign in to manage bookings, track appointment progress, and keep your service history in one place.</p>
        </div>

        <form className="form-stack">
          <FormInput label="Email" type="email" placeholder="you@email.com" />
          <FormInput label="Password" type="password" placeholder="********" />
          <Button className="btn-block">Login</Button>
        </form>

        <div className="auth-trust-row">
          <span>Fast scheduling</span>
          <span>Secure account</span>
          <span>Priority support</span>
        </div>

        <div className="auth-footer">
          <Link to="/forgot-password">Forgot password?</Link>
          <Link to="/register">Create account</Link>
        </div>
      </div>

      <div className="auth-panel auth-panel-premium">
        <h3>Book with confidence</h3>
        <p>Access your appointment timeline, service updates, and personalized recommendations instantly.</p>

        <div className="auth-visual auth-visual-login">
          <div className="auth-visual-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M3 12a9 9 0 1 1 18 0v5a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-5z" stroke="currentColor" strokeWidth="1.8" />
              <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.8" />
              <path d="M12 9V6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </div>
          <div className="auth-visual-copy">
            <strong>Service Command Center</strong>
            <span>Track every booking from one clean dashboard.</span>
          </div>
        </div>

        <div className="auth-panel-kpis">
          <div>
            <strong>24/7</strong>
            <span>Booking Access</span>
          </div>
          <div>
            <strong>4.8</strong>
            <span>Avg Service Rating</span>
          </div>
          <div>
            <strong>15m</strong>
            <span>Average Response Time</span>
          </div>
        </div>

        <div className="auth-panel-list">
          <p>Real-time booking updates</p>
          <p>Simple reschedule and cancellation</p>
          <p>Trusted automotive service workflow</p>
        </div>
      </div>
    </div>
  );
}

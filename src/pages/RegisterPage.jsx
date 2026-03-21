import { Link } from 'react-router-dom';
import FormInput from '../components/ui/FormInput';
import Button from '../components/ui/Button';

export default function RegisterPage() {
  return (
    <div className="auth-page auth-page-register">
      <div className="auth-card auth-card-premium">
        <div className="auth-intro">
          <p className="auth-chip">New Member</p>
          <h2>Create your account</h2>
          <p>Get tailored maintenance reminders, smarter booking suggestions, and a cleaner service experience.</p>
        </div>

        <form className="form-stack">
          <FormInput label="Full name" placeholder="Jamie Carter" />
          <FormInput label="Email" type="email" placeholder="you@email.com" />
          <FormInput label="Phone" placeholder="+1 (555) 342-2290" />
          <FormInput label="Password" type="password" placeholder="********" />
          <Button className="btn-block">Create account</Button>
        </form>

        <div className="auth-trust-row">
          <span>Save preferences</span>
          <span>Track service history</span>
          <span>Faster future bookings</span>
        </div>

        <div className="auth-footer">
          <Link to="/login">Already have an account?</Link>
        </div>
      </div>

      <div className="auth-panel auth-panel-premium">
        <h3>Member-only advantages</h3>
        <p>Build your vehicle profile once and enjoy a seamless repeat-booking flow every time.</p>

        <div className="auth-visual auth-visual-register">
          <div className="auth-visual-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 3l7 3.5v5.5c0 4.5-2.9 7.6-7 9.8-4.1-2.2-7-5.3-7-9.8V6.5L12 3z" stroke="currentColor" strokeWidth="1.8" />
              <path d="M8.5 12h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M12 8.5v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </div>
          <div className="auth-visual-copy">
            <strong>Personalized Service Profile</strong>
            <span>One account for faster repeat bookings and reminders.</span>
          </div>
        </div>

        <div className="auth-panel-kpis">
          <div>
            <strong>1-click</strong>
            <span>Repeat Booking</span>
          </div>
          <div>
            <strong>Auto</strong>
            <span>Service Reminders</span>
          </div>
          <div>
            <strong>Priority</strong>
            <span>Booking Queue</span>
          </div>
        </div>

        <div className="auth-panel-list">
          <p>Dedicated customer timeline</p>
          <p>Cleaner technician matching</p>
          <p>Centralized service records</p>
        </div>
      </div>
    </div>
  );
}

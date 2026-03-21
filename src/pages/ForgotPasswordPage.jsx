import { Link } from 'react-router-dom';
import FormInput from '../components/ui/FormInput';
import Button from '../components/ui/Button';

export default function ForgotPasswordPage() {
  return (
    <div className="auth-page auth-page-forgot">
      <div className="auth-card auth-card-premium">
        <div className="auth-intro">
          <p className="auth-chip">Account Recovery</p>
          <h2>Reset password</h2>
          <p>Enter your email and we will send a secure password reset link right away.</p>
        </div>

        <form className="form-stack">
          <FormInput label="Email" type="email" placeholder="you@email.com" />
          <Button className="btn-block">Send reset link</Button>
        </form>

        <div className="auth-trust-row">
          <span>Encrypted workflow</span>
          <span>Secure reset link</span>
          <span>Fast account recovery</span>
        </div>

        <div className="auth-footer">
          <Link to="/login">Back to login</Link>
        </div>
      </div>

      <div className="auth-panel auth-panel-premium">
        <h3>Security first</h3>
        <p>We protect your account with trusted recovery standards and clear verification steps.</p>

        <div className="auth-visual auth-visual-forgot">
          <div className="auth-visual-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <rect x="5" y="10" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" />
              <path d="M8 10V8a4 4 0 1 1 8 0v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              <circle cx="12" cy="15" r="1.6" stroke="currentColor" strokeWidth="1.8" />
            </svg>
          </div>
          <div className="auth-visual-copy">
            <strong>Secure Recovery Flow</strong>
            <span>Protected reset steps with trusted account checks.</span>
          </div>
        </div>

        <div className="auth-panel-kpis">
          <div>
            <strong>100%</strong>
            <span>Verified Reset Flow</span>
          </div>
          <div>
            <strong>Instant</strong>
            <span>Email Delivery</span>
          </div>
          <div>
            <strong>Private</strong>
            <span>User Data Handling</span>
          </div>
        </div>

        <div className="auth-panel-list">
          <p>Trusted identity checks</p>
          <p>Secure credentials handling</p>
          <p>Protected customer account access</p>
        </div>
      </div>
    </div>
  );
}

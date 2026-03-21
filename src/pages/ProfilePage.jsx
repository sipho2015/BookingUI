import SectionTitle from '../components/ui/SectionTitle';
import FormInput from '../components/ui/FormInput';
import Button from '../components/ui/Button';

export default function ProfilePage() {
  return (
    <div className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Profile Settings"
          title="Manage your account"
          subtitle="Keep your profile and preferences up to date." 
        />
        <div className="card profile-card">
          <div className="profile-header">
            <div className="avatar large">JC</div>
            <div>
              <h3>Sipho Moyo</h3>
              <p className="muted">Member since 2023</p>
            </div>
          </div>
          <div className="field-grid">
            <FormInput label="Full name" placeholder="Sipho Moyo" />
            <FormInput label="Email" type="email" placeholder="jasmine@email.com" />
            <FormInput label="Phone" placeholder="+1 (555) 202-4921" />
            <FormInput label="Password" type="password" placeholder="••••••••" />
          </div>
          <div className="preferences">
            <h4>Notifications</h4>
            <label className="checkbox">
              <input type="checkbox" defaultChecked />
              Appointment reminders
            </label>
            <label className="checkbox">
              <input type="checkbox" />
              New service updates
            </label>
          </div>
          <Button>Save Changes</Button>
        </div>
      </div>
    </div>
  );
}


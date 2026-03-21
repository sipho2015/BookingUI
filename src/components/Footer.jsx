import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">
            <img
              src="/apex-logo.png"
              alt="Apex AutoCare logo"
              className="footer-logo"
              onError={(event) => {
                event.currentTarget.style.display = 'none';
              }}
            />
            <div>
              <h3>Apex AutoCare Booking</h3>
              <p>Smart scheduling for modern auto service businesses.</p>
            </div>
          </div>
        </div>

        <div>
          <h4>Company</h4>
          <Link to="/services">Services</Link>
          <Link to="/staff">Technicians</Link>
          <Link to="/booking">Book Service</Link>
        </div>

        <div>
          <h4>Contact</h4>
          <p>Victoria Falls</p>
          <p>+263 789 652 298</p>
          <p>siphomoyo893@gmail.com</p>
        </div>

        <div>
          <h4>Follow</h4>
          <div className="socials">
            <button>IG</button>
            <button>FB</button>
            <button>X</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">© 2026 Apex AutoCare Booking. All rights reserved.</div>
    </footer>
  );
}

import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand">
          <img
            src="/apex-logo.png"
            alt="Apex AutoCare logo"
            className="brand-logo"
            onError={(event) => {
              event.currentTarget.style.display = 'none';
            }}
          />
          <span className="brand-label">
            <strong className="brand-main">Apex</strong>
            <strong className="brand-accent">AutoCare</strong>
          </span>
        </Link>

        <button
          className={`mobile-toggle ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <NavLink to="/dashboard" onClick={closeMenu}>Dashboard</NavLink>
          <NavLink to="/my-bookings" onClick={closeMenu}>My Bookings</NavLink>
          <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
          <NavLink to="/staff" onClick={closeMenu}>Technicians</NavLink>
        </nav>

        <div className={`nav-actions ${isOpen ? 'open' : ''}`}>
          <NavLink to="/login" className="link" onClick={closeMenu}>Login</NavLink>
          <NavLink to="/booking" className="btn btn-primary" onClick={closeMenu}>Book Service</NavLink>
        </div>
      </div>
    </header>
  );
}

import Button from '../ui/Button';
import { formatCurrency } from '../../utils/format';

function ServiceIcon({ category }) {
  if (category === 'Maintenance') {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3s-5 5.1-5 8.2A5 5 0 0 0 12 16a5 5 0 0 0 5-4.8C17 8.1 12 3 12 3z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9.5 12.2a2.5 2.5 0 0 0 5 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (category === 'Safety') {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3l7 3v5c0 4.4-2.8 7.6-7 10-4.2-2.4-7-5.6-7-10V6l7-3z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9.5 12.4l1.8 1.8 3.5-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (category === 'Tires') {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  if (category === 'Detailing') {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3l1.4 3.3L17 7.7l-3.6 1.4L12 12.5l-1.4-3.4L7 7.7l3.6-1.4L12 3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M18.5 13.5l.8 1.8 1.7.7-1.7.7-.8 1.8-.8-1.8-1.7-.7 1.7-.7.8-1.8z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M7 12h2l2-3 3 6 2-3h1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ServiceCard({ service, onBook }) {
  return (
    <div className="card service-card">
      <div className="service-card-top">
        <div className="service-meta-left">
          <span className="service-icon">
            <ServiceIcon category={service.category} />
          </span>
          <div className="card-badge">{service.category}</div>
          {service.popularity >= 90 ? <span className="service-popular">Top Pick</span> : null}
        </div>
        <span className="service-duration">{service.duration}</span>
      </div>

      <h3 className="service-title">{service.name}</h3>
      <p className="service-description">{service.description}</p>

      <div className="card-meta">
        <span className="muted">Starting from</span>
        <strong className="service-price">{formatCurrency(service.price)}</strong>
      </div>

      <Button onClick={() => onBook(service)}>Book Service</Button>
    </div>
  );
}

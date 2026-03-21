import { Link } from 'react-router-dom';
import SectionTitle from '../components/ui/SectionTitle';
import ServiceCard from '../components/cards/ServiceCard';
import { services } from '../data/services';
import { testimonials } from '../data/testimonials';
import { faqs } from '../data/faqs';

export default function LandingPage() {
  return (
    <div>
      <section className="hero landing-hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="eyebrow">Premium Vehicle Service Experience</p>
            <h1>Book trusted car care services in minutes.</h1>
            <p className="hero-subtitle">
              Apex AutoCare connects drivers with the right technicians, the right time slots, and a seamless booking flow.
            </p>
            <div className="hero-actions">
              <Link to="/booking" className="btn btn-primary">Book Service</Link>
              <Link to="/services" className="btn btn-ghost">Explore Services</Link>
            </div>
            <div className="hero-action-strip">
              <span>Same-day slots</span>
              <span>Live technician availability</span>
              <span>Transparent pricing</span>
            </div>
            <div className="hero-proof">
              <div>
                <strong>4.9</strong>
                <span>Average Garage Rating</span>
              </div>
              <div>
                <strong>1,200+</strong>
                <span>Service Jobs Monthly</span>
              </div>
              <div>
                <strong>45+</strong>
                <span>Certified Technicians</span>
              </div>
            </div>
          </div>
          <div className="hero-card hero-spotlight-card">
            <div className="hero-card-head">
              <span className="hero-chip">Live Availability</span>
              <span className="hero-chip muted-chip">Apex Bay 03</span>
            </div>
            <h3>Next Available Service Slot</h3>
            <p>Premium Oil Change Service</p>
            <div className="hero-card-row">
              <span>Today · 2:00 PM</span>
              <span>$89</span>
            </div>
            <div className="hero-mini-timeline">
              <div>
                <strong>2:00 PM</strong>
                <span>Oil & Fluid Service</span>
              </div>
              <div>
                <strong>3:15 PM</strong>
                <span>Brake Inspection</span>
              </div>
              <div>
                <strong>4:30 PM</strong>
                <span>Diagnostic Scan</span>
              </div>
            </div>
            <button className="btn btn-primary btn-block">Reserve Slot</button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Featured Services"
            title="High-impact services for performance, safety, and reliability"
            subtitle="Hand-picked vehicle services most booked by returning customers."
          />
          <div className="grid grid-3">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.id} service={service} onBook={() => {}} />
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionTitle
            eyebrow="Why Apex AutoCare"
            title="A booking system crafted for modern auto service brands"
            subtitle="From technician matching to live availability, the entire experience stays sharp and reliable."
          />
          <div className="grid grid-3">
            {[
              'Real-time service bay availability',
              'Technician and service matching',
              'Smart reminders and updates',
              'Vehicle-first customer experience',
              'Secure booking management',
              'Fast service workflow for teams',
            ].map((item) => (
              <div key={item} className="card feature-card">
                <h3>{item}</h3>
                <p>Built to keep your customers confident and your workshop schedule organized.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Booking Steps"
            title="Reserve in three easy steps"
            subtitle="Simple, clean, and fully guided."
          />
          <div className="grid grid-3">
            {['Choose your service', 'Pick a time and technician', 'Confirm and drive in'].map((step, index) => (
              <div key={step} className="card step-card">
                <span className="step-index">0{index + 1}</span>
                <h3>{step}</h3>
                <p>Every detail is captured in a polished automotive booking flow.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionTitle
            eyebrow="Testimonials"
            title="Drivers trust the experience"
            subtitle="Real words from loyal customers."
          />
          <div className="grid grid-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="card testimonial-card">
                <p>"{testimonial.quote}"</p>
                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="FAQ"
            title="A few quick answers"
            subtitle="Everything you need before booking your car service."
          />
          <div className="faq-grid">
            {faqs.map((faq) => (
              <div key={faq.id} className="card faq-card">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Contact.module.scss';

const contactInfo = [
{
  icon: 'location',
  title: 'Visit Us',
  details: ['Office 12, Al Maktoom Building', 'Sheikh Zayed Road, Dubai', 'United Arab Emirates'],
},
{
  icon: 'phone',
  title: 'Call Us',
  details: ['+971 4 123 4567', '+971 50 987 6543'],
},
{
  icon: 'email',
  title: 'Email Us',
  details: ['info@rwampstours.ae', 'bookings@rwampstours.ae'],
},
{
  icon: 'clock',
  title: 'Working Hours',
  details: ['Sat - Thu: 9:00 AM - 7:00 PM', 'Friday: 10:00 AM - 5:00 PM'],
},
];

const faqs = [
{
  q: 'How do I book a tour?',
  a: 'You can book directly through our website, call us, or visit our office. For group bookings, we recommend contacting us at least 48 hours in advance.',
},
{
  q: 'What is your cancellation policy?',
  a: 'Free cancellation up to 24 hours before the tour. 50% refund for cancellations within 24 hours. No-shows are non-refundable.',
},
{
  q: 'Are children allowed on tours?',
  a: 'Yes! Most tours are family-friendly. Children under 5 usually go free, and we offer special rates for ages 5-12.',
},
{
  q: 'What should I bring on a desert safari?',
  a: 'We recommend comfortable clothing, sunscreen, sunglasses, a camera, and closed-toe shoes. We provide all necessary equipment and refreshments.',
},
{
  q: 'Do you offer hotel pickup and drop-off?',
  a: 'Yes, all our tours include complimentary hotel pickup and drop-off within Dubai, Abu Dhabi, and Sharjah city limits.',
},
{
  q: 'Can I customize a tour package?',
  a: 'Absolutely! We specialize in custom itineraries. Contact us with your preferences and we\'ll create a tailor-made experience.',
},
];

function InfoIcon({ type }) {
const icons = {
  location: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
};
return <div className={styles.infoIcon}>{icons[type]}</div>;
}

function FaqItem({ faq, isOpen, onClick }) {
return (
  <div className={`${styles.faqItem} ${isOpen ? styles.faqOpen : ''}`}>
    <button className={styles.faqQuestion} onClick={onClick}>
      <span>{faq.q}</span>
      <svg className={styles.faqChevron} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9"/>
      </svg>
    </button>
    <div className={styles.faqAnswer} style={{ maxHeight: isOpen ? '300px' : '0' }}>
      <p>{faq.a}</p>
    </div>
  </div>
);
}

export default function Contact() {
const [formData, setFormData] = useState({ name: '', email: '', phone: '', tourType: '', message: '' });
const [submitted, setSubmitted] = useState(false);
const [openFaq, setOpenFaq] = useState(null);

const handleChange = (e) => {
  setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
};

const handleSubmit = (e) => {
  e.preventDefault();
  setSubmitted(true);
  // In production: send form data via email or API
};

return (
  <div className={styles.page}>
    {/* Hero */}
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.breadcrumbs}>
          <Link to="/about">Home</Link>
          <span>/</span>
          <span>Contact</span>
        </div>
        <h1>Get in Touch</h1>
        <p className={styles.heroTagline}>We'd love to hear from you. Let's plan your next adventure.</p>
      </div>
    </section>

    {/* Contact Info Cards */}
    <section className={styles.infoSection}>
      <div className={styles.container}>
        <div className={styles.infoGrid}>
          {contactInfo.map((item) => (
            <div key={item.title} className={styles.infoCard}>
              <InfoIcon type={item.icon} />
              <h3>{item.title}</h3>
              {item.details.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Form + Map */}
    <section className={styles.formSection}>
      <div className={styles.container}>
        <div className={styles.formLayout}>
          <div className={styles.formBlock}>
            <div className={styles.sectionLabel}>Send a Message</div>
            <h2>Let's Start a <span>Conversation</span></h2>
            <p className={styles.formSubtitle}>
              Fill out the form below and our team will get back to you within 24 hours.
            </p>

            {submitted ? (
              <div className={styles.successMessage}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <h3>Thank You!</h3>
                <p>Your message has been sent. We'll get back to you within 24 hours.</p>
                <button className={styles.resetBtn} onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', tourType: '', message: '' }); }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Full Name</label>
                    <input id="name" name="name" type="text" placeholder="Your name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email Address</label>
                    <input id="email" name="email" type="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone Number</label>
                    <input id="phone" name="phone" type="tel" placeholder="+971 XX XXX XXXX" value={formData.phone} onChange={handleChange} />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="tourType">Tour Type</label>
                    <select id="tourType" name="tourType" value={formData.tourType} onChange={handleChange}>
                      <option value="">Select a tour type</option>
                      <option value="desert">Desert Safari</option>
                      <option value="city">City Tour</option>
                      <option value="adventure">Adventure Tour</option>
                      <option value="cultural">Cultural Tour</option>
                      <option value="custom">Custom Package</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Your Message</label>
                  <textarea id="message" name="message" rows="5" placeholder="Tell us about your trip ideas, questions, or special requirements..." value={formData.message} onChange={handleChange} required />
                </div>
                <button type="submit" className={styles.submitBtn}>Send Message</button>
              </form>
            )}
          </div>

          {/* Map placeholder */}
          <div className={styles.mapBlock}>
            <div className={styles.mapPlaceholder}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <h3>Dubai Office</h3>
              <p>Office 12, Al Maktoom Building</p>
              <p>Sheikh Zayed Road</p>
              <p>Dubai, United Arab Emirates</p>
              <a href="https://maps.google.com/?q=Sheikh+Zayed+Road+Dubai" target="_blank" rel="noopener noreferrer" className={styles.mapLink}>
                Open in Google Maps
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <div className={styles.sectionLabel}>FAQ</div>
        <h2 className={styles.faqTitle}>Frequently Asked <span>Questions</span></h2>
        <div className={styles.faqGrid}>
          {faqs.map((faq, i) => (
            <FaqItem key={i} faq={faq} isOpen={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? null : i)} />
          ))}
        </div>
      </div>
    </section>

    {/* Bottom CTA */}
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.ctaContent}>
          <h2>Ready to <span>Explore</span> the UAE?</h2>
          <p>Book your adventure today and create memories that last a lifetime.</p>
          <Link to="/about" className={styles.ctaBtn}>Browse Tours</Link>
        </div>
      </div>
    </section>
  </div>
);
}
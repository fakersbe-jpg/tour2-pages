import { Link } from 'react-router-dom';
import styles from './About.module.scss';

const stats = [
{ value: '500+', label: 'Tours Completed' },
{ value: '50+', label: 'Destinations' },
{ value: '10k+', label: 'Happy Travelers' },
{ value: '15+', label: 'Years Experience' },
];

const values = [
{
  icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  title: 'Integrity',
  desc: 'We operate with transparency and honesty in every interaction, building trust with travelers and partners alike.',
},
{
  icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>
  ),
  title: 'Excellence',
  desc: 'Every tour is crafted with meticulous attention to detail, ensuring unforgettable experiences that exceed expectations.',
},
{
  icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 22L12 2l10 20H2z"/><path d="M12 18v-6"/><path d="M12 8v-2"/>
    </svg>
  ),
  title: 'Sustainability',
  desc: 'We are committed to responsible tourism that preserves natural wonders and supports local communities.',
},
{
  icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  title: 'Community',
  desc: 'We create meaningful connections between travelers and local cultures, fostering mutual understanding and respect.',
},
];

const team = [
{ name: 'Ahmed Al Mansouri', role: 'Founder & CEO', bio: 'Visionary leader with 20+ years in Arabian tourism.' },
{ name: 'Sarah Al Hashimi', role: 'Head of Operations', bio: 'Ensuring every tour runs flawlessly from start to finish.' },
{ name: 'Omar Khaled', role: 'Lead Tour Guide', bio: 'Expert storyteller bringing Arabian heritage to life.' },
{ name: 'Layla Hassan', role: 'Customer Experience', bio: 'Dedicated to making every traveler feel at home.' },
];

export default function About() {
return (
  <div className={styles.page}>
    {/* Hero */}
    <section className={styles.hero}>
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <span className={styles.heroBadge}>About Us</span>
        <h1>Rwamps Tours</h1>
        <p className={styles.heroSubtitle}>Discover Arabian Wonders</p>
        <p className={styles.heroDesc}>
          For over a decade, we have been crafting extraordinary travel experiences
          across the United Arab Emirates, revealing the rich tapestry of Arabian
          culture, heritage, and natural beauty.
        </p>
      </div>
    </section>

    {/* Stats */}
    <section className={styles.statsSection}>
      <div className={styles.statsGrid}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.statCard}>
            <span className={styles.statValue}>{stat.value}</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>

    {/* Our Story */}
    <section className={styles.storySection}>
      <div className={styles.container}>
        <div className={styles.storyGrid}>
          <div className={styles.storyImage}>
            <div className={styles.imagePlaceholder}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
          </div>
          <div className={styles.storyText}>
            <div className={styles.storyHeader}>
              <span className={styles.sectionLabel}>Our Story</span>
              <h2>A Journey of <span>Discovery</span></h2>
            </div>
            <p>
              Founded in 2010, Rwamps Tours began with a simple vision: to share the
              unparalleled beauty and warmth of the Arabian Peninsula with the world.
              What started as a small guiding service in Dubai has grown into a
              premier tour operator spanning the entire UAE.
            </p>
            <p>
              Our team of passionate travel experts combines deep local knowledge
              with genuine hospitality, ensuring every journey is not just a trip,
              but a transformative experience. We believe in travel that respects
              traditions, celebrates diversity, and creates lasting memories.
            </p>
            <p>
              From the golden dunes of the desert to the gleaming skyline of Dubai,
              from the cultural heart of Abu Dhabi to the natural wonders of Ras Al
              Khaimah — we invite you to explore the Arabian wonders with us.
            </p>
            <Link to="/contact" className={styles.storyCta}>Get in Touch</Link>
          </div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className={styles.valuesSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Our Values</span>
          <h2>What We <span>Stand For</span></h2>
          <p>Our guiding principles shape every experience we create.</p>
        </div>
        <div className={styles.valuesGrid}>
          {values.map((v) => (
            <div key={v.title} className={styles.valueCard}>
              <div className={styles.valueIcon}>{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Team */}
    <section className={styles.teamSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Our Team</span>
          <h2>Meet the <span>Experts</span></h2>
          <p>Passionate people dedicated to your adventure.</p>
        </div>
        <div className={styles.teamGrid}>
          {team.map((member) => (
            <div key={member.name} className={styles.teamCard}>
              <div className={styles.teamAvatar}>
                <div className={styles.avatarPlaceholder}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
              </div>
              <h3 className={styles.teamName}>{member.name}</h3>
              <span className={styles.teamRole}>{member.role}</span>
              <p className={styles.teamBio}>{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.ctaContent}>
          <h2>Ready for Your <span>Arabian Adventure</span>?</h2>
          <p>Let us craft your perfect journey through the wonders of the UAE.</p>
          <Link to="/contact" className={styles.ctaBtn}>Start Planning</Link>
        </div>
      </div>
    </section>
  </div>
);
}
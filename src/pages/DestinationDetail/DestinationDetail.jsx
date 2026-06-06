import { useParams, Link } from 'react-router-dom';
import styles from './DestinationDetail.module.scss';

const destinations = {
dubai: {
  name: 'Dubai',
  tagline: 'Where tradition meets tomorrow',
  image: 'dubai',
  overview: 'Dubai is a city of superlatives — home to the world\'s tallest building, largest shopping mall, and most luxurious hotels. Yet beneath the glittering skyline lies a rich cultural heritage of souks, spice markets, and ancient traditions.',
  facts: [
    { label: 'Population', value: '3.6M' },
    { label: 'Language', value: 'Arabic, English' },
    { label: 'Currency', value: 'AED (Dirham)' },
    { label: 'Best Time', value: 'Nov - Mar' },
  ],
  attractions: ['Burj Khalifa', 'Dubai Mall', 'Palm Jumeirah', 'Dubai Marina', 'Gold Souk', 'Dubai Creek', 'Burj Al Arab', 'Miracle Garden'],
  activities: ['Desert Safari', 'Dhow Cruise', 'Skydiving', 'Shopping', 'Fine Dining', 'Water Parks'],
  tours: [
    { name: 'Desert Safari', slug: 'desert-safari' },
    { name: 'City Tour', slug: 'city-tours' },
  ],
},
'abu-dhabi': {
  name: 'Abu Dhabi',
  tagline: 'The capital of culture and elegance',
  image: 'abu-dhabi',
  overview: 'The UAE capital blends modern sophistication with Arabian heritage. Home to the magnificent Sheikh Zayed Grand Mosque, world-class museums on Saadiyat Island, and the thrilling Ferrari World — Abu Dhabi offers a refined Emirati experience.',
  facts: [
    { label: 'Population', value: '1.5M' },
    { label: 'Language', value: 'Arabic, English' },
    { label: 'Currency', value: 'AED (Dirham)' },
    { label: 'Best Time', value: 'Oct - Apr' },
  ],
  attractions: ['Sheikh Zayed Grand Mosque', 'Louvre Abu Dhabi', 'Ferrari World', 'Yas Island', 'Qasr Al Hosn', 'Corniche Beach', 'Saadiyat Island', 'Emirates Palace'],
  activities: ['Museum Tours', 'Theme Parks', 'Beach Days', 'Cultural Tours', 'Desert Adventures', 'Formula 1 Track'],
  tours: [
    { name: 'Cultural Tour', slug: 'cultural' },
  ],
},
sharjah: {
  name: 'Sharjah',
  tagline: 'The cultural heart of the UAE',
  image: 'sharjah',
  overview: 'UNESCO World Book Capital and the cultural hub of the UAE, Sharjah is a treasure trove of museums, art galleries, and heritage sites. Its restored souks and traditional architecture offer an authentic glimpse into Arabian life.',
  facts: [
    { label: 'Population', value: '1.4M' },
    { label: 'Language', value: 'Arabic, English' },
    { label: 'Currency', value: 'AED (Dirham)' },
    { label: 'Best Time', value: 'Nov - Mar' },
  ],
  attractions: ['Al Noor Mosque', 'Sharjah Art Museum', 'Al Qasba', 'Heart of Sharjah', 'Sharjah Aquarium', 'Rain Room', 'Blue Souk', 'Desert Park'],
  activities: ['Art & Culture', 'Museum Hopping', 'Souk Shopping', 'Waterfront Walks', 'Family Parks'],
  tours: [
    { name: 'Cultural Tour', slug: 'cultural' },
  ],
},
'ras-al-khaimah': {
  name: 'Ras Al Khaimah',
  tagline: 'Nature\'s playground in the Emirates',
  image: 'ras-al-khaimah',
  overview: 'The northernmost emirate offers breathtaking natural landscapes — from the towering Hajar Mountains to pristine beaches and lush mangroves. It\'s the adventure capital of the UAE with world-class hiking, kayaking, and ziplining.',
  facts: [
    { label: 'Population', value: '350K' },
    { label: 'Language', value: 'Arabic, English' },
    { label: 'Currency', value: 'AED (Dirham)' },
    { label: 'Best Time', value: 'Oct - Apr' },
  ],
  attractions: ['Jebel Jais Mountain', 'RAK Fort', 'Al Hamra Village', 'Mangrove Forests', 'Suhail Island', 'National Museum', 'Sleeping Camel', 'Flower Garden'],
  activities: ['Hiking', 'Kayaking', 'Ziplining', 'Mountain Biking', 'Camping', 'Beach Relaxation'],
  tours: [
    { name: 'Adventure Tour', slug: 'adventure' },
  ],
},
};

function DestinationNotFound() {
return (
  <section className={styles.page}>
    <div className={styles.notFound}>
      <h2>Destination Not Found</h2>
      <p>The destination you're looking for doesn't exist.</p>
      <Link to="/about" className={styles.backBtn}>Browse Destinations</Link>
    </div>
  </section>
);
}

export default function DestinationDetail() {
const { slug } = useParams();
const dest = destinations[slug];

if (!dest) return <DestinationNotFound />;

return (
  <div className={styles.page}>
    {/* Hero */}
    <section className={`${styles.hero} ${styles[`hero${dest.image === 'ras-al-khaimah' ? 'Rak' : dest.image.charAt(0).toUpperCase() + dest.image.slice(1).replace('-', '')}]`}>
      <div className={styles.heroContent}>
        <div className={styles.breadcrumbs}>
          <Link to="/about">Home</Link>
          <span>/</span>
          <span>Destinations</span>
          <span>/</span>
          <span>{dest.name}</span>
        </div>
        <span className={styles.heroBadge}>Destination</span>
        <h1>{dest.name}</h1>
        <p className={styles.heroTagline}>{dest.tagline}</p>
      </div>
    </section>

    {/* Overview + Facts */}
    <section className={styles.overviewSection}>
      <div className={styles.container}>
        <div className={styles.overviewGrid}>
          <div className={styles.overviewText}>
            <h2>Overview</h2>
            <p>{dest.overview}</p>
            <Link to="/contact" className={styles.overviewCta}>Plan Your Trip</Link>
          </div>
          <div className={styles.factsCard}>
            {dest.facts.map((fact) => (
              <div key={fact.label} className={styles.factItem}>
                <span className={styles.factLabel}>{fact.label}</span>
                <span className={styles.factValue}>{fact.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Attractions */}
    <section className={styles.attractionsSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Must-See</span>
          <h2>Top <span>Attractions</span></h2>
        </div>
        <div className={styles.attractionsGrid}>
          {dest.attractions.map((a) => (
            <div key={a} className={styles.attractionCard}>
              <div className={styles.attractionIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <span>{a}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Activities */}
    <section className={styles.activitiesSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Experiences</span>
          <h2>Things to <span>Do</span></h2>
        </div>
        <div className={styles.activitiesGrid}>
          {dest.activities.map((a) => (
            <div key={a} className={styles.activityCard}>
              <div className={styles.activityIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
              </div>
              <h3>{a}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Related Tours */}
    {dest.tours.length > 0 && (
      <section className={styles.toursSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Tours</span>
            <h2>Available <span>Tours</span></h2>
          </div>
          <div className={styles.toursGrid}>
            {dest.tours.map((t) => (
              <Link key={t.slug} to={`/tours/${t.slug}`} className={styles.tourCard}>
                <div className={styles.tourIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12h10"/><path d="M9 8v8"/><path d="m15 8 6 4-6 4V8z"/>
                  </svg>
                </div>
                <h3>{t.name}</h3>
                <span className={styles.tourArrow}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    )}

    {/* CTA */}
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.ctaContent}>
          <h2>Explore <span>{dest.name}</span></h2>
          <p>Let us craft the perfect itinerary for your journey.</p>
          <Link to="/contact" className={styles.ctaBtn}>Start Planning</Link>
        </div>
      </div>
    </section>
  </div>
);
}
import { useParams, Link } from 'react-router-dom';
import styles from './TourDetail.module.scss';

const tourData = {
'desert-safari': {
  name: 'Desert Safari',
  tagline: 'Experience the magic of Arabian dunes',
  duration: '6-7 Hours',
  difficulty: 'Easy',
  groupSize: '2-12 persons',
  price: '$95',
  rating: '4.9',
  reviews: 328,
  image: 'desert',
  overview: 'Embark on an unforgettable journey through the golden dunes of Dubai. Our Desert Safari combines thrilling dune bashing with authentic Bedouin cultural experiences, creating memories that last a lifetime.',
  highlights: [
    'Thrilling dune bashing in 4x4 vehicles',
    'Sunset photography at the highest dunes',
    'Traditional BBQ dinner under the stars',
    'Camel riding experience',
    'Henna painting and shisha lounge',
    'Live entertainment with Tanoura dance',
  ],
  itinerary: [
    { time: '3:30 PM', title: 'Pick up', desc: 'Hotel pickup in comfortable 4x4 vehicles' },
    { time: '4:00 PM', title: 'Dune Bashing', desc: '30-40 minutes of exhilarating desert driving' },
    { time: '4:45 PM', title: 'Sunset Stop', desc: 'Photo session at the dunes with refreshments' },
    { time: '5:30 PM', title: 'Camp Arrival', desc: 'Welcome with Arabic coffee and dates' },
    { time: '6:00 PM', title: 'Activities', desc: 'Camel riding, henna, sandboarding, shisha' },
    { time: '7:30 PM', title: 'BBQ Dinner', desc: 'Buffet dinner with live entertainment' },
    { time: '9:00 PM', title: 'Return', desc: 'Drop-off back to your hotel' },
  ],
  includes: ['Hotel pickup & drop-off', 'Professional guide', 'Dune bashing in 4x4', 'BBQ dinner', 'Soft drinks & water', 'Camel riding', 'Henna painting', 'Live entertainment'],
  excludes: ['Alcoholic beverages', 'Personal expenses', 'Tips & gratuities'],
},
'city-tours': {
  name: 'City Tours',
  tagline: 'Discover Dubai through its iconic landmarks',
  duration: '4-5 Hours',
  difficulty: 'Easy',
  groupSize: '2-20 persons',
  price: '$75',
  rating: '4.8',
  reviews: 256,
  image: 'city',
  overview: 'Explore the dazzling contrasts of Dubai — from ancient souks to futuristic skyscrapers. Our city tour takes you through the heart of this remarkable metropolis.',
  highlights: [
    'Burj Khalifa observation deck visit',
    'Dubai Creek and Abra boat ride',
    'Gold and Spice Souk exploration',
    'Photo stops at Burj Al Arab',
    'Palm Jumeirah boardwalk',
    'Dubai Mall fountain show',
  ],
  itinerary: [
    { time: '9:00 AM', title: 'Pick up', desc: 'Hotel pickup in air-conditioned vehicle' },
    { time: '9:45 AM', title: 'Dubai Creek', desc: 'Traditional Abra boat ride across the creek' },
    { time: '10:30 AM', title: 'Gold Souk', desc: 'Explore the famous gold and spice markets' },
    { time: '12:00 PM', title: 'Burj Khalifa', desc: 'Visit the observation deck (124th floor)' },
    { time: '1:30 PM', title: 'Lunch Break', desc: 'Lunch at Dubai Mall (own expense)' },
    { time: '3:00 PM', title: 'Palm Jumeirah', desc: 'Photo stop and boardwalk walk' },
    { time: '4:30 PM', title: 'Return', desc: 'Drop-off back to your hotel' },
  ],
  includes: ['Hotel pickup & drop-off', 'Professional guide', 'Air-conditioned transport', 'Burj Khalifa tickets', 'Abra boat ride', 'Bottled water'],
  excludes: ['Meals & beverages', 'Personal expenses', 'Tips & gratuities'],
},
adventure: {
  name: 'Adventure Tours',
  tagline: 'Push your limits across UAE landscapes',
  duration: 'Full Day',
  difficulty: 'Moderate',
  groupSize: '2-10 persons',
  price: '$149',
  rating: '4.9',
  reviews: 189,
  image: 'adventure',
  overview: 'For thrill-seekers and outdoor enthusiasts, our Adventure Tours combine the best of UAE natural landscapes with heart-pumping activities.',
  highlights: [
    'Hiking in Hajar Mountains',
    'Kayaking through mangroves',
    'Zip-lining over the desert',
    'Rock climbing and rappelling',
    'Mountain biking trails',
    'Wildlife spotting excursions',
  ],
  itinerary: [
    { time: '6:00 AM', title: 'Early Start', desc: 'Early pickup for sunrise activities' },
    { time: '7:30 AM', title: 'Mountain Hike', desc: 'Guided hike through Hajar mountains' },
    { time: '10:00 AM', title: 'Kayaking', desc: 'Paddle through serene mangrove forests' },
    { time: '12:30 PM', title: 'Lunch', desc: 'Picnic lunch in natural setting' },
    { time: '2:00 PM', title: 'Zip-line', desc: 'Desert zip-line adventure' },
    { time: '4:00 PM', title: 'Return', desc: 'Transfer back with refreshments' },
  ],
  includes: ['Hotel pickup & drop-off', 'Certified guide', 'All equipment', 'Picnic lunch', 'Safety gear', 'First aid kit', 'Photos'],
  excludes: ['Personal expenses', 'Tips & gratuities'],
},
cultural: {
  name: 'Cultural Tours',
  tagline: 'Immerse in the rich heritage of Arabia',
  duration: '5-6 Hours',
  difficulty: 'Easy',
  groupSize: '2-15 persons',
  price: '$85',
  rating: '4.7',
  reviews: 215,
  image: 'cultural',
  overview: 'Step back in time and discover the deep cultural roots of the UAE. Visit heritage sites, museums, and traditional villages that tell the story of Arabian civilization.',
  highlights: [
    'Al Fahidi Historical District',
    'Dubai Museum & Al Shindagha',
    'Sheikh Zayed Grand Mosque',
    'Heritage Village experience',
    'Arabic calligraphy workshop',
    'Traditional Emirati lunch',
  ],
  itinerary: [
    { time: '9:00 AM', title: 'Pick up', desc: 'Comfortable hotel pickup' },
    { time: '10:00 AM', title: 'Al Fahidi', desc: 'Walk through the historic Bastakiya quarter' },
    { time: '11:30 AM', title: 'Museum', desc: 'Dubai Museum at Al Fahidi Fort' },
    { time: '1:00 PM', title: 'Lunch', desc: 'Traditional Emirati cuisine experience' },
    { time: '2:30 PM', title: 'Heritage Village', desc: 'Live demonstrations of crafts and traditions' },
    { time: '4:00 PM', title: 'Return', desc: 'Drop-off back to hotel' },
  ],
  includes: ['Hotel pickup & drop-off', 'Expert guide', 'Museum entry fees', 'Traditional lunch', 'Workshop materials', 'Bottled water'],
  excludes: ['Personal expenses', 'Souvenir purchases', 'Tips & gratuities'],
},
};

function TourNotFound() {
return (
  <section className={styles.page}>
    <div className={styles.notFound}>
      <h2>Tour Not Found</h2>
      <p>We couldn't find the tour you're looking for.</p>
      <Link to="/about" className={styles.backBtn}>Browse All Tours</Link>
    </div>
  </section>
);
}

function StarRating({ rating }) {
const stars = Math.round(rating);
return (
  <div className={styles.stars}>
    {[1,2,3,4,5].map((i) => (
      <svg key={i} className={i <= stars ? styles.starActive : styles.starInactive} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
    <span className={styles.ratingText}>{rating}</span>
  </div>
);
}

export default function TourDetail() {
const { slug } = useParams();
const tour = tourData[slug];

if (!tour) return <TourNotFound />;

return (
  <div className={styles.page}>
    {/* Hero */}
    <section className={`${styles.hero} ${styles[`hero${tour.image.charAt(0).toUpperCase() + tour.image.slice(1)}`]}`}>
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <div className={styles.breadcrumbs}>
          <Link to="/about">Home</Link>
          <span>/</span>
          <span>Tours</span>
          <span>/</span>
          <span>{tour.name}</span>
        </div>
        <span className={styles.heroBadge}>{tour.duration}</span>
        <h1>{tour.name}</h1>
        <p className={styles.heroTagline}>{tour.tagline}</p>
        <div className={styles.heroMeta}>
          <StarRating rating={tour.rating} />
          <span className={styles.reviewCount}>({tour.reviews} reviews)</span>
          <span className={styles.metaDivider}>|</span>
          <span className={styles.metaItem}>{tour.difficulty}</span>
          <span className={styles.metaDivider}>|</span>
          <span className={styles.metaItem}>Up to {tour.groupSize}</span>
        </div>
      </div>
    </section>

    {/* Overview + Sidebar */}
    <section className={styles.contentSection}>
      <div className={styles.container}>
        <div className={styles.contentLayout}>
          <div className={styles.mainContent}>
            {/* Overview */}
            <div className={styles.overviewBlock}>
              <h2>Overview</h2>
              <p>{tour.overview}</p>
            </div>

            {/* Highlights */}
            <div className={styles.highlightsBlock}>
              <h2>Highlights</h2>
              <div className={styles.highlightsGrid}>
                {tour.highlights.map((h) => (
                  <div key={h} className={styles.highlightItem}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {h}
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary */}
            <div className={styles.itineraryBlock}>
              <h2>Itinerary</h2>
              <div className={styles.timeline}>
                {tour.itinerary.map((item, i) => (
                  <div key={i} className={styles.timelineItem}>
                    <div className={styles.timelineDot} />
                    <div className={styles.timelineContent}>
                      <span className={styles.timelineTime}>{item.time}</span>
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Includes / Excludes */}
            <div className={styles.inOutBlock}>
              <div className={styles.inOutGrid}>
                <div className={styles.inCol}>
                  <h3>What's Included</h3>
                  <ul>
                    {tour.includes.map((item) => (
                      <li key={item}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                          <polyline points="22 4 12 14.01 9 11.01"/>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.exCol}>
                  <h3>Not Included</h3>
                  <ul>
                    {tour.excludes.map((item) => (
                      <li key={item}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.priceCard}>
              <div className={styles.priceHeader}>
                <span className={styles.priceLabel}>From</span>
                <span className={styles.priceValue}>{tour.price}</span>
                <span className={styles.pricePer}>/ person</span>
              </div>
              <div className={styles.priceMeta}>
                <span><strong>{tour.duration}</strong></span>
                <span>{tour.difficulty} difficulty</span>
                <span>Up to {tour.groupSize}</span>
              </div>
              <Link to="/contact" className={styles.bookBtn}>Book This Tour</Link>
              <Link to="/contact" className={styles.inquiryBtn}>Send Inquiry</Link>
            </div>
          </aside>
        </div>
      </div>
    </section>

    {/* Related CTA */}
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.ctaContent}>
          <h2>Ready to Experience <span>{tour.name}</span>?</h2>
          <p>Book now and create unforgettable memories in the UAE.</p>
          <Link to="/contact" className={styles.ctaBtn}>Book Your Adventure</Link>
        </div>
      </div>
    </section>
  </div>
);
}
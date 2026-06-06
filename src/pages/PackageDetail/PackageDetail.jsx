import { useParams, Link } from 'react-router-dom';
import styles from './PackageDetail.module.scss';

const packages = {
featured: {
  name: 'Featured Packages',
  tagline: 'Our most popular curated experiences',
  packages: [
    {
      name: 'Essential Dubai',
      duration: '3 Days / 2 Nights',
      price: '$499',
      popular: true,
      description: 'The perfect introduction to Dubai. Experience the city\'s highlights with expert guides and premium accommodations.',
      includes: [
        'Airport transfers',
        '4-star hotel (2 nights)',
        'Desert safari tour',
        'City tour with Burj Khalifa',
        'Breakfast daily',
        'Dhow cruise dinner',
        'English-speaking guide',
      ],
    },
    {
      name: 'UAE Explorer',
      duration: '5 Days / 4 Nights',
      price: '$899',
      popular: false,
      description: 'Discover the best of the UAE across three emirates — from Dubai to Abu Dhabi and Sharjah.',
      includes: [
        'Airport transfers',
        '4-star hotel (4 nights)',
        'Inter-emirate transport',
        'Desert safari & BBQ',
        'Grand Mosque visit',
        'Louvre Abu Dhabi entry',
        'Sharjah heritage tour',
        'Breakfast daily',
        'Guide & driver',
      ],
    },
    {
      name: 'Adventure Package',
      duration: '4 Days / 3 Nights',
      price: '$749',
      popular: false,
      description: 'For thrill-seekers — combine desert adventures, mountain hikes, and water sports in one action-packed trip.',
      includes: [
        'Airport transfers',
        '3-star boutique stays',
        'Mountain hike in Hajar',
        'Kayaking & zip-lining',
        'Desert dune bashing',
        'Snorkeling trip',
        'All equipment',
        'Breakfast & lunch daily',
      ],
    },
    {
      name: 'Luxury Escape',
      duration: '7 Days / 6 Nights',
      price: '$2,499',
      popular: false,
      description: 'Indulge in the finest the UAE has to offer — private tours, 5-star hotels, and exclusive experiences.',
      includes: [
        'Private airport transfers',
        '5-star hotel (6 nights)',
        'Private city tour',
        'Helicopter ride over Dubai',
        'Yacht dinner cruise',
        'Private desert camp',
        'Spa treatment',
        'All meals & premium drinks',
        'Personal concierge',
      ],
    },
  ],
},
'family': {
  name: 'Family Packages',
  tagline: 'Fun for all ages — stress-free family adventures',
  packages: [
    {
      name: 'Family Fun Dubai',
      duration: '4 Days / 3 Nights',
      price: '$1,299',
      popular: true,
      description: 'A family-friendly Dubai experience with activities designed for children and parents alike.',
      includes: ['Airport transfers', 'Family-friendly 4-star hotel', 'Desert safari with kids activities', 'Aquaventure Waterpark', 'Dubai Aquarium entry', 'Miracle Garden visit', 'Breakfast daily', 'Child-friendly guide'],
    },
    {
      name: 'Beach & Adventure',
      duration: '5 Days / 4 Nights',
      price: '$1,699',
      popular: false,
      description: 'Combine beach relaxation with adventure activities suitable for the whole family.',
      includes: ['Airport transfers', 'Beach resort stay', 'Snorkeling for all ages', 'Dhow cruise family dinner', 'Theme park day', 'Camel farm visit', 'Breakfast & dinner daily', 'Family guide'],
    },
  ],
},
'honeymoon': {
  name: 'Honeymoon Packages',
  tagline: 'Romantic escapes for two in paradise',
  packages: [
    {
      name: 'Romantic Dubai',
      duration: '5 Days / 4 Nights',
      price: '$1,899',
      popular: true,
      description: 'An intimate escape for couples, featuring romantic dinners, sunset experiences, and luxury accommodations.',
      includes: ['Private airport transfers', '5-star hotel (4 nights)', 'Sunset desert safari for two', 'Private dhow cruise dinner', 'Couples spa treatment', 'Helicopter ride', 'Daily breakfast', 'Personal butler'],
    },
  ],
},
'group': {
  name: 'Group Packages',
  tagline: 'Travel together and save with curated group experiences',
  packages: [
    {
      name: 'Group Discovery',
      duration: '4 Days / 3 Nights',
      price: '$399',
      popular: true,
      description: 'Perfect for groups of 6+. Explore the UAE\'s top attractions with shared transport and guided tours.',
      includes: ['Shared airport transfers', '3-star hotel (3 nights)', 'City tour', 'Desert safari', 'Group guide', 'Breakfast daily', 'Group activities'],
    },
    {
      name: 'Corporate Retreat',
      duration: '3 Days / 2 Nights',
      price: '$599',
      popular: false,
      description: 'Team building and luxury combined — perfect for corporate groups seeking a premium experience.',
      includes: ['Private transfers', 'Luxury resort (2 nights)', 'Conference facilities', 'Team building activities', 'Gala dinner', 'Desert BBQ', 'All meals included', 'Dedicated coordinator'],
    },
  ],
},
};

function CategoryNotFound() {
return (
  <div className={styles.page}>
    <div className={styles.notFound}>
      <h2>Category Not Found</h2>
      <p>The package category you're looking for doesn't exist.</p>
      <Link to="/about" className={styles.backBtn}>Browse Packages</Link>
    </div>
  </div>
);
}

function PackageCard({ pkg }) {
return (
  <div className={`${styles.packageCard} ${pkg.popular ? styles.popular : ''}`}>
    {pkg.popular && <span className={styles.popularBadge}>Most Popular</span>}
    <div className={styles.cardHeader}>
      <h3>{pkg.name}</h3>
      <span className={styles.duration}>{pkg.duration}</span>
    </div>
    <div className={styles.cardPrice}>
      <span className={styles.priceValue}>{pkg.price}</span>
      <span className={styles.pricePer}>/ person</span>
    </div>
    <p className={styles.cardDesc}>{pkg.description}</p>
    <div className={styles.cardIncludes}>
      <span className={styles.includesLabel}>What's Included:</span>
      <ul>
        {pkg.includes.map((item) => (
          <li key={item}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            {item}
          </li>
        ))}
      </ul>
    </div>
    <Link to="/contact" className={styles.bookBtn}>Book This Package</Link>
  </div>
);
}

export default function PackageDetail() {
const { slug } = useParams();
const category = packages[slug];

if (!category) return <CategoryNotFound />;

return (
  <div className={styles.page}>
    {/* Hero */}
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.breadcrumbs}>
          <Link to="/about">Home</Link>
          <span>/</span>
          <span>Packages</span>
          <span>/</span>
          <span>{category.name}</span>
        </div>
        <span className={styles.heroBadge}>Packages</span>
        <h1>{category.name}</h1>
        <p className={styles.heroTagline}>{category.tagline}</p>
      </div>
    </section>

    {/* Packages Grid */}
    <section className={styles.packagesSection}>
      <div className={styles.container}>
        <div className={styles.packagesGrid}>
          {category.packages.map((pkg) => (
            <PackageCard key={pkg.name} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.ctaContent}>
          <h2>Need a <span>Custom Package</span>?</h2>
          <p>Tell us your preferences and we'll create a tailor-made itinerary just for you.</p>
          <Link to="/contact" className={styles.ctaBtn}>Request Custom Package</Link>
        </div>
      </div>
    </section>
  </div>
);
}
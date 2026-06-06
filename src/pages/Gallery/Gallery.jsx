import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Gallery.module.scss';

const categories = [
{ id: 'all', label: 'All Photos' },
{ id: 'desert', label: 'Desert' },
{ id: 'city', label: 'City' },
{ id: 'adventure', label: 'Adventure' },
{ id: 'cultural', label: 'Cultural' },
{ id: 'beach', label: 'Beach & Water' },
];

const photos = [
{ id: 1, src: '', alt: 'Golden sand dunes at sunset', category: 'desert', title: 'Desert Sunset', location: 'Lahbab Desert' },
{ id: 2, src: '', alt: 'Burj Khalifa at dusk', category: 'city', title: 'Burj Khalifa', location: 'Dubai' },
{ id: 3, src: '', alt: 'Hiking trail in Hajar Mountains', category: 'adventure', title: 'Mountain Trek', location: 'Hajar Mountains' },
{ id: 4, src: '', alt: 'Sheikh Zayed Grand Mosque', category: 'cultural', title: 'Grand Mosque', location: 'Abu Dhabi' },
{ id: 5, src: '', alt: 'Crystal clear beach waters', category: 'beach', title: 'Pristine Beach', location: 'Ras Al Khaimah' },
{ id: 6, src: '', alt: 'Dune bashing 4x4 vehicles', category: 'desert', title: 'Dune Bashing', location: 'Dubai Desert' },
{ id: 7, src: '', alt: 'Dubai Marina skyline', category: 'city', title: 'Marina Skyline', location: 'Dubai Marina' },
{ id: 8, src: '', alt: 'Kayaking through mangroves', category: 'adventure', title: 'Mangrove Kayak', location: 'Al Zorah' },
{ id: 9, src: '', alt: 'Traditional Arabian souk', category: 'cultural', title: 'Gold Souk', location: 'Deira, Dubai' },
{ id: 10, src: '', alt: 'Palm Jumeirah aerial view', category: 'city', title: 'Palm Jumeirah', location: 'Dubai' },
{ id: 11, src: '', alt: 'Camel riding in the desert', category: 'desert', title: 'Camel Ride', location: 'Dubai Desert' },
{ id: 12, src: '', alt: 'Ziplining adventure', category: 'adventure', title: 'Desert Zipline', location: 'Ras Al Khaimah' },
{ id: 13, src: '', alt: 'Al Fahidi historic district', category: 'cultural', title: 'Al Fahidi Fort', location: 'Bur Dubai' },
{ id: 14, src: '', alt: 'Sunset dhow cruise', category: 'beach', title: 'Dhow Cruise', location: 'Dubai Marina' },
{ id: 15, src: '', alt: 'Stars over desert camp', category: 'desert', title: 'Desert Camp', location: 'Al Marmoom' },
{ id: 16, src: '', alt: 'Ferrari World roller coaster', category: 'adventure', title: 'Ferrari World', location: 'Yas Island' },
{ id: 17, src: '', alt: 'Louvre Abu Dhabi architecture', category: 'cultural', title: 'Louvre Abu Dhabi', location: 'Saadiyat Island' },
{ id: 18, src: '', alt: 'Jet skiing at JBR beach', category: 'beach', title: 'Jet Ski Fun', location: 'JBR, Dubai' },
{ id: 19, src: '', alt: 'Fog over Dubai skyline', category: 'city', title: 'City Fog', location: 'Dubai' },
{ id: 20, src: '', alt: 'Sandboarding down dunes', category: 'adventure', title: 'Sandboarding', location: 'Dubai Desert' },
{ id: 21, src: '', alt: 'Emirati henna art', category: 'cultural', title: 'Henna Painting', location: 'Heritage Village' },
{ id: 22, src: '', alt: 'Beach sunset with palm trees', category: 'beach', title: 'Beach Sunset', location: 'Kite Beach' },
{ id: 23, src: '', alt: 'Hot air balloon over desert', category: 'desert', title: 'Balloon Ride', location: 'Dubai Desert' },
{ id: 24, src: '', alt: 'Abra boat on Dubai Creek', category: 'city', title: 'Creek Abra', location: 'Dubai Creek' },
];

export default function Gallery() {
const [activeCategory, setActiveCategory] = useState('all');
const [lightbox, setLightbox] = useState(null);

const filtered = activeCategory === 'all'
  ? photos
  : photos.filter((p) => p.category === activeCategory);

const handleKeyDown = (e) => {
  if (!lightbox) return;
  if (e.key === 'Escape') { setLightbox(null); return; }
  if (e.key === 'ArrowRight') {
    const idx = filtered.findIndex((p) => p.id === lightbox);
    if (idx < filtered.length - 1) setLightbox(filtered[idx + 1].id);
  }
  if (e.key === 'ArrowLeft') {
    const idx = filtered.findIndex((p) => p.id === lightbox);
    if (idx > 0) setLightbox(filtered[idx - 1].id);
  }
};

return (
  <div className={styles.page} onKeyDown={handleKeyDown} tabIndex={0}>
    {/* Hero */}
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.breadcrumbs}>
          <Link to="/about">Home</Link>
          <span>/</span>
          <span>Gallery</span>
        </div>
        <h1>Our Gallery</h1>
        <p className={styles.heroTagline}>Visual stories from our tours across the UAE</p>
      </div>
    </section>

    {/* Filter */}
    <section className={styles.gallerySection}>
      <div className={styles.container}>
        <div className={styles.filters}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`${styles.filterBtn} ${activeCategory === cat.id ? styles.activeFilter : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className={styles.grid}>
            {filtered.map((photo) => (
              <div
                key={photo.id}
                className={styles.gridItem}
                onClick={() => setLightbox(photo.id)}
              >
                <div className={styles.placeholder}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21 15 16 10 5 21"/>
                  </svg>
                </div>
                <div className={styles.photoInfo}>
                  <h3>{photo.title}</h3>
                  <span>{photo.location}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
            <p>No photos in this category yet.</p>
          </div>
        )}
      </div>
    </section>

    {/* Lightbox */}
    {lightbox && (() => {
      const current = photos.find((p) => p.id === lightbox);
      const idx = filtered.findIndex((p) => p.id === lightbox);
      if (!current) return null;
      return (
        <div className={styles.lightbox} onClick={() => setLightbox(null)}>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.lightboxClose} onClick={() => setLightbox(null)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>

            {idx > 0 && (
              <button className={`${styles.lightboxArrow} ${styles.lightboxPrev}`} onClick={() => setLightbox(filtered[idx - 1].id)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"/>
                </svg>
              </button>
            )}

            <div className={styles.lightboxImage}>
              <div className={styles.placeholderLarge}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
              </div>
            </div>

            <div className={styles.lightboxInfo}>
              <h3>{current.title}</h3>
              <span>{current.location}</span>
              <p>{current.alt}</p>
            </div>

            {idx < filtered.length - 1 && (
              <button className={`${styles.lightboxArrow} ${styles.lightboxNext}`} onClick={() => setLightbox(filtered[idx + 1].id)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </button>
            )}
          </div>
        </div>
      );
    })()}

    {/* CTA */}
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.ctaContent}>
          <h2>Want to <span>Experience</span> These Moments?</h2>
          <p>Every photo tells a story. Book a tour and create your own.</p>
          <Link to="/about" className={styles.ctaBtn}>Browse Our Tours</Link>
        </div>
      </div>
    </section>
  </div>
);
}
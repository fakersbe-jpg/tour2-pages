import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const navLinks = [
{ label: 'About', to: '/about' },
{ label: 'Tours', to: '/tours/featured' },
{ label: 'Destinations', to: '/destinations/featured' },
{ label: 'Gallery', to: '/gallery' },
{ label: 'Contact', to: '/contact' },
];

export default function Header() {
const [mobileOpen, setMobileOpen] = useState(false);

return (
  <header className={styles.header}>
    <div className={styles.container}>
      <Link to="/about" className={styles.logo}>
        <div className={styles.logoIcon}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 12h10"/><path d="M9 8v8"/><path d="m15 8 6 4-6 4V8z"/>
          </svg>
        </div>
        <span>Rwamps</span>
      </Link>

      <nav className={styles.nav}>
        {navLinks.map((link) => (
          <Link key={link.label} to={link.to} className={styles.navLink}>
            {link.label}
          </Link>
        ))}
      </nav>

      <div className={styles.actions}>
        <Link to="/gallery" className={styles.iconBtn}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21 15 16 10 5 21"/>
          </svg>
        </Link>
        <Link to="/contact" className={styles.iconBtn}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        </Link>
        <button className={styles.mobileMenuBtn} onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          )}
        </button>
      </div>
    </div>

    <div className={`${styles.mobileMenu} ${mobileOpen ? styles.open : ''}`}>
      {navLinks.map((link) => (
        <Link
          key={link.label}
          to={link.to}
          className={styles.mobileNavLink}
          onClick={() => setMobileOpen(false)}
        >
          {link.label}
        </Link>
      ))}
    </div>
  </header>
);
}
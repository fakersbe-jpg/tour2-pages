import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import styles from './App.module.scss';

const About = lazy(() => import('./pages/About/About'));
const TourDetail = lazy(() => import('./pages/TourDetail/TourDetail'));
const DestinationDetail = lazy(() => import('./pages/DestinationDetail/DestinationDetail'));
const PackageDetail = lazy(() => import('./pages/PackageDetail/PackageDetail'));
const Gallery = lazy(() => import('./pages/Gallery/Gallery'));
const Contact = lazy(() => import('./pages/Contact/Contact'));

function PageLoader() {
return (
  <div className={styles.loader}>
    <div className={styles.spinner}></div>
  </div>
);
}

export default function App() {
return (
  <div className={styles.app}>
    <Header />
    <main className={styles.main}>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/tours/:slug" element={<TourDetail />} />
          <Route path="/destinations/:slug" element={<DestinationDetail />} />
          <Route path="/packages/:slug" element={<PackageDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </main>
    <Footer />
  </div>
);
}

function NotFound() {
return (
  <section className={styles.notFound}>
    <div className={styles.notFoundContent}>
      <h1>404</h1>
      <p>The page you're looking for doesn't exist.</p>
      <a href="/about" className={styles.homeLink}>Go to About</a>
    </div>
  </section>
);
}
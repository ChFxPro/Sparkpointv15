import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { MissionPage } from './pages/MissionPage';
import { StoriesPage } from './pages/StoriesPage';
import { StoryCategoryPage } from './pages/StoryCategoryPage';
import { StoryArticlePage } from './pages/StoryArticlePage';
import { ImpactPage } from './pages/ImpactPage';
import { GetInvolvedPage } from './pages/GetInvolvedPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { VolunteerPage } from './pages/VolunteerPage';
import { TrustPage } from './pages/TrustPage';

// GitHub Pages SPA redirect handler
// This restores the original path after the 404.html redirect
(function(l) {
  if (l.search[1] === '/' ) {
    var decoded = l.search.slice(1).split('&').map(function(s) { 
      return s.replace(/~and~/g, '&')
    }).join('?');
    window.history.replaceState(null, null,
        l.pathname.slice(0, -1) + decoded + l.hash
    );
  }
}(window.location));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  return (
    <div className="min-h-screen relative">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mission" element={<MissionPage />} />
        <Route path="/stories" element={<StoriesPage />} />
        <Route path="/stories/:categoryId" element={<StoryCategoryPage />} />
        <Route path="/stories/:categoryId/:slug" element={<StoryArticlePage />} />
        <Route path="/impact" element={<ImpactPage />} />
        <Route path="/get-involved" element={<GetInvolvedPage />} />
        <Route path="/volunteer" element={<VolunteerPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/trust" element={<TrustPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

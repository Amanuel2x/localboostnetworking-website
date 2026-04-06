import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Vera from './pages/Vera';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

function FaviconManager() {
  const location = useLocation();

  useEffect(() => {
    const link = document.querySelector<HTMLLinkElement>("link[rel~='icon']")!;
    if (location.pathname.startsWith('/vera')) {
      link.href = '/favicon-vera.svg';
      link.type = 'image/svg+xml';
    } else {
      link.href = '/lbn-logo.png';
      link.type = 'image/png';
    }
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <FaviconManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vera" element={<Vera />} />
        <Route path="/vera/*" element={<Vera />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </BrowserRouter>
  );
}

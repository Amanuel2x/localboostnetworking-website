"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Suspense, lazy } from 'react';
const Spline = lazy(() => import('@splinetool/react-spline'));

function HeroSplineBackground() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', pointerEvents: 'auto', overflow: 'hidden' }}>
      <Suspense fallback={<div style={{ width: '100%', height: '100vh', background: '#000' }} />}>
        <Spline
          style={{ width: '100%', height: '100vh', pointerEvents: 'auto' }}
          scene="https://prod.spline.design/us3ALejTXl6usHZ7/scene.splinecode"
        />
      </Suspense>
      <div style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh',
        background: `
          linear-gradient(to right, rgba(0,0,0,0.8), transparent 30%, transparent 70%, rgba(0,0,0,0.8)),
          linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.9))
        `,
        pointerEvents: 'none',
      }} />
    </div>
  );
}

function ScreenshotSection({ screenshotRef }: { screenshotRef: React.RefObject<HTMLDivElement | null> }) {
  return (
    <section className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 mt-11 md:mt-12">
      <div ref={screenshotRef} className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-700/50 w-full md:w-[80%] lg:w-[70%] mx-auto">
        <img
          src="/vera-dashboard-preview.png"
          alt="VERA Dashboard"
          className="w-full h-auto block rounded-lg mx-auto"
        />
      </div>
    </section>
  );
}

function HeroContent() {
  return (
    <div className="text-left text-white pt-16 sm:pt-24 md:pt-32 px-4 max-w-3xl">
      <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 leading-tight tracking-wide">
        AI-powered lead gen<br className="sm:hidden" /> for home services.
      </h1>
      <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-80 max-w-xl">
        VERA manages your campaigns, tracks every lead, and tells you exactly what's working. Built for agencies that want to move faster.
      </p>
      <div className="flex pointer-events-auto flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-3">
        <a
          href="https://app.vera.localboostnetworking.com"
          className="bg-[#8200DB29] hover:bg-black/50 text-white font-semibold py-3 px-8 rounded-full transition duration-300 w-full sm:w-auto border border-[#322D36] text-center"
          style={{ backdropFilter: 'blur(8px)' }}
        >
          Get Access to VERA
        </a>
        <a
          href="#features"
          className="bg-[#0009] border border-gray-600 hover:border-gray-400 text-gray-200 hover:text-white font-medium py-3 px-8 rounded-full transition duration-300 flex items-center justify-center w-full sm:w-auto"
        >
          See how it works
        </a>
      </div>
    </div>
  );
}

function Navbar() {
  const [hoveredNavItem, setHoveredNavItem] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMouseEnterNavItem = (item: string) => setHoveredNavItem(item);
  const handleMouseLeaveNavItem = () => setHoveredNavItem(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);

  const navLinkClass = (itemName: string, extraClasses = '') => {
    const isHovered = hoveredNavItem === itemName;
    const otherHovered = hoveredNavItem !== null && !isHovered;
    const colorClass = isHovered ? 'text-white' : otherHovered ? 'text-gray-500' : 'text-gray-300';
    return `text-sm transition duration-150 ${colorClass} ${extraClasses}`;
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) setIsMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-20" style={{ backgroundColor: 'rgba(13,13,24,0.3)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', borderRadius: '0 0 15px 15px' }}>
      <div className="container mx-auto px-4 py-4 md:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          {/* LBN Logo text */}
          <a href="/" className="text-white font-bold text-lg tracking-tight" style={{ textDecoration: 'none' }}>
            <span style={{ color: '#c4b5fd' }}>VE</span><span style={{ color: '#8b5cf6' }}>RA</span>
          </a>
          <div className="hidden lg:flex items-center space-x-6">
            <a href="#features" className={navLinkClass('features')} onMouseEnter={() => handleMouseEnterNavItem('features')} onMouseLeave={handleMouseLeaveNavItem}>Features</a>
            <a href="#how-it-works" className={navLinkClass('how')} onMouseEnter={() => handleMouseEnterNavItem('how')} onMouseLeave={handleMouseLeaveNavItem}>How It Works</a>
            <a href="#pricing" className={navLinkClass('pricing')} onMouseEnter={() => handleMouseEnterNavItem('pricing')} onMouseLeave={handleMouseLeaveNavItem}>Pricing</a>
          </div>
        </div>

        <div className="flex items-center space-x-4 md:space-x-6">
          <a href="https://app.vera.localboostnetworking.com" className="hidden sm:block text-gray-300 hover:text-white text-sm">Sign In</a>
          <a href="https://localboostnetworking.com/vera" className="bg-[#8200DB29] hover:bg-black/50 text-white font-semibold py-2 px-5 rounded-full text-sm border border-[#322D36]" style={{ backdropFilter: 'blur(8px)' }}>Get Access</a>
          <button className="lg:hidden text-white p-2" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      <div className={`lg:hidden bg-black bg-opacity-50 border-t border-gray-700/30 absolute top-full left-0 right-0 z-30 overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen opacity-100 pointer-events-auto' : 'max-h-0 opacity-0 pointer-events-none'}`}
        style={{ backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}>
        <div className="px-4 py-6 flex flex-col space-y-4">
          <a href="#features" className="text-gray-300 hover:text-white text-sm py-2" onClick={toggleMobileMenu}>Features</a>
          <a href="#how-it-works" className="text-gray-300 hover:text-white text-sm py-2" onClick={toggleMobileMenu}>How It Works</a>
          <a href="#pricing" className="text-gray-300 hover:text-white text-sm py-2" onClick={toggleMobileMenu}>Pricing</a>
          <a href="https://app.vera.localboostnetworking.com" className="text-gray-300 hover:text-white text-sm py-2" onClick={toggleMobileMenu}>Sign In</a>
        </div>
      </div>
    </nav>
  );
}

export const HeroSection = () => {
  const screenshotRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        const scrollPosition = window.pageYOffset;
        if (screenshotRef.current) {
          screenshotRef.current.style.transform = `translateY(-${scrollPosition * 0.5}px)`;
        }
        const maxScroll = 400;
        const opacity = 1 - Math.min(scrollPosition / maxScroll, 1);
        if (heroContentRef.current) {
          heroContentRef.current.style.opacity = opacity.toString();
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <Navbar />
      <div className="relative min-h-screen">
        <div className="absolute inset-0 z-0 pointer-events-auto">
          <HeroSplineBackground />
        </div>
        <div ref={heroContentRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', zIndex: 10, pointerEvents: 'none' }}>
          <div className="container mx-auto">
            <HeroContent />
          </div>
        </div>
      </div>
      <div className="bg-black relative z-10" style={{ marginTop: '-10vh' }}>
        <ScreenshotSection screenshotRef={screenshotRef} />
        <div id="features" className="container mx-auto px-4 py-16 text-white">
          <h2 className="text-4xl font-bold text-center mb-8">More sections coming soon</h2>
        </div>
      </div>
    </div>
  );
};

import { useEffect } from 'react';
import ScrollExpandHero from '../components/ui/ScrollExpandHero';
import { CalendlyEmbed } from '../components/ui/CalendlyEmbed';
import CaseStudies from '../components/ui/case-studies';
import { Testimonial } from '../components/ui/testimonial';
import { PageShaderBg } from '../components/ui/page-shader-bg';
import { Footer } from '../components/ui/footer';
import WhatWeHandle from '../components/ui/what-we-handle';
import RealResults from '../components/ui/real-results';
import { Navbar1 } from '../components/ui/navbar-1';
import { Linkedin, Instagram, Facebook } from 'lucide-react';

// ─── HERO ─────────────────────────────────────────────────────────────────────

function HomeHero() {
  return (
    <ScrollExpandHero
      mediaSrc="/hook5.mp4"
      bgImageSrc="/lbn-bg.jpg"
      title="More Leads. Less Work."
      scrollToExpand="Scroll to explore"
    />
  );
}

// ─── STATS ────────────────────────────────────────────────────────────────────

function HomeStats() {
  return <RealResults />;
}

// ─── SERVICES ─────────────────────────────────────────────────────────────────

function HomeServices() {
  return <WhatWeHandle />;
}

// ─── CALENDLY CTA ─────────────────────────────────────────────────────────────

function HomeCalendarCTA() {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-7">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'monospace', fontSize: '.65rem', fontWeight: 500, letterSpacing: '.2em', textTransform: 'uppercase', color: '#1a4fc8', marginBottom: '24px' }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#1a4fc8', boxShadow: '0 0 12px rgba(26,79,200,.5)', display: 'inline-block' }} />
          Let's Talk
        </div>
        <h2 style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-.02em', color: '#f0f0f5', marginBottom: '12px' }}>Book a free strategy call.</h2>
        <p style={{ maxWidth: '460px', marginTop: '12px', marginBottom: '40px', color: 'rgba(240,240,245,.5)', lineHeight: 1.8, fontSize: '.95rem' }}>Thirty minutes. We will look at your current lead flow, talk through what is working in your market right now, and tell you straight up if we are a fit. No deck.</p>
        <CalendlyEmbed url="https://calendly.com/amanuel-localboostnetworking/marketing" />
        <div style={{ marginTop: '24px' }}>
          <a
            href="https://veramarketing.ai" target="_blank" rel="noopener noreferrer"
            style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '12px 20px', border: '1px solid rgba(255,255,255,.08)', borderRadius: '8px', transition: 'border-color .2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,.2)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,.08)'; }}
          >
            <img src="/vera-logo-aloe.jpg" alt="Vera" style={{ height: '24px', width: 'auto', filter: 'invert(1)' }} />
            <div style={{ display: 'inline-flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '.6rem', fontWeight: 600, letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,.3)', marginBottom: '3px' }}>For marketing agencies</span>
              <span style={{ fontSize: '.85rem', fontWeight: 600, color: '#f0f0f5' }}>Meet VERA — your agency OS <span style={{ color: '#1a4fc8' }}>→</span></span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────

function HomeFooter() {
  return (
    <div className="max-w-6xl mx-auto px-7">
      <div>
      <Footer
        logo={<img src="/lbn-logo.png" alt="Local Boost Networking" className="h-10 w-10 rounded" />}
        brandName="Local Boost Networking"
        socialLinks={[
          { icon: <Linkedin className="h-5 w-5" />, href: '#', label: 'LinkedIn' },
          { icon: <Instagram className="h-5 w-5" />, href: '#', label: 'Instagram' },
          { icon: <Facebook className="h-5 w-5" />, href: '#', label: 'Facebook' },
        ]}
        mainLinks={[
          { href: 'https://veramarketing.ai', label: 'VERA' },
          { href: 'https://veramarketing.ai', label: 'Client Access' },
          { href: 'mailto:contact@localboostnetworking.com', label: 'Contact' },
          { href: 'tel:+14159064200', label: '(415) 906-4200' },
        ]}
        legalLinks={[
          { href: '/privacy-policy', label: 'Privacy Policy' },
          { href: '/terms-of-service', label: 'Terms of Service' },
        ]}
        copyright={{
          text: '© 2026 Local Boost Networking LLC',
          license: 'Serving home service businesses nationwide.',
        }}
      />
      </div>
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function Home() {
  useEffect(() => {
    document.title = 'Local Boost Networking | Lead Generation for Home Service Businesses';
  }, []);

  return (
    <div style={{ background: '#020617', minHeight: '100vh', fontFamily: "'Outfit', sans-serif", color: '#f0f0f5' }}>
      <header><Navbar1 /></header>
      <main>
        <HomeHero />
        <PageShaderBg>
          <section id="results" aria-label="Real Results" style={{ scrollMarginTop: '96px' }}><HomeStats /></section>
          <section id="services" aria-label="What We Handle" style={{ scrollMarginTop: '96px' }}><HomeServices /></section>
          <section id="case-studies" aria-label="Case Studies" style={{ scrollMarginTop: '96px' }}><CaseStudies /></section>
          <a
            href="https://calendly.com/amanuel-localboostnetworking/marketing"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book a free strategy call with Amanuel Abu, Founder and CEO of Local Boost Networking"
            style={{ display: 'block', textDecoration: 'none', cursor: 'pointer' }}
          >
            <Testimonial
              companyLogo="/lbn-logo.png"
              quote="We built Local Boost Networking to do one thing. Get home service companies more calls than they can handle."
              highlightedText="Local Boost Networking"
              authorName="Amanuel Abu"
              authorPosition="Founder and CEO"
              authorImage="/amanuel-headshot.png"
            />
          </a>
          <HomeCalendarCTA />
        </PageShaderBg>
      </main>
      <footer><HomeFooter /></footer>
    </div>
  );
}

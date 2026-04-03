import { useEffect, useState } from 'react';
import ScrollExpandHero from '../components/ui/ScrollExpandHero';
import { FeatureCard } from '../components/ui/FeatureCard';
import { MetricsBlock } from '../components/ui/MetricsBlock';
import { CalendlyEmbed } from '../components/ui/CalendlyEmbed';

// ─── NAV ─────────────────────────────────────────────────────────────────────

function HomeNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(3,7,18,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(240,240,245,.06)' : 'none',
        padding: scrolled ? '12px 0' : '18px 0',
      }}
    >
      <div className="max-w-6xl mx-auto px-7 flex items-center justify-between">
        <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src="/lbn-logo.png" alt="Local Boost Networking" style={{ height: '64px', width: 'auto' }} />
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex" style={{ alignItems: 'center', gap: '28px', listStyle: 'none', margin: 0, padding: 0 }}>
          {/* VERA wordmark link */}
          <li>
            <a href="/vera" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
              <span style={{ fontSize: '1rem', fontWeight: 800, letterSpacing: '-.03em', color: '#f0f0f5' }}>
                VE<span style={{ color: '#c4b5fd' }}>RA</span>
              </span>
              <span style={{ fontSize: '.52rem', color: 'rgba(255,255,255,.25)', letterSpacing: '.12em', textTransform: 'uppercase', marginTop: '2px' }}>Agency OS</span>
            </a>
          </li>
          <li>
            <a
              href="https://calendly.com/amanuel-localboostnetworking/marketing"
              target="_blank" rel="noopener noreferrer"
              style={{ fontSize: '.75rem', fontWeight: 600, letterSpacing: '.04em', background: '#1a4fc8', color: '#fff', padding: '10px 22px', borderRadius: '8px', textDecoration: 'none', transition: 'all .3s', boxShadow: '0 0 20px rgba(26,79,200,.2)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#1640a8'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 30px rgba(26,79,200,.4)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#1a4fc8'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 20px rgba(26,79,200,.2)'; }}
            >Book a Call</a>
          </li>
        </ul>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div style={{ background: 'rgba(3,7,18,0.95)', borderTop: '1px solid rgba(240,240,245,.06)', padding: '16px 28px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <a href="/vera" style={{ textDecoration: 'none', color: 'rgba(240,240,245,.7)', fontSize: '.875rem' }}>VERA</a>
            <a
              href="https://calendly.com/amanuel-localboostnetworking/marketing"
              target="_blank" rel="noopener noreferrer"
              style={{ fontSize: '.75rem', fontWeight: 600, letterSpacing: '.04em', background: '#1a4fc8', color: '#fff', padding: '10px 22px', borderRadius: '8px', textDecoration: 'none', display: 'inline-block', width: 'fit-content' }}
            >Book a Call</a>
          </div>
        </div>
      )}
    </nav>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────

function HomeHero() {
  return (
    <ScrollExpandHero
      mediaSrc="/hook5.mp4"
      bgImageSrc="/lbn-bg.jpg"
      title="More Leads. Less Work."
      scrollToExpand="Scroll to explore"
    >
      {/* Revealed content after video expands */}
      <div style={{ background: '#030712', padding: '80px 28px', textAlign: 'center' }}>
        <p style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', color: 'rgba(240,240,245,.6)', maxWidth: '540px', margin: '0 auto 40px', lineHeight: 1.8 }}>
          We build, manage, and optimize your entire lead generation system for home service companies. HVAC, roofing, plumbing, electrical, landscaping — powered by VERA, our AI marketing engine.
        </p>
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="https://calendly.com/amanuel-localboostnetworking/marketing"
            target="_blank" rel="noopener noreferrer"
            style={{ fontSize: '.85rem', fontWeight: 600, background: '#1a4fc8', color: '#fff', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', boxShadow: '0 0 24px rgba(26,79,200,.35)' }}
          >Book a Free Consultation</a>
          <a
            href="/vera"
            style={{ fontSize: '.85rem', fontWeight: 500, color: 'rgba(240,240,245,.6)', padding: '14px 24px', border: '1px solid rgba(240,240,245,.1)', borderRadius: '8px', textDecoration: 'none' }}
          >Meet VERA</a>
        </div>
      </div>
    </ScrollExpandHero>
  );
}

// ─── STATS ────────────────────────────────────────────────────────────────────

function HomeStats() {
  return (
    <div style={{ background: '#030712', borderTop: '1px solid rgba(255,255,255,.05)' }}>
      <MetricsBlock
        badge="Real Results"
        title="Numbers that actually matter."
        subtitle="Average performance across our home service clients. Tracked, verified, and reported every week."
        metrics={[
          { label: 'Avg. Inbound Calls / Mo', value: '127', delta: 'per client', description: 'Qualified inbound calls from real buyers actively searching for home services in their area.' },
          { label: 'Cost Per Call', value: '$32', delta: 'avg CPL', description: 'Fully loaded cost per inbound call including ad spend, tracking, and routing. Well below industry average.' },
          { label: 'Booking Rate', value: '68%', delta: 'close rate', description: 'Percentage of inbound calls that convert to a booked appointment. Built-in CRM automation keeps it moving.' },
          { label: 'Avg. Monthly Revenue', value: '$37.7K', delta: 'per client', description: 'Average monthly revenue generated by clients running our full lead gen system for 60+ days.' },
        ]}
      />
    </div>
  );
}

// ─── SERVICES ─────────────────────────────────────────────────────────────────

const services = [
  { title: 'Google Ads and Local SEO', desc: 'Google Business Profile optimization, local SEO, citation building, and search rankings. Home service contractors show up when customers search.' },
  { title: 'Paid Ad Campaigns', desc: 'Google Search and Meta campaigns built for home service leads. Optimized budgets, tested creative, and weekly performance tuning.' },
  { title: 'CRM and Lead Automation', desc: 'Custom GoHighLevel CRM that tracks every inbound lead, automates follow-ups, and keeps your pipeline moving without manual work.' },
  { title: 'Pay-Per-Call System', desc: 'Inbound call generation with Ringba integration, intelligent routing, and full call tracking. You only pay for real buyers calling in.' },
  { title: 'Client Dashboard', desc: 'Live reporting on calls, leads, pipeline status, and revenue. Full transparency into every dollar your marketing generates.' },
  { title: 'Website Design and Build', desc: 'Fast, conversion-focused websites for home service companies. Built from scratch around your business — not a generic template.' },
];

function HomeServices() {
  return (
    <section className="py-20 md:py-[120px]">
      <div className="max-w-6xl mx-auto px-7">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'monospace', fontSize: '.65rem', fontWeight: 500, letterSpacing: '.2em', textTransform: 'uppercase', color: '#8b5cf6', marginBottom: '24px' }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#1a4fc8', boxShadow: '0 0 12px rgba(26,79,200,.5)', display: 'inline-block' }} />
          What We Handle
        </div>
        <h2 style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-.02em', color: '#f0f0f5', marginBottom: '12px' }}>Everything. You just<br />answer the phone.</h2>
        <p style={{ maxWidth: '500px', marginTop: '12px', color: 'rgba(240,240,245,.5)', lineHeight: 1.8, fontSize: '.95rem' }}>Full-stack marketing for home service businesses across the US. We handle your Google Ads, Meta campaigns, local SEO, CRM, and pay-per-call — so you can focus on doing the work.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {services.map(s => (
            <FeatureCard key={s.title} title={s.title} description={s.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CALENDLY CTA ─────────────────────────────────────────────────────────────

function HomeCalendarCTA() {
  return (
    <section className="py-20 md:py-[120px]" style={{ background: '#06102a', borderTop: '1px solid rgba(240,240,245,.06)', borderBottom: '1px solid rgba(240,240,245,.06)' }}>
      <div className="max-w-6xl mx-auto px-7">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'monospace', fontSize: '.65rem', fontWeight: 500, letterSpacing: '.2em', textTransform: 'uppercase', color: '#8b5cf6', marginBottom: '24px' }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#1a4fc8', boxShadow: '0 0 12px rgba(26,79,200,.5)', display: 'inline-block' }} />
          Let's Talk
        </div>
        <h2 style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-.02em', color: '#f0f0f5', marginBottom: '12px' }}>Book a free consultation.</h2>
        <p style={{ maxWidth: '460px', marginTop: '12px', marginBottom: '40px', color: 'rgba(240,240,245,.5)', lineHeight: 1.8, fontSize: '.95rem' }}>No pitch deck. No pressure. Just a conversation about growing your business.</p>
        <CalendlyEmbed url="https://calendly.com/amanuel-localboostnetworking/marketing" />
        <div style={{ marginTop: '24px' }}>
          <a
            href="/vera"
            style={{ textDecoration: 'none', display: 'inline-flex', flexDirection: 'column', padding: '12px 20px', border: '1px solid rgba(255,255,255,.08)', borderRadius: '8px', transition: 'border-color .2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,.2)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,.08)'; }}
          >
            <span style={{ fontSize: '.6rem', fontWeight: 600, letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,.3)', marginBottom: '3px' }}>For marketing agencies</span>
            <span style={{ fontSize: '.85rem', fontWeight: 600, color: '#f0f0f5' }}>Meet VERA — your agency OS <span style={{ color: '#c4b5fd' }}>→</span></span>
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────

const testimonials = [
  { quote: 'First week in we had more calls than we normally get in a month. Real buyers, not time wasters. The leads have been consistent ever since.', author: 'Luxury Locksmith · Atlanta, GA' },
  { quote: 'We hit $30k in our first month. I didn\'t believe it was going to work that fast but the inbound call volume was there from week two. Best decision I made for the business.', author: 'Peak Roofers · Denver, CO' },
  { quote: 'Three months in and we\'re doing $100k across painting, remodeling, and handyman. The inbound call system handles all three trades and we just pick up the phone. That\'s it.', author: 'Gerson · Contracting · Watsonville, CA' },
];

function HomeTestimonials() {
  return (
    <section className="py-20 md:py-[120px]">
      <div className="max-w-6xl mx-auto px-7">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'monospace', fontSize: '.65rem', fontWeight: 500, letterSpacing: '.2em', textTransform: 'uppercase', color: '#8b5cf6', marginBottom: '24px' }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#1a4fc8', boxShadow: '0 0 12px rgba(26,79,200,.5)', display: 'inline-block' }} />
          Client Results
        </div>
        <h2 style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-.02em', color: '#f0f0f5', marginBottom: '48px' }}>What home service companies say.</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <FeatureCard
              key={i}
              title={t.author}
              description={`"${t.quote}"`}
              style={{ padding: '32px 24px' }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────

function HomeFooter() {
  return (
    <footer style={{ borderTop: '1px solid rgba(240,240,245,.06)', padding: '48px 0 32px', background: '#030712' }}>
      <div className="max-w-6xl mx-auto px-7">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div style={{ fontWeight: 700, fontSize: '.85rem', color: '#f0f0f5' }}>Local Boost Networking</div>
          <div className="flex gap-6 flex-wrap">
            {[['VERA', '/vera'], ['Client Access', 'https://app.vera.localboostnetworking.com'], ['Contact', 'mailto:contact@localboostnetworking.com']].map(([label, href]) => (
              <a key={label} href={href} style={{ fontSize: '.75rem', color: 'rgba(240,240,245,.3)', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(240,240,245,.7)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240,240,245,.3)')}
              >{label}</a>
            ))}
          </div>
        </div>
        <p style={{ fontSize: '.75rem', color: 'rgba(240,240,245,.3)', marginTop: '20px', textAlign: 'center', lineHeight: 1.8 }}>
          Serving home service businesses nationwide. HVAC, roofing, plumbing, electrical, landscaping, and more.
        </p>
        <div style={{ fontFamily: 'monospace', fontSize: '.6rem', color: 'rgba(240,240,245,.15)', marginTop: '12px', textAlign: 'center', lineHeight: 1.8 }}>
          &copy; 2026 Local Boost Networking LLC&nbsp;&nbsp;|&nbsp;&nbsp;
          <a href="/privacy-policy" style={{ color: 'rgba(240,240,245,.3)', textDecoration: 'none' }}>Privacy Policy</a>&nbsp;&nbsp;|&nbsp;&nbsp;
          <a href="/terms-of-service" style={{ color: 'rgba(240,240,245,.3)', textDecoration: 'none' }}>Terms of Service</a>&nbsp;&nbsp;|&nbsp;&nbsp;
          <a href="tel:+14159064200" style={{ color: 'rgba(240,240,245,.3)', textDecoration: 'none' }}>(415) 906-4200</a>&nbsp;&nbsp;|&nbsp;&nbsp;
          <a href="mailto:contact@localboostnetworking.com" style={{ color: 'rgba(240,240,245,.3)', textDecoration: 'none' }}>contact@localboostnetworking.com</a>
        </div>
      </div>
    </footer>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function Home() {
  useEffect(() => {
    document.title = 'Local Boost Networking';
    const link = document.querySelector<HTMLLinkElement>("link[rel~='icon']") || document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/svg+xml';
    link.href = '/favicon-lbn.svg';
    document.head.appendChild(link);
  }, []);

  return (
    <div style={{ background: '#030712', minHeight: '100vh', fontFamily: "'Outfit', sans-serif", color: '#f0f0f5' }}>
      <HomeNav />
      <HomeHero />
      <HomeStats />
      <HomeServices />
      <HomeCalendarCTA />
      <HomeTestimonials />
      <HomeFooter />
    </div>
  );
}

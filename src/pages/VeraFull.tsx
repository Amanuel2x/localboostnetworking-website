import { useEffect, useRef, useState, lazy, Suspense } from 'react';
import { FeatureCard } from '../components/ui/FeatureCard';
import { MetricsBlock } from '../components/ui/MetricsBlock';
import { GooeyText } from '../components/ui/GooeyText';
import { CalendlyEmbed } from '../components/ui/CalendlyEmbed';
import '../index.css';

const Spline = lazy(() => import('@splinetool/react-spline'));

// ─── LAUNCH BANNER ───────────────────────────────────────────────────────────

function LaunchBanner() {
  return (
    <div className="w-full text-center py-2.5 px-4 text-xs font-semibold" style={{ background: 'linear-gradient(90deg, rgba(139,92,246,.9) 0%, rgba(99,102,241,.9) 100%)', color: '#fff', letterSpacing: '.02em' }}>
      Launch pricing — $149/mo locked in for early users. Price increases within 30 days.{' '}
      <a href="#pricing" style={{ color: '#fff', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Lock it in now</a>
    </div>
  );
}

// ─── NAV ─────────────────────────────────────────────────────────────────────

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(5,5,10,0.92)' : 'rgba(5,5,10,0.3)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid rgba(139,92,246,0.15)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center no-underline" style={{ textDecoration: 'none' }}>
          <div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-.03em', color: '#f0f0f5', lineHeight: 1 }}>
              VE<span style={{ color: '#c4b5fd' }}>RA</span>
            </div>
            <div style={{ fontSize: '.62rem', color: 'rgba(255,255,255,.2)', letterSpacing: '.12em', textTransform: 'uppercase', marginTop: '2px' }}>Agency OS</div>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {['Features', 'How It Works', 'Pricing'].map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm transition-colors duration-150"
              style={{ color: 'rgba(255,255,255,.55)', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,.55)')}
            >{l}</a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a href="/" className="hidden sm:block" style={{ textDecoration: 'none' }}>
            <img src="/lbn-logo.png" alt="Local Boost Networking" style={{ height: '36px', width: 'auto', opacity: 0.7, transition: 'opacity .2s' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '0.7')}
            />
          </a>
          <a href="https://app.vera.localboostnetworking.com" className="hidden sm:block text-sm" style={{ color: 'rgba(255,255,255,.55)', textDecoration: 'none' }}>Sign In</a>
          <a href="#pricing" className="text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200" style={{ background: 'rgba(139,92,246,.18)', border: '1px solid rgba(139,92,246,.4)', color: '#fff', textDecoration: 'none', backdropFilter: 'blur(8px)' }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#8b5cf6'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(139,92,246,.18)'; }}
          >Get Access</a>
          <button className="md:hidden text-white p-1" onClick={() => setOpen(p => !p)}>
            <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`} style={{ background: 'rgba(5,5,10,0.95)', borderTop: '1px solid rgba(255,255,255,.06)' }}>
        <div className="px-6 py-4 flex flex-col gap-4">
          {['Features', 'How It Works', 'Pricing'].map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(/\s+/g, '-')}`} onClick={() => setOpen(false)} className="text-sm" style={{ color: 'rgba(255,255,255,.7)', textDecoration: 'none' }}>{l}</a>
          ))}
          <a href="https://app.vera.localboostnetworking.com" className="text-sm" style={{ color: 'rgba(255,255,255,.7)', textDecoration: 'none' }}>Sign In</a>
        </div>
      </div>
    </nav>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────

function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!contentRef.current) return;
      const opacity = 1 - Math.min(window.scrollY / 400, 1);
      contentRef.current.style.opacity = opacity.toString();
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Spline background */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div style={{ width: '100%', height: '100vh', background: 'radial-gradient(ellipse at 50% 40%, rgba(139,92,246,.15) 0%, #000 70%)' }} />}>
          <Spline
            scene="https://prod.spline.design/us3ALejTXl6usHZ7/scene.splinecode"
            style={{ width: '100%', height: '100vh' }}
          />
        </Suspense>
        {/* Edge fades */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to right, rgba(0,0,0,.85), transparent 30%, transparent 70%, rgba(0,0,0,.85)), linear-gradient(to bottom, transparent 50%, rgba(0,0,0,.95))' }} />
      </div>

      {/* Content */}
      <div ref={contentRef} className="absolute inset-0 z-10 pointer-events-none flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase" style={{ background: 'rgba(139,92,246,.12)', border: '1px solid rgba(139,92,246,.3)', color: '#c4b5fd', pointerEvents: 'auto' }}>
              AI Marketing Intelligence
            </div>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', color: '#fff', letterSpacing: '-.03em', lineHeight: 1.1 }}>
              Your agency's
              <div style={{ height: 'clamp(3rem, 6vw, 5rem)', position: 'relative', marginTop: '4px' }}>
                <GooeyText
                  texts={['AI brain.', 'is awesome.', 'for marketers.']}
                  morphTime={1.2}
                  cooldownTime={120}
                  className="w-full h-full"
                  style={{
                    fontSize: 'clamp(2.4rem, 5vw, 4rem)',
                    fontWeight: 900,
                    letterSpacing: '-.03em',
                    color: '#c4b5fd',
                  }}
                />
              </div>
            </h1>
            <p className="mb-8 leading-relaxed" style={{ fontSize: 'clamp(.95rem, 1.8vw, 1.15rem)', color: 'rgba(255,255,255,.6)', maxWidth: '480px' }}>
              VERA manages your campaigns, tracks every lead, and delivers AI-powered reports for every client. Built for agencies that run on speed.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pointer-events-auto">
              <a href="#pricing" className="inline-flex items-center justify-center font-semibold px-7 py-3.5 rounded-full transition-all duration-200 text-sm" style={{ background: '#8b5cf6', color: '#fff', textDecoration: 'none', boxShadow: '0 0 32px rgba(139,92,246,.4)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#7c3aed'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#8b5cf6'; }}
              >
                Get Access to VERA
              </a>
              <a href="#how-it-works" className="inline-flex items-center justify-center gap-2 font-medium px-7 py-3.5 rounded-full text-sm transition-all duration-200" style={{ background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)', color: 'rgba(255,255,255,.8)', textDecoration: 'none' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,.3)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,.12)'; }}
              >
                See how it works
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2" style={{ color: 'rgba(255,255,255,.25)', animation: 'bounce 2s infinite' }}>
        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" /></svg>
      </div>
    </div>
  );
}

// ─── INTEGRATION LOGOS ────────────────────────────────────────────────────────

function IntegrationBar() {
  const integrations = [
    { name: 'Meta Ads',         img: '/integration-meta.jpg',     bg: '#ffffff' },
    { name: 'Google Ads',       img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/120px-Google_%22G%22_logo.svg.png', bg: '#ffffff' },
    { name: 'GoHighLevel',      img: '/integration-ghl.jpg',      bg: '#0f1e2e' },
    { name: 'Stripe',           img: '/integration-stripe.png',   bg: '#635bff' },
    { name: 'Fathom AI',        img: '/integration-fathom.png',   bg: '#000000' },
    { name: 'Calendly',         img: '/integration-calendly.png', bg: '#ffffff' },
    { name: 'Instagram',        img: 'https://cdn-icons-png.flaticon.com/512/174/174855.png', bg: '#e1306c' },
    { name: 'YouTube',          img: 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png', bg: '#ff0000' },
    { name: 'Zapier',           img: '/integration-zapier.png',   bg: '#ffffff' },
    { name: 'Slack',            img: 'https://cdn-icons-png.flaticon.com/512/2111/2111615.png', bg: '#4a154b' },
    { name: 'Google Analytics', img: 'https://cdn-icons-png.flaticon.com/512/2702/2702602.png', bg: '#ffffff' },
    { name: 'WhatsApp',         img: 'https://cdn-icons-png.flaticon.com/512/733/733585.png', bg: '#25d366' },
  ];

  const octagon = "polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)";

  return (
    <section style={{ padding: '80px 0', background: 'rgba(255,255,255,.015)', borderTop: '1px solid rgba(255,255,255,.06)', borderBottom: '1px solid rgba(255,255,255,.06)' }}>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <div>
          <div className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase" style={{ background: 'rgba(139,92,246,.1)', border: '1px solid rgba(139,92,246,.2)', color: '#c4b5fd' }}>Integrations</div>
          <h2 className="font-black mb-4" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#f0f0f5', letterSpacing: '-.03em', lineHeight: 1.1 }}>
            Your whole stack, connected.
          </h2>
          <p style={{ color: 'rgba(255,255,255,.45)', lineHeight: 1.75, fontSize: '.95rem', marginBottom: '28px', maxWidth: '400px' }}>
            VERA plugs directly into the tools agencies already run. Live data flows in automatically — no CSV exports, no manual updates.
          </p>
          <a
            href="#pricing"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#8b5cf6', color: '#fff', fontWeight: 700, fontSize: '.85rem', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', boxShadow: '0 0 24px rgba(139,92,246,.35)', transition: 'background .2s' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#7c3aed')}
            onMouseLeave={e => (e.currentTarget.style.background = '#8b5cf6')}
          >
            Get Access to VERA →
          </a>
        </div>

        {/* Right — octagon grid */}
        <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
          {integrations.map(({ name, img, bg }) => (
            <div
              key={name}
              title={name}
              style={{
                width: 56,
                height: 56,
                background: bg,
                clipPath: octagon,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                cursor: 'default',
                transition: 'transform .2s',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.transform = 'scale(1.12)')}
              onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.transform = 'scale(1)')}
            >
              {img && <img src={img} alt={name} style={{ width: '65%', height: '65%', objectFit: 'contain' }} />}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// ─── FEATURES ─────────────────────────────────────────────────────────────────

const features = [
  { icon: '⚡', title: 'AI-Powered Reports', desc: 'VERA generates professional client reports in seconds. Campaign performance, lead quality, spend analysis — all written by AI, ready to send.' },
  { icon: '📊', title: 'Campaign Dashboard', desc: 'See every campaign across Meta and Google in one place. Spend, leads, CPL, ROAS — all live, all in one tab.' },
  { icon: '👥', title: 'Client Management', desc: 'Track every client, their industry, campaign status, and performance history. No spreadsheet required.' },
  { icon: '🔗', title: 'CRM + GHL Integration', desc: 'VERA pulls your pipeline straight from GoHighLevel. Leads, conversations, appointments — all visible from your dashboard.' },
  { icon: '🧠', title: 'VERA Intelligence', desc: 'Ask VERA anything about your campaigns. It reads your data and gives you plain-English answers, not just charts.' },
  { icon: '🏛️', title: 'Client Portal', desc: "Give clients a branded portal to view their own results. No more \"what's going on with my campaigns?\" emails." },
];

function Features() {
  return (
    <section id="features" className="py-24" style={{ background: '#05050a' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase" style={{ background: 'rgba(139,92,246,.1)', border: '1px solid rgba(139,92,246,.2)', color: '#c4b5fd' }}>Features</div>
          <h2 className="font-black mb-4" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#fff', letterSpacing: '-.03em' }}>Everything your agency needs.<br /><span style={{ color: 'rgba(255,255,255,.35)' }}>Nothing it doesn't.</span></h2>
          <p style={{ color: 'rgba(255,255,255,.45)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>Built specifically for digital marketing agencies managing home service clients at scale.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(f => (
            <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── HOW IT WORKS ─────────────────────────────────────────────────────────────

function HowItWorks() {
  const steps = [
    { num: '01', title: 'Connect your accounts', desc: 'Link Meta Ads, Google Ads, and GoHighLevel in a few clicks. VERA pulls in all your data automatically.' },
    { num: '02', title: 'VERA goes to work', desc: 'AI analyzes your campaigns, surfaces insights, and tracks performance across every client — continuously, in the background.' },
    { num: '03', title: 'You look like a genius', desc: 'Generate reports in seconds, catch issues before clients do, and spend less time in spreadsheets and more time closing.' },
  ];

  return (
    <section id="how-it-works" className="py-24" style={{ background: 'linear-gradient(180deg, #05050a 0%, #08060f 100%)', borderTop: '1px solid rgba(255,255,255,.05)' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase" style={{ background: 'rgba(139,92,246,.1)', border: '1px solid rgba(139,92,246,.2)', color: '#c4b5fd' }}>How It Works</div>
          <h2 className="font-black mb-4" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#fff', letterSpacing: '-.03em' }}>Up and running in under an hour.</h2>
          <p style={{ color: 'rgba(255,255,255,.45)', maxWidth: '400px', margin: '0 auto' }}>No dev required. No complicated setup. Just connect and go.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={s.num} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-full w-full h-px z-0" style={{ background: 'linear-gradient(to right, rgba(139,92,246,.4), transparent)' }} />
              )}
              <FeatureCard
                stat={s.num}
                title={s.title}
                description={s.desc}
                style={{ height: '100%' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── STATS ────────────────────────────────────────────────────────────────────

function Stats() {
  return (
    <div style={{ background: '#05050a', borderTop: '1px solid rgba(255,255,255,.05)' }}>
      <MetricsBlock
        badge="VERA by the numbers"
        title="What agencies actually save."
        subtitle="This isn't marketing math. It's what agencies running VERA see in month one."
        metrics={[
          { label: 'Stack Replacement', value: '$912', delta: 'down to $149', description: 'Six tools replaced by one. Reporting, SEO, AI content, CRM, ad management, and meeting intel — all in VERA.' },
          { label: 'Time Saved on Reports', value: '10x', delta: 'faster', description: 'Automated client reports generated in seconds. No more copy-pasting data from six dashboards into a slide deck.' },
          { label: 'Monthly Savings', value: '$5,550', delta: 'per month', description: 'Compared to hiring a junior CSM plus tools. That\'s $66,600 a year back in margin on just 5 clients.' },
          { label: 'Ad Platforms Integrated', value: '5+', delta: 'live data', description: 'Meta, Google, GHL, Fathom, Calendly, and Stripe. All connected. All pulling live data into one workspace.' },
        ]}
      />
    </div>
  );
}

// ─── SCREENSHOT ───────────────────────────────────────────────────────────────

function DashboardPreview() {
  return (
    <section className="py-24" style={{ background: '#05050a' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-black mb-4" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: '#fff', letterSpacing: '-.03em' }}>Built for how agencies actually work.</h2>
          <p style={{ color: 'rgba(255,255,255,.45)', maxWidth: '420px', margin: '0 auto' }}>Dense, fast, and precise. Every piece of data you need — nothing you don't.</p>
        </div>
        <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(139,92,246,.2)', boxShadow: '0 0 80px rgba(139,92,246,.15)' }}>
          <img src="/vera-dashboard-preview.png" alt="VERA Dashboard" className="w-full h-auto block" />
        </div>
      </div>
    </section>
  );
}

// ─── PRICING ──────────────────────────────────────────────────────────────────


function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const features = [
    'Full VERA dashboard',
    '5 client seats included free',
    'AI report generation',
    'Meta + Google + GHL integration',
    'Client portal access',
    'VERA Intelligence (AI Q&A)',
    '60-day results guarantee',
    'Price locked in forever at launch rate',
  ];

  return (
    <section id="pricing" className="py-24" style={{ background: 'linear-gradient(180deg, #05050a 0%, #08060f 100%)', borderTop: '1px solid rgba(255,255,255,.05)' }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <div className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase" style={{ background: 'rgba(139,92,246,.1)', border: '1px solid rgba(139,92,246,.2)', color: '#c4b5fd' }}>Pricing</div>
          <h2 className="font-black mb-4" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#fff', letterSpacing: '-.03em' }}>One workspace. Unlimited power.</h2>
          <p style={{ color: 'rgba(255,255,255,.45)', maxWidth: '460px', margin: '0 auto' }}>Lock it in now and that rate is yours forever. 5 seats free with every workspace.</p>
        </div>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <span className="text-sm font-medium" style={{ color: isYearly ? 'rgba(255,255,255,.35)' : '#f0f0f5' }}>Monthly</span>
          <button
            onClick={() => setIsYearly(y => !y)}
            style={{
              position: 'relative',
              width: 48,
              height: 26,
              borderRadius: 99,
              border: 'none',
              cursor: 'pointer',
              background: isYearly ? '#8b5cf6' : 'rgba(255,255,255,.12)',
              transition: 'background .2s',
              flexShrink: 0,
            }}
            aria-label="Toggle billing period"
          >
            <span style={{
              position: 'absolute',
              top: 3,
              left: isYearly ? 25 : 3,
              width: 20,
              height: 20,
              borderRadius: '50%',
              background: '#fff',
              transition: 'left .2s',
              display: 'block',
            }} />
          </button>
          <span className="flex items-center gap-2 text-sm font-medium" style={{ color: isYearly ? '#f0f0f5' : 'rgba(255,255,255,.35)' }}>
            Yearly
            <span className="px-2 py-0.5 rounded-full text-xs font-bold" style={{ background: 'rgba(34,197,94,.15)', border: '1px solid rgba(34,197,94,.3)', color: '#4ade80' }}>
              2 months free
            </span>
          </span>
        </div>

        <div className="max-w-sm mx-auto rounded-2xl p-8 relative overflow-hidden" style={{ background: 'rgba(255,255,255,.03)', border: '1px solid rgba(139,92,246,.35)', boxShadow: '0 0 60px rgba(139,92,246,.12)' }}>
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(139,92,246,.15) 0%, transparent 70%)' }} />

          <div className="inline-flex items-center gap-1.5 mb-5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase" style={{ background: 'rgba(251,191,36,.1)', border: '1px solid rgba(251,191,36,.3)', color: '#fbbf24' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#fbbf24', display: 'inline-block', animation: 'pulse 2s infinite' }} />
            Founding Member Rate
          </div>

          <div className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#8b5cf6' }}>Agency Workspace</div>

          {/* Price display */}
          <div className="flex items-end gap-3 mb-1">
            <span className="font-black" style={{ fontSize: '3.5rem', color: '#fff', lineHeight: 1, letterSpacing: '-.04em' }}>
              {isYearly ? '$124' : '$149'}
            </span>
            <div className="mb-2">
              <div className="text-sm" style={{ color: 'rgba(255,255,255,.35)' }}>/mo</div>
              {isYearly && (
                <div className="text-xs" style={{ color: 'rgba(255,255,255,.3)' }}>billed $1,490/yr</div>
              )}
            </div>
            {isYearly && (
              <div className="mb-2 px-2 py-0.5 rounded-full text-xs font-bold" style={{ background: 'rgba(34,197,94,.12)', border: '1px solid rgba(34,197,94,.25)', color: '#4ade80' }}>
                Save $298
              </div>
            )}
          </div>

          <p className="text-sm mb-2" style={{ color: 'rgba(255,255,255,.35)' }}>5 seats included free &nbsp;·&nbsp; +$50/seat after</p>

          <div className="mb-7 mt-4 rounded-lg px-4 py-3 text-xs" style={{ background: 'rgba(251,191,36,.06)', border: '1px solid rgba(251,191,36,.15)', color: 'rgba(255,255,255,.6)', lineHeight: 1.6 }}>
            {isYearly
              ? 'Pay once a year and save $298. Same locked-in founding rate — just smarter billing.'
              : 'Everyone signing up now pays $149/mo forever. Full access, 5 seats, no rate increases ever.'}
          </div>

          <ul className="space-y-3 mb-8">
            {features.map(item => (
              <li key={item} className="flex items-center gap-3 text-sm" style={{ color: 'rgba(255,255,255,.7)' }}>
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#8b5cf6" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                {item}
              </li>
            ))}
          </ul>

          <CheckoutButton isYearly={isYearly} />
          <p className="text-center mt-4 text-xs" style={{ color: 'rgba(255,255,255,.25)' }}>
            {isYearly ? 'Billed annually. Cancel anytime.' : 'Lock it in today and it stays at $149/mo. No rate hikes, ever.'}
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── CHECKOUT BUTTON ──────────────────────────────────────────────────────────

function CheckoutButton({ isYearly }: { isYearly: boolean }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {isYearly ? (
        <stripe-buy-button
          buy-button-id="buy_btn_1TBrzaCOyBPJ4pgK6mTPJ3PC"
          publishable-key="pk_live_51SM3XyCOyBPJ4pgKT7xdlP09DkuLBCaJTdKvYLZu81h7Tc9RbTax4VYrHwSkw26JtVCxm27FPMMbLjpKwbzciCUE00CP14cJmR"
        />
      ) : (
        <stripe-buy-button
          buy-button-id="buy_btn_1TBruYCOyBPJ4pgKV1JBt5i8"
          publishable-key="pk_live_51SM3XyCOyBPJ4pgKT7xdlP09DkuLBCaJTdKvYLZu81h7Tc9RbTax4VYrHwSkw26JtVCxm27FPMMbLjpKwbzciCUE00CP14cJmR"
        />
      )}
    </div>
  );
}

// ─── WHITE LABEL CTA ──────────────────────────────────────────────────────────

function WhiteLabelCTA() {
  return (
    <section className="py-24" style={{ background: 'linear-gradient(135deg, rgba(139,92,246,.1) 0%, rgba(99,102,241,.05) 100%)', borderTop: '1px solid rgba(139,92,246,.15)' }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">

          {/* Left — copy */}
          <div>
            <div className="inline-block mb-5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase" style={{ background: 'rgba(139,92,246,.1)', border: '1px solid rgba(139,92,246,.2)', color: '#c4b5fd' }}>For Agencies</div>
            <h2 className="font-black mb-5" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: '#fff', letterSpacing: '-.03em', lineHeight: 1.1 }}>
              Want to white label VERA for your agency?
            </h2>
            <p className="mb-4 leading-relaxed" style={{ color: 'rgba(255,255,255,.55)', fontSize: '.95rem' }}>
              We work with agencies that want to put their own brand on VERA and offer it as part of their service stack. Custom domain, your logo, your clients.
            </p>
            <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,.55)', fontSize: '.95rem' }}>
              Hop on a call and we'll walk you through how it works. Takes 20 minutes.
            </p>
          </div>

          {/* Right — Calendly embed */}
          <div className="rounded-2xl overflow-hidden w-full" style={{ border: '1px solid rgba(139,92,246,.25)' }}>
            <CalendlyEmbed url="https://calendly.com/amanuel-localboostnetworking/vera" height={650} />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="py-12 border-t" style={{ background: '#05050a', borderColor: 'rgba(255,255,255,.06)' }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div style={{ fontSize: '1rem', fontWeight: 800, letterSpacing: '-.03em', color: '#f0f0f5', lineHeight: 1 }}>
            VE<span style={{ color: '#c4b5fd' }}>RA</span>
          </div>
          <div style={{ fontSize: '.6rem', color: 'rgba(255,255,255,.2)', letterSpacing: '.12em', textTransform: 'uppercase', marginTop: '2px' }}>Agency OS</div>
        </div>
        <div className="flex items-center gap-6">
          {[['Privacy', 'https://localboostnetworking.com/privacy'], ['Terms', 'https://localboostnetworking.com/terms'], ['Contact', 'mailto:contact@localboostnetworking.com']].map(([label, href]) => (
            <a key={label} href={href} className="text-xs transition-colors duration-150" style={{ color: 'rgba(255,255,255,.3)', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,.7)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,.3)')}
            >{label}</a>
          ))}
        </div>
        <p className="text-xs" style={{ color: 'rgba(255,255,255,.2)' }}>© {new Date().getFullYear()} Local Boost Networking LLC</p>
      </div>
    </footer>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function Vera() {
  useEffect(() => {
    document.title = 'VERA — Agency OS';
    const link = document.querySelector<HTMLLinkElement>("link[rel~='icon']") || document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/svg+xml';
    link.href = '/favicon-vera.svg';
    document.head.appendChild(link);
  }, []);

  return (
    <div style={{ background: '#05050a', minHeight: '100vh' }}>
      <LaunchBanner />
      <Navbar />
      <Hero />
      <IntegrationBar />
      <Features />
      <HowItWorks />
      <Stats />
      <DashboardPreview />
      <Pricing />
      <WhiteLabelCTA />
      <Footer />
    </div>
  );
}

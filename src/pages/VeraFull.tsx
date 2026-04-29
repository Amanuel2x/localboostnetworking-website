import { useEffect, useRef, useState } from 'react';
import ShaderBackground from '../components/ui/shader-background';
import { FeatureCard } from '../components/ui/FeatureCard';
import { MetricsBlock } from '../components/ui/MetricsBlock';
import { GooeyText } from '../components/ui/GooeyText';
import { CalendlyEmbed } from '../components/ui/CalendlyEmbed';
import '../index.css';


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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [paused, setPaused] = useState(false);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };

  const togglePause = () => {
    const v = videoRef.current;
    if (!v) return;
    if (paused) {
      v.play();
      setPaused(false);
    } else {
      v.pause();
      v.currentTime = 30;
      setPaused(true);
    }
  };

  const goFullscreen = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.requestFullscreen) v.requestFullscreen();
    else if ((v as any).webkitRequestFullscreen) (v as any).webkitRequestFullscreen();
  };

  return (
    <section style={{ background: 'transparent', paddingTop: '100px', paddingBottom: '80px', overflow: 'hidden', position: 'relative' }}>


      <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">

        {/* Title */}
        <h1 className="font-black mb-14" style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.5rem)', letterSpacing: '-.03em', lineHeight: 1.08, color: '#fff' }}>
          The platform your agency
          <div style={{ height: 'clamp(3rem, 6.5vw, 5.5rem)', position: 'relative', marginTop: '4px' }}>
            <GooeyText
              texts={["can't work without.", 'runs on.', 'was built for.']}
              morphTime={0.9}
              cooldownTime={1.5}
              className="w-full h-full"
              style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.5rem)', fontWeight: 900, letterSpacing: '-.03em', color: '#c4b5fd' }}
            />
          </div>
        </h1>

        {/* Mockup frame with autoplay video */}
        <div className="w-full relative mb-14" style={{ maxWidth: '720px' }}>
          {/* Glow behind mockup */}
          <div style={{ position: 'absolute', bottom: '-60px', left: '50%', transform: 'translateX(-50%)', width: '80%', height: '120px', background: 'radial-gradient(ellipse at center, rgba(139,92,246,.35) 0%, transparent 70%)', pointerEvents: 'none', filter: 'blur(20px)' }} />

          {/* Browser chrome frame */}
          <div className="relative rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(139,92,246,.25)', boxShadow: '0 0 0 1px rgba(255,255,255,.04), 0 40px 80px rgba(0,0,0,.7), 0 0 80px rgba(139,92,246,.12)', background: '#0d0b1a' }}>
            {/* Chrome top bar */}
            <div className="flex items-center gap-2 px-4" style={{ height: 36, background: 'rgba(255,255,255,.04)', borderBottom: '1px solid rgba(255,255,255,.06)' }}>
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'rgba(255,255,255,.12)', display: 'inline-block' }} />
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'rgba(255,255,255,.12)', display: 'inline-block' }} />
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'rgba(255,255,255,.12)', display: 'inline-block' }} />
              <div className="mx-auto flex items-center gap-2 px-3 py-0.5 rounded" style={{ background: 'rgba(255,255,255,.05)', fontSize: '.65rem', color: 'rgba(255,255,255,.3)', letterSpacing: '.04em' }}>
                app.vera.localboostnetworking.com
              </div>
            </div>

            {/* Video */}
            <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
              <video
                ref={videoRef}
                src="/vera-intro.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                style={{ filter: 'brightness(0.8)' }}
              />

              {/* Control bar */}
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-3 py-2" style={{ background: 'linear-gradient(to top, rgba(0,0,0,.7), transparent)', backdropFilter: 'blur(4px)' }}>
                {/* Play/Pause */}
                <button onClick={togglePause} className="flex items-center justify-center rounded-full transition-all duration-150 hover:scale-110" style={{ width: 36, height: 36, background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.15)', cursor: 'pointer', color: '#fff' }} aria-label={paused ? 'Play' : 'Pause'}>
                  {paused ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                  )}
                </button>

                {/* Right controls */}
                <div className="flex items-center gap-2">
                  {/* Mute */}
                  <button onClick={toggleMute} className="flex items-center justify-center rounded-full transition-all duration-150 hover:scale-110" style={{ width: 36, height: 36, background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.15)', cursor: 'pointer', color: '#fff' }} aria-label={muted ? 'Unmute' : 'Mute'}>
                    {muted ? (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 12A4.5 4.5 0 0 0 14 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06A8.99 8.99 0 0 0 17.73 19L19 20.27 20.27 19 5.27 4 4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
                    )}
                  </button>
                  {/* Fullscreen */}
                  <button onClick={goFullscreen} className="flex items-center justify-center rounded-full transition-all duration-150 hover:scale-110" style={{ width: 36, height: 36, background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.15)', cursor: 'pointer', color: '#fff' }} aria-label="Fullscreen">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="mb-10 max-w-xl leading-relaxed text-center" style={{ fontSize: 'clamp(.95rem, 1.8vw, 1.15rem)', color: 'rgba(255,255,255,.55)' }}>
          VERA manages your campaigns, tracks every lead, and delivers AI-powered reports for every client. Built for agencies that run on speed.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a href="#pricing" className="inline-flex items-center justify-center font-semibold px-7 py-3.5 rounded-full text-sm transition-all duration-200" style={{ background: '#8b5cf6', color: '#fff', textDecoration: 'none', boxShadow: '0 0 32px rgba(139,92,246,.4)' }}
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
    </section>
  );
}

// ─── INTEGRATION MARQUEE ─────────────────────────────────────────────────────

function IntegrationBar() {
  const integrations = [
    { name: 'Meta Ads',         img: '/integration-meta.jpg' },
    { name: 'Google Ads',       img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/120px-Google_%22G%22_logo.svg.png' },
    { name: 'GoHighLevel',      img: '/integration-ghl.jpg' },
    { name: 'Stripe',           img: '/integration-stripe.png' },
    { name: 'Fathom AI',        img: '/integration-fathom.png' },
    { name: 'Calendly',         img: '/integration-calendly.png' },
    { name: 'Instagram',        img: 'https://cdn-icons-png.flaticon.com/512/174/174855.png' },
    { name: 'YouTube',          img: 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png' },
    { name: 'Zapier',           img: '/integration-zapier.png' },
    { name: 'Slack',            img: 'https://cdn-icons-png.flaticon.com/512/2111/2111615.png' },
    { name: 'Google Analytics', img: 'https://cdn-icons-png.flaticon.com/512/2702/2702602.png' },
    { name: 'WhatsApp',         img: 'https://cdn-icons-png.flaticon.com/512/733/733585.png' },
  ];

  // Duplicate for seamless loop
  const items = [...integrations, ...integrations];

  return (
    <section style={{ padding: '72px 0', borderTop: '1px solid rgba(255,255,255,.06)', borderBottom: '1px solid rgba(255,255,255,.06)', overflow: 'hidden' }}>

      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase" style={{ background: 'rgba(139,92,246,.1)', border: '1px solid rgba(139,92,246,.2)', color: '#c4b5fd' }}>Integrations</div>
        <h2 className="font-black" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: '#f0f0f5', letterSpacing: '-.03em' }}>
          Your whole stack, connected.
        </h2>
        <p style={{ color: 'rgba(255,255,255,.4)', fontSize: '.9rem', marginTop: '10px' }}>
          VERA plugs into the tools agencies already run — live data, no manual updates.
        </p>
      </div>

      {/* Marquee track */}
      <div style={{ position: 'relative' }}>
        {/* Fade edges */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(to right, #05050a, transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(to left, #05050a, transparent)', zIndex: 2, pointerEvents: 'none' }} />

        <div style={{ display: 'flex', animation: 'marquee 28s linear infinite' }}>
          {items.map(({ name, img }, i) => (
            <div
              key={`${name}-${i}`}
              title={name}
              style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', padding: '0 36px' }}
            >
              <div style={{ width: 64, height: 64, borderRadius: '16px', background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px' }}>
                <img src={img} alt={name} style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'brightness(0.9)' }} />
              </div>
              <span style={{ fontSize: '.65rem', fontWeight: 600, color: 'rgba(255,255,255,.3)', letterSpacing: '.06em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{name}</span>
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
    <div style={{ background: '#05050a', minHeight: '100vh', position: 'relative', isolation: 'isolate' }}>
      <ShaderBackground />
      {/* Dark overlay to dim shader */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, background: 'rgba(5,5,10,0.68)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
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
    </div>
  );
}

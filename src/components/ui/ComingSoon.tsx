import { useEffect, useState } from 'react';

const LAUNCH_DATE = new Date('2026-04-20T09:00:00-07:00');

function getTimeLeft() {
  const diff = LAUNCH_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

function Pad({ value, label }: { value: number; label: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', minWidth: '64px' }}>
      <div
        style={{
          fontSize: 'clamp(2rem, 5vw, 3.2rem)',
          fontWeight: 800,
          letterSpacing: '-.03em',
          color: '#f0f0f5',
          fontVariantNumeric: 'tabular-nums',
          lineHeight: 1,
        }}
      >
        {String(value).padStart(2, '0')}
      </div>
      <div style={{ fontSize: '.55rem', fontWeight: 600, letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(240,240,245,.3)' }}>
        {label}
      </div>
    </div>
  );
}

export function ComingSoon() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#030712',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Outfit', sans-serif",
        padding: '32px 24px',
        textAlign: 'center',
      }}
    >
      {/* Subtle radial glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 70% 50% at 50% 40%, rgba(26,79,200,.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Logo */}
      <img
        src="/lbn-logo.png"
        alt="Local Boost Networking"
        style={{ height: '72px', width: 'auto', marginBottom: '48px', position: 'relative' }}
      />

      {/* Badge */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          fontFamily: 'monospace',
          fontSize: '.6rem',
          fontWeight: 600,
          letterSpacing: '.22em',
          textTransform: 'uppercase',
          color: '#8b5cf6',
          marginBottom: '24px',
          position: 'relative',
        }}
      >
        <span
          style={{
            width: 7,
            height: 7,
            borderRadius: '50%',
            background: '#1a4fc8',
            boxShadow: '0 0 10px rgba(26,79,200,.6)',
            display: 'inline-block',
            animation: 'pulse 2s infinite',
          }}
        />
        Launching Soon
      </div>

      {/* Headline */}
      <h1
        style={{
          fontSize: 'clamp(2rem, 5vw, 3.8rem)',
          fontWeight: 800,
          letterSpacing: '-.03em',
          lineHeight: 1.08,
          color: '#f0f0f5',
          maxWidth: '640px',
          marginBottom: '16px',
          position: 'relative',
        }}
      >
        Something big is coming.
      </h1>

      <p
        style={{
          fontSize: 'clamp(.85rem, 1.5vw, 1rem)',
          color: 'rgba(240,240,245,.45)',
          maxWidth: '420px',
          lineHeight: 1.75,
          marginBottom: '52px',
          position: 'relative',
        }}
      >
        Local Boost Networking is gearing up for launch. More leads, less work — for home service businesses across the US.
      </p>

      {/* Countdown */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(16px, 4vw, 40px)',
          marginBottom: '56px',
          position: 'relative',
        }}
      >
        <Pad value={time.days} label="Days" />
        <div style={{ fontSize: '2rem', fontWeight: 300, color: 'rgba(240,240,245,.15)', lineHeight: 1, marginBottom: '18px' }}>:</div>
        <Pad value={time.hours} label="Hours" />
        <div style={{ fontSize: '2rem', fontWeight: 300, color: 'rgba(240,240,245,.15)', lineHeight: 1, marginBottom: '18px' }}>:</div>
        <Pad value={time.minutes} label="Minutes" />
        <div style={{ fontSize: '2rem', fontWeight: 300, color: 'rgba(240,240,245,.15)', lineHeight: 1, marginBottom: '18px' }}>:</div>
        <Pad value={time.seconds} label="Seconds" />
      </div>

      {/* CTA */}
      <a
        href="https://calendly.com/amanuel-localboostnetworking/marketing"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontSize: '.85rem',
          fontWeight: 600,
          letterSpacing: '.02em',
          background: '#1a4fc8',
          color: '#fff',
          padding: '14px 36px',
          borderRadius: '8px',
          textDecoration: 'none',
          boxShadow: '0 0 28px rgba(26,79,200,.35)',
          position: 'relative',
          transition: 'all .25s',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLAnchorElement).style.background = '#1640a8';
          (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)';
          (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 40px rgba(26,79,200,.5)';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLAnchorElement).style.background = '#1a4fc8';
          (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
          (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 28px rgba(26,79,200,.35)';
        }}
      >
        Book a Call Before We Launch
      </a>

      {/* Footer note */}
      <p style={{ fontSize: '.65rem', color: 'rgba(240,240,245,.18)', marginTop: '40px', letterSpacing: '.04em', position: 'relative' }}>
        &copy; 2026 Local Boost Networking LLC
      </p>

      {/* Pulse keyframe */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 10px rgba(26,79,200,.6); }
          50% { opacity: .6; box-shadow: 0 0 20px rgba(26,79,200,.9); }
        }
      `}</style>
    </div>
  );
}

import React from 'react';

// Subtle grid pattern overlay — same style as the box.txt component
function GridPattern({ id }: { id: string }) {
  const squares = genRandomPattern();
  const w = 20, h = 20;
  return (
    <svg aria-hidden="true" className="absolute inset-0 h-full w-full" style={{ mixBlendMode: 'overlay' }}>
      <defs>
        <pattern id={id} width={w} height={h} patternUnits="userSpaceOnUse" x="-12" y="4">
          <path d={`M.5 ${h}V.5H${w}`} fill="none" stroke="currentColor" strokeOpacity="0.25" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
      <svg x="-12" y="4" className="overflow-visible">
        {squares.map(([sx, sy], i) => (
          <rect key={i} strokeWidth="0" width={w + 1} height={h + 1} x={sx * w} y={sy * h} fill="currentColor" fillOpacity="0.05" />
        ))}
      </svg>
    </svg>
  );
}

function genRandomPattern(length = 5): number[][] {
  return Array.from({ length }, () => [
    Math.floor(Math.random() * 4) + 7,
    Math.floor(Math.random() * 6) + 1,
  ]);
}

interface FeatureCardProps {
  icon?: string;
  title: string;
  description: string;
  highlight?: boolean;
  stat?: string;
  style?: React.CSSProperties;
  className?: string;
}

export function FeatureCard({ icon, title, description, highlight, stat, style, className }: FeatureCardProps) {
  const id = React.useId();

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: '28px 24px',
        borderRadius: '14px',
        background: highlight ? 'rgba(139,92,246,.06)' : 'rgba(255,255,255,.025)',
        border: `1px solid ${highlight ? 'rgba(139,92,246,.25)' : 'rgba(255,255,255,.07)'}`,
        transition: 'border-color .2s, background .2s',
        cursor: 'default',
        ...style,
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = 'rgba(139,92,246,.4)';
        el.style.background = 'rgba(139,92,246,.08)';
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = highlight ? 'rgba(139,92,246,.25)' : 'rgba(255,255,255,.07)';
        el.style.background = highlight ? 'rgba(139,92,246,.06)' : 'rgba(255,255,255,.025)';
      }}
    >
      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full"
        style={{ maskImage: 'linear-gradient(white, transparent)', WebkitMaskImage: 'linear-gradient(white, transparent)' }}
      >
        <div style={{ position: 'absolute', inset: 0, color: '#8b5cf6' }}>
          <GridPattern id={id} />
        </div>
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {icon && <div style={{ fontSize: '1.5rem', marginBottom: '12px' }}>{icon}</div>}
        {stat && <div style={{ fontSize: '1.7rem', fontWeight: 800, color: '#8b5cf6', letterSpacing: '-.03em', marginBottom: '4px', display: 'block' }}>{stat}</div>}
        <h3 style={{ fontSize: '.92rem', fontWeight: 600, color: '#f0f0f5', marginBottom: '8px', lineHeight: 1.35 }}>{title}</h3>
        <p style={{ fontSize: '.8rem', color: 'rgba(255,255,255,.4)', lineHeight: 1.65, margin: 0 }}>{description}</p>
      </div>
    </div>
  );
}

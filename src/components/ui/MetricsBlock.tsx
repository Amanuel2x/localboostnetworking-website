import { motion, type Variants } from 'framer-motion';
import { ArrowUpRight, Zap } from 'lucide-react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

interface Metric {
  label: string;
  value: string;
  delta: string;
  description: string;
}

interface MetricsBlockProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  metrics: Metric[];
}

export function MetricsBlock({ badge, title, subtitle, metrics }: MetricsBlockProps) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', padding: '80px 28px' }}>
      {/* Ambient glow blobs */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, width: 380, height: 380, borderRadius: '50%', background: 'rgba(139,92,246,.04)', filter: 'blur(120px)' }} />
        <div style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', width: 420, height: 420, borderRadius: '50%', background: 'rgba(99,102,241,.03)', filter: 'blur(140px)' }} />
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        {(badge || title || subtitle) && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            style={{ textAlign: 'center', marginBottom: '48px', maxWidth: '700px', margin: '0 auto 48px' }}
          >
            {badge && (
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px', borderRadius: '100px', border: '1px solid rgba(255,255,255,.1)', background: 'rgba(255,255,255,.04)', padding: '6px 16px', fontSize: '.65rem', letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,.5)', backdropFilter: 'blur(8px)' }}>
                <Zap size={12} />
                {badge}
              </div>
            )}
            {title && <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 700, letterSpacing: '-.02em', color: '#f0f0f5', marginBottom: subtitle ? '16px' : 0 }}>{title}</h2>}
            {subtitle && <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,.45)', lineHeight: 1.7 }}>{subtitle}</p>}
          </motion.div>
        )}

        {/* Metric cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.08 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}
          className="md:grid-cols-2"
        >
          {metrics.map(m => (
            <motion.div key={m.label} variants={fadeUp}>
              <div
                className="group"
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '24px',
                  border: '1px solid rgba(255,255,255,.08)',
                  background: 'rgba(255,255,255,.03)',
                  padding: '32px',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  transition: 'transform .3s',
                }}
                onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'}
                onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'}
              >
                {/* Inner glow gradient */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(139,92,246,.04) 0%, transparent 60%)', pointerEvents: 'none' }} />

                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <span style={{ fontSize: '.62rem', fontWeight: 600, letterSpacing: '.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,.4)' }}>{m.label}</span>
                    <ArrowUpRight size={16} color="rgba(255,255,255,.25)" style={{ transition: 'transform .3s' }} />
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: '12px', marginBottom: '16px' }}>
                    <span style={{ fontSize: '3.2rem', fontWeight: 600, letterSpacing: '-.04em', color: '#f0f0f5', lineHeight: 1 }}>{m.value}</span>
                    <span style={{ borderRadius: '100px', border: '1px solid rgba(139,92,246,.3)', background: 'rgba(139,92,246,.1)', padding: '4px 12px', fontSize: '.65rem', fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', color: '#c4b5fd', backdropFilter: 'blur(8px)' }}>{m.delta}</span>
                  </div>

                  <p style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.45)', lineHeight: 1.65, margin: 0 }}>{m.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

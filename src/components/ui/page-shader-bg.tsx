import { MeshGradient } from '@paper-design/shaders-react';
import type { ReactNode } from 'react';

export function PageShaderBg({ children }: { children: ReactNode }) {
  return (
    <div style={{ position: 'relative', isolation: 'isolate' }}>
      {/* Shader layer — tiles behind every section */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: -1,
          overflow: 'hidden',
          background: '#070d1d',
        }}
      >
        <MeshGradient
          style={{ width: '100%', height: '100%', opacity: 0.55 }}
          colors={['#0a1226', '#101c38', '#1c2c52', '#0a1226']}
          speed={0.2}
        />
        {/* Soft vignette to keep edges dark and content readable */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 0%, rgba(7,13,29,.65) 70%, rgba(7,13,29,.92) 100%)',
            pointerEvents: 'none',
          }}
        />
      </div>
      {children}
    </div>
  );
}

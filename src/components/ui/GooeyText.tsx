import React, { useRef, useEffect } from 'react';

interface GooeyTextProps {
  texts: string[];
  morphTime?: number;
  cooldownTime?: number;
  className?: string;
  textClassName?: string;
  style?: React.CSSProperties;
}

export function GooeyText({
  texts,
  morphTime = 1,
  cooldownTime = 0.5,
  className = '',
  textClassName = '',
  style,
}: GooeyTextProps) {
  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let textIndex = texts.length - 1;
    let time = new Date();
    let morph = 0;
    let cooldown = cooldownTime;
    let animId: number;

    const setMorph = (fraction: number) => {
      if (!text1Ref.current || !text2Ref.current) return;
      text2Ref.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      text2Ref.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
      const inv = 1 - fraction;
      text1Ref.current.style.filter = `blur(${Math.min(8 / inv - 8, 100)}px)`;
      text1Ref.current.style.opacity = `${Math.pow(inv, 0.4) * 100}%`;
    };

    const doCooldown = () => {
      morph = 0;
      if (!text1Ref.current || !text2Ref.current) return;
      text2Ref.current.style.filter = '';
      text2Ref.current.style.opacity = '100%';
      text1Ref.current.style.filter = '';
      text1Ref.current.style.opacity = '0%';
    };

    const doMorph = () => {
      morph -= cooldown;
      cooldown = 0;
      let fraction = morph / morphTime;
      if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
      }
      setMorph(fraction);
    };

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const newTime = new Date();
      const shouldIncrement = cooldown > 0;
      const dt = (newTime.getTime() - time.getTime()) / 1000;
      time = newTime;
      cooldown -= dt;

      if (cooldown <= 0) {
        if (shouldIncrement) {
          textIndex = (textIndex + 1) % texts.length;
          if (text1Ref.current) text1Ref.current.textContent = texts[textIndex % texts.length];
          if (text2Ref.current) text2Ref.current.textContent = texts[(textIndex + 1) % texts.length];
        }
        doMorph();
      } else {
        doCooldown();
      }
    };

    if (text1Ref.current) text1Ref.current.textContent = texts[textIndex % texts.length];
    if (text2Ref.current) text2Ref.current.textContent = texts[(textIndex + 1) % texts.length];

    animate();
    return () => cancelAnimationFrame(animId);
  }, [texts, morphTime, cooldownTime]);

  return (
    <div className={className} style={{ position: 'relative', width: '100%', height: '100%' }}>
      <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
        <defs>
          <filter id="gooey-threshold">
            <feColorMatrix in="SourceGraphic" type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 255 -140" />
          </filter>
        </defs>
      </svg>
      <div style={{ position: 'relative', width: '100%', height: '100%', filter: 'url(#gooey-threshold)' }}>
        <span ref={text1Ref} className={textClassName} style={{ position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%)', display: 'block', width: '100%', textAlign: 'left', userSelect: 'none', ...style }} />
        <span ref={text2Ref} className={textClassName} style={{ position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%)', display: 'block', width: '100%', textAlign: 'left', userSelect: 'none', ...style }} />
      </div>
    </div>
  );
}

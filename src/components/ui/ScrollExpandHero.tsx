import { useEffect, useRef, useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ScrollExpandHeroProps {
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  scrollToExpand?: string;
  children?: ReactNode;
}

export default function ScrollExpandHero({
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  scrollToExpand = 'Scroll to explore',
  children,
}: ScrollExpandHeroProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Sync muted state to video element
  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = muted;
  }, [muted]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const delta = e.deltaY * 0.0009;
        const next = Math.min(Math.max(scrollProgress + delta, 0), 1);
        setScrollProgress(next);
        if (next >= 1) { setMediaFullyExpanded(true); setShowContent(true); }
        else if (next < 0.75) setShowContent(false);
      }
    };

    const handleTouchStart = (e: TouchEvent) => setTouchStartY(e.touches[0].clientY);

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartY) return;
      const deltaY = touchStartY - e.touches[0].clientY;
      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const factor = deltaY < 0 ? 0.008 : 0.005;
        const next = Math.min(Math.max(scrollProgress + deltaY * factor, 0), 1);
        setScrollProgress(next);
        if (next >= 1) { setMediaFullyExpanded(true); setShowContent(true); }
        else if (next < 0.75) setShowContent(false);
        setTouchStartY(e.touches[0].clientY);
      }
    };

    const handleScroll = () => { if (!mediaFullyExpanded) window.scrollTo(0, 0); };

    window.addEventListener('wheel', handleWheel as EventListener, { passive: false });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchstart', handleTouchStart as EventListener, { passive: false });
    window.addEventListener('touchmove', handleTouchMove as EventListener, { passive: false });
    window.addEventListener('touchend', () => setTouchStartY(0));

    return () => {
      window.removeEventListener('wheel', handleWheel as EventListener);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart as EventListener);
      window.removeEventListener('touchmove', handleTouchMove as EventListener);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY]);

  // 9:16 portrait ratio — width drives height
  const videoWidth = 300 + scrollProgress * (isMobile ? 300 : 600);
  const videoHeight = videoWidth * (16 / 9);
  const textSlide = scrollProgress * (isMobile ? 180 : 150);

  const firstWord = title ? title.split(' ')[0] : '';
  const rest = title ? title.split(' ').slice(1).join(' ') : '';

  return (
    <div className="overflow-x-hidden">
      <section className="relative flex flex-col items-center justify-start min-h-[100dvh]">
        <div className="relative w-full flex flex-col items-center min-h-[100dvh]">

          {/* Background image — fades as video expands */}
          <motion.div
            className="absolute inset-0 z-0 h-full"
            animate={{ opacity: 1 - scrollProgress }}
            transition={{ duration: 0.1 }}
          >
            <img
              src={bgImageSrc}
              alt="Background"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
            />
            <div className="absolute inset-0" style={{ background: 'rgba(3,7,18,0.55)' }} />
          </motion.div>

          {/* Main content area */}
          <div className="container mx-auto flex flex-col items-center justify-start relative z-10">
            <div className="flex flex-col items-center justify-center w-full h-[100dvh] relative">

              {/* Expanding video — 9:16 portrait */}
              <div
                className="absolute z-0 top-1/2 left-1/2 rounded-2xl"
                style={{
                  transform: 'translate(-50%, -50%)',
                  width: `${videoWidth}px`,
                  height: `${videoHeight}px`,
                  maxWidth: '95vw',
                  maxHeight: '85vh',
                  boxShadow: '0 0 60px rgba(0,0,0,0.5)',
                  transition: 'none',
                }}
              >
                <div className="relative w-full h-full">
                  <video
                    ref={videoRef}
                    src={mediaSrc}
                    poster={posterSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="w-full h-full rounded-2xl"
                    style={{ objectFit: 'cover' }}
                    disablePictureInPicture
                  />
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    style={{ background: 'rgba(0,0,0,0.3)', pointerEvents: 'none' }}
                    animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                    transition={{ duration: 0.2 }}
                  />

                  {/* Mute / unmute button */}
                  <button
                    onClick={() => setMuted(m => !m)}
                    style={{
                      position: 'absolute',
                      bottom: '14px',
                      right: '14px',
                      zIndex: 10,
                      background: 'rgba(0,0,0,0.55)',
                      border: '1px solid rgba(255,255,255,.2)',
                      borderRadius: '50%',
                      width: '36px',
                      height: '36px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      backdropFilter: 'blur(8px)',
                      transition: 'background .2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.8)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.55)')}
                    title={muted ? 'Unmute' : 'Mute'}
                  >
                    {muted ? (
                      // Muted icon
                      <svg width="16" height="16" fill="none" stroke="white" strokeWidth="1.8" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707A1 1 0 0112 5v14a1 1 0 01-1.707.707L5.586 15z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                      </svg>
                    ) : (
                      // Unmuted icon
                      <svg width="16" height="16" fill="none" stroke="white" strokeWidth="1.8" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707A1 1 0 0112 5v14a1 1 0 01-1.707.707L5.586 15z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728" />
                      </svg>
                    )}
                  </button>
                </div>

                {/* Scroll hint */}
                <div className="flex flex-col items-center text-center relative z-10 mt-4">
                  {scrollToExpand && (
                    <p
                      className="text-sm font-medium"
                      style={{ color: 'rgba(255,255,255,.5)', transform: `translateX(${textSlide}vw)`, letterSpacing: '.08em' }}
                    >
                      {scrollToExpand}
                    </p>
                  )}
                </div>
              </div>

              {/* Title text — splits and slides apart */}
              {title && (
                <div className="flex flex-col items-center justify-center text-center gap-3 w-full relative z-10">
                  <h1
                    className="font-black"
                    style={{
                      fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
                      color: '#fff',
                      letterSpacing: '-.03em',
                      lineHeight: 1.05,
                      transform: `translateX(-${textSlide}vw)`,
                      textShadow: '0 2px 40px rgba(0,0,0,0.6)',
                    }}
                  >
                    {firstWord}
                  </h1>
                  <h1
                    className="font-black"
                    style={{
                      fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
                      color: '#f0f0f5',
                      letterSpacing: '-.03em',
                      lineHeight: 1.05,
                      transform: `translateX(${textSlide}vw)`,
                      textShadow: '0 2px 40px rgba(0,0,0,0.6)',
                    }}
                  >
                    {rest}
                  </h1>
                </div>
              )}
            </div>

            {/* Content revealed after full expansion */}
            <motion.div
              className="w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.7 }}
            >
              {children}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

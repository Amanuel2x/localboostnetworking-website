import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { Phone, DollarSign, Hammer, Wrench, TrendingUp } from 'lucide-react';

type Option = {
  title: string;
  description: string;
  image: string;
  icon: ReactNode;
};

const options: Option[] = [
  {
    title: 'Luxury Locksmith',
    description: 'Atlanta, GA — More calls in week 1 than a typical month.',
    image: '/case-studies/case-1.png',
    icon: <Phone size={20} className="text-white" />,
  },
  {
    title: 'Peak Roofers',
    description: 'Denver, CO — $30k in their first month.',
    image: '/case-studies/case-2.png',
    icon: <DollarSign size={20} className="text-white" />,
  },
  {
    title: 'Gerson · Contracting',
    description: 'Watsonville, CA — $100k across painting, remodeling, handyman.',
    image: '/case-studies/case-3.png',
    icon: <Hammer size={20} className="text-white" />,
  },
  {
    title: 'Home Service Operator',
    description: 'Multi-trade pipeline — qualified inbound calls only.',
    image: '/case-studies/case-4.png',
    icon: <Wrench size={20} className="text-white" />,
  },
  {
    title: 'Scaling Contractor',
    description: 'Steady month-over-month growth on autopilot.',
    image: '/case-studies/case-5.png',
    icon: <TrendingUp size={20} className="text-white" />,
  },
];

const InteractiveSelector = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState<number[]>([]);

  const handleOptionClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    options.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions(prev => [...prev, i]);
      }, 180 * i);
      timers.push(timer);
    });
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center font-sans text-white py-16 md:py-24 px-4" style={{ background: '#222' }}>
      <div className="w-full max-w-3xl px-2 mb-8 text-center">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'monospace', fontSize: '.65rem', fontWeight: 500, letterSpacing: '.2em', textTransform: 'uppercase', color: '#7aa1ff', marginBottom: '20px' }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#1a4fc8', boxShadow: '0 0 12px rgba(26,79,200,.5)', display: 'inline-block' }} />
          Case Studies
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight" style={{ color: '#f0f0f5' }}>Real numbers from real clients.</h2>
        <p className="mt-3 text-base md:text-lg max-w-xl mx-auto" style={{ color: 'rgba(240,240,245,.6)' }}>
          Click any case study to expand it. Tracked, verified, reported every week.
        </p>
      </div>

      <div className="options flex w-full max-w-[960px] h-[360px] md:h-[440px] mx-auto items-stretch overflow-hidden relative">
        {options.map((option, index) => (
          <div
            key={index}
            className={`option relative flex flex-col justify-end overflow-hidden transition-all duration-700 ease-in-out ${activeIndex === index ? 'active' : ''}`}
            style={{
              backgroundImage: `url('${option.image}')`,
              backgroundSize: activeIndex === index ? 'cover' : 'cover',
              backgroundPosition: 'center',
              backfaceVisibility: 'hidden',
              opacity: animatedOptions.includes(index) ? 1 : 0,
              transform: animatedOptions.includes(index) ? 'translateX(0)' : 'translateX(-60px)',
              minWidth: '60px',
              minHeight: '100px',
              borderWidth: '2px',
              borderStyle: 'solid',
              borderColor: activeIndex === index ? '#fff' : '#292929',
              cursor: 'pointer',
              backgroundColor: '#18181b',
              boxShadow: activeIndex === index
                ? '0 20px 60px rgba(0,0,0,0.50)'
                : '0 10px 30px rgba(0,0,0,0.30)',
              flex: activeIndex === index ? '7 1 0%' : '1 1 0%',
              zIndex: activeIndex === index ? 10 : 1,
              willChange: 'flex-grow, box-shadow, background-size, background-position',
            }}
            onClick={() => handleOptionClick(index)}
          >
            <div
              className="shadow absolute left-0 right-0 pointer-events-none transition-all duration-700 ease-in-out"
              style={{
                bottom: activeIndex === index ? '0' : '-40px',
                height: '120px',
                boxShadow: activeIndex === index
                  ? 'inset 0 -120px 120px -120px #000, inset 0 -120px 120px -80px #000'
                  : 'inset 0 -120px 0px -120px #000, inset 0 -120px 0px -80px #000',
              }}
            />

            <div className="label absolute left-0 right-0 bottom-5 flex items-center justify-start h-12 z-[2] pointer-events-none px-4 gap-3 w-full">
              <div className="icon min-w-[40px] max-w-[40px] h-[40px] flex items-center justify-center rounded-full flex-shrink-0 flex-grow-0 transition-all duration-200" style={{ background: 'rgba(32,32,32,0.85)', backdropFilter: 'blur(10px)', boxShadow: '0 1px 4px rgba(0,0,0,0.18)', border: '2px solid #444' }}>
                {option.icon}
              </div>
              <div className="info text-white whitespace-pre relative">
                <div
                  className="main font-bold text-base md:text-lg transition-all duration-700 ease-in-out"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)',
                  }}
                >
                  {option.title}
                </div>
                <div
                  className="sub text-xs md:text-sm transition-all duration-700 ease-in-out"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)',
                    color: 'rgba(240,240,245,.75)',
                  }}
                >
                  {option.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveSelector;

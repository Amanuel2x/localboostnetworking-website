import {
  HoverSlider,
  HoverSliderImage,
  TextStaggerHover,
} from '@/components/ui/animated-slideshow';

const SLIDES = [
  { id: 'cover', title: 'LOCAL BOOST', imageUrl: '/lbn-logo.png' },
  { id: 'roofing', title: 'ROOFING', imageUrl: '/case-studies/case-4.png' },
  { id: 'pool', title: 'POOL', imageUrl: '/case-studies/case-1.png' },
  { id: 'insulation', title: 'INSULATION', imageUrl: '/case-studies/case-2.png' },
  { id: 'water', title: 'WATER SYSTEMS', imageUrl: '/case-studies/case-3.png' },
  { id: 'solar', title: 'SOLAR', imageUrl: '/case-studies/case-5.png' },
];

export default function CaseStudies() {
  return (
    <section style={{ color: '#f0f0f5' }} className="py-12 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-7">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'monospace', fontSize: '.65rem', fontWeight: 500, letterSpacing: '.2em', textTransform: 'uppercase', color: '#7aa1ff', marginBottom: '24px' }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#1a4fc8', boxShadow: '0 0 12px rgba(26,79,200,.5)', display: 'inline-block' }} />
          Case Studies
        </div>
        <h2 className="max-w-2xl text-balance" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-.02em', color: '#f0f0f5', marginBottom: '12px' }}>
          Real campaigns. Real numbers.
        </h2>
        <p className="max-w-2xl text-balance" style={{ color: 'rgba(240,240,245,.55)', lineHeight: 1.8, fontSize: '.95rem' }}>
          Click any industry below. You will see the actual ad account, not a mockup. Spend, revenue, and ROAS straight from the platform.
        </p>

        <HoverSlider className="mt-8">
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-5 md:gap-12">
            {/* Industry list */}
            <div className="flex flex-col space-y-2 md:space-y-3 md:col-span-2">
              {SLIDES.slice(1).map((slide, index) => (
                <TextStaggerHover
                  key={slide.id}
                  index={index + 1}
                  className="cursor-pointer text-3xl md:text-5xl font-bold uppercase tracking-tighter"
                  text={slide.title}
                  style={{ color: '#f0f0f5' }}
                />
              ))}
            </div>

            {/* Image preview */}
            <div
              className="relative w-full overflow-hidden rounded-xl md:col-span-3"
              style={{
                background: '#040816',
                border: '1px solid rgba(255,255,255,.08)',
                aspectRatio: '16 / 9',
              }}
            >
              <div className="absolute inset-0 grid">
                {SLIDES.map((slide, index) => (
                  <HoverSliderImage
                    key={slide.id}
                    index={index}
                    imageUrl={slide.imageUrl}
                    src={slide.imageUrl}
                    alt={slide.title}
                    className="absolute inset-0 h-full w-full object-contain"
                    style={index === 0 ? { padding: '12%' } : undefined}
                    loading="eager"
                    decoding="async"
                  />
                ))}
              </div>
            </div>
          </div>
        </HoverSlider>
      </div>
    </section>
  );
}

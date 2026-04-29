import { Phone, MapPin, TrendingUp, Calendar, Hammer, DollarSign } from 'lucide-react';
import { TestimonialStack, type Testimonial } from './glass-testimonial-swiper';

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    initials: 'LL',
    name: 'Luxury Locksmith',
    role: 'Atlanta, GA',
    quote: "First week in we had more calls than we normally get in a month. Real buyers, not time wasters. The leads have been consistent ever since.",
    tags: [{ text: 'FEATURED', type: 'featured' }, { text: 'Locksmith', type: 'default' }],
    stats: [{ icon: Phone, text: 'High call volume' }, { icon: MapPin, text: 'Atlanta, GA' }],
    avatarGradient: 'linear-gradient(135deg, #1a4fc8, #4a7eff)',
  },
  {
    id: 2,
    initials: 'PR',
    name: 'Peak Roofers',
    role: 'Denver, CO',
    quote: "We hit $30k in our first month. I didn't believe it was going to work that fast but the inbound call volume was there from week two. Best decision I made for the business.",
    tags: [{ text: 'Roofing', type: 'default' }, { text: '$30k Month 1', type: 'featured' }],
    stats: [{ icon: DollarSign, text: '$30k first month' }, { icon: Calendar, text: 'Results week 2' }],
    avatarGradient: 'linear-gradient(135deg, #10b981, #059669)',
  },
  {
    id: 3,
    initials: 'GC',
    name: 'Gerson · Contracting',
    role: 'Watsonville, CA',
    quote: "Three months in and we're doing $100k across painting, remodeling, and handyman. The inbound call system handles all three trades and we just pick up the phone. That's it.",
    tags: [{ text: 'Multi-trade', type: 'default' }, { text: '$100k', type: 'featured' }],
    stats: [{ icon: Hammer, text: '3 trades' }, { icon: TrendingUp, text: '$100k in 3 mo' }],
    avatarGradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
  },
];

const TestimonialStackDemo = () => {
  return (
    <div className="relative w-full flex items-center justify-center px-4">
      <div
        className="absolute pointer-events-none"
        style={{
          inset: '-25% -10%',
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(26,79,200,.55) 0%, rgba(26,79,200,.28) 35%, rgba(26,79,200,.10) 60%, transparent 80%)',
          filter: 'blur(40px)',
        }}
      />
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <TestimonialStack testimonials={testimonialsData} />
      </div>
    </div>
  );
};

export default TestimonialStackDemo;

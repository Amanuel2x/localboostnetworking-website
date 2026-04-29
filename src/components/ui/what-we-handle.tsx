import { Card } from '@/components/ui/card';
import { Globe, Megaphone, PhoneCall, Star, MousePointerClick, Phone, Lock, Link2 } from 'lucide-react';

export default function WhatWeHandle() {
    return (
        <section>
            <div className="py-12 md:py-20">
                <div className="mx-auto w-full max-w-6xl px-7">
                    <div>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'monospace', fontSize: '.65rem', fontWeight: 500, letterSpacing: '.2em', textTransform: 'uppercase', color: '#1a4fc8', marginBottom: '24px' }}>
                            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#1a4fc8', boxShadow: '0 0 12px rgba(26,79,200,.5)', display: 'inline-block' }} />
                            What We Handle
                        </div>
                        <h2 className="max-w-2xl text-balance" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-.02em', color: '#f0f0f5', marginBottom: '20px' }}>
                            You answer the phone. We do the rest.
                        </h2>
                        <p className="max-w-2xl text-balance" style={{ color: 'rgba(240,240,245,.55)', lineHeight: 1.8, fontSize: '.95rem' }}>
                            We run lead generation for home service companies across the US. Google Ads, Meta, local SEO, CRM, and inbound call routing. Everything sits under one system so you stop juggling vendors.
                        </p>
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <Card className="overflow-hidden p-6" style={cardStyle}>
                            <Globe className="size-5" style={{ color: '#7aa1ff' }} />
                            <h3 className="mt-5 text-lg font-semibold" style={{ color: '#f0f0f5' }}>Website Design and Build</h3>
                            <p className="mt-3 text-sm text-balance" style={{ color: 'rgba(240,240,245,.55)' }}>A site built around your trade and your service area. Fast, set up to convert, and tuned for local search. We write the copy, ship the build, and keep it updated as your business grows.</p>

                            <WebsiteIllustration />
                        </Card>

                        <Card className="group overflow-hidden px-6 pt-6" style={cardStyle}>
                            <Megaphone className="size-5" style={{ color: '#7aa1ff' }} />
                            <h3 className="mt-5 text-lg font-semibold" style={{ color: '#f0f0f5' }}>Paid Ad Campaigns</h3>
                            <p className="mt-3 text-sm text-balance" style={{ color: 'rgba(240,240,245,.55)' }}>Google Search and Meta campaigns aimed at people ready to book. We test creative weekly, cut what is not working, and scale what is. You see every dollar in the dashboard.</p>

                            <AdCampaignIllustration />
                        </Card>
                        <Card className="group overflow-hidden px-6 pt-6" style={cardStyle}>
                            <PhoneCall className="size-5" style={{ color: '#7aa1ff' }} />
                            <h3 className="mt-5 text-lg font-semibold" style={{ color: '#f0f0f5' }}>Pay-Per-Call System</h3>
                            <p className="mt-3 text-sm text-balance" style={{ color: 'rgba(240,240,245,.55)' }}>Inbound calls routed through Ringba with full tracking. You only pay when a real buyer calls. No clicks, no junk leads, no chasing.</p>

                            <CallSystemIllustration />
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}

const cardStyle: React.CSSProperties = {
    background: 'rgba(255,255,255,.02)',
    border: '1px solid rgba(255,255,255,.06)',
    color: '#f0f0f5',
};

const innerCardStyle: React.CSSProperties = {
    background: 'rgba(255,255,255,.03)',
    border: '1px solid rgba(255,255,255,.06)',
    color: '#f0f0f5',
};

const WebsiteIllustration = () => {
    return (
        <Card aria-hidden className="mt-9 overflow-hidden p-0" style={innerCardStyle}>
            {/* Browser chrome with URL bar */}
            <div className="flex items-center gap-2 px-3 py-2" style={{ borderBottom: '1px solid rgba(255,255,255,.06)', background: 'rgba(255,255,255,.02)' }}>
                <div className="flex gap-1">
                    <span className="block size-2 rounded-full" style={{ background: '#ff5f57' }} />
                    <span className="block size-2 rounded-full" style={{ background: '#febc2e' }} />
                    <span className="block size-2 rounded-full" style={{ background: '#28c840' }} />
                </div>
                <div className="ml-2 flex flex-1 items-center gap-1.5 rounded px-2 py-0.5" style={{ background: 'rgba(255,255,255,.05)' }}>
                    <Lock className="size-2.5" style={{ color: 'rgba(240,240,245,.45)' }} />
                    <span className="text-[10px]" style={{ color: 'rgba(240,240,245,.65)' }}>yourbusiness.com</span>
                </div>
            </div>

            {/* Top nav */}
            <div className="flex items-center justify-between px-3 py-2" style={{ background: 'rgba(255,255,255,.015)' }}>
                <div className="flex items-center gap-1.5">
                    <div className="size-3 rounded-sm" style={{ background: '#1a4fc8' }} />
                    <span className="text-[10px] font-bold" style={{ color: '#f0f0f5' }}>Your Business</span>
                </div>
                <div className="flex gap-2">
                    <span className="text-[9px]" style={{ color: 'rgba(240,240,245,.55)' }}>Services</span>
                    <span className="text-[9px]" style={{ color: 'rgba(240,240,245,.55)' }}>About</span>
                    <span className="text-[9px]" style={{ color: 'rgba(240,240,245,.55)' }}>Reviews</span>
                    <span className="text-[9px]" style={{ color: 'rgba(240,240,245,.55)' }}>Contact</span>
                </div>
            </div>

            {/* Hero content */}
            <div className="px-3 py-2.5">
                <div className="mb-1.5 flex items-center gap-0.5">
                    <Star className="size-2" style={{ color: '#facc15' }} fill="#facc15" />
                    <Star className="size-2" style={{ color: '#facc15' }} fill="#facc15" />
                    <Star className="size-2" style={{ color: '#facc15' }} fill="#facc15" />
                    <Star className="size-2" style={{ color: '#facc15' }} fill="#facc15" />
                    <Star className="size-2" style={{ color: '#facc15' }} fill="#facc15" />
                    <span className="ml-1 text-[8px]" style={{ color: 'rgba(240,240,245,.55)' }}>4.9 · 312 reviews</span>
                </div>
                <div className="mb-1 h-2 w-3/4 rounded-full" style={{ background: 'rgba(255,255,255,.22)' }} />
                <div className="mb-2 h-1.5 w-1/2 rounded-full" style={{ background: 'rgba(255,255,255,.10)' }} />
                <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                        <span className="rounded px-1.5 py-0.5 text-[8px] font-medium" style={{ background: 'rgba(122,161,255,.18)', color: '#7aa1ff' }}>Free Quote</span>
                        <span className="rounded px-1.5 py-0.5 text-[8px] font-medium" style={{ background: 'rgba(255,255,255,.08)', color: 'rgba(240,240,245,.65)' }}>Same Day</span>
                    </div>
                    <div className="rounded px-2 py-1 text-[9px] font-bold" style={{ background: '#1a4fc8', color: '#fff' }}>(415) 555-0142</div>
                </div>
            </div>

            {/* SEO signals footer */}
            <div className="flex items-center justify-between px-3 py-1.5" style={{ borderTop: '1px solid rgba(255,255,255,.06)', background: 'rgba(0,0,0,.20)' }}>
                <div className="flex items-center gap-1.5">
                    <Link2 className="size-2.5" style={{ color: '#7aa1ff' }} />
                    <span className="text-[8px]" style={{ color: 'rgba(240,240,245,.55)' }}>42 backlinks</span>
                </div>
                <span className="text-[8px]" style={{ color: 'rgba(240,240,245,.40)' }}>12 pages indexed</span>
            </div>
        </Card>
    );
};

const AdCampaignIllustration = () => {
    return (
        <div aria-hidden className="relative mt-6 mb-2">
            <Card className="relative z-10 aspect-video w-full p-3 transition-transform duration-200 ease-in-out group-hover:-rotate-2" style={{ ...innerCardStyle, background: '#0e1730', borderColor: 'rgba(255,255,255,.10)' }}>
                <div className="mb-3 flex items-center gap-2">
                    <div className="flex size-6 items-center justify-center rounded-full" style={{ background: 'rgba(26,79,200,.20)' }}>
                        <Star className="size-3" style={{ color: '#7aa1ff' }} fill="#7aa1ff" />
                    </div>
                    <span className="text-sm font-medium" style={{ color: '#f0f0f5' }}>Roofing — San Francisco</span>
                    <span
                        className="ml-auto rounded px-1.5 py-0.5 text-[10px] font-bold leading-none"
                        style={{ background: '#facc15', color: '#0a0a0a', letterSpacing: '.04em' }}
                    >
                        Ad
                    </span>
                </div>
                <div className="ml-8 space-y-1.5">
                    <div className="h-2 rounded-full" style={{ background: 'rgba(255,255,255,.18)' }} />
                    <div className="h-2 w-3/5 rounded-full" style={{ background: 'rgba(255,255,255,.12)' }} />
                    <div className="h-2 w-1/2 rounded-full" style={{ background: 'rgba(255,255,255,.10)' }} />
                </div>
            </Card>
            <Card className="-mt-2 ml-auto flex w-3/5 items-center justify-center p-3 transition-transform duration-200 ease-in-out group-hover:rotate-2" style={innerCardStyle}>
                <div className="flex size-10 items-center justify-center rounded-full" style={{ background: 'rgba(26,79,200,.20)' }}>
                    <MousePointerClick className="size-4" style={{ color: '#7aa1ff' }} />
                </div>
                <span className="ml-3 text-xs font-medium" style={{ color: 'rgba(240,240,245,.65)' }}>Click → Call</span>
            </Card>
        </div>
    );
};

const CallSystemIllustration = () => {
    return (
        <Card aria-hidden className="mt-6 aspect-video translate-y-4 p-4 pb-6 transition-transform duration-200 group-hover:translate-y-0" style={innerCardStyle}>
            <div className="flex items-center gap-2">
                <div className="flex size-7 items-center justify-center rounded-full" style={{ background: 'rgba(26,79,200,.20)' }}>
                    <Phone className="size-3.5" style={{ color: '#7aa1ff' }} fill="#7aa1ff" />
                </div>
                <div className="flex-1">
                    <div className="text-sm font-semibold" style={{ color: '#f0f0f5' }}>(415) 555-0142</div>
                    <div className="text-[11px]" style={{ color: 'rgba(240,240,245,.50)' }}>San Francisco, CA · Locksmith</div>
                </div>
                <span className="rounded-md px-2 py-0.5 text-[10px] font-semibold" style={{ background: 'rgba(26,79,200,.20)', color: '#7aa1ff' }}>Qualified</span>
            </div>
            <div className="mt-3 rounded-lg p-3" style={{ background: 'rgba(26,79,200,.08)', border: '1px solid rgba(26,79,200,.18)' }}>
                <div className="text-[11px] font-medium" style={{ color: 'rgba(240,240,245,.55)' }}>Routing to</div>
                <div className="mt-0.5 text-sm font-semibold" style={{ color: '#f0f0f5' }}>Your Business · San Francisco, CA</div>
            </div>
        </Card>
    );
};

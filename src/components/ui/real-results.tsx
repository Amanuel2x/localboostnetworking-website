import { Card, CardContent } from '@/components/ui/card';
import { PhoneCall, CalendarCheck } from 'lucide-react';

export default function RealResults() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-3xl lg:max-w-5xl px-6">
                <div className="mb-8 lg:mb-10">
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'monospace', fontSize: '.65rem', fontWeight: 500, letterSpacing: '.2em', textTransform: 'uppercase', color: '#1a4fc8', marginBottom: '24px' }}>
                        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#1a4fc8', boxShadow: '0 0 12px rgba(26,79,200,.5)', display: 'inline-block' }} />
                        Real Results
                    </div>
                    <h2 className="text-balance" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-.02em', color: '#f0f0f5', marginBottom: '20px' }}>
                        What our work actually does.
                    </h2>
                    <p className="max-w-2xl text-balance" style={{ color: 'rgba(240,240,245,.55)', lineHeight: 1.8, fontSize: '.95rem' }}>
                        These are averages from active home service clients. We track every call, every dollar, every booking. The numbers update weekly.
                    </p>
                </div>

                <div className="relative">
                    <div className="relative z-10 grid grid-cols-6 gap-3">
                        {/* CARD 1: Avg. Inbound Calls — big-number card */}
                        <Card className="relative col-span-full flex overflow-hidden lg:col-span-2" style={{ background: 'rgba(255,255,255,.02)', border: '1px solid rgba(255,255,255,.06)', color: '#f0f0f5' }}>
                            <CardContent className="relative m-auto size-fit pt-6">
                                <div className="relative flex h-24 w-56 items-center">
                                    <svg className="absolute inset-0 size-full" style={{ color: 'rgba(26,79,200,.18)' }} viewBox="0 0 254 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M112.891 97.7022C140.366 97.0802 171.004 94.6715 201.087 87.5116C210.43 85.2881 219.615 82.6412 228.284 78.2473C232.198 76.3179 235.905 73.9942 239.348 71.3124C241.85 69.2557 243.954 66.7571 245.555 63.9408C249.34 57.3235 248.281 50.5341 242.498 45.6109C239.033 42.7237 235.228 40.2703 231.169 38.3054C219.443 32.7209 207.141 28.4382 194.482 25.534C184.013 23.1927 173.358 21.7755 162.64 21.2989C161.376 21.3512 160.113 21.181 158.908 20.796C158.034 20.399 156.857 19.1682 156.962 18.4535C157.115 17.8927 157.381 17.3689 157.743 16.9139C158.104 16.4588 158.555 16.0821 159.067 15.8066C160.14 15.4683 161.274 15.3733 162.389 15.5286C179.805 15.3566 196.626 18.8373 212.998 24.462C220.978 27.2494 228.798 30.4747 236.423 34.1232C240.476 36.1159 244.202 38.7131 247.474 41.8258C254.342 48.2578 255.745 56.9397 251.841 65.4892C249.793 69.8582 246.736 73.6777 242.921 76.6327C236.224 82.0192 228.522 85.4602 220.502 88.2924C205.017 93.7847 188.964 96.9081 172.738 99.2109C153.442 101.949 133.993 103.478 114.506 103.79C91.1468 104.161 67.9334 102.97 45.1169 97.5831C36.0094 95.5616 27.2626 92.1655 19.1771 87.5116C13.839 84.5746 9.1557 80.5802 5.41318 75.7725C-0.54238 67.7259 -1.13794 59.1763 3.25594 50.2827C5.82447 45.3918 9.29572 41.0315 13.4863 37.4319C24.2989 27.5721 37.0438 20.9681 50.5431 15.7272C68.1451 8.8849 86.4883 5.1395 105.175 2.83669C129.045 0.0992292 153.151 0.134761 177.013 2.94256C197.672 5.23215 218.04 9.01724 237.588 16.3889C240.089 17.3418 242.498 18.5197 244.933 19.6446C246.627 20.4387 247.725 21.6695 246.997 23.615C246.455 25.1105 244.814 25.5605 242.63 24.5811C230.322 18.9961 217.233 16.1904 204.117 13.4376C188.761 10.3438 173.2 8.36665 157.558 7.52174C129.914 5.70776 102.154 8.06792 75.2124 14.5228C60.6177 17.8788 46.5758 23.2977 33.5102 30.6161C26.6595 34.3329 20.4123 39.0673 14.9818 44.658C12.9433 46.8071 11.1336 49.1622 9.58207 51.6855C4.87056 59.5336 5.61172 67.2494 11.9246 73.7608C15.2064 77.0494 18.8775 79.925 22.8564 82.3236C31.6176 87.7101 41.3848 90.5291 51.3902 92.5804C70.6068 96.5773 90.0219 97.7419 112.891 97.7022Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    <span className="mx-auto block w-fit text-5xl font-semibold" style={{ color: '#f0f0f5' }}>127</span>
                                </div>
                                <h2 className="mt-6 text-center text-lg font-semibold" style={{ color: '#f0f0f5' }}>Avg. Inbound Calls / Mo</h2>
                                <p className="mt-2 text-center text-sm" style={{ color: 'rgba(240,240,245,.55)' }}>Real buyers calling in. Not form fills. Not cold lists. People who picked up the phone because they need work done this week.</p>
                            </CardContent>
                        </Card>

                        {/* CARD 2: Cost Per Call — circular badge with phone icon */}
                        <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2" style={{ background: 'rgba(255,255,255,.02)', border: '1px solid rgba(255,255,255,.06)', color: '#f0f0f5' }}>
                            <CardContent className="pt-6">
                                <div className="relative mx-auto flex aspect-square size-32 rounded-full" style={{ border: '1px solid rgba(255,255,255,.10)' }}>
                                    <div className="absolute -inset-2 rounded-full" style={{ border: '1px solid rgba(255,255,255,.05)' }} />
                                    <div className="m-auto flex flex-col items-center">
                                        <PhoneCall className="size-6" strokeWidth={1.5} style={{ color: '#1a4fc8' }} />
                                        <span className="mt-2 text-3xl font-bold tracking-tight" style={{ color: '#f0f0f5' }}>$32</span>
                                        <span style={{ fontSize: '.55rem', fontWeight: 600, letterSpacing: '.18em', textTransform: 'uppercase', color: '#1a4fc8', marginTop: 2 }}>avg CPL</span>
                                    </div>
                                </div>
                                <div className="relative z-10 mt-6 space-y-2 text-center">
                                    <h2 className="text-lg font-semibold" style={{ color: '#f0f0f5' }}>Cost Per Call</h2>
                                    <p className="text-sm" style={{ color: 'rgba(240,240,245,.55)' }}>Total cost per qualified call after ad spend, tracking, and routing. Most agencies in our space sit at double this.</p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* CARD 3: Booking Rate — chart-style card */}
                        <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2" style={{ background: 'rgba(255,255,255,.02)', border: '1px solid rgba(255,255,255,.06)', color: '#f0f0f5' }}>
                            <CardContent className="pt-6">
                                <div className="pt-6 lg:px-2">
                                    <div className="relative mx-auto flex aspect-video w-full items-end justify-center">
                                        <svg viewBox="0 0 200 80" className="w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <defs>
                                                <linearGradient id="bookingGrad" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="0%" stopColor="#1a4fc8" stopOpacity="0.4" />
                                                    <stop offset="100%" stopColor="#1a4fc8" stopOpacity="0" />
                                                </linearGradient>
                                            </defs>
                                            <path d="M0 60 L25 50 L50 55 L75 35 L100 40 L125 22 L150 28 L175 14 L200 18 L200 80 L0 80 Z" fill="url(#bookingGrad)" />
                                            <path d="M0 60 L25 50 L50 55 L75 35 L100 40 L125 22 L150 28 L175 14 L200 18" stroke="#1a4fc8" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                            <circle cx="200" cy="18" r="3" fill="#1a4fc8" />
                                        </svg>
                                    </div>
                                    <div className="mt-4 flex items-baseline justify-center gap-2">
                                        <span className="text-5xl font-bold tracking-tight" style={{ color: '#f0f0f5' }}>68%</span>
                                        <span style={{ fontSize: '.65rem', fontWeight: 600, letterSpacing: '.18em', textTransform: 'uppercase', color: '#1a4fc8' }}>close rate</span>
                                    </div>
                                </div>
                                <div className="relative z-10 mt-6 space-y-2 text-center">
                                    <h2 className="text-lg font-semibold" style={{ color: '#f0f0f5' }}>Booking Rate</h2>
                                    <p className="text-sm" style={{ color: 'rgba(240,240,245,.55)' }}>Two out of three calls turn into a booked job. Our CRM handles the follow up so nothing slips.</p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* CARD 4: Avg. Monthly Revenue — wide split card */}
                        <Card className="relative col-span-full overflow-hidden lg:col-span-6" style={{ background: 'rgba(255,255,255,.02)', border: '1px solid rgba(255,255,255,.06)', color: '#f0f0f5' }}>
                            <CardContent className="grid pt-6 sm:grid-cols-2">
                                <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                                    <div className="relative flex aspect-square size-12 rounded-full" style={{ border: '1px solid rgba(255,255,255,.10)' }}>
                                        <div className="absolute -inset-2 rounded-full" style={{ border: '1px solid rgba(255,255,255,.05)' }} />
                                        <CalendarCheck className="m-auto size-5" strokeWidth={1.5} style={{ color: '#1a4fc8' }} />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-baseline gap-3">
                                            <span className="text-5xl font-bold tracking-tight" style={{ color: '#f0f0f5' }}>$37.7K</span>
                                            <span style={{ fontSize: '.65rem', fontWeight: 600, letterSpacing: '.18em', textTransform: 'uppercase', color: '#1a4fc8' }}>per client</span>
                                        </div>
                                        <h3 className="text-lg font-semibold" style={{ color: '#f0f0f5' }}>Avg. Monthly Revenue</h3>
                                        <p className="text-sm" style={{ color: 'rgba(240,240,245,.55)' }}>What clients pull in once the system has been running for two months. New revenue, not recycled.</p>
                                    </div>
                                </div>
                                <div className="relative mt-6 sm:-my-6 sm:-mr-6 sm:ml-6" style={{ borderLeft: '1px solid rgba(255,255,255,.06)', borderTop: '1px solid rgba(255,255,255,.06)', borderTopLeftRadius: '1rem', padding: '24px' }}>
                                    <div className="absolute left-3 top-2 flex gap-1">
                                        <span className="block size-2 rounded-full" style={{ background: 'rgba(255,255,255,.10)', border: '1px solid rgba(255,255,255,.10)' }} />
                                        <span className="block size-2 rounded-full" style={{ background: 'rgba(255,255,255,.10)', border: '1px solid rgba(255,255,255,.10)' }} />
                                        <span className="block size-2 rounded-full" style={{ background: 'rgba(255,255,255,.10)', border: '1px solid rgba(255,255,255,.10)' }} />
                                    </div>
                                    <svg viewBox="0 0 366 160" className="w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#1a4fc8" stopOpacity="0.35" />
                                                <stop offset="100%" stopColor="#1a4fc8" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                        <path d="M5 130 L40 115 L70 120 L100 95 L130 100 L160 75 L190 80 L220 55 L250 60 L280 40 L310 45 L340 25 L361 30 L361 160 L5 160 Z" fill="url(#revGrad)" />
                                        <path d="M5 130 L40 115 L70 120 L100 95 L130 100 L160 75 L190 80 L220 55 L250 60 L280 40 L310 45 L340 25 L361 30" stroke="#1a4fc8" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                        <circle cx="361" cy="30" r="4" fill="#1a4fc8" />
                                        <circle cx="361" cy="30" r="8" fill="#1a4fc8" fillOpacity="0.25" />
                                    </svg>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}

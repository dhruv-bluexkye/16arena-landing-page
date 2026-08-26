import React, { useEffect, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import StoreButtons from './StoreButtons';
import { APP_STORE_URL, PLAY_STORE_URL, SHOP_URL } from '../config/links';
import heroBg from '../assets/arena-hero-bg.jpg';
import heroNinja from '../assets/hero-ninja.png';
import logo16arena from '../assets/logo-16arena.png';
import logo16score from '../assets/logo-16score.png';
import logo16tms from '../assets/logo-16tms.png';

/** Scroll-reveal wrapper with a scroll-position fallback so nothing stays hidden. */
const Reveal: React.FC<{ className?: string; children: React.ReactNode }> = ({ className = '', children }) => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.12, triggerOnce: true });
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (isVisible) setShown(true);
  }, [isVisible]);

  useEffect(() => {
    if (shown) return;
    const el = elementRef.current;
    if (!el) return;
    const check = () => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.95 && r.bottom > 0) setShown(true);
    };
    check();
    window.addEventListener('scroll', check, { passive: true });
    return () => window.removeEventListener('scroll', check);
  }, [shown]);

  return (
    <div ref={elementRef} className={`fade-in-up ${shown ? 'visible' : ''} ${className}`}>
      {children}
    </div>
  );
};

const PRODUCTS = [
  {
    name: '16Arena',
    suffix: null as string | null,
    logo: logo16arena,
    accentText: 'text-primary-light',
    accentHover: 'hover:bg-primary/60',
    desc: 'The flagship gaming platform where players can discover tournaments, compete, play casual games, earn rewards, and connect with the gaming community.',
    appStore: APP_STORE_URL,
    playStore: PLAY_STORE_URL,
    website: null as string | null,
    websiteLabel: null as string | null,
    note: null as string | null,
  },
  {
    name: '16Score',
    suffix: null,
    logo: logo16score,
    accentText: 'text-[#1E8CFF]',
    accentHover: 'hover:bg-[#1E8CFF]/60',
    desc: 'An AI-powered esports data platform delivering real-time match tracking, scoring, player statistics, and performance insights.',
    appStore: 'https://apps.apple.com/my/app/16score-live-esports-scores/id6751777140',
    playStore: 'https://play.google.com/store/apps/details?id=com.bluexkye.sixteenscore',
    website: null,
    websiteLabel: null,
    note: null,
  },
  {
    name: '16TMS',
    suffix: null,
    logo: logo16tms,
    accentText: 'text-[#F42A44]',
    accentHover: 'hover:bg-[#F42A44]/60',
    desc: 'A tournament management platform that enables organizers to create, manage, and scale esports competitions with ease.',
    appStore: null,
    playStore: null,
    website: 'https://www.16tms.com/',
    websiteLabel: '16tms.com',
    note: null,
  },
  {
    name: '16Arena Shop',
    suffix: 'Shop',
    logo: logo16arena,
    accentText: 'text-primary-light',
    accentHover: 'hover:bg-primary/60',
    desc: 'A digital marketplace for gamers to purchase game top-ups, gift cards, gaming vouchers, subscriptions, and other digital products.',
    appStore: null,
    playStore: null,
    website: SHOP_URL,
    websiteLabel: 'shop.16arena.com',
    note: 'Live now',
  },
];

const Company: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const prev = document.title;
    document.title = '16Arena Labs — Building the Future of Gaming & Esports';
    return () => {
      document.title = prev;
    };
  }, []);

  return (
    <div className="bg-background-dark">
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-28 border-b border-white/5">
        <img src={heroBg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden="true"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark/70 via-background-dark/85 to-background-dark" aria-hidden="true"></div>
        <div className="absolute top-0 right-0 w-[55vw] h-[55vw] max-w-[640px] max-h-[640px] glow-warm pointer-events-none -translate-y-1/4 translate-x-1/4" aria-hidden="true"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12 items-center">
            <Reveal className="max-w-2xl">
              <span className="eyebrow mb-6">16Arena Labs</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white uppercase leading-[0.98] display-tight mb-6">
                Building the future of{' '}
                <span className="text-gradient">gaming &amp; esports</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
                16Arena Labs Pvt. Ltd. is a technology company building products that power the gaming and esports
                ecosystem. Our platforms help gamers, tournament organizers, publishers, creators, and brands connect
                through a unified gaming infrastructure.
              </p>
            </Reveal>

            {/* Ninja mascot */}
            <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
              <div className="absolute inset-0 glow-warm blur-2xl" aria-hidden="true"></div>
              <img
                src={heroNinja}
                alt="16Arena ninja mascot"
                width={1024}
                height={1024}
                fetchPriority="high"
                decoding="async"
                className="relative w-full max-w-[220px] sm:max-w-[300px] lg:max-w-[430px] object-contain animate-float drop-shadow-[0_0_40px_rgba(255,106,0,0.45)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Vision ---------- */}
      <section className="py-20 lg:py-28 bg-surface-dark border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] glow-cool pointer-events-none" aria-hidden="true"></div>
        <Reveal className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="eyebrow justify-center mb-6">Our Vision</span>
          <p className="text-3xl md:text-4xl lg:text-[2.75rem] font-display font-bold text-white leading-tight">
            To build the technology infrastructure powering the{' '}
            <span className="text-gradient italic">future of gaming and esports.</span>
          </p>
        </Reveal>
      </section>

      {/* ---------- Products ---------- */}
      <section className="py-20 lg:py-28 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl mb-14">
            <span className="eyebrow mb-5">Our Products</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
              One ecosystem. <span className="text-gradient italic">Multiple products.</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
            {PRODUCTS.map((p) => (
              <Reveal key={p.name}>
                <article className={`group relative clip-facet p-px bg-white/10 ${p.accentHover} transition-all duration-500 hover:-translate-y-1.5 h-full`}>
                  <div className="relative clip-facet h-full bg-gradient-to-br from-surface-raised to-surface-dark p-7 lg:p-8 flex flex-col">
                    <div className="flex items-start justify-between gap-3 mb-5">
                      <div className="flex items-center gap-2.5">
                        <img src={p.logo} alt={p.name} className="h-7 sm:h-8 w-auto" />
                        {p.suffix && (
                          <span className="text-xl font-display font-bold text-white leading-none">{p.suffix}</span>
                        )}
                      </div>
                      {p.note && (
                        <span className={`shrink-0 text-[11px] font-condensed font-semibold tracking-[0.15em] uppercase px-3 py-1.5 clip-facet-sm bg-primary/15 ${p.accentText}`}>
                          {p.note}
                        </span>
                      )}
                    </div>

                    <p className="text-gray-400 text-sm sm:text-[15px] leading-relaxed mb-6">{p.desc}</p>

                    <div className="mt-auto pt-5 border-t border-white/5">
                      {p.appStore && p.playStore ? (
                        <StoreButtons size="sm" appStoreUrl={p.appStore} playStoreUrl={p.playStore} label={p.name} />
                      ) : p.website ? (
                        <a
                          href={p.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-1.5 text-sm font-condensed font-semibold uppercase tracking-widest ${p.accentText} hover:text-white transition-colors`}
                        >
                          Visit {p.websiteLabel}
                          <span className="material-symbols-outlined text-base">open_in_new</span>
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-2 text-sm font-condensed font-semibold uppercase tracking-widest text-gray-500">
                          <span className="material-symbols-outlined text-base">schedule</span>
                          Coming soon
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Company Information ---------- */}
      <section className="py-20 lg:py-28 bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-12">
            <span className="eyebrow mb-5">Company Information</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white leading-tight">
              16Arena Labs Private Limited
            </h2>
          </Reveal>

          <Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <InfoCard label="Registered Office">
                66, Alpine Woods, Nr. Chuahan Vadi, Sanathal, Sanand, Ahmedabad – 382210, Gujarat, India
              </InfoCard>
              <InfoCard label="Corporate Office">
                Office No. A704, Block A, Jagatpur Rd, near BSNL Office, off Sarkhej – Gandhinagar Highway, Jagatpur,
                Ahmedabad, Gujarat 382470
              </InfoCard>
              <InfoCard label="Contact">
                <a href="mailto:support@16arena.com" className="text-primary hover:text-primary-hover">
                  support@16arena.com
                </a>
              </InfoCard>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

const InfoCard: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <div className="clip-facet-sm bg-background-dark/60 border-l-2 border-primary/60 p-6">
    <p className="text-xs font-condensed font-semibold uppercase tracking-[0.2em] text-primary-light mb-3">{label}</p>
    <p className="text-sm text-gray-300 leading-relaxed">{children}</p>
  </div>
);

export default Company;

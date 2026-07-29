import React, { useEffect, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import StoreButtons from './StoreButtons';
import { SOCIALS } from '../lib/socials';
import heroBg from '../assets/arena-hero-bg.jpg';
import heroNinja from '../assets/hero-ninja.png';
import sudhansuPhoto from '../assets/team-sudhansu.jpg';
import akashPhoto from '../assets/team-akash.jpg';
import logo16arena from '../assets/logo-16arena.png';
import logo16score from '../assets/logo-16score.png';
import logo16tms from '../assets/logo-16tms.png';

const linkedinPath = SOCIALS.find((s) => s.key === 'linkedin')!.d;

/** Render a product/brand name with the leading "16" in the brand gradient. */
const Brand: React.FC<{ name: string }> = ({ name }) =>
  name.startsWith('16') ? (
    <>
      <span className="text-gradient">16</span>
      {name.slice(2)}
    </>
  ) : (
    <>{name}</>
  );

/** Scroll-reveal wrapper. Uses the shared IntersectionObserver hook, with a direct
 *  scroll-position fallback so a section never stays hidden on a fast scroll. */
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
    accentText: 'text-primary-light',
    accentHover: 'hover:bg-primary/60',
    logo: logo16arena,
    suffix: null,
    tag: 'Live',
    category: 'Gaming Community & Competition Platform',
    desc: 'The flagship consumer platform and the entry point into the ecosystem.',
    points: ['Discover & join tournaments', 'Casual games and teams', 'Rewards & gaming vouchers', 'Gaming communities'],
    website: '/',
    linkLabel: 'Explore 16Arena',
  },
  {
    name: '16Score',
    accentText: 'text-[#1E8CFF]',
    accentHover: 'hover:bg-[#1E8CFF]/60',
    logo: logo16score,
    suffix: null,
    tag: null,
    category: 'AI-Powered Esports Data Platform',
    desc: 'Captures and organizes competitive gaming data into structured insights.',
    points: ['Live match tracking & scoring', 'Player stats & team rankings', 'Historical match data', 'Performance analytics'],
    website: 'https://www.16score.com/',
    linkLabel: 'Visit 16score.com',
  },
  {
    name: '16TMS',
    accentText: 'text-[#F42A44]',
    accentHover: 'hover:bg-[#F42A44]/60',
    logo: logo16tms,
    suffix: null,
    tag: null,
    category: 'Tournament Management System',
    desc: 'A SaaS platform that lets organizers run competitions from start to finish.',
    points: ['Registration, brackets & leaderboards', 'Match & result management', 'White-label deployments', 'Enterprise integrations'],
    website: 'https://www.16tms.com/',
    linkLabel: 'Visit 16tms.com',
  },
  {
    name: '16Arena Shop',
    accentText: 'text-primary-light',
    accentHover: 'hover:bg-primary/60',
    logo: logo16arena,
    suffix: 'Shop',
    tag: 'Launching Soon',
    category: 'Digital Commerce for Gamers',
    desc: 'One destination to buy digital gaming products, tied to rewards and loyalty.',
    points: ['Game top-ups & gift cards', 'Gaming vouchers', 'Digital subscriptions', 'Entertainment products'],
    website: null,
    linkLabel: null,
  },
];

const AUDIENCES = [
  { icon: 'sports_esports', title: 'Gamers', desc: 'Compete, improve, earn rewards and connect with the gaming community.' },
  { icon: 'emoji_events', title: 'Tournament Organizers', desc: 'Professional tournament infrastructure with powerful operational tools.' },
  { icon: 'apartment', title: 'Publishers', desc: 'Community engagement, tournaments, analytics and white-label solutions.' },
  { icon: 'campaign', title: 'Brands', desc: 'Reach highly engaged gaming audiences through authentic activations.' },
  { icon: 'code', title: 'Developers', desc: 'Integrate gaming infrastructure and data through APIs and enterprise solutions.' },
];

const FLYWHEEL = [
  'More gamers join',
  'Organizers create more tournaments',
  'More gameplay data is generated',
  'Better insights become possible',
  'Commerce opportunities expand',
];

const JOURNEY = [
  { date: 'Dec 2024', title: 'Company Founded', upcoming: false },
  { title: '16Score Launch', upcoming: false },
  { title: '16Arena Launch', upcoming: false },
  { title: '16TMS', upcoming: false },
  { title: 'Enterprise APIs (16Score & 16TMS)', upcoming: false },
  { title: '16Arena Shop', note: 'Launching Soon', upcoming: true },
  { title: 'AI + Financial Products', note: 'Next', upcoming: true },
];

const FOUNDERS = [
  {
    name: 'Sudhansu Sinha',
    role: 'CEO & Co-Founder',
    photo: sudhansuPhoto,
    linkedin: 'https://www.linkedin.com/in/sudhansu-sinha-2170696/',
    bio: 'Sudhansu Sinha brings over 25 years of leadership experience across telecommunications, technology, and business strategy. A telecom industry veteran and serial entrepreneur, he discovered the potential of esports while serving as Chief Marketing Officer at Telenor Myanmar, where he witnessed the rapid growth of the gaming ecosystem across Southeast Asia. Having held CXO leadership roles for more than a decade, he now leads 16Arena Labs with a vision to build the technology infrastructure powering the next generation of gaming and esports.',
  },
  {
    name: 'Akash Joshi',
    role: 'CTO & Co-Founder',
    photo: akashPhoto,
    linkedin: 'https://www.linkedin.com/in/imakashjoshi/',
    bio: 'Akash Joshi is the Co-Founder and Chief Technology Officer at 16Arena Labs, with over 10 years of experience in software engineering and product development. Over the past several years, he has specialized in building scalable technology solutions for the esports and gaming ecosystem, leading the development of platforms across tournament management, real-time scoring, and community engagement. A startup enthusiast and passionate gamer, Akash combines deep technical expertise with firsthand industry insight to build products that solve real-world challenges for gamers, organizers, publishers, and brands.',
  },
];

const Company: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const prev = document.title;
    document.title = '16Arena Labs — Building the Operating System for Gaming & Esports';
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
              Building the operating system for{' '}
              <span className="text-gradient">gaming &amp; esports</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed mb-8">
              16Arena Labs is building India's integrated gaming infrastructure — connecting players, tournament
              organizers, publishers, brands and developers through a unified ecosystem of products. What started
              as an esports platform is evolving into the technology stack powering competitive gaming, community
              engagement and digital commerce.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {['Infrastructure', 'Data', 'Community', 'Commerce'].map((w) => (
                <span
                  key={w}
                  className="clip-facet-sm bg-primary/10 text-primary-light px-3.5 py-2 text-xs sm:text-sm font-condensed font-semibold uppercase tracking-[0.15em]"
                >
                  {w}
                </span>
              ))}
            </div>
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

      {/* ---------- About ---------- */}
      <section className="py-20 lg:py-28 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center">
          <Reveal>
            <span className="eyebrow mb-5">About 16Arena Labs</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
              Gaming is no longer just <span className="text-gradient italic">entertainment.</span>
            </h2>
          </Reveal>
          <Reveal>
            <div className="space-y-5 text-gray-400 leading-relaxed">
              <p>
                It is one of the world's fastest-growing digital industries, with hundreds of millions of players
                spending billions of hours every year across competitive gaming, creator ecosystems and digital
                commerce. Yet the underlying infrastructure powering this ecosystem remains fragmented.
              </p>
              <p>
                Players use one platform for tournaments, another for communities, another for statistics, another
                for rewards, and another for digital purchases. Organizers rely on disconnected tools to run
                competitions. Publishers struggle to engage communities beyond their games. We are solving this by
                building an integrated platform that connects every participant in the gaming ecosystem.
              </p>
              <div className="clip-facet bg-gradient-to-br from-primary/15 to-transparent border-l-2 border-primary p-6 mt-2">
                <p className="text-xs font-condensed uppercase tracking-[0.25em] text-primary-light mb-2">Our mission</p>
                <p className="text-xl md:text-2xl font-display font-bold text-white">
                  Build the infrastructure layer for gaming and esports.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Vision + Flywheel ---------- */}
      <section className="py-20 lg:py-28 bg-surface-dark border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] glow-cool pointer-events-none" aria-hidden="true"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl mb-14">
            <span className="eyebrow mb-5">Our Vision</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-tight mb-6">
              The infrastructure gaming <span className="text-gradient italic">deserves.</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              We believe gaming deserves the same level of infrastructure that Shopify built for commerce and Stripe
              built for payments. Our vision is to become the technology platform powering gaming communities across
              India and emerging markets — an ecosystem where every product strengthens the next.
            </p>
          </Reveal>

          <Reveal>
            <div className="flex flex-col lg:flex-row lg:items-stretch gap-3">
              {FLYWHEEL.map((step, i) => (
                <React.Fragment key={step}>
                  <div className="flex-1 clip-facet-sm bg-background-dark/70 border border-white/5 p-5 flex flex-col justify-center">
                    <span className="font-display font-bold text-primary text-lg leading-none mb-2">0{i + 1}</span>
                    <p className="text-sm text-gray-200 leading-snug">{step}</p>
                  </div>
                  {i < FLYWHEEL.length - 1 && (
                    <span className="material-symbols-outlined text-primary/50 self-center rotate-90 lg:rotate-0" aria-hidden="true">
                      chevron_right
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
            <p className="mt-6 flex items-center justify-center gap-2 text-sm font-condensed uppercase tracking-[0.2em] text-gray-400">
              <span className="material-symbols-outlined text-primary text-lg">sync</span>
              A flywheel that compounds over time
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- Products ---------- */}
      <section className="py-20 lg:py-28 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl mb-14">
            <span className="eyebrow mb-5">Our Products</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-tight mb-4">
              One ecosystem. <span className="text-gradient italic">Multiple products.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Four products that connect every participant in gaming — and strengthen one another as they grow.
            </p>
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
                      {p.tag && (
                        <span
                          className={`shrink-0 text-[11px] font-condensed font-semibold tracking-[0.15em] uppercase px-3 py-1.5 clip-facet-sm ${
                            p.tag === 'Live' ? 'bg-green-500/15 text-green-400' : 'bg-primary/15 text-primary-light'
                          }`}
                        >
                          {p.tag}
                        </span>
                      )}
                    </div>
                    <p className={`text-xs font-condensed uppercase tracking-[0.18em] mb-4 ${p.accentText}`}>
                      {p.category}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">{p.desc}</p>
                    <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2.5 mt-auto pt-5 border-t border-white/5">
                      {p.points.map((pt) => (
                        <li key={pt} className="flex items-center gap-2 text-sm text-gray-200">
                          <span className={`material-symbols-outlined text-base ${p.accentText}`}>check_circle</span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                    {p.website && (
                      <a
                        href={p.website}
                        {...(p.website.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className={`mt-5 inline-flex items-center gap-1.5 text-sm font-condensed font-semibold uppercase tracking-widest ${p.accentText} hover:text-white transition-colors`}
                      >
                        {p.linkLabel}
                        <span className="material-symbols-outlined text-base">
                          {p.website.startsWith('http') ? 'open_in_new' : 'arrow_forward'}
                        </span>
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Who We Build For ---------- */}
      <section className="py-20 lg:py-28 bg-surface-dark border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl mb-14">
            <span className="eyebrow mb-5">Who We Build For</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
              Built for everyone in <span className="text-gradient italic">gaming.</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
            {AUDIENCES.map((a) => (
              <Reveal key={a.title}>
                <div className="h-full clip-facet-sm bg-background-dark/60 p-6 hover:-translate-y-1 transition-transform duration-300 group">
                  <span className="w-12 h-12 mb-5 p-3 clip-facet-sm bg-primary/15 text-primary-light flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-2xl">{a.icon}</span>
                  </span>
                  <h3 className="text-lg font-display font-bold text-white mb-2 leading-tight">{a.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Journey ---------- */}
      <section className="py-20 lg:py-28 border-b border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-14">
            <span className="eyebrow mb-5">Our Journey</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
              From esports app to <span className="text-gradient italic">infrastructure.</span>
            </h2>
          </Reveal>

          <Reveal>
            <ol className="relative border-l border-white/10 ml-2 space-y-9">
              {JOURNEY.map((item) => (
                <li key={item.title} className="relative pl-8">
                  <span
                    className={`absolute -left-[9px] top-1 w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center ${
                      item.upcoming ? 'border-primary/50 border-dashed bg-background-dark' : 'border-primary bg-primary'
                    }`}
                  >
                    {!item.upcoming && <span className="w-1.5 h-1.5 rounded-full bg-background-dark" />}
                  </span>
                  <div className="flex flex-wrap items-center gap-3">
                    {item.date && (
                      <span className="text-xs font-condensed font-semibold uppercase tracking-[0.2em] text-primary-light">
                        {item.date}
                      </span>
                    )}
                    <h3 className={`text-lg font-display font-bold ${item.upcoming ? 'text-gray-400' : 'text-white'}`}>
                      <Brand name={item.title} />
                    </h3>
                    {item.note && (
                      <span className="text-[11px] font-condensed font-semibold uppercase tracking-[0.15em] px-2.5 py-1 rounded border border-primary/40 text-primary-light">
                        {item.note}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* ---------- Leadership ---------- */}
      <section className="py-20 lg:py-28 bg-surface-dark border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl mb-14">
            <span className="eyebrow mb-5">Leadership Team</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
              The people <span className="text-gradient italic">behind it.</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {FOUNDERS.map((f) => (
              <Reveal key={f.name}>
                <div className="group relative clip-facet p-px bg-white/10 h-full">
                  <div className="relative clip-facet h-full bg-gradient-to-br from-surface-raised to-surface-dark p-6 sm:p-8 flex flex-col sm:flex-row gap-6">
                    {/* Photo — unified editorial treatment */}
                    <div className="shrink-0 w-28 h-28 sm:w-40 sm:h-40 clip-facet-sm p-px bg-gradient-to-br from-primary to-primary-light">
                      <div className="clip-facet-sm w-full h-full overflow-hidden bg-surface-dark">
                        <img
                          src={f.photo}
                          alt={`${f.name}, ${f.role} at 16Arena Labs`}
                          width={560}
                          height={560}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover object-top grayscale-[0.85] sepia-[0.15] contrast-[1.02] group-hover:grayscale-0 group-hover:sepia-0 transition-[filter] duration-500"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-2xl font-display font-bold text-white leading-tight">{f.name}</h3>
                        <a
                          href={f.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${f.name} on LinkedIn`}
                          className="shrink-0 w-9 h-9 rounded-full bg-background-dark flex items-center justify-center text-gray-400 hover:text-primary transition-colors border border-white/10 hover:border-primary/50"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d={linkedinPath} />
                          </svg>
                        </a>
                      </div>
                      <p className="text-sm font-condensed font-semibold uppercase tracking-[0.18em] text-primary-light mt-1 mb-4">
                        {f.role}
                      </p>
                      <p className="text-sm text-gray-400 leading-relaxed">{f.bio}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Closing CTA ---------- */}
      <section className="relative py-24 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden="true"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] glow-warm pointer-events-none" aria-hidden="true"></div>
        <Reveal className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="eyebrow justify-center mb-6">Join the ecosystem</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white uppercase leading-tight display-tight mb-5">
            Start where it all begins —{' '}
            <span className="text-gradient">16Arena</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-xl mx-auto mb-9">
            The flagship platform is live on iOS and Android. Partners, publishers and brands can reach us directly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <StoreButtons size="lg" />
            <a href="/contact" className="group/btn inline-block clip-facet-sm p-px bg-white/20 hover:bg-primary/50 transition-colors">
              <span className="inline-flex items-center gap-2 px-6 py-3.5 clip-facet-sm bg-background-dark text-white font-condensed font-semibold uppercase tracking-widest text-sm group-hover/btn:bg-white/5 transition-colors">
                Get in touch
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default Company;

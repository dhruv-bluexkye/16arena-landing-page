import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import esportsImg from '../assets/arena-esports.jpg';
import casualImg from '../assets/arena-casual.jpg';
import scrimsImg from '../assets/arena-scrims.jpg';

interface ArenaCardData {
  img: string;
  icon: string;
  tag: string;
  title: string;
  desc: string;
  points: string[];
}

const ARENAS: ArenaCardData[] = [
  {
    img: esportsImg,
    icon: 'trophy',
    tag: 'High Stakes',
    title: 'Esports Arena',
    desc: 'Battle through structured tournaments for the biggest mobile, PC, and console titles — with real prize pools on the line.',
    points: ['Daily tournaments', 'Real prize pools', 'Bracket play'],
  },
  {
    img: casualImg,
    icon: 'videogame_asset',
    tag: 'Play & Earn',
    title: 'Casual Arena',
    desc: 'Play quick, hyper-casual games right inside the app and rack up rewards. No opponents, no schedule — just pick up and play.',
    points: ['Instant mini-games', 'Play to earn coins', 'No skill barrier'],
  },
  {
    img: scrimsImg,
    icon: 'swords',
    tag: 'Weekly Ladders',
    title: 'Competitive Scrims',
    desc: 'Run weekly scrims with your team, track standings and match history, and prove yourself on the live leaderboards.',
    points: ['Weekly leaderboards', 'Team standings', 'Full match history'],
  },
];

const Arenas: React.FC = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="arenas" className="py-24 lg:py-32 bg-background-dark relative overflow-hidden border-t border-white/5">
      <div className="absolute right-0 top-1/4 w-96 h-96 glow-warm pointer-events-none" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={titleRef}
          className={`mb-14 max-w-2xl fade-in-up ${titleVisible ? 'visible' : ''}`}
        >
          <span className="eyebrow mb-5">Three ways to compete</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white uppercase leading-[0.95] display-tight mb-5">
            Pick your <span className="text-gradient">arena</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            One platform, built for how you actually play — chase prize pools in esports tournaments,
            run weekly scrims with your team, or earn rewards from quick games in the app.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {ARENAS.map((a, i) => (
            <ArenaCard key={a.title} data={a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ArenaCard: React.FC<{ data: ArenaCardData; index: number }> = ({ data, index }) => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.15, triggerOnce: true });

  return (
    <article
      ref={elementRef}
      className={`group relative clip-facet overflow-hidden flex flex-col bg-gradient-to-b from-surface-raised to-surface-dark border border-white/10 hover:border-primary/40 hover:-translate-y-1.5 transition-all duration-500 fade-in-up ${isVisible ? 'visible' : ''} stagger-${index + 1}`}
    >
      {/* Vivid image band */}
      <div className="relative h-48 lg:h-52 overflow-hidden">
        <img
          src={data.img}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-[center_72%] transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {/* blend the band into the panel + subtle brand tint */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface-raised via-surface-raised/10 to-transparent" aria-hidden="true"></div>
        <div className="absolute inset-0 bg-primary/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true"></div>
        <span className="absolute top-4 right-4 z-10 text-[11px] font-condensed font-semibold tracking-[0.2em] uppercase text-white/90 bg-black/50 backdrop-blur-sm border border-white/15 px-3 py-1.5">
          {data.tag}
        </span>
      </div>

      {/* Content panel */}
      <div className="relative p-6 lg:p-7 pt-0 flex flex-col flex-1">
        <span className="-mt-7 mb-4 self-start w-14 h-14 p-3.5 clip-facet-sm bg-primary text-white flex items-center justify-center shadow-neon ring-1 ring-primary/40">
          <span className="material-symbols-outlined text-2xl">{data.icon}</span>
        </span>
        <h3 className="text-2xl lg:text-3xl font-display font-bold text-white uppercase tracking-tight mb-2.5">
          {data.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-5">{data.desc}</p>
        <ul className="space-y-2.5 mt-auto pt-5 border-t border-white/5">
          {data.points.map((p) => (
            <li key={p} className="flex items-center gap-2.5 text-sm text-gray-200">
              <span className="material-symbols-outlined text-primary text-base">bolt</span>
              {p}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default Arenas;

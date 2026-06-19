import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { PLAYER_COUNT, SOCIAL_LINKS } from '../config/links';
import { SOCIALS } from '../lib/socials';

const discordPath = SOCIALS.find((s) => s.key === 'discord')!.d;

const STATS = [
  { value: PLAYER_COUNT, label: 'Active players' },
  { value: '3', label: 'Competitive arenas' },
  { value: 'Daily', label: 'Tournaments & scrims' },
  { value: '4.2★', label: 'App Store rating' },
];

const StatsBand: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.3, triggerOnce: true });

  return (
    <section className="py-20 lg:py-24 bg-background-dark relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 grid-bg opacity-50" aria-hidden="true"></div>

      <div
        ref={elementRef}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 fade-in-up ${isVisible ? 'visible' : ''}`}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
          {STATS.map((s) => (
            <div key={s.label} className="text-center border-l border-white/10 first:border-l-0 lg:border-l">
              <div className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white display-tight leading-none">
                {s.value}
              </div>
              <div className="mt-3 text-xs md:text-sm font-condensed uppercase tracking-[0.2em] text-gray-400">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-14 text-center text-gray-400 max-w-2xl mx-auto leading-relaxed">
          More than a tournament app — 16Arena brings <span className="text-white font-medium">teams, chat, and creators</span> together
          into one community built for India's next generation of gamers.
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href={SOCIAL_LINKS.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-6 py-3 clip-facet-sm bg-[#5865F2]/15 border border-[#5865F2]/40 text-white hover:bg-[#5865F2]/25 transition-colors"
          >
            <svg className="w-5 h-5 text-[#7d88f5]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d={discordPath} />
            </svg>
            <span className="font-condensed font-semibold uppercase tracking-widest text-sm">Join the Discord</span>
            <span className="material-symbols-outlined text-base text-gray-400 group-hover:text-white group-hover:translate-x-0.5 transition-all">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default StatsBand;

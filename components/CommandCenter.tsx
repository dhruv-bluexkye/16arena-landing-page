import React from 'react';
import { useScrollAnimation, useParallax } from '../hooks/useScrollAnimation';
import ninja2 from '../assets/ninja-2.webp';

const FEATURES = [
  { icon: 'calendar_month', title: 'My Tournaments & Scrims', desc: 'Everything you’ve joined, organised in one place with start times and status.' },
  { icon: 'leaderboard', title: 'Live leaderboards', desc: 'Weekly scrim standings update in real time as matches are played.' },
  { icon: 'history', title: 'Standings & match history', desc: 'Detailed scrim pages with every result, so you can study and improve.' },
];

const CommandCenter: React.FC = () => {
  const { elementRef: textRef, isVisible: textVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });
  const { elementRef: visualRef, isVisible: visualVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });
  const { elementRef: parallaxRef, offset } = useParallax(0.2);

  return (
    <section className="py-24 lg:py-32 bg-background-dark overflow-hidden relative border-t border-white/5">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[700px] glow-cool pointer-events-none" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 lg:items-center">

          {/* Visual */}
          <div
            ref={visualRef}
            className={`order-2 lg:order-1 relative h-[360px] sm:h-[460px] lg:min-h-[540px] flex items-end justify-center fade-in-left ${visualVisible ? 'visible' : ''}`}
          >
            <div className="absolute inset-x-6 bottom-4 top-8 clip-facet bg-gradient-to-b from-white/[0.05] to-transparent border border-white/5" aria-hidden="true"></div>

            {/* Floating stat chip */}
            <div className="absolute top-8 right-2 sm:right-6 z-20 glass-panel clip-facet-sm px-4 py-3 animate-float-delayed" aria-hidden="true">
              <div className="text-[10px] font-condensed uppercase tracking-widest text-gray-400">Weekly Rank</div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-display font-extrabold text-gradient">#1</span>
                <span className="text-xs text-green-400 flex items-center"><span className="material-symbols-outlined text-sm">trending_up</span> 12</span>
              </div>
            </div>

            <div
              ref={parallaxRef}
              className="relative w-full max-w-[380px] flex items-end justify-center parallax-container"
              style={{ transform: `translateY(${offset * 0.25}px)` }}
            >
              <div className="absolute inset-0 glow-warm blur-2xl rounded-full" aria-hidden="true"></div>
              <img
                src={ninja2}
                alt="16Arena ninja reviewing tournament standings"
                width={820}
                height={1054}
                loading="lazy"
                decoding="async"
                className="relative z-10 w-full h-auto object-contain object-bottom drop-shadow-[0_0_40px_rgba(255,106,0,0.4)] animate-float"
              />
            </div>
          </div>

          {/* Copy */}
          <div
            ref={textRef}
            className={`order-1 lg:order-2 fade-in-right ${textVisible ? 'visible' : ''}`}
          >
            <span className="eyebrow mb-5">Your command center</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white uppercase leading-[0.95] display-tight mb-6">
              Every match,<br /><span className="text-gradient">one place</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-md leading-relaxed mb-10">
              16Arena keeps your whole competitive life in sync — what you’ve joined, where you
              rank, and how every match played out.
            </p>

            <div className="space-y-5">
              {FEATURES.map((f) => (
                <div key={f.title} className="flex items-start gap-4">
                  <span className="shrink-0 w-11 h-11 p-2.5 clip-facet-sm bg-primary/12 border border-primary/25 text-primary-light flex items-center justify-center">
                    <span className="material-symbols-outlined text-xl">{f.icon}</span>
                  </span>
                  <div>
                    <h3 className="text-white font-display font-semibold text-lg leading-snug">{f.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CommandCenter;

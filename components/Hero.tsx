import React from 'react';
import { useScrollAnimation, useParallax } from '../hooks/useScrollAnimation';
import heroNinja from '../assets/hero-ninja.webp';
import heroBg from '../assets/arena-hero-bg.jpg';
import StoreButtons from './StoreButtons';
import { PLAYER_COUNT } from '../config/links';

const Hero: React.FC = () => {
  const { elementRef: textRef, isVisible: textVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });
  const { elementRef: visualRef, isVisible: visualVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });
  const { elementRef: parallaxRef, offset } = useParallax(0.25);

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-background-dark flex items-center">
      {/* Cinematic arena background */}
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />
      {/* Legibility scrims */}
      <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/70 to-background-dark/30" aria-hidden="true"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-background-dark/80" aria-hidden="true"></div>
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-28 pb-20 lg:py-28">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-6 items-center">

          {/* Copy */}
          <div
            ref={textRef}
            className={`flex flex-col fade-in-left ${textVisible ? 'visible' : ''}`}
          >
            <div className="flex flex-wrap items-center gap-3 mb-7">
              <span className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 px-3 py-1.5 rounded-full text-xs font-semibold font-condensed tracking-widest uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Live Now
              </span>
              <span className="eyebrow">India's Esports Platform</span>
            </div>

            <h1 className="font-display font-black text-white uppercase leading-[0.86] display-tight text-6xl sm:text-7xl lg:text-8xl">
              Enter the
              <span className="block text-gradient">Arena</span>
            </h1>

            <p className="mt-7 text-lg sm:text-xl text-gray-300 max-w-xl leading-relaxed">
              Compete in daily tournaments and scrims across your favourite mobile, PC, and console
              titles. Climb the leaderboards, join the squad, and turn skill into real rewards.
            </p>

            <div className="mt-9">
              <StoreButtons size="lg" />
            </div>

            <dl className="mt-10 flex flex-wrap items-end gap-x-10 gap-y-5">
              <Stat value={PLAYER_COUNT} label="Active Players" />
              <span className="hidden sm:block w-px h-12 bg-white/10" aria-hidden="true"></span>
              <Stat value="Daily" label="Tournaments & Scrims" />
              <span className="hidden sm:block w-px h-12 bg-white/10" aria-hidden="true"></span>
              <Stat value="iOS + Android" label="Play Anywhere" />
            </dl>
          </div>

          {/* Mascot */}
          <div
            ref={visualRef}
            className={`relative w-full min-h-[300px] sm:min-h-[380px] lg:min-h-[560px] flex justify-center lg:justify-end items-center fade-in-right ${visualVisible ? 'visible' : ''}`}
          >
            <div
              ref={parallaxRef}
              className="relative parallax-container"
              style={{ transform: `translateY(${offset * 0.25}px)` }}
            >
              <div className="absolute inset-0 glow-warm blur-2xl scale-125 rounded-full" aria-hidden="true"></div>
              <img
                src={heroNinja}
                alt="16Arena ninja mascot leaping into battle"
                width={820}
                height={820}
                fetchPriority="high"
                decoding="async"
                className="relative z-10 w-[260px] sm:w-[340px] lg:w-[460px] h-auto object-contain drop-shadow-[0_0_45px_rgba(255,106,0,0.5)] animate-float"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1.5 text-gray-500 animate-float-slow" aria-hidden="true">
        <span className="text-[10px] font-condensed uppercase tracking-[0.35em]">Scroll</span>
        <span className="material-symbols-outlined text-lg">keyboard_arrow_down</span>
      </div>
    </section>
  );
};

const Stat: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="flex flex-col">
    <dt className="sr-only">{label}</dt>
    <dd className="text-2xl sm:text-3xl font-display font-extrabold text-white leading-none">{value}</dd>
    <span className="text-xs text-gray-400 font-condensed uppercase tracking-widest mt-2">{label}</span>
  </div>
);

export default Hero;

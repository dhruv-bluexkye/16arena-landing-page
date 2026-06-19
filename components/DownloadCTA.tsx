import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import StoreButtons from './StoreButtons';
import heroBg from '../assets/arena-hero-bg.jpg';
import { PLAYER_COUNT } from '../config/links';

const DownloadCTA: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="download" className="relative py-28 lg:py-36 bg-background-dark border-t border-white/5 overflow-hidden">
      <img src={heroBg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/85 to-background-dark" aria-hidden="true"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] glow-warm pointer-events-none" aria-hidden="true"></div>

      <div
        ref={elementRef}
        className={`relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-up ${isVisible ? 'visible' : ''}`}
      >
        <span className="eyebrow justify-center mb-6">Ready to compete</span>
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display font-black text-white uppercase leading-[0.9] display-tight mb-6">
          Your next win is<br />
          <span className="text-gradient">one tap away</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-xl mx-auto mb-10">
          Join <span className="text-white font-semibold">{PLAYER_COUNT}</span> players already
          competing on 16Arena. Free to download on iOS and Android.
        </p>

        <div className="flex justify-center">
          <StoreButtons size="lg" />
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;

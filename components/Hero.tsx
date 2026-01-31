import React from 'react';
import { useScrollAnimation, useParallax } from '../hooks/useScrollAnimation';
import heroNinja from '../assets/hero-ninja.png';

const Hero: React.FC = () => {
  const { elementRef: textRef, isVisible: textVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });
  const { elementRef: visualRef, isVisible: visualVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });
  const { elementRef: parallaxRef, offset } = useParallax(0.3);

  return (
    <section className="relative h-screen overflow-hidden bg-background-dark flex items-center">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-primary/5 blur-[150px] rounded-full pointer-events-none -z-10 transform translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-500/5 blur-[150px] rounded-full pointer-events-none -z-10 transform -translate-x-1/4 translate-y-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full h-full flex items-center pt-20">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center w-full">
          
          {/* Left Column - Text Content (Desktop) / Ordered Content (Mobile) */}
          <div className="flex flex-col w-full lg:col-span-1 space-y-6 lg:space-y-8">
            {/* Main Headline - Order 1 on mobile */}
            <div 
              ref={textRef}
              className={`order-1 fade-in-left ${textVisible ? 'visible' : ''}`}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-white leading-[1.1]">
                The Ultimate<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400 drop-shadow-lg shadow-primary/50">
                  Gaming Arena
                </span>
              </h1>
            </div>

            {/* Play. Compete. Earn Rewards. - Order 2 on mobile */}
            <div className="order-2">
              <p className="text-xl sm:text-2xl font-display text-gray-500 uppercase tracking-widest">
                Play. Compete. Earn Rewards.
              </p>
            </div>

            {/* Other Content (Description & Status) - Order 4 on mobile */}
            <div className="order-4 space-y-6">
              <p className="text-base sm:text-lg text-gray-400 max-w-lg leading-relaxed border-l-2 border-primary/50 pl-4">
                Join high-stakes esports tournaments, compete in casual games, or complete quests to earn rewards. Your skill, your earnings.
              </p>

              <div className="max-w-md relative">
                 <div className="inline-flex items-center gap-4 bg-surface-dark/50 border border-white/10 p-2 pr-6 rounded-full backdrop-blur-md">
                     <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold border border-primary/30 uppercase tracking-wider">Status</span>
                     <span className="text-white font-medium text-sm">Platform Launching Soon</span>
                 </div>
                 <p className="mt-4 text-xs text-gray-500">Follow us on social media for updates.</p>
              </div>
            </div>
          </div>

          {/* Right Column - Ninja Visual Content - Order 3 on mobile */}
          <div 
            ref={visualRef}
            className={`relative w-full min-h-[250px] sm:min-h-[300px] lg:min-h-[500px] flex justify-center items-center order-3 lg:order-2 lg:justify-end fade-in-right ${visualVisible ? 'visible' : ''}`}
          >
            <div 
              ref={parallaxRef}
              className="relative w-full h-full max-w-full max-h-[400px] sm:max-h-[500px] lg:max-h-full flex items-center justify-center parallax-container"
              style={{ transform: `translateY(${offset * 0.3}px)` }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/10 to-transparent blur-3xl rounded-full"></div>
              
              {/* Ninja Image */}
              <img 
                src={heroNinja} 
                alt="Ninja Character" 
                className="relative z-10 w-full h-full max-w-full max-h-[400px] sm:max-h-[500px] lg:max-h-full object-contain drop-shadow-[0_0_30px_rgba(255,87,34,0.4)] animate-float"
              />
              
              {/* Additional Glow Effects */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/10 blur-2xl rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
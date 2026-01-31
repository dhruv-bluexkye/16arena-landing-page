import React from 'react';
import { useScrollAnimation, useParallax } from '../hooks/useScrollAnimation';
import ninja2 from '../assets/ninja-2.png';

const VisualizeSection: React.FC = () => {
  const { elementRef: textRef, isVisible: textVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });
  const { elementRef: visualRef, isVisible: visualVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });
  const { elementRef: parallaxRef, offset } = useParallax(0.2);

  return (
    <section className="py-24 bg-background-dark overflow-hidden relative border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div 
            ref={textRef}
            className={`order-2 lg:order-1 fade-in-left ${textVisible ? 'visible' : ''}`}
          >
            <span className="material-symbols-outlined text-4xl text-primary mb-6 p-3 bg-primary/10 rounded-xl border border-primary/20">calendar_month</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight mb-6">
              Visualize all<br />
              games in one<br />
              place.
            </h2>
            <p className="text-lg text-gray-400 max-w-md leading-relaxed">
              View upcoming tournaments, casual game leaderboards, and make your picks early for additional prizes and bonus points. Stay ahead of the competition.
            </p>
          </div>

          <div 
            ref={visualRef}
            className={`order-1 lg:order-2 relative h-[500px] sm:h-[600px] flex items-end justify-center fade-in-right ${visualVisible ? 'visible' : ''}`}
          >
            <div 
              ref={parallaxRef}
              className="relative w-full h-full max-w-full flex items-end justify-center parallax-container"
              style={{ transform: `translateY(${offset * 0.3}px)` }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/10 to-transparent blur-3xl rounded-full"></div>
              
              {/* Ninja Image */}
              <img 
                src={ninja2} 
                alt="Ninja Character" 
                className="relative z-10 w-full max-w-[400px] h-auto object-contain object-bottom drop-shadow-[0_0_30px_rgba(255,87,34,0.4)] animate-float transform hover:scale-105 transition-transform duration-500"
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

export default VisualizeSection;
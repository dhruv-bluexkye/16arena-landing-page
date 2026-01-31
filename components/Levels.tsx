import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Levels: React.FC = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });
  const { elementRef: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-24 bg-surface-dark relative overflow-hidden border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          ref={titleRef}
          className={`mb-16 fade-in-up ${titleVisible ? 'visible' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
            Who Can Play?
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-transparent rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl">
            16Arena is designed for everyone. Whether you are a pro looking for tournaments or a casual player wanting to earn rewards, we have a place for you.
          </p>
        </div>

        {/* Scrollable Container */}
        <div 
          ref={cardsRef}
          className={`flex flex-col md:flex-row gap-6 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 md:justify-center fade-in-up ${cardsVisible ? 'visible stagger-1' : ''}`}
        >
          
          <PersonaCard 
            icon="trophy"
            title="Esports Athletes" 
            tag="Competitive" 
            desc="Enter high-stakes tournaments for popular titles."
            features={["Major Tournaments", "Cash Prizes", "Team Rankings"]}
          />

          <PersonaCard 
            icon="sports_esports"
            title="Casual Gamers" 
            tag="Skill-Based" 
            desc="Compete in 1v1 skill-based matchmaking games."
            features={["Instant Matchmaking", "Wager System", "Fair Play Anti-Cheat"]}
          />

          <PersonaCard 
            icon="ads_click"
            title="Quest Hunters" 
            tag="Play to Earn" 
            desc="Complete quests and play quick HTML5 games to earn."
            features={["Daily Quests", "HTML5 Mini-games", "Redeem Store"]}
          />

        </div>
      </div>
    </section>
  );
};

interface PersonaCardProps {
  icon: string;
  title: string;
  tag: string;
  desc: string;
  features: string[];
}

const PersonaCard: React.FC<PersonaCardProps> = ({ icon, title, tag, desc, features }) => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });
  
  return (
    <div 
      ref={elementRef}
      className={`snap-start shrink-0 w-full md:w-80 lg:w-96 bg-gradient-to-br from-surface-dark to-black border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:-translate-y-2 transition-all duration-500 shadow-lg hover:shadow-primary/20 fade-in-up ${isVisible ? 'visible' : ''}`}
    >
      
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-2xl">{icon}</span>
            </div>
            <span className="text-[10px] font-bold tracking-widest uppercase opacity-60 border border-white/20 px-2 py-1 rounded bg-black/50">{tag}</span>
        </div>

        <div>
            <h4 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">{title}</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 h-10">{desc}</p>
        </div>

        <div className="space-y-3 mt-auto pt-6 border-t border-white/5">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                <span>{feature}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Levels;
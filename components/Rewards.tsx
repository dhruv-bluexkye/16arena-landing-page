import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Reward {
  icon: string;
  title: string;
  desc: string;
}

const REWARDS: Reward[] = [
  { icon: 'target', title: 'Daily quests', desc: 'Knock out daily challenges and quick games to stack coins on your own schedule.' },
  { icon: 'apps', title: 'Offerwall', desc: 'Explore partner offers and rewarded tasks to top up your balance between matches.' },
  { icon: 'paid', title: 'Coins & shop', desc: 'Spend the coins you earn in the in-app shop for real, redeemable rewards.' },
  { icon: 'play_circle', title: 'Free entry', desc: 'Watch a rewarded ad to join select contests — compete without spending a rupee.' },
];

const Rewards: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="rewards" className="py-24 lg:py-32 bg-surface-dark relative overflow-hidden border-t border-white/5">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-72 glow-warm pointer-events-none" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={elementRef}
          className={`max-w-2xl mb-14 fade-in-up ${isVisible ? 'visible' : ''}`}
        >
          <span className="eyebrow mb-5">Play to earn</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white uppercase leading-[0.95] display-tight mb-5">
            Win more than <span className="text-gradient">matches</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            16Arena is built around a reward loop that keeps paying off — every quest, match, and
            login moves you closer to something real.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {REWARDS.map((r, i) => (
            <RewardCard key={r.title} reward={r} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const RewardCard: React.FC<{ reward: Reward; index: number }> = ({ reward, index }) => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });

  return (
    <div
      ref={elementRef}
      className={`group clip-facet border-glow bg-gradient-to-br from-surface-raised to-surface-dark p-6 hover:-translate-y-1.5 transition-transform duration-500 fade-in-up ${isVisible ? 'visible' : ''} stagger-${index + 1}`}
    >
      <div className="w-12 h-12 p-3 mb-5 clip-facet-sm bg-primary/10 border border-primary/25 text-primary-light flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        <span className="material-symbols-outlined text-2xl">{reward.icon}</span>
      </div>
      <h3 className="text-lg font-display font-bold text-white uppercase tracking-tight mb-2">{reward.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{reward.desc}</p>
    </div>
  );
};

export default Rewards;

import React from 'react';

const ITEMS = [
  'Esports Tournaments',
  'Hyper-Casual Games',
  'Weekly Scrims',
  'Live Leaderboards',
  'Real Rewards',
  'Daily Quests',
  'Teams & Chat',
  'Fair-Play Anti-Cheat',
  'Mobile · PC · Console',
];

const TrustStrip: React.FC = () => {
  const loop = [...ITEMS, ...ITEMS];

  return (
    <div className="relative bg-surface-dark border-y border-white/5 py-4 overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface-dark to-transparent z-10 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface-dark to-transparent z-10 pointer-events-none" aria-hidden="true"></div>

      <div className="marquee-track">
        {loop.map((item, i) => (
          <span
            key={i}
            aria-hidden={i >= ITEMS.length}
            className="flex items-center gap-4 pr-10 text-sm font-condensed font-semibold uppercase tracking-[0.22em] text-gray-400 whitespace-nowrap"
          >
            <span className="text-primary text-lg leading-none">◆</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TrustStrip;

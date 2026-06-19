import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Step {
  num: string;
  icon: string;
  title: string;
  desc: string;
}

const STEPS: Step[] = [
  {
    num: '01',
    icon: 'download',
    title: 'Download & sign up',
    desc: 'Grab 16Arena free on iOS or Android and create your player profile in under a minute.',
  },
  {
    num: '02',
    icon: 'swords',
    title: 'Jump in',
    desc: 'Enter an esports tournament, run a scrim with your squad, or play quick games in the Casual Arena.',
  },
  {
    num: '03',
    icon: 'redeem',
    title: 'Win & earn',
    desc: 'Climb the leaderboards, complete quests, and turn your coins into real rewards from the in-app shop.',
  },
];

const HowItWorks: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="play" className="py-24 lg:py-32 bg-surface-dark relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 grid-bg opacity-50" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={elementRef}
          className={`text-center max-w-2xl mx-auto mb-16 fade-in-up ${isVisible ? 'visible' : ''}`}
        >
          <span className="eyebrow justify-center mb-5">Start in 60 seconds</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white uppercase leading-[0.95] display-tight">
            How it <span className="text-gradient">works</span>
          </h2>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
          {STEPS.map((step, i) => (
            <Step key={step.num} step={step} index={i} isLast={i === STEPS.length - 1} />
          ))}
        </ol>
      </div>
    </section>
  );
};

const Step: React.FC<{ step: Step; index: number; isLast: boolean }> = ({ step, index, isLast }) => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });

  return (
    <li
      ref={elementRef}
      className={`relative fade-in-up ${isVisible ? 'visible' : ''} stagger-${index + 1}`}
    >
      {/* Connector line (desktop) */}
      {!isLast && (
        <span
          className="hidden md:block absolute top-9 left-[calc(50%+2.5rem)] right-[-1.5rem] h-px bg-gradient-to-r from-primary/40 to-transparent"
          aria-hidden="true"
        ></span>
      )}

      <div className="flex flex-col items-center text-center">
        <div className="relative mb-6">
          <div className="w-16 h-16 p-4 clip-facet-sm bg-gradient-to-br from-primary/25 to-primary/10 text-primary-light flex items-center justify-center">
            <span className="material-symbols-outlined text-3xl">{step.icon}</span>
          </div>
          <span className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-primary text-white text-sm font-display font-bold flex items-center justify-center shadow-neon">
            {step.num}
          </span>
        </div>
        <h3 className="text-xl lg:text-2xl font-display font-bold text-white uppercase tracking-tight mb-3">{step.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{step.desc}</p>
      </div>
    </li>
  );
};

export default HowItWorks;

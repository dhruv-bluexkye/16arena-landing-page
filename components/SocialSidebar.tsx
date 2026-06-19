import React from 'react';
import { SOCIALS } from '../lib/socials';

const SocialSidebar: React.FC = () => {
  return (
    <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col gap-3 z-40">
      {SOCIALS.map((s) => (
        <a
          key={s.key}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className="w-10 h-10 rounded-full bg-surface-dark/80 backdrop-blur-sm flex items-center justify-center text-gray-400 hover:text-primary transition-colors shadow-lg border border-white/10 hover:border-primary/50"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d={s.d} />
          </svg>
        </a>
      ))}
      <span className="mx-auto mt-1 w-px h-10 bg-gradient-to-b from-white/15 to-transparent" aria-hidden="true"></span>
    </div>
  );
};

export default SocialSidebar;

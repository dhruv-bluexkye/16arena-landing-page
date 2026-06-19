import React from 'react';
import { APP_STORE_URL, PLAY_STORE_URL } from '../config/links';
import appStoreBadge from '../assets/Appstore White.svg';
import playStoreBadge from '../assets/Playstore White.svg';

interface StoreButtonsProps {
  /** 'lg' for hero, 'sm' for compact areas */
  size?: 'lg' | 'sm';
  className?: string;
}

const StoreButtons: React.FC<StoreButtonsProps> = ({ size = 'lg', className = '' }) => {
  const h = size === 'lg' ? 'h-[52px]' : 'h-[44px]';

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download 16Arena on the App Store"
        className="group inline-block transition-transform duration-300 hover:-translate-y-1 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-xl"
      >
        <img
          src={appStoreBadge}
          alt="Download on the App Store"
          className={`${h} w-auto drop-shadow-lg transition-[filter] duration-300 group-hover:drop-shadow-[0_0_18px_rgba(255,106,0,0.45)]`}
        />
      </a>

      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get 16Arena on Google Play"
        className="group inline-block transition-transform duration-300 hover:-translate-y-1 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-xl"
      >
        <img
          src={playStoreBadge}
          alt="Get it on Google Play"
          className={`${h} w-auto drop-shadow-lg transition-[filter] duration-300 group-hover:drop-shadow-[0_0_18px_rgba(255,106,0,0.45)]`}
        />
      </a>
    </div>
  );
};

export default StoreButtons;

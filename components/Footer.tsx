import React from 'react';
import logo from '../assets/logo.png';
import StoreButtons from './StoreButtons';
import { PLAYER_COUNT } from '../config/links';
import { SOCIALS } from '../lib/socials';
import { scrollToSection } from '../lib/scroll';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-dark border-t border-white/5 pt-16 pb-10 mb-16 lg:mb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr] gap-10 lg:gap-8 pb-12 border-b border-white/5">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1 max-w-sm">
            <img src={logo} alt="16Arena" className="h-9 w-auto mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              India's esports platform for mobile, PC, and console. Compete in tournaments and scrims,
              climb the leaderboards, and earn real rewards. Trusted by <span className="text-white font-semibold">{PLAYER_COUNT}</span> players.
            </p>
            <div className="flex flex-wrap gap-3">
              {SOCIALS.map((s) => (
                <SocialLink key={s.key} href={s.href} label={s.label}>
                  <path d={s.d} />
                </SocialLink>
              ))}
            </div>
          </div>

          {/* Explore */}
          <FooterCol title="Explore">
            <FooterButton onClick={() => scrollToSection('arenas')}>Arenas</FooterButton>
            <FooterButton onClick={() => scrollToSection('play')}>How it works</FooterButton>
            <FooterButton onClick={() => scrollToSection('rewards')}>Rewards</FooterButton>
            <FooterButton onClick={() => scrollToSection('download')}>Download</FooterButton>
          </FooterCol>

          {/* Legal */}
          <FooterCol title="Legal">
            <FooterAnchor href="#privacy">Privacy Policy</FooterAnchor>
            <FooterAnchor href="#terms">Terms of Service</FooterAnchor>
            <FooterAnchor href="#contest-rules">Contest Rules</FooterAnchor>
            <FooterAnchor href="#csae-policy">Child Safety (CSAE)</FooterAnchor>
            <FooterAnchor href="#delete-account">Delete Account</FooterAnchor>
            <FooterAnchor href="#contact">Contact Support</FooterAnchor>
          </FooterCol>

          {/* Shop */}
          <FooterCol title="Shop">
            <FooterAnchor href="#refund-policy">Refund Policy</FooterAnchor>
            <FooterAnchor href="#return-policy">Return Policy</FooterAnchor>
            <FooterAnchor href="#shipping-policy">Shipping Policy</FooterAnchor>
          </FooterCol>

          {/* Download */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-sm font-condensed font-semibold text-white uppercase tracking-[0.2em] mb-4">Get the app</h3>
            <StoreButtons size="sm" />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-sm text-gray-500">
          <p>© 2026 16Arena Labs Private Limited. All rights reserved.</p>
          <p className="flex items-center gap-2 font-condensed uppercase tracking-widest text-xs">
            <span className="text-primary">◆</span> Built in India for gamers
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterCol: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div>
    <h3 className="text-sm font-condensed font-semibold text-white uppercase tracking-[0.2em] mb-4">{title}</h3>
    <ul className="space-y-2.5">{children}</ul>
  </div>
);

const FooterButton: React.FC<{ onClick: () => void; children: React.ReactNode }> = ({ onClick, children }) => (
  <li>
    <button onClick={onClick} className="text-sm text-gray-400 hover:text-primary transition-colors text-left">
      {children}
    </button>
  </li>
);

const FooterAnchor: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <li>
    <a href={href} className="text-sm text-gray-400 hover:text-primary transition-colors">
      {children}
    </a>
  </li>
);

const SocialLink: React.FC<{ children: React.ReactNode; href: string; label: string }> = ({ children, href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-9 h-9 rounded-full bg-background-dark flex items-center justify-center text-gray-400 hover:text-primary transition-colors border border-white/10 hover:border-primary/50"
  >
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      {children}
    </svg>
  </a>
);

export default Footer;

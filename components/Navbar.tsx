import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { APP_STORE_URL } from '../config/links';
import { scrollToSection } from '../lib/scroll';
import { navigate } from '../lib/router';

const NAV_LINKS = [
  { id: 'arenas', label: 'Arenas' },
  { id: 'play', label: 'How it works' },
  { id: 'rewards', label: 'Rewards' },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    setIsMenuOpen(false);
    scrollToSection(id);
  };

  const goHome = () => {
    setIsMenuOpen(false);
    navigate('/');
  };

  return (
    <nav
      className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${
        scrolled ? 'bg-background-dark/85 backdrop-blur-xl border-b border-white/10' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <button onClick={goHome} className="flex-shrink-0 flex items-center cursor-pointer group" aria-label="16Arena home">
            <img src={logo} alt="16Arena" className="h-9 w-auto transition-transform group-hover:scale-105" />
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-9">
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="text-sm font-condensed font-medium uppercase tracking-widest text-gray-300 hover:text-white transition-colors relative after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:w-0 after:bg-primary hover:after:w-full after:transition-all"
              >
                {l.label}
              </button>
            ))}
            <a
              href="/company"
              className="text-sm font-condensed font-medium uppercase tracking-widest text-gray-300 hover:text-white transition-colors relative after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:w-0 after:bg-primary hover:after:w-full after:transition-all"
            >
              Company
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-display font-bold uppercase tracking-wide clip-facet-sm text-white bg-gradient-to-r from-primary-light to-primary hover:from-primary hover:to-primary-hover transition-all shadow-lg shadow-primary/25 hover:-translate-y-0.5"
            >
              <span className="material-symbols-outlined text-lg">download</span>
              Download
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none group"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span className={`block w-6 h-0.5 bg-gray-200 group-hover:bg-primary transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2 bg-primary' : ''}`} />
              <span className={`block w-6 h-0.5 bg-gray-200 group-hover:bg-primary transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`block w-6 h-0.5 bg-gray-200 group-hover:bg-primary transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2 bg-primary' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[72px] bg-black/80 backdrop-blur-sm z-30 md:hidden" onClick={() => setIsMenuOpen(false)} />
      )}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-surface-dark border-b border-white/10 z-40 transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-4 py-5 space-y-1.5">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="block w-full text-left px-4 py-3 rounded-lg text-base font-condensed font-medium uppercase tracking-wider text-gray-200 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all"
            >
              {l.label}
            </button>
          ))}
          <a
            href="/company"
            onClick={() => setIsMenuOpen(false)}
            className="block w-full text-left px-4 py-3 rounded-lg text-base font-condensed font-medium uppercase tracking-wider text-gray-200 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all"
          >
            Company
          </a>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center justify-center gap-2 mt-3 px-4 py-3.5 clip-facet-sm text-base font-display font-bold uppercase tracking-wide text-white bg-gradient-to-r from-primary-light to-primary shadow-lg shadow-primary/25"
          >
            <span className="material-symbols-outlined text-xl">download</span>
            Download the App
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-40 top-0 left-0 bg-background-dark/80 backdrop-blur-xl border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <a href="#" className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
            <img 
              src={logo} 
              alt="16 Arena Logo" 
              className="h-10 w-auto"
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#" className="text-gray-100 font-medium hover:text-primary transition-colors">Home</a>
            <a href="#privacy" className="text-gray-400 font-medium hover:text-primary transition-colors">Privacy</a>
            <a href="#terms" className="text-gray-400 font-medium hover:text-primary transition-colors">Terms</a>
            <a href="#contact" className="text-gray-400 font-medium hover:text-primary transition-colors">Support</a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button disabled className="hidden md:inline-flex items-center justify-center px-6 py-2 border border-gray-700 text-sm font-medium rounded-md text-gray-400 bg-gray-900 cursor-not-allowed opacity-80">
              Coming Soon
            </button>
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none group"
                aria-label="Toggle menu"
              >
                <span 
                  className={`block w-6 h-0.5 bg-gray-400 group-hover:bg-primary transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'rotate-45 translate-y-2 bg-primary' : ''
                  }`}
                />
                <span 
                  className={`block w-6 h-0.5 bg-gray-400 group-hover:bg-primary transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span 
                  className={`block w-6 h-0.5 bg-gray-400 group-hover:bg-primary transition-all duration-300 ease-in-out ${
                    isMenuOpen ? '-rotate-45 -translate-y-2 bg-primary' : ''
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-2xl z-30 top-20 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed top-20 left-0 w-full bg-surface-dark backdrop-blur-2xl border-b border-white/10 z-40 transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
        style={{ backgroundColor: 'rgba(18, 18, 18, 0.98)' }}
      >
        <div className="px-4 pt-4 pb-6 space-y-2 " style={{ backdropFilter: 'blur(20px)' }}>
          <a 
            href="#" 
            onClick={() => setIsMenuOpen(false)}
            className="block px-4 py-3 rounded-lg text-base font-medium text-white bg-primary/20 border border-primary/30 hover:bg-primary/30 hover:border-primary/50 transition-all duration-200"
          >
            Home
          </a>
          <a 
            href="#privacy" 
            onClick={() => setIsMenuOpen(false)}
            className="block px-4 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-200"
          >
            Privacy Policy
          </a>
          <a 
            href="#terms" 
            onClick={() => setIsMenuOpen(false)}
            className="block px-4 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-200"
          >
            Terms of Service
          </a>
          <a 
            href="#contact" 
            onClick={() => setIsMenuOpen(false)}
            className="block px-4 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-200"
          >
            Contact Support
          </a>
          <div className="pt-2">
            <span className="block text-center px-4 py-3 rounded-lg text-base font-medium text-gray-500 bg-background-dark/50 border border-white/10">
              Coming Soon
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
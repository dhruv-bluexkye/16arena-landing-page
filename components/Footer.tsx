import React from 'react';
import logo from '../assets/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-dark border-t border-white/5 py-12 mb-16 lg:mb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
            <img 
              src={logo} 
              alt="16 Arena Logo" 
              className="h-8 w-auto"
            />
        </div>
        
        <div className="flex gap-8 text-sm text-gray-400">
          <a href="#privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#terms" className="hover:text-primary transition-colors">Terms & Policy</a>
          <a href="#contest-rules" className="hover:text-primary transition-colors">Contest Rules</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact Support</a>
        </div>
        
        <div className="text-sm text-gray-600">
          © 2026 16Arena. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
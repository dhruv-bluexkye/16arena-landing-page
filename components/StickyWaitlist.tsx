import React from 'react';

const StickyWaitlist: React.FC = () => {
  return (
    <>
      {/* Mobile Sticky Bar */}
      <div className="sticky bottom-0 z-40 bg-surface-dark/95 backdrop-blur-lg border-t border-white/10 py-4 lg:hidden">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center gap-2">
          <input 
            type="text" 
            placeholder="Enter email..." 
            className="bg-background-dark border border-white/10 rounded text-sm px-4 py-3 w-full text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <button className="bg-primary text-white text-sm font-bold px-4 py-3 rounded whitespace-nowrap shadow-neon">
            Join
          </button>
        </div>
      </div>

      {/* Desktop Floating Bar */}
      <div className="hidden lg:flex fixed bottom-8 left-1/2 -translate-x-1/2 z-40 w-full max-w-3xl pointer-events-none">
        <div className="w-full bg-surface-dark/80 backdrop-blur-md rounded-2xl p-2 pl-4 flex items-center border border-white/10 shadow-2xl shadow-black/80 pointer-events-auto">
          <span className="text-primary mr-3 text-lg font-bold">|</span>
          <input 
            type="email" 
            placeholder="Enter your email address and be the first to access 16Arena" 
            className="bg-transparent border-none text-white placeholder-gray-500 w-full focus:ring-0 text-sm outline-none"
          />
          <button className="bg-primary hover:bg-primary-hover text-white font-medium py-3 px-8 rounded-xl whitespace-nowrap transition-all shadow-lg shadow-primary/20 transform hover:-translate-y-0.5">
            Join the waitlist
          </button>
        </div>
      </div>
    </>
  );
};

export default StickyWaitlist;
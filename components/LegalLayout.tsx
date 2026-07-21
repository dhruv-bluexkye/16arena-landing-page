import React, { useEffect } from 'react';

interface LegalLayoutProps {
  title: string;
  updated: string;
  children: React.ReactNode;
}

/** Shared shell for policy / legal pages — matches the Terms & Privacy layout. */
const LegalLayout: React.FC<LegalLayoutProps> = ({ title, updated, children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <a href="#" className="inline-flex items-center text-primary hover:text-white transition-colors gap-2 mb-6">
            <span className="material-symbols-outlined">arrow_back</span> Back to Home
          </a>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">{title}</h1>
          <p className="text-gray-400">Last updated on: {updated}</p>
        </div>

        <div className="space-y-8 text-gray-300 leading-relaxed font-light bg-surface-dark border border-white/5 p-8 md:p-12 rounded-2xl">
          {children}
        </div>
      </div>
    </div>
  );
};

/** Standard contact block reused across policy pages. */
export const PolicyContact: React.FC = () => (
  <section>
    <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
    <p className="mb-4">For any questions about this policy or a 16Arena Shop order, reach us at:</p>
    <div className="bg-black/30 p-4 rounded-lg border border-white/10">
      <p className="mb-2"><strong className="text-white">Company Name:</strong> 16Arena Labs Private Limited</p>
      <p className="mb-2"><strong className="text-white">Location:</strong> India</p>
      <p><strong className="text-white">Email:</strong> <a href="mailto:support@16arena.com" className="text-primary hover:text-primary-hover">support@16arena.com</a></p>
    </div>
  </section>
);

export default LegalLayout;

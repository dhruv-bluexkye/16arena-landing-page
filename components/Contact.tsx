import React, { useEffect } from 'react';

const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background-dark relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
            <a href="#" className="inline-flex items-center text-primary hover:text-white transition-colors gap-2 mb-6">
                <span className="material-symbols-outlined">arrow_back</span> Back to Home
            </a>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Contact Support</h1>
            <p className="text-gray-400 max-w-2xl">
              Have a question or need support? Reach out to us via email or phone.
            </p>
        </div>

        <div className="max-w-2xl mx-auto">
            <div className="bg-surface-dark border border-white/5 p-8 md:p-12 rounded-2xl shadow-xl">
                <div className="space-y-8">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary border border-primary/20 shrink-0">
                            <span className="material-symbols-outlined">mail</span>
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-lg mb-1">Email Us</h3>
                            <p className="text-gray-400 mb-2">For general inquiries and support.</p>
                            <a href="mailto:16arena.com@gmail.com" className="text-primary hover:text-primary-hover hover:underline text-lg font-medium">16arena.com@gmail.com</a>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary border border-primary/20 shrink-0">
                            <span className="material-symbols-outlined">phone</span>
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-lg mb-1">Call Us</h3>
                            <p className="text-gray-400 mb-2">Reach us directly by phone.</p>
                            <a href="tel:+919409651908" className="text-primary hover:text-primary-hover hover:underline text-lg font-medium">+91 94096 51908</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
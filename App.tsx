import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SocialSidebar from './components/SocialSidebar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import Arenas from './components/Arenas';
import HowItWorks from './components/HowItWorks';
import CommandCenter from './components/CommandCenter';
import Rewards from './components/Rewards';
import StatsBand from './components/StatsBand';
import DownloadCTA from './components/DownloadCTA';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import Terms from './components/Terms';
import Contact from './components/Contact';
import DeleteAccount from './components/DeleteAccount';
import CSAE from './components/CSAE';
import ContestRules from './components/ContestRules';
import RefundPolicy from './components/RefundPolicy';
import ReturnPolicy from './components/ReturnPolicy';
import ShippingPolicy from './components/ShippingPolicy';
import { useScrollProgress } from './hooks/useScrollAnimation';

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash);
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Set initial route
    setRoute(window.location.hash);

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    switch (route) {
      case '#privacy':
        return <PrivacyPolicy />;
      case '#terms':
        return <Terms />;
      case '#contact':
        return <Contact />;
      case '#delete-account':
        return <DeleteAccount />;
      case '#csae-policy':
        return <CSAE />;
      case '#contest-rules':
        return <ContestRules />;
      case '#refund-policy':
        return <RefundPolicy />;
      case '#return-policy':
        return <ReturnPolicy />;
      case '#shipping-policy':
        return <ShippingPolicy />;
      default:
        return (
          <>
            <Hero />
            <TrustStrip />
            <Arenas />
            <HowItWorks />
            <CommandCenter />
            <Rewards />
            <StatsBand />
            <DownloadCTA />
          </>
        );
    }
  };

  return (
    <div className="relative min-h-screen bg-background-dark text-gray-100 font-sans selection:bg-primary selection:text-white overflow-x-hidden">
      {/* Scroll Progress Indicator */}
      <div 
        className="scroll-progress" 
        style={{ width: `${scrollProgress}%` }}
      />
      
      <Navbar />
      <SocialSidebar />
      
      <main>
        {renderContent()}
      </main>

      <Footer />
    </div>
  );
};

export default App;
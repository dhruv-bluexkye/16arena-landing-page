import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SocialSidebar from './components/SocialSidebar';
import Hero from './components/Hero';
import Levels from './components/Levels';
import VisualizeSection from './components/VisualizeSection';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import Terms from './components/Terms';
import Contact from './components/Contact';
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
      default:
        return (
          <>
            <Hero />
            <Levels />
            <VisualizeSection />
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
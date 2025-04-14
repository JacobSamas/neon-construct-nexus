
import React, { useState, useEffect } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import DigitalRain from '../components/DigitalRain';

const Index = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Preload any heavy assets here
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Minimum loading time of 3 seconds for effect
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <>
      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
        <div className="min-h-screen bg-cyber-darkPurple relative">
          {/* Digital rain background effect */}
          <DigitalRain />
          
          {/* Navigation */}
          <NavBar />
          
          {/* Main content sections */}
          <main>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <ProjectsSection />
            <ContactSection />
          </main>
          
          {/* Footer */}
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;

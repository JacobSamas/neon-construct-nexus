
import React, { useEffect, useRef } from 'react';
import ThreeScene from './ThreeScene';

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Add entrance animations when component mounts
    const animateItems = () => {
      const items = containerRef.current?.querySelectorAll('.animate-item');
      
      items?.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('animate-fade-in-up');
        }, 300 * index);
      });
    };
    
    animateItems();
  }, []);
  
  return (
    <section 
      id="home" 
      ref={containerRef}
      className="min-h-screen pt-24 pb-12 relative overflow-hidden flex items-center"
    >
      {/* Background grid effect */}
      <div className="absolute inset-0 cyber-grid opacity-30 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 -left-20 w-40 h-40 rounded-full bg-cyber-blue/20 blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-40 h-40 rounded-full bg-cyber-magenta/20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="md:order-1 order-2">
            <div className="animate-item opacity-0">
              <h2 className="text-cyber-blue font-cyber text-lg md:text-xl uppercase tracking-widest mb-2">Next-Gen Construction</h2>
            </div>
            
            <div className="animate-item opacity-0">
              <h1 className="cyber-title">
                <span className="block glitch-text" data-text="Building The">Building The</span>
                <span className="text-cyber-magenta">Future</span> 
                <span className="block">With Precision Tech</span>
              </h1>
            </div>
            
            <div className="animate-item opacity-0">
              <p className="text-gray-300 text-lg mb-8">
                Pioneering the nexus of cutting-edge robotics, holographic design, and precision engineering 
                to construct the cityscapes of tomorrow, today.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 animate-item opacity-0">
              <a href="#services" className="cyber-btn">
                Our Services
              </a>
              <a href="#contact" className="cyber-btn border-cyber-magenta shadow-neon-magenta">
                Get Started
              </a>
            </div>
          </div>
          
          <div className="md:order-2 order-1 animate-item opacity-0">
            <div className="h-[400px] relative">
              <ThreeScene className="h-full" />
              
              {/* Decorative overlay elements */}
              <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-cyber-blue opacity-60"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-cyber-magenta opacity-60"></div>
              
              {/* Scanning effect */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-cyber-blue opacity-30 animate-scan"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 animate-item opacity-0">
          {[
            { value: '15+', label: 'Years Experience' },
            { value: '87', label: 'Projects Completed' },
            { value: '43', label: 'Tech Patents' },
            { value: '120+', label: 'Engineers' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 border-t border-cyber-blue/30">
              <div className="text-3xl md:text-4xl font-bold mb-2 text-cyber-blue">{stat.value}</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyber-blue rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-cyber-blue rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

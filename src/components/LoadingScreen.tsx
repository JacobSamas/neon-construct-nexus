
import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 500);
          return 100;
        }
        return newProgress;
      });
    }, 200);
    
    return () => clearInterval(interval);
  }, [onComplete]);
  
  return (
    <div className="fixed inset-0 z-50 bg-cyber-darkPurple flex flex-col items-center justify-center">
      {/* Cyberpunk grid background */}
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      
      {/* Glowing orb */}
      <div className="relative mb-8">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyber-blue via-cyber-purple to-cyber-magenta animate-pulse relative overflow-hidden">
          <div className="absolute inset-0 backdrop-blur-md"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="font-cyber text-5xl text-white font-bold">
            <span className="text-cyber-blue">N</span>
            <span className="text-cyber-magenta">C</span>
          </div>
        </div>
        
        {/* Orbiting element */}
        <div className="absolute top-0 left-0 w-full h-full animate-rotate-slow">
          <div className="absolute top-0 left-[calc(50%-4px)] w-2 h-2 bg-cyber-blue rounded-full shadow-neon-blue"></div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full animate-rotate-slow" style={{ animationDelay: '-2s' }}>
          <div className="absolute top-4 right-[calc(50%-4px)] w-2 h-2 bg-cyber-magenta rounded-full shadow-neon-magenta"></div>
        </div>
      </div>
      
      {/* Loading text */}
      <h2 className="cyber-title mb-6 glitch-text" data-text="NEON CONSTRUCT">NEON CONSTRUCT</h2>
      
      {/* Progress bar */}
      <div className="w-64 h-1 bg-cyber-darkPurple/50 rounded-full overflow-hidden mb-4 relative">
        <div 
          className="h-full bg-gradient-to-r from-cyber-blue to-cyber-magenta absolute top-0 left-0 transition-all duration-200"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      {/* Progress text */}
      <div className="font-cyber text-cyber-blue">
        System Loading: {Math.floor(progress)}%
      </div>
      
      {/* Digital rain characters */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className="digital-rain"
            style={{
              left: `${i * 5}%`,
              animationDelay: `${i * 0.1}s`,
              fontSize: `${Math.random() * 8 + 10}px`
            }}
          >
            {Array.from({ length: 20 }).map((_, j) => (
              <div key={j} style={{ opacity: Math.random() * 0.5 + 0.5 }}>
                {String.fromCharCode(Math.floor(Math.random() * 93) + 33)}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;

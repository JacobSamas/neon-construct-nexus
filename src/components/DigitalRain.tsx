
import React, { useEffect, useRef } from 'react';

const DigitalRain: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    
    // Characters to use in the digital rain
    const cyberChars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    
    // Create multiple streams
    const createRainDrop = () => {
      const drop = document.createElement('div');
      drop.className = 'digital-rain';
      
      // Random position
      drop.style.left = `${Math.random() * containerWidth}px`;
      
      // Random animation duration between 3 and 8 seconds
      drop.style.animationDuration = `${3 + Math.random() * 5}s`;
      
      // Create a random string of characters
      const length = 5 + Math.floor(Math.random() * 15);
      let content = '';
      
      for (let i = 0; i < length; i++) {
        content += cyberChars[Math.floor(Math.random() * cyberChars.length)];
      }
      
      drop.textContent = content;
      
      // Add the drop to the container
      container.appendChild(drop);
      
      // Remove the drop when animation completes
      drop.addEventListener('animationend', () => {
        drop.remove();
      });
    };
    
    // Create initial drops
    for (let i = 0; i < 20; i++) {
      setTimeout(() => createRainDrop(), Math.random() * 2000);
    }
    
    // Continue creating new drops
    const interval = setInterval(() => {
      if (Math.random() > 0.7) { // 30% chance to create a new drop
        createRainDrop();
      }
    }, 200);
    
    return () => {
      clearInterval(interval);
    };
  }, []);
  
  return <div ref={containerRef} className="digital-rain-container"></div>;
};

export default DigitalRain;

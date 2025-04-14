
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-cyber-darkPurple/80 backdrop-blur-md shadow-neon-blue' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="font-cyber text-2xl text-white font-bold group">
            <span className="text-cyber-blue mr-1">NEON</span>
            <span className="relative">
              CONSTRUCT
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyber-magenta group-hover:w-full transition-all duration-300"></span>
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item, index) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className={`font-cyber text-white hover:text-cyber-blue transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-cyber-blue after:transition-all after:duration-300 ${index === 0 ? 'after:w-full' : ''}`}
              >
                {item}
              </a>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-cyber-blue"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden bg-cyber-darkPurple/95 backdrop-blur-md border-t border-cyber-blue/30 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="container mx-auto px-4 py-4 space-y-4">
          {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="flex items-center text-white hover:text-cyber-blue transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              <ChevronRight size={16} className="mr-2" />
              <span className="font-cyber">{item}</span>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default NavBar;

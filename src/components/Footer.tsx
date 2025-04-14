
import React from 'react';
import { Github, Twitter, Linkedin, Instagram, ChevronRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden bg-cyber-darkPurple/90 backdrop-blur-sm border-t border-cyber-blue/30 pt-16 pb-8">
      {/* Background grid */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-magenta"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company info */}
          <div>
            <div className="font-cyber text-2xl text-white font-bold mb-4">
              <span className="text-cyber-blue mr-1">NEON</span>
              <span>CONSTRUCT</span>
            </div>
            <p className="text-gray-400 mb-4">
              Pioneering the future of construction with cutting-edge technology and revolutionary building methodologies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyber-blue transition-colors" aria-label="Github">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyber-blue transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyber-blue transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyber-blue transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h4 className="font-cyber text-white text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-cyber-blue transition-colors flex items-center"
                  >
                    <ChevronRight size={14} className="mr-2" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-cyber text-white text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              {[
                'Holographic Construction', 
                'AI-Powered Design', 
                'Robotic Assembly', 
                'Quantum Infrastructure',
                'Nano-Material Fabrication'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#services" 
                    className="text-gray-400 hover:text-cyber-blue transition-colors flex items-center"
                  >
                    <ChevronRight size={14} className="mr-2" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="font-cyber text-white text-lg mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates on futuristic construction technologies.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-cyber-black/50 border border-cyber-blue/30 text-white p-2 rounded-l-md focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue focus:outline-none transition-all flex-grow"
              />
              <button 
                type="submit" 
                className="bg-cyber-blue hover:bg-cyber-magenta transition-colors text-white p-2 rounded-r-md"
              >
                <ChevronRight size={20} />
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} NEON CONSTRUCT. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-cyber-blue text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-cyber-blue text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-cyber-blue text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

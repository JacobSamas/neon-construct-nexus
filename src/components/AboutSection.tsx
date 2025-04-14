
import React, { useRef, useEffect } from 'react';
import { ShieldCheck, Cpu, Bot, Lightbulb } from 'lucide-react';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const animatedElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
            animatedElements?.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add('animate-fade-in-up');
                el.classList.remove('opacity-0');
              }, i * 200);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section id="about" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyber-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyber-magenta/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="cyber-subtitle mb-2">About Our Company</h2>
          <h3 className="cyber-title">Pioneering Construction<br />In The Digital Age</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll opacity-0">
            <div className="relative border-2 border-cyber-blue/50 p-1 rounded-md bg-cyber-darkPurple/50 shadow-neon-blue">
              <div className="aspect-video relative overflow-hidden rounded">
                {/* Video placeholder - in a real implementation, you'd have a video here */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/20 to-cyber-magenta/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-block p-6 rounded-full border-4 border-cyber-blue animate-pulse mb-4">
                      <svg className="w-12 h-12 text-cyber-blue" fill="currentColor" viewBox="0 0 24 24">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                    <p className="text-white font-cyber">Company Overview Video</p>
                  </div>
                </div>
                
                {/* Video overlay design elements */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-cyber-blue"></div>
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-cyber-magenta"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-cyber-magenta"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-cyber-blue"></div>
              </div>
              
              {/* Tech decorations */}
              <div className="absolute -top-2 -right-2 h-4 w-4 bg-cyber-blue animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 h-4 w-4 bg-cyber-magenta animate-pulse"></div>
            </div>
          </div>
          
          <div>
            <div className="animate-on-scroll opacity-0">
              <p className="text-gray-300 mb-6">
                At <span className="text-cyber-blue font-bold">NEON CONSTRUCT</span>, we're redefining the construction industry through advanced technological 
                innovation and revolutionary building methodologies. Founded in 2030, our team combines centuries of 
                collective expertise with cutting-edge robotic systems and AI-powered design.
              </p>
            </div>
            
            <div className="animate-on-scroll opacity-0">
              <p className="text-gray-300 mb-8">
                Our proprietary construction drones, holographic blueprinting, and nano-material fabrication 
                allow us to complete projects with unprecedented speed, precision, and sustainability.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <ShieldCheck className="text-cyber-blue" size={28} />, title: 'Certified Security', description: 'Quantum-encrypted building systems' },
                { icon: <Cpu className="text-cyber-magenta" size={28} />, title: 'AI Integration', description: 'Self-optimizing construction processes' },
                { icon: <Bot className="text-cyber-blue" size={28} />, title: 'Robotic Precision', description: 'Nanometer-accurate assembly' },
                { icon: <Lightbulb className="text-cyber-magenta" size={28} />, title: 'Sustainable Vision', description: 'Zero-emission building technologies' }
              ].map((feature, index) => (
                <div key={index} className="animate-on-scroll opacity-0 bg-cyber-darkPurple/50 border border-cyber-blue/20 p-4 rounded-md hover:shadow-neon-blue transition-all duration-300">
                  <div className="mb-3">{feature.icon}</div>
                  <h4 className="font-cyber text-white text-lg mb-1">{feature.title}</h4>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

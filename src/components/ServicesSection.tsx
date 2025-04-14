
import React, { useRef, useEffect } from 'react';
import { Building, Cpu, Cog, ChevronRight, Database, Layers, Lightbulb } from 'lucide-react';

const ServicesSection: React.FC = () => {
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
              }, i * 150);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  // Service card hover effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };
  
  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  };
  
  const services = [
    {
      icon: <Building size={32} className="text-cyber-blue" />,
      title: 'Holographic Construction',
      description: 'Building through advanced holographic projection and nano-material solidification technology.',
      features: ['Real-time adjustments', 'Zero material waste', 'Quantum precision']
    },
    {
      icon: <Cpu size={32} className="text-cyber-magenta" />,
      title: 'AI-Powered Design',
      description: 'Self-evolving architectural designs that adapt to environmental and usage patterns.',
      features: ['Neural network modeling', 'Adaptive structures', 'Climate responsive']
    },
    {
      icon: <Cog size={32} className="text-cyber-blue" />,
      title: 'Robotic Assembly',
      description: 'Swarm robotics that work in perfect coordination to assemble structures with microscopic precision.',
      features: ['24/7 operation', 'Remote monitoring', 'Self-repairing']
    },
    {
      icon: <Database size={32} className="text-cyber-magenta" />,
      title: 'Quantum Infrastructure',
      description: 'Buildings with integrated quantum computing cores and neural network connectivity.',
      features: ['Encrypted systems', 'Smart building AI', 'IoT integration']
    },
    {
      icon: <Layers size={32} className="text-cyber-blue" />,
      title: 'Nano-Material Fabrication',
      description: 'Custom-developed building materials with programmable properties and self-healing capabilities.',
      features: ['Extreme durability', 'Adaptive properties', 'Energy generating']
    },
    {
      icon: <Lightbulb size={32} className="text-cyber-magenta" />,
      title: 'Sustainable Solutions',
      description: 'Zero-emission building technologies with integrated renewable energy generation and carbon capture.',
      features: ['Carbon negative', 'Energy positive', 'Waste recycling']
    }
  ];
  
  return (
    <section id="services" ref={sectionRef} className="py-20 relative overflow-hidden bg-cyber-darkPurple/60">
      {/* Background elements */}
      <div className="absolute inset-0 cyber-grid opacity-20 z-0"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-cyber-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-cyber-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="cyber-subtitle mb-2">Our Services</h2>
          <h3 className="cyber-title">Futuristic Construction <br />Technology</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Leveraging the most advanced technologies to revolutionize how structures are designed, 
            built, and maintained in the digital age.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="animate-on-scroll opacity-0 cursor-pointer group transition-all duration-300 ease-out"
              style={{ transitionDelay: `${index * 50}ms` }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="bg-gradient-to-br from-cyber-darkPurple to-cyber-darkPurple/80 p-6 rounded-lg border border-cyber-blue/20 h-full transition-all duration-500 overflow-hidden group-hover:shadow-neon-blue">
                <div className="mb-4">{service.icon}</div>
                
                <h4 className="font-cyber text-white text-xl mb-3">{service.title}</h4>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-400">
                      <ChevronRight size={16} className="text-cyber-blue mt-1 mr-2 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a href="#contact" className="inline-flex items-center text-cyber-blue hover:text-cyber-magenta transition-colors font-cyber">
                  <span>Learn more</span>
                  <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
                
                {/* Background decorative element */}
                <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-cyber-blue/5 to-cyber-magenta/5 group-hover:scale-150 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

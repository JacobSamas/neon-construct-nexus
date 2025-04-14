
import React, { useRef, useEffect, useState } from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Neo Tokyo Tower',
    category: 'Commercial',
    description: 'A 300-story self-sustaining vertical city with integrated quantum computing core.',
    image: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    highlight: '#1EAEDB'
  },
  {
    title: 'Nexus Bridge System',
    category: 'Infrastructure',
    description: 'Suspended magnetic levitation transit system connecting major urban centers.',
    image: 'https://images.unsplash.com/photo-1545127398-14699f92334b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80',
    highlight: '#D946EF'
  },
  {
    title: 'Bio-Adaptive Habitat',
    category: 'Residential',
    description: 'Self-evolving residential complex that adapts to environmental changes and resident preferences.',
    image: 'https://images.unsplash.com/photo-1601436155198-2ebfea8117b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80',
    highlight: '#8B5CF6'
  },
  {
    title: 'Quantum Data Center',
    category: 'Technology',
    description: 'Zero-latency data processing facility with integrated neural network architecture.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1634&q=80',
    highlight: '#1EAEDB'
  }
];

const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
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
    <section id="projects" ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-20 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="cyber-subtitle mb-2">Featured Projects</h2>
          <h3 className="cyber-title">Our Latest Innovations</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our portfolio of cutting-edge construction projects that are redefining urban landscapes worldwide.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="animate-on-scroll opacity-0 group relative"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className={`relative overflow-hidden rounded-lg transition-all duration-500 ${activeIndex === index ? 'shadow-lg' : ''}`}>
                {/* Project image with overlay */}
                <div className="relative">
                  <div 
                    className="aspect-video bg-cover bg-center rounded-lg transition-all duration-500 group-hover:scale-105" 
                    style={{ backgroundImage: `url(${project.image})` }}
                  ></div>
                  
                  {/* Color overlay */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-cyber-darkPurple via-transparent to-transparent opacity-80 rounded-lg"
                  ></div>
                  
                  {/* Scanning line effect */}
                  <div className={`absolute inset-0 overflow-hidden rounded-lg ${activeIndex === index ? 'opacity-70' : 'opacity-0'} transition-opacity duration-300`}>
                    <div 
                      className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[color:var(--highlight)] to-transparent opacity-20"
                      style={{ 
                        '--highlight': project.highlight, 
                        transform: 'translateY(-100%)',
                        animation: activeIndex === index ? 'scan 2s linear infinite' : 'none' 
                      } as React.CSSProperties}
                    ></div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="mb-2">
                    <span 
                      className="text-xs font-semibold px-3 py-1 rounded-full" 
                      style={{ 
                        backgroundColor: `${project.highlight}33`,
                        color: project.highlight
                      }}
                    >
                      {project.category}
                    </span>
                  </div>
                  <h4 className="text-white font-cyber text-xl mb-2 relative inline-block">
                    {project.title}
                    <div 
                      className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300"
                      style={{ backgroundColor: project.highlight }}
                    ></div>
                  </h4>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <a 
                    href="#" 
                    className="inline-flex items-center transition-all duration-300 font-cyber"
                    style={{ color: project.highlight }}
                  >
                    <span>View Project</span>
                    <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
                
                {/* Tech corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 transition-all duration-300 group-hover:w-12 group-hover:h-12"
                  style={{ borderColor: project.highlight }}
                ></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 transition-all duration-300 group-hover:w-12 group-hover:h-12"
                  style={{ borderColor: project.highlight }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-on-scroll opacity-0">
          <a href="#" className="cyber-btn inline-block">
            View All Projects
          </a>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;

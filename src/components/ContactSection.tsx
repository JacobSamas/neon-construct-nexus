
import React, { useRef, useEffect, useState } from 'react';
import { Send, MessageSquare, Mail, Phone, MapPin } from 'lucide-react';
import { toast } from 'sonner';

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
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
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully!', {
      description: 'We will get back to you as soon as possible.',
      position: 'top-right'
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };
  
  return (
    <section id="contact" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute bottom-0 right-0 w-full h-2/3 bg-gradient-to-t from-cyber-darkPurple/50 to-transparent"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-cyber-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-cyber-magenta/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="cyber-subtitle mb-2">Get In Touch</h2>
          <h3 className="cyber-title">Let's Build The Future Together</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Ready to start your next-generation construction project? Our team of experts is 
            waiting to bring your vision to life with cutting-edge technology.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="animate-on-scroll opacity-0">
            <div className="bg-cyber-darkPurple/80 backdrop-blur-sm border border-cyber-blue/30 p-6 rounded-lg shadow-neon-blue">
              <h4 className="font-cyber text-white text-xl mb-6 flex items-center">
                <MessageSquare size={20} className="text-cyber-blue mr-2" />
                Send Us A Message
              </h4>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2 text-sm">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-cyber-black/50 border border-cyber-blue/30 text-white p-3 rounded-md focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue focus:outline-none transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2 text-sm">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-cyber-black/50 border border-cyber-blue/30 text-white p-3 rounded-md focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue focus:outline-none transition-all"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2 text-sm">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-cyber-black/50 border border-cyber-blue/30 text-white p-3 rounded-md focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue focus:outline-none transition-all"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2 text-sm">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-cyber-black/50 border border-cyber-blue/30 text-white p-3 rounded-md focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue focus:outline-none transition-all"
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="cyber-btn w-full flex justify-center items-center">
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
          {/* Contact information */}
          <div>
            <div className="animate-on-scroll opacity-0 mb-8">
              <h4 className="font-cyber text-white text-xl mb-4">Contact Information</h4>
              <p className="text-gray-300 mb-6">
                Our headquarters is located in the heart of Neo Tokyo. Feel free to reach out through any of the following channels.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-cyber-blue/20 p-3 rounded-md mr-4">
                    <Mail size={20} className="text-cyber-blue" />
                  </div>
                  <div>
                    <h5 className="text-white font-cyber text-sm mb-1">Email</h5>
                    <a href="mailto:info@neonconstruct.com" className="text-gray-300 hover:text-cyber-blue transition-colors">info@neonconstruct.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-cyber-magenta/20 p-3 rounded-md mr-4">
                    <Phone size={20} className="text-cyber-magenta" />
                  </div>
                  <div>
                    <h5 className="text-white font-cyber text-sm mb-1">Phone</h5>
                    <a href="tel:+8190123456789" className="text-gray-300 hover:text-cyber-magenta transition-colors">+81 90-1234-5678</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-cyber-purple/20 p-3 rounded-md mr-4">
                    <MapPin size={20} className="text-cyber-purple" />
                  </div>
                  <div>
                    <h5 className="text-white font-cyber text-sm mb-1">Location</h5>
                    <p className="text-gray-300">Neo Tokyo Tower, Level 85<br />Shinjuku, Tokyo, Japan</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map placeholder */}
            <div className="animate-on-scroll opacity-0">
              <div className="bg-cyber-darkPurple/50 border border-cyber-blue/30 rounded-lg overflow-hidden h-[250px] relative">
                <div className="absolute inset-0 cyber-grid opacity-30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-block w-12 h-12 rounded-full border-2 border-cyber-magenta animate-ping mb-4 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <MapPin size={16} className="text-cyber-magenta" />
                      </div>
                    </div>
                    <p className="text-white font-cyber">Interactive Map Coming Soon</p>
                  </div>
                </div>
                
                {/* Tech decoration */}
                <div className="absolute top-4 right-4 w-24 h-24 border-t-2 border-r-2 border-cyber-blue/50"></div>
                <div className="absolute bottom-4 left-4 w-24 h-24 border-b-2 border-l-2 border-cyber-magenta/50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

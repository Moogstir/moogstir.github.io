import React, { useState, useEffect } from 'react';
import { Feather } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-app-bg/95 backdrop-blur-md border-b border-app-border py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <Feather className="text-app-highlight transition-transform group-hover:rotate-12" size={24} />
          <span className="font-serif text-2xl font-bold tracking-wide text-white">Novelative</span>
        </div>
        
        <div className="hidden md:flex gap-8 text-sm font-medium text-app-muted">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#visualize" className="hover:text-white transition-colors">Graph View</a>
          <a href="#download" className="hover:text-white transition-colors">Pricing</a>
        </div>
        
        <a href="#download" className="bg-app-highlight hover:bg-yellow-400 text-app-bg px-5 py-2 rounded-full font-semibold text-sm transition-all transform hover:scale-105 shadow-lg shadow-app-highlight/20">
          Get Started
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
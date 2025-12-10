import React from 'react';
import { Download, PlayCircle } from 'lucide-react';
import GraphBackground from './ui/GraphBackground';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Hero: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative min-h-screen flex flex-col items-center pt-32 pb-20 overflow-hidden">
      <GraphBackground />
      
      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-app-bg/10 via-app-bg/60 to-app-bg z-0 pointer-events-none"></div>

      <div ref={ref} className={`relative z-10 max-w-5xl mx-auto px-6 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-app-highlight/30 bg-app-highlight/10 text-app-highlight text-sm font-semibold mb-6">
          <span className="w-2 h-2 rounded-full bg-app-highlight animate-pulse"></span>
          Offline-First Writing Studio
        </div>

        <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6 text-white">
          The most powerful tool for <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-app-highlight to-yellow-200">
            complex narratives.
          </span>
        </h1>

        <p className="text-xl text-app-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          Novelative is a distraction-free environment built for world-builders. 
          Combine linear drafting with nonlinear plotting and visualize every connection.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <button className="bg-app-highlight text-app-bg px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all shadow-xl shadow-app-highlight/20 flex items-center justify-center gap-2 transform hover:-translate-y-1">
            <Download size={20} /> Download for Free
          </button>
          <button className="border border-app-border hover:border-app-muted bg-app-surface/50 text-white px-8 py-4 rounded-lg font-bold text-lg backdrop-blur-sm transition-all flex items-center justify-center gap-2 hover:bg-app-surface">
            <PlayCircle size={20} /> See How It Works
          </button>
        </div>

        {/* Hero App Screenshot */}
        <div className="relative max-w-5xl mx-auto transform hover:scale-[1.01] transition-transform duration-700 ease-out">
          <img 
            src="assets/app-screenshot.png" 
            alt="Novelative App Interface" 
            className="w-full h-auto rounded-lg shadow-2xl border border-app-border bg-app-bg"
          />
          
          {/* Decorative Glow behind the image */}
          <div className="absolute -inset-4 bg-app-highlight/10 blur-3xl -z-10 rounded-full opacity-50"></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
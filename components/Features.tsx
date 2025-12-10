import React from 'react';
import AppWindow from './ui/AppWindow';
import { GraphViewMockup, CanvasMockup } from './ui/Mockups';
import { Network, GitMerge, FileText, Layers } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const FeatureBlock = ({ title, subtitle, description, icon: Icon, mockup, align = 'left' }: any) => {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <div ref={ref} className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
      <div className={`md:w-1/2 ${align === 'right' ? 'md:order-2' : 'md:order-1'}`}>
        <div className="text-app-highlight font-bold tracking-widest text-sm uppercase mb-3 flex items-center gap-2">
            <Icon size={16} /> {subtitle}
        </div>
        <h2 className="font-serif text-4xl font-bold mb-6 text-white">{title}</h2>
        <p className="text-app-muted text-lg mb-6 leading-relaxed">
          {description}
        </p>
        <ul className="space-y-4 text-app-text/90">
            {['Physics-Based Layout', 'Tag Clustering', 'Instant Filters'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-app-highlight" />
                    {item}
                </li>
            ))}
        </ul>
      </div>
      <div className={`md:w-1/2 w-full ${align === 'right' ? 'md:order-1' : 'md:order-2'}`}>
        <AppWindow className="h-[350px] md:h-[400px]">
            {mockup}
        </AppWindow>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-app-bg relative">
      <div className="max-w-7xl mx-auto px-6 space-y-32">
        
        {/* Feature 1: Graph */}
        <FeatureBlock 
            subtitle="The Graph View"
            title="Visualize Your World's Connections."
            description="Stop drawing diagrams by hand. Novelative automatically maps your project files as a physics-based, force-directed graph. See how characters, locations, and plot points intertwine."
            icon={Network}
            mockup={<GraphViewMockup />}
            align="left"
        />

        {/* Feature 2: Canvas */}
        <FeatureBlock 
            subtitle="Nonlinear Plotting"
            title="Map Out Complex Story Arcs."
            description="Use the infinite canvas to organize scenes visually. Drag and drop characters onto the board, create timelines, and route connections around obstacles automatically."
            icon={GitMerge}
            mockup={<CanvasMockup />}
            align="right"
        />

        {/* Feature 3: Organization (Simpler text block for variety) */}
        <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-app-border">
            {[
                { icon: FileText, title: "Rich Text Editor", desc: "A clean, distraction-free writing environment with markdown support and Wiki-linking." },
                { icon: Layers, title: "Smart Tagging", desc: "Tags inherit downwards. Label a folder 'Lore', and every file inside automatically gets tagged." },
                { icon: Network, title: "Link Analysis", desc: "Instantly see which documents are orphans and which are the pillars of your story." }
            ].map((f, i) => (
                <div key={i} className="bg-app-surface/30 border border-app-border/50 p-6 rounded-xl hover:bg-app-surface/60 transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-app-highlight/10 flex items-center justify-center text-app-highlight mb-4">
                        <f.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
                    <p className="text-app-muted">{f.desc}</p>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
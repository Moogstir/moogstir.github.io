import React from 'react';
import { Feather, Twitter, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-app-darker py-16 border-t border-app-border text-sm text-app-muted">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6 text-white">
            <Feather className="text-app-highlight" size={24} />
            <span className="font-serif text-xl font-bold">Novelative</span>
          </div>
          <p className="max-w-xs mb-6 leading-relaxed">
            A powerful, offline-first writing studio designed for novelists, dungeon masters, and world-builders.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-app-surface flex items-center justify-center hover:bg-app-highlight hover:text-app-bg transition-colors"><Twitter size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-app-surface flex items-center justify-center hover:bg-app-highlight hover:text-app-bg transition-colors"><Github size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-app-surface flex items-center justify-center hover:bg-app-highlight hover:text-app-bg transition-colors"><Mail size={18} /></a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Product</h4>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-app-highlight transition-colors">Download Beta</a></li>
            <li><a href="#" className="hover:text-app-highlight transition-colors">Changelog</a></li>
            <li><a href="#" className="hover:text-app-highlight transition-colors">Documentation</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Legal</h4>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-app-highlight transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-app-highlight transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-app-highlight transition-colors">EULA</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-app-border text-center text-xs opacity-60">
        &copy; {new Date().getFullYear()} Novelative. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
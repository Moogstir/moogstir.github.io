import React from 'react';
import { Minus, Square, X } from 'lucide-react';

interface AppWindowProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

const AppWindow: React.FC<AppWindowProps> = ({ children, title = "Novelative", className = "" }) => {
  return (
    <div className={`flex flex-col rounded-lg overflow-hidden border border-app-border bg-app-bg shadow-2xl shadow-black/60 ${className}`}>
      {/* Title Bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-app-darker border-b border-app-border select-none">
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors" />
          </div>
          {title && <span className="text-xs text-app-muted font-medium">{title}</span>}
        </div>
        <div className="flex gap-3 text-app-muted">
          <Minus size={12} />
          <Square size={10} />
          <X size={12} />
        </div>
      </div>
      
      {/* App Content */}
      <div className="flex-1 overflow-hidden relative">
        {children}
      </div>
    </div>
  );
};

export default AppWindow;
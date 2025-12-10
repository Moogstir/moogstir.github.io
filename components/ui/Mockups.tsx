import React from 'react';
import { 
  Search, MoreHorizontal, Layout, Plus 
} from 'lucide-react';

// --- 2. Graph View Visualization ---
export const GraphViewMockup = () => {
    return (
        <div className="h-full w-full bg-app-bg relative overflow-hidden flex items-center justify-center select-none">
             {/* Grid Background */}
             <div className="absolute inset-0 opacity-10" 
                  style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
             </div>
             
             {/* Nodes */}
             <div className="relative w-full h-full">
                {/* SVG Connections */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <line x1="50%" y1="50%" x2="30%" y2="30%" stroke="#444" strokeWidth="1" />
                    <line x1="50%" y1="50%" x2="70%" y2="40%" stroke="#444" strokeWidth="1" />
                    <line x1="50%" y1="50%" x2="50%" y2="70%" stroke="#444" strokeWidth="1" />
                    <line x1="30%" y1="30%" x2="20%" y2="50%" stroke="#444" strokeWidth="1" />
                </svg>

                {/* Central Node */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer">
                    <div className="w-4 h-4 rounded-full bg-app-highlight shadow-[0_0_15px_rgba(251,188,4,0.5)] group-hover:scale-125 transition-transform" />
                    <span className="mt-2 text-xs font-bold text-app-highlight">The Artifact</span>
                </div>

                {/* Satellite Nodes */}
                <div className="absolute top-[30%] left-[30%] flex flex-col items-center cursor-pointer">
                    <div className="w-3 h-3 rounded-full bg-blue-500" />
                    <span className="mt-2 text-[10px] text-blue-400">Kaelen</span>
                </div>

                <div className="absolute top-[40%] left-[70%] flex flex-col items-center cursor-pointer">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="mt-2 text-[10px] text-red-400">Antagonist</span>
                </div>

                <div className="absolute top-[70%] left-[50%] flex flex-col items-center cursor-pointer">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="mt-2 text-[10px] text-green-400">Locations</span>
                </div>
                
                {/* Tag Cluster Panel */}
                <div className="absolute top-4 left-4 p-3 bg-app-surface/90 backdrop-blur border border-app-border rounded-lg shadow-lg w-48">
                    <div className="text-[10px] text-app-muted uppercase font-bold mb-2">Filters</div>
                    <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-0.5 bg-blue-500/10 text-blue-400 border border-blue-500/30 rounded text-[10px]">Characters</span>
                        <span className="px-2 py-0.5 bg-red-500/10 text-red-400 border border-red-500/30 rounded text-[10px]">Plot</span>
                        <span className="px-2 py-0.5 bg-green-500/10 text-green-400 border border-green-500/30 rounded text-[10px]">Lore</span>
                    </div>
                </div>
             </div>
        </div>
    );
};

// --- 3. Tagging / Canvas Mockup ---
export const CanvasMockup = () => {
    return (
        <div className="h-full w-full bg-app-bg relative flex flex-col">
            <div className="h-8 border-b border-app-border bg-app-sidebar flex items-center px-3 gap-2">
                <span className="text-xs text-app-muted">Canvas / Plot Board</span>
            </div>
            <div className="flex-1 relative overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]">
                 {/* Card 1 */}
                 <div className="absolute top-10 left-10 w-48 bg-app-surface border border-app-border rounded shadow-lg p-3">
                     <div className="flex justify-between items-center mb-2">
                         <span className="text-xs font-bold text-app-highlight">Inciting Incident</span>
                         <MoreHorizontal size={12} className="text-app-muted" />
                     </div>
                     <p className="text-[10px] text-app-muted leading-relaxed">Hero finds the map in the old library.</p>
                     <div className="mt-2 flex gap-1">
                         <div className="w-2 h-2 rounded-full bg-red-500" />
                     </div>
                 </div>

                 {/* Connection Line (CSS drawn) */}
                 <div className="absolute top-[70px] left-[250px] w-16 h-[2px] bg-app-border" />
                 <div className="absolute top-[66px] left-[310px] w-0 h-0 border-t-[4px] border-t-transparent border-l-[8px] border-l-app-border border-b-[4px] border-b-transparent" />

                 {/* Card 2 */}
                 <div className="absolute top-10 left-[320px] w-48 bg-app-surface border border-app-border rounded shadow-lg p-3">
                     <div className="flex justify-between items-center mb-2">
                         <span className="text-xs font-bold text-white">The Journey Begins</span>
                         <MoreHorizontal size={12} className="text-app-muted" />
                     </div>
                     <p className="text-[10px] text-app-muted leading-relaxed">Leaving the village at dawn.</p>
                 </div>
                 
                 {/* Floating Toolbar */}
                 <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-app-surface border border-app-border rounded-full px-4 py-2 flex gap-4 shadow-xl">
                     <Plus size={16} className="text-app-highlight cursor-pointer hover:scale-110 transition-transform" />
                     <Search size={16} className="text-app-muted cursor-pointer hover:text-white" />
                     <Layout size={16} className="text-app-muted cursor-pointer hover:text-white" />
                 </div>
            </div>
        </div>
    );
}
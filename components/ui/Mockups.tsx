import React from 'react';
import { 
  FileText, Folder, Hash, Search, MoreHorizontal, 
  ChevronRight, ChevronDown, Feather, Layout, Network, 
  Maximize2, X, Plus 
} from 'lucide-react';

// --- Reusable Sidebar Item ---
const SidebarItem = ({ icon: Icon, label, active = false, hasChildren = false, indent = 0 }: any) => (
  <div className={`flex items-center gap-2 px-2 py-1 rounded-sm text-sm cursor-default ${active ? 'bg-app-highlight/10 text-app-highlight' : 'text-app-muted hover:text-app-text hover:bg-white/5'}`} style={{ paddingLeft: `${indent * 12 + 8}px` }}>
    {hasChildren && <ChevronDown size={12} className={active ? "text-app-text" : "text-app-muted"} />}
    {!hasChildren && indent > 0 && <span className="w-3" />}
    <Icon size={14} className={active ? "text-app-highlight" : "text-app-muted"} />
    <span className="truncate">{label}</span>
  </div>
);

// --- 1. The Main Split View Mockup ---
export const MainSplitViewMockup = () => {
  return (
    <div className="flex h-full text-app-text bg-app-bg text-xs md:text-sm font-sans">
      {/* Sidebar */}
      <div className="w-48 md:w-60 bg-app-sidebar border-r border-app-border flex flex-col flex-shrink-0">
        <div className="p-3 border-b border-app-border flex justify-between items-center text-app-muted">
          <span className="font-bold tracking-wider text-[10px] uppercase">My Novel</span>
          <Layout size={14} />
        </div>
        <div className="flex-1 p-2 space-y-0.5 overflow-y-auto">
           <SidebarItem icon={Search} label="Search files..." />
           <div className="h-4" />
           <SidebarItem icon={Folder} label="Draft" hasChildren />
           <SidebarItem icon={Folder} label="Chapter 1: The Spark" indent={1} />
           <SidebarItem icon={FileText} label="Scene 1 - Intro" indent={2} />
           <SidebarItem icon={FileText} label="Scene 2 - The Meeting" indent={2} active />
           <SidebarItem icon={Folder} label="Characters" hasChildren />
           <SidebarItem icon={Network} label="Relationship Map" indent={1} />
        </div>
      </div>

      {/* Editor Area */}
      <div className="flex-1 flex flex-col bg-app-bg relative">
        {/* Editor Tabs */}
        <div className="flex border-b border-app-border bg-app-sidebar">
          <div className="flex items-center gap-2 px-4 py-2 bg-app-bg border-t-2 border-app-highlight text-app-text border-r border-app-border text-xs">
            <FileText size={12} className="text-app-highlight" />
            <span>Scene 2 - The Meeting</span>
            <X size={12} className="hover:text-white" />
          </div>
          <div className="flex items-center gap-2 px-4 py-2 border-r border-app-border text-app-muted hover:bg-app-surface/50 text-xs">
            <Network size={12} />
            <span>Char_Graph</span>
          </div>
        </div>

        {/* Toolbar */}
        <div className="h-10 border-b border-app-border flex items-center px-4 gap-4 text-app-muted">
            <div className="flex gap-1 p-1 bg-app-surface rounded border border-app-border">
                <span className="px-2 font-serif font-bold">B</span>
                <span className="px-2 italic font-serif">I</span>
                <span className="px-2 underline font-serif">U</span>
            </div>
            <div className="flex-1" />
            <div className="px-2 py-0.5 rounded-full border border-red-500/50 text-red-400 bg-red-500/10 text-[10px]">Antagonist</div>
            <div className="px-2 py-0.5 rounded-full border border-blue-500/50 text-blue-400 bg-blue-500/10 text-[10px]">Plot Point</div>
        </div>

        {/* Text Body */}
        <div className="flex-1 p-8 md:p-12 overflow-y-auto font-serif text-base md:text-lg leading-relaxed text-gray-300 max-w-3xl mx-auto w-full">
            <h1 className="text-2xl font-bold text-white mb-6">Chapter 3: The Descent</h1>
            <p className="mb-4">
                The air in the chamber was stale, thick with the scent of ozone and old dust. 
                <span className="text-app-highlight cursor-pointer hover:underline mx-1">[[Kaelen]]</span> 
                brushed his fingers against the cold stone wall, feeling for the seam he knew must be there.
            </p>
            <p className="mb-4">
                "It's not opening," <span className="text-app-highlight cursor-pointer hover:underline mx-1">[[Lyra]]</span> whispered, her voice trembling slightly. 
                She glanced back at the entrance, where the shadows seemed to be lengthening, reaching for them.
            </p>
            <p className="mb-4 p-3 bg-app-surface border-l-2 border-app-highlight text-sm font-sans text-app-muted italic">
                <span className="block font-bold text-app-highlight not-italic text-xs mb-1">Editor Note:</span>
                Need to increase tension here. Maybe the artifact starts humming?
            </p>
            <p>
                Suddenly, the rune flared to life—a brilliant, blinding <span className="bg-blue-500/20 text-blue-300 px-1 rounded">#magic</span> blue light that chased away the dark.
            </p>
        </div>
      </div>
    </div>
  );
};


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
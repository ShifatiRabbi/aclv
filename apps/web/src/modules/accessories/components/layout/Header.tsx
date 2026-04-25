import React from "react";
import { FlaskConical, Menu, Home, Boxes, Beaker, ChartNoAxesCombined, Settings, Plus } from "lucide-react";

const Header: React.FC = () => {
  return (
    <>
      {/* Sticky Marquee */}
      <div className="fixed top-0 left-0 w-full z-[60] bg-primary-container/90 backdrop-blur-md h-8 flex items-center overflow-hidden border-b border-white/10">
        <div className="flex whitespace-nowrap animate-marquee font-bold text-xs uppercase tracking-widest text-on-primary-container">
          <span className="mx-8">🚀 New Simulation Modules Added</span>
          <span className="mx-8">20% Off Premium Plans</span>
          <span className="mx-8">Live Labs Now Available</span>
          <span className="mx-8">Molecular Precision Secured</span>
          <span className="mx-8">🚀 New Simulation Modules Added</span>
          <span className="mx-8">20% Off Premium Plans</span>
          <span className="mx-8">Live Labs Now Available</span>
          <span className="mx-8">Molecular Precision Secured</span>
        </div>
      </div>

      {/* Top Navigation */}
      <header className="fixed top-8 left-0 w-full z-50 bg-surface/40 backdrop-blur-xl border-b border-white/10 flex justify-between items-center px-6 md:px-12 h-20 shadow-[0_4px_30px_rgba(0,0,0,0.25)]">
        <a href="/" className="flex items-center gap-2">
          <FlaskConical className="text-primary-container drop-shadow-[0_0_8px_rgba(255,122,24,0.45)]" size={22} />
          <span className="text-xl md:text-2xl font-black tracking-tighter text-primary-container drop-shadow-[0_0_8px_rgba(255,122,24,0.35)] uppercase">
            NEUROCHEM_LAB
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="/chemicals"
            className="text-primary-container border-b-2 border-primary-container pb-1 font-bold uppercase tracking-widest text-xs hover:brightness-110 transition-all"
          >
            Simulations
          </a>
          <a href="#accessories-sim" className="text-white/50 hover:text-primary-container transition-colors font-bold uppercase tracking-widest text-xs">
            Inventory
          </a>
          <a href="#accessories-sim" className="text-white/50 hover:text-primary-container transition-colors font-bold uppercase tracking-widest text-xs">
            Analysis
          </a>
          <a href="#accessories-sim" className="text-white/50 hover:text-primary-container transition-colors font-bold uppercase tracking-widest text-xs">
            Catalog
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="/chemicals"
            className="bg-primary-container text-on-primary-container font-bold px-4 md:px-6 py-2.5 rounded-full text-xs uppercase tracking-widest neumorphic-outset hover:shadow-[0_0_20px_rgba(255,122,24,0.25)] transition-all active:scale-95"
          >
            Start Simulation
          </a>
          <button className="text-on-surface p-2 rounded-full hover:bg-white/5 active:scale-95 transition-all" aria-label="Menu">
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 left-0 w-full z-50 bg-surface/60 backdrop-blur-2xl border-t border-white/10 h-20 md:hidden flex justify-around items-center px-4">
        <a className="flex flex-col items-center gap-1 text-primary-container" href="/">
          <Home size={20} />
          <span className="uppercase text-[10px] font-semibold tracking-widest">Home</span>
        </a>
        <a className="flex flex-col items-center gap-1 text-white/35 hover:text-white/70 transition-colors" href="#accessories-sim">
          <Boxes size={20} />
          <span className="uppercase text-[10px] font-semibold tracking-widest">Inventory</span>
        </a>
        <a className="flex flex-col items-center gap-1 text-white/35 hover:text-white/70 transition-colors" href="/chemicals">
          <Beaker size={20} />
          <span className="uppercase text-[10px] font-semibold tracking-widest">Sims</span>
        </a>
        <a className="flex flex-col items-center gap-1 text-white/35 hover:text-white/70 transition-colors" href="#accessories-sim">
          <ChartNoAxesCombined size={20} />
          <span className="uppercase text-[10px] font-semibold tracking-widest">Data</span>
        </a>
        <a className="flex flex-col items-center gap-1 text-white/35 hover:text-white/70 transition-colors" href="#accessories-sim">
          <Settings size={20} />
          <span className="uppercase text-[10px] font-semibold tracking-widest">Config</span>
        </a>
      </nav>

      {/* Contextual FAB */}
      <a
        href="#accessories-sim"
        className="fixed bottom-24 right-6 z-50 h-16 w-16 bg-primary-container rounded-full flex items-center justify-center text-on-primary-container shadow-[0_0_20px_rgba(255,122,24,0.5)] active:scale-90 transition-all md:hidden"
        aria-label="Quick action"
      >
        <Plus size={28} />
      </a>
    </>
  );
};

export default Header;

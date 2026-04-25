
import React, { useState, useMemo, useEffect } from 'react';
import { CHEMICAL_LIBRARY } from '../data';
import type { Chemical } from '../types';
import ChemicalCard from '../components/ChemicalCard';
import Beaker from '../components/Beaker';
import CalculationPanel from '../components/CalculationPanel';
import ControlPanel from '../components/ControlPanel';
import './Lab.css'

const Lab: React.FC = () => {
  const [leftPanelWidth, setLeftPanelWidth] = useState(20);
  const [activeChemical, setActiveChemical] = useState<Chemical>(CHEMICAL_LIBRARY[2]); // Copper Sulfate
  const [volume, setVolume] = useState(250);
  const [mass, setMass] = useState(15);
  const [isLiquidMode, setIsLiquidMode] = useState(false);
  const [isResizing, setIsResizing] = useState(false);

  // Auto-disable liquid mode if not allowed for new chemical
  useEffect(() => {
    if (!activeChemical.allowsLiquidView) {
      setIsLiquidMode(false);
    }
  }, [activeChemical]);

  const molarity = useMemo(() => {
    if (!isLiquidMode && activeChemical.naturalState !== 'liquid') return 0;
    return (mass * 1000) / (activeChemical.molecularWeight * volume);
  }, [mass, volume, activeChemical, isLiquidMode]);

  const handleResize = (e: MouseEvent) => {
    if (!isResizing) return;
    const newWidth = (e.clientX / window.innerWidth) * 100;
    if (newWidth > 15 && newWidth < 45) setLeftPanelWidth(newWidth);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsResizing(false);
    if (isResizing) {
      window.addEventListener('mousemove', handleResize);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleResize);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

  const gridCols = useMemo(() => {
    if (leftPanelWidth < 25) return 'grid-cols-2';
    if (leftPanelWidth < 35) return 'grid-cols-3';
    return 'grid-cols-4';
  }, [leftPanelWidth]);

  return (
    <div className="flex h-screen bg-slate-100 overflow-hidden font-sans">
      {/* Sidebar: Library */}
      <div 
        className="bg-white border-r border-slate-200 flex flex-col shadow-xl z-20"
        style={{ width: `${leftPanelWidth}%` }}
      >
        <div className="p-6 border-b border-slate-100 flex-shrink-0">
          <h1 className="text-2xl font-black text-slate-800 tracking-tighter flex items-center gap-1">
            <span className="text-blue-600">LAB</span>SENTRY
            <span className="text-[10px] font-bold bg-blue-600 text-white px-1.5 py-0.5 rounded ml-2">PRO</span>
          </h1>
          <p className="text-[9px] text-slate-400 font-black uppercase tracking-[0.2em] mt-1">Advanced Chemical Synthesis</p>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 scroll-smooth">
          <div className={`grid gap-2 ${gridCols}`}>
            {CHEMICAL_LIBRARY.map(chem => (
              <ChemicalCard 
                key={chem.id}
                /* Fix: Passed chem directly since ChemicalCard was updated to use naturalState and avoid type mismatch */
                chemical={chem}
                isActive={activeChemical.id === chem.id}
                onClick={setActiveChemical}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Resizer */}
      <div 
        onMouseDown={() => setIsResizing(true)}
        className="w-1 cursor-col-resize hover:bg-blue-400 active:bg-blue-600 transition-colors z-30"
      />

      {/* Main Simulation Area */}
      <div className="flex-1 overflow-y-auto relative bg-[#fcfcfc]">
        {/* Background Grid Accent */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="max-w-7xl mx-auto p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Visual Center (Col 1-8) */}
            <div className="lg:col-span-8 flex flex-col items-center">
              <div className="text-center mb-10 w-full">
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-slate-800 text-white rounded-full text-[10px] font-black uppercase tracking-widest">
                  Active Specimen: {activeChemical.id}
                </div>
                <h2 className="text-5xl font-black text-slate-900 tracking-tighter mb-2">
                  {activeChemical.name}
                </h2>
                <div className="flex justify-center gap-4 text-sm font-mono">
                  <span className="text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-lg border border-blue-100">{activeChemical.formula}</span>
                  <span className="text-slate-400 font-bold bg-slate-100 px-3 py-1 rounded-lg border border-slate-200 uppercase">{isLiquidMode ? 'In Solution' : activeChemical.naturalState}</span>
                </div>
              </div>

              <div className="relative p-16 bg-white border border-slate-200 rounded-[3rem] shadow-sm overflow-hidden mb-12">
                <div className="absolute top-0 left-0 w-full h-2 bg-blue-500/10" />
                <Beaker 
                  volume={volume}
                  mass={mass}
                  chemical={activeChemical}
                  isLiquidMode={isLiquidMode}
                  molarity={molarity}
                />
                {/* Bench shadow */}
                <div className="w-64 h-4 bg-slate-900/5 blur-xl rounded-full mx-auto mt-4" />
              </div>

              <div className="w-full max-w-lg">
                <ControlPanel 
                  chemical={activeChemical}
                  volume={volume}
                  mass={mass}
                  isLiquidMode={isLiquidMode}
                  onVolumeChange={setVolume}
                  onMassChange={setMass}
                  onToggleLiquidMode={setIsLiquidMode}
                />
              </div>
            </div>

            {/* Scientific Info (Col 9-12) */}
            <div className="lg:col-span-4 space-y-6">
              <CalculationPanel 
                chemical={activeChemical}
                volume={volume}
                mass={mass}
                molarity={molarity}
                isLiquidMode={isLiquidMode}
              />

              {/* Chemical Description Block */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Scientific Profile</h3>
                <div className="prose prose-sm text-slate-600 leading-relaxed font-medium">
                  {activeChemical.description}
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[9px] font-bold text-slate-400 uppercase mb-1">MW (Molar Mass)</p>
                    <p className="text-sm font-black text-slate-800">{activeChemical.molecularWeight.toFixed(2)} g/mol</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-slate-400 uppercase mb-1">Density</p>
                    <p className="text-sm font-black text-slate-800">{activeChemical.density ? `${activeChemical.density} g/cm³` : 'N/A'}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-slate-900 rounded-2xl text-slate-400 text-xs flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold flex-shrink-0">i</div>
                <p>Safety Note: Always handle {activeChemical.name} according to standard lab protocol. Use appropriate PPE for {activeChemical.naturalState} handling.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Lab;

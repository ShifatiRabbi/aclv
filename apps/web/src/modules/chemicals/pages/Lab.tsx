
import React, { useState, useMemo, useEffect } from 'react';
import { CHEMICAL_LIBRARY } from '../data';
import type { Chemical } from '../types';
import ChemicalCard from '../components/ChemicalCard';
import Beaker from '../components/Beaker';
import CalculationPanel from '../components/CalculationPanel';
import ControlPanel from '../components/ControlPanel';

const Lab: React.FC = () => {
  const [leftPanelWidth, setLeftPanelWidth] = useState(25); // Percentage
  const [activeChemical, setActiveChemical] = useState<Chemical>(CHEMICAL_LIBRARY[2]); // Copper Sulfate default
  const [volume, setVolume] = useState(250);
  const [mass, setMass] = useState(10);
  const [isResizing, setIsResizing] = useState(false);

  // Molarity Calculation: M = (w * 1000) / (MW * V)
  const molarity = useMemo(() => {
    if (volume === 0) return 0;
    // We calculate effective mass based on solubility for molarity in solution
    // However, molarity is typically defined for the total moles added per liter of final solution
    // But practically, if it doesn't dissolve, the molarity of the solution is limited.
    // We'll show the potential molarity if fully dissolved for educational purposes.
    return (mass * 1000) / (activeChemical.molecularWeight * volume);
  }, [mass, volume, activeChemical]);

  // Handle panel resizing
  const startResizing = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing) return;
      const newWidth = (e.clientX / window.innerWidth) * 100;
      if (newWidth >= 15 && newWidth <= 45) {
        setLeftPanelWidth(newWidth);
      }
    };

    const handleMouseUp = () => setIsResizing(false);

    if (isResizing) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

  // Determine grid columns based on panel width
  const gridCols = useMemo(() => {
    if (leftPanelWidth < 20) return 'grid-cols-1';
    if (leftPanelWidth < 30) return 'grid-cols-2';
    if (leftPanelWidth < 40) return 'grid-cols-3';
    return 'grid-cols-4';
  }, [leftPanelWidth]);

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      {/* Left Panel: Library */}
      <div 
        className="h-full bg-white border-r border-slate-200 flex flex-col transition-all duration-75 select-none"
        style={{ width: `${leftPanelWidth}%` }}
      >
        <div className="p-6 border-b border-slate-100 shrink-0">
          <h1 className="text-xl font-black text-slate-800 tracking-tight flex items-center gap-2">
            <span className="bg-blue-600 text-white px-2 py-0.5 rounded italic">Chem</span>Sim Pro
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-1 uppercase tracking-widest">Chemical Database</p>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4">
          <div className={`grid gap-3 ${gridCols}`}>
            {CHEMICAL_LIBRARY.map(chem => (
              <ChemicalCard 
                key={chem.id}
                chemical={chem}
                isActive={activeChemical.id === chem.id}
                onClick={(c) => {
                  setActiveChemical(c);
                  // Reset mass if switching to something very dense or light? 
                  // Keeping for continuity.
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Resize Handle */}
      <div 
        onMouseDown={startResizing}
        className={`w-1 cursor-col-resize hover:bg-blue-400 active:bg-blue-600 transition-colors z-50 ${isResizing ? 'bg-blue-600' : 'bg-slate-200'}`}
      />

      {/* Right Panel: Simulation Environment */}
      <div className="flex-1 h-full overflow-y-auto bg-slate-50/50 relative">
        <div className="max-w-6xl mx-auto p-8 lg:p-12">
          
          <div className="flex flex-col lg:flex-row gap-12 items-start justify-center">
            
            {/* Beaker Visualization Area */}
            <div className="flex-1 flex flex-col items-center">
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-black text-slate-800 tracking-tight">{activeChemical.name} Solution</h2>
                <p className="font-mono text-blue-600 font-bold bg-blue-50 inline-block px-3 py-1 rounded-full mt-2">
                  {activeChemical.formula}
                </p>
              </div>
              
              <div className="relative py-12 px-20 bg-white/40 rounded-[3rem] border border-white/60 shadow-inner">
                <Beaker 
                  volume={volume} 
                  mass={mass} 
                  chemical={activeChemical} 
                  molarity={molarity} 
                />
                
                {/* Lab Bench Effect */}
                <div className="absolute bottom-4 left-10 right-10 h-4 bg-slate-300/20 blur-xl rounded-full -z-10" />
              </div>

              <div className="mt-12 w-full max-w-md">
                <ControlPanel 
                  chemical={activeChemical}
                  volume={volume}
                  mass={mass}
                  onVolumeChange={setVolume}
                  onMassChange={setMass}
                />
              </div>
            </div>

            {/* Calculations and Info Sidebar */}
            <div className="w-full lg:w-96 space-y-6">
              <CalculationPanel 
                chemical={activeChemical}
                volume={volume}
                mass={mass}
                molarity={molarity}
              />

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Material Specs</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <p className="text-[10px] text-slate-400 font-bold mb-1">STP State</p>
                    <p className="text-sm font-bold text-slate-700 capitalize">{activeChemical.state}</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <p className="text-[10px] text-slate-400 font-bold mb-1">Solubility</p>
                    <p className="text-sm font-bold text-slate-700">
                      {activeChemical.solubility > 0 ? `${activeChemical.solubility}g/100ml` : 'Insoluble'}
                    </p>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-blue-50/50 rounded-xl border border-blue-100">
                  <p className="text-xs text-blue-800 leading-relaxed italic">
                    "Observation: {activeChemical.state === 'liquid' ? 'Liquid miscibility checked.' : activeChemical.state === 'gas' ? 'Observe rising vapor particles.' : 'Note the granular pile accumulation.'}"
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Floating Lab Info Badge */}
        <div className="fixed bottom-6 right-6 bg-slate-900 text-white px-4 py-2 rounded-full shadow-2xl flex items-center gap-3 border border-slate-700 z-50">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[10px] font-bold tracking-widest uppercase">Lab Status: Active Simulation</span>
        </div>
      </div>
    </div>
  );
};

export default Lab;

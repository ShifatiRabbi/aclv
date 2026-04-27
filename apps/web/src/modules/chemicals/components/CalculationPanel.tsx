import React from 'react';
import type { Chemical } from '../types';

interface CalculationPanelProps {
  chemical: Chemical;
  volume: number;
  mass: number;
  molarity: number;
  isLiquidMode: boolean;
}

const CalculationPanel: React.FC<CalculationPanelProps> = ({ 
  chemical, 
  volume, 
  mass, 
  molarity, 
  isLiquidMode 
}) => {
  const currentState = isLiquidMode ? 'liquid' : chemical.state;
  const moles = mass / chemical.molecularWeight;
  const volumeLiters = volume / 1000;

  // Gas math (Ideal Gas Law: PV = nRT)
  // Assume T = 298.15K (Room Temp), P = 1 atm
  const R = 0.08206; // L*atm/(mol*K)
  const T = 298.15;
  const gasVolumeL = (moles * R * T) / 1; // Calculating volume occupied by the gas at 1atm

  return (
    <div className="bg-slate-900 text-slate-100 p-6 rounded-2xl shadow-2xl font-mono text-sm border border-slate-700">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-2 h-6 rounded-full ${isLiquidMode ? 'bg-blue-500' : 'bg-emerald-500'}`} />
          <h2 className="text-lg font-bold text-white">
            {isLiquidMode ? 'Solution Math' : `${chemical.state.toUpperCase()} Properties`}
          </h2>
        </div>
        <span className="text-[10px] bg-slate-800 px-2 py-1 rounded text-slate-400">STP MODE</span>
      </div>

      <div className="space-y-6">
        {/* State-Specific Math Display */}
        {currentState === 'gas' && !isLiquidMode ? (
          <section className="space-y-3">
            <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest">Ideal Gas Law: PV = nRT</p>
            <div className="bg-slate-800/80 p-4 rounded-xl space-y-2 border border-slate-700/50">
              <div className="flex justify-between">
                <span className="text-slate-500">Amount (n):</span>
                <span className="text-white">{moles.toFixed(4)} mol</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Pressure (P):</span>
                <span className="text-white">1.00 atm</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Temperature (T):</span>
                <span className="text-white">298.15 K</span>
              </div>
              <div className="h-[1px] bg-slate-700 my-2" />
              <div className="flex justify-between text-blue-400 font-bold">
                <span>Theoretical Vol (V):</span>
                <span>{gasVolumeL.toFixed(2)} L</span>
              </div>
            </div>
          </section>
        ) : isLiquidMode ? (
          <section className="space-y-3">
            <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest">Molarity: M = n / V_L</p>
            <div className="bg-slate-800/80 p-4 rounded-xl space-y-2 border border-slate-700/50">
              <div className="flex justify-between">
                <span className="text-slate-500">Solute (n):</span>
                <span className="text-white">{moles.toFixed(4)} mol</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Solvent (V):</span>
                <span className="text-white">{volumeLiters.toFixed(3)} L</span>
              </div>
              <div className="h-[1px] bg-slate-700 my-2" />
              <div className="flex justify-between text-blue-400 font-bold text-lg">
                <span>Concentration (M):</span>
                <span>{molarity.toFixed(4)} M</span>
              </div>
            </div>
          </section>
        ) : (
          <section className="space-y-3">
            <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest">Physical Constants</p>
            <div className="bg-slate-800/80 p-4 rounded-xl space-y-2 border border-slate-700/50">
              <div className="flex justify-between">
                <span className="text-slate-500">Molecular Weight:</span>
                <span className="text-white">{chemical.molecularWeight.toFixed(2)} u</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Mass:</span>
                <span className="text-white">{mass.toFixed(2)} g</span>
              </div>
              {chemical.density && (
                <div className="flex justify-between">
                  <span className="text-slate-500">Density:</span>
                  <span className="text-white">{chemical.density.toFixed(2)} g/cm³</span>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Global Summary */}
        <div className="p-4 bg-blue-600/10 rounded-xl border border-blue-500/20 text-blue-300">
           <p className="text-[10px] font-black uppercase mb-1 opacity-60">System Summary</p>
           <p className="text-xs">
            {chemical.name} is currently in its {currentState} form. 
            {isLiquidMode ? " Solute is dispersed in solvent." : " Observing natural properties at STP."}
           </p>
        </div>
      </div>
    </div>
  );
};

export default CalculationPanel;

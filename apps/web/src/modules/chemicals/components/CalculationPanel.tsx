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
    <div className="rounded-2xl border border-white/10 bg-black/40 p-6 font-mono text-sm text-slate-100 backdrop-blur-md">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="h-6 w-2 rounded-full bg-orange-500" />
          <h2 className="text-lg font-bold text-white">
            {isLiquidMode ? 'Solution Math' : `${chemical.state.toUpperCase()} Properties`}
          </h2>
        </div>
        <span className="rounded bg-white/10 px-2 py-1 text-[10px] text-slate-400">STP MODE</span>
      </div>

      <div className="space-y-6">
        {/* State-Specific Math Display */}
        {currentState === 'gas' && !isLiquidMode ? (
          <section className="space-y-3">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Ideal Gas Law: PV = nRT</p>
            <div className="space-y-2 rounded-xl border border-white/10 bg-black/40 p-4">
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
              <div className="my-2 h-[1px] bg-white/10" />
              <div className="flex justify-between font-bold text-orange-300">
                <span>Theoretical Vol (V):</span>
                <span>{gasVolumeL.toFixed(2)} L</span>
              </div>
            </div>
          </section>
        ) : isLiquidMode ? (
          <section className="space-y-3">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Molarity: M = n / V_L</p>
            <div className="space-y-2 rounded-xl border border-white/10 bg-black/40 p-4">
              <div className="flex justify-between">
                <span className="text-slate-500">Solute (n):</span>
                <span className="text-white">{moles.toFixed(4)} mol</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Solvent (V):</span>
                <span className="text-white">{volumeLiters.toFixed(3)} L</span>
              </div>
              <div className="my-2 h-[1px] bg-white/10" />
              <div className="flex justify-between text-lg font-bold text-orange-300">
                <span>Concentration (M):</span>
                <span>{molarity.toFixed(4)} M</span>
              </div>
            </div>
          </section>
        ) : (
          <section className="space-y-3">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Physical Constants</p>
            <div className="space-y-2 rounded-xl border border-white/10 bg-black/40 p-4">
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
        <div className="rounded-xl border border-orange-500/20 bg-orange-500/10 p-4 text-orange-200">
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

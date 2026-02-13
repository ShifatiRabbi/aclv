
import React from 'react';
import type { Chemical } from '../types';

interface CalculationPanelProps {
  chemical: Chemical;
  volume: number;
  mass: number;
  molarity: number;
}

const CalculationPanel: React.FC<CalculationPanelProps> = ({ chemical, volume, mass, molarity }) => {
  const moles = mass / chemical.molecularWeight;
  const volumeLiters = volume / 1000;

  return (
    <div className="bg-slate-900 text-slate-100 p-6 rounded-2xl shadow-xl font-mono text-sm leading-relaxed border border-slate-700">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-2 h-6 bg-blue-500 rounded-full" />
        <h2 className="text-lg font-bold tracking-tight text-white">Live Molarity Calculation</h2>
      </div>

      <div className="space-y-4">
        <section>
          <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mb-1">Formula</p>
          <div className="text-blue-400 text-lg">
            M = (w &times; 1000) / (MW &times; V)
          </div>
        </section>

        <section className="bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
          <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mb-2">Step-by-Step</p>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-slate-500">Mass (w):</span>
              <span className="text-white font-bold">{mass.toFixed(2)} g</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500">Mol. Weight (MW):</span>
              <span className="text-white font-bold">{chemical.molecularWeight.toFixed(2)} g/mol</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500">Volume (V):</span>
              <span className="text-white font-bold">{volume} ml</span>
            </div>
            <div className="h-[1px] bg-slate-700 my-1" />
            <div className="flex justify-between items-center text-blue-300">
              <span>Moles (n = w/MW):</span>
              <span>{moles.toFixed(4)} mol</span>
            </div>
            <div className="flex justify-between items-center text-blue-300">
              <span>Volume (V in L):</span>
              <span>{volumeLiters.toFixed(3)} L</span>
            </div>
          </div>
        </section>

        <section className="pt-2">
          <div className="flex items-end justify-between bg-blue-600/20 p-4 rounded-xl border border-blue-500/30">
            <div>
              <p className="text-blue-400 text-[10px] uppercase font-bold tracking-widest">Final Molarity</p>
              <div className="text-3xl font-bold text-white tracking-tighter">
                {molarity.toFixed(4)} <span className="text-sm font-normal text-blue-400 ml-1">mol/L (M)</span>
              </div>
            </div>
            <div className="text-[10px] text-blue-300 bg-blue-500/20 px-2 py-1 rounded">
              {chemical.formula}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CalculationPanel;

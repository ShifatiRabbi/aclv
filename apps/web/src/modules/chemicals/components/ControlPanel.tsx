
import React from 'react';
import type { Chemical } from '../types';

interface ControlPanelProps {
  chemical: Chemical;
  volume: number;
  mass: number;
  onVolumeChange: (v: number) => void;
  onMassChange: (m: number) => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ 
  chemical, 
  volume, 
  mass, 
  onVolumeChange, 
  onMassChange 
}) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-6">
      <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
        <h2 className="text-sm font-bold text-slate-800 uppercase tracking-widest">Parameters</h2>
      </div>

      <div className="space-y-4">
        {/* Volume Control */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-xs font-bold text-slate-500 uppercase">Solvent Volume (H₂O)</label>
            <span className="text-sm font-mono font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">{volume} ml</span>
          </div>
          <input 
            type="range" 
            min="50" 
            max="600" 
            step="10" 
            value={volume}
            onChange={(e) => onVolumeChange(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
          <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
            <span>50ml</span>
            <span>600ml</span>
          </div>
        </div>

        {/* Mass Control */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-xs font-bold text-slate-500 uppercase">Solute Mass ({chemical.formula})</label>
            <span className="text-sm font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">{mass} g</span>
          </div>
          <input 
            type="range" 
            min="0" 
            max="100" 
            step="0.5" 
            value={mass}
            onChange={(e) => onMassChange(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
          />
          <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
            <span>0g</span>
            <span>100g</span>
          </div>
        </div>

        {chemical.solubility > 0 && (
          <div className="p-3 bg-amber-50 rounded-lg border border-amber-100">
            <p className="text-[10px] text-amber-700 font-bold uppercase mb-1">Solubility Fact</p>
            <p className="text-xs text-amber-600 italic">
              Max {chemical.solubility}g dissolves in 100ml H₂O at room temp.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ControlPanel;

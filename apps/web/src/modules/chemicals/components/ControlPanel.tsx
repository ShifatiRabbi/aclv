import React from 'react';
import type { Chemical } from '../types';

interface ControlPanelProps {
  chemical: Chemical;
  volume: number;
  mass: number;
  isLiquidMode: boolean;
  onVolumeChange: (v: number) => void;
  onMassChange: (m: number) => void;
  onToggleLiquidMode: (active: boolean) => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ 
  chemical, 
  volume, 
  mass, 
  isLiquidMode,
  onVolumeChange, 
  onMassChange,
  onToggleLiquidMode
}) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <h2 className="text-sm font-black text-slate-800 uppercase tracking-widest">Simulation Controls</h2>
        {chemical.allowsLiquidView && (
          <button
            onClick={() => onToggleLiquidMode(!isLiquidMode)}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              isLiquidMode 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {isLiquidMode ? '✓ Solution Mode' : 'View as Liquid (Solute)'}
          </button>
        )}
      </div>

      <div className="space-y-6">
        {/* Mass Slider (Always visible) */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Solute Mass (g)</label>
            <span className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs font-mono font-bold rounded">
              {mass.toFixed(1)} g
            </span>
          </div>
          <input 
            type="range" min="0.1" max="200" step="0.1" value={mass}
            onChange={(e) => onMassChange(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
        </div>

        {/* Volume Slider (Visible only in Liquid Mode or for specific states) */}
        {(isLiquidMode || chemical.naturalState === 'liquid') && (
          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Solvent Volume (ml)</label>
              <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-mono font-bold rounded">
                {volume} ml
              </span>
            </div>
            <input 
              type="range" min="50" max="600" step="10" value={volume}
              onChange={(e) => onVolumeChange(parseInt(e.target.value))}
              className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
          </div>
        )}

        {/* Solubility Context */}
        {isLiquidMode && chemical.solubility !== undefined && (
          <div className="p-4 bg-amber-50 rounded-xl border border-amber-100">
            <div className="flex items-center gap-2 mb-1">
               <span className="text-[10px] font-black text-amber-700 uppercase">Solubility Alert</span>
            </div>
            <p className="text-[11px] text-amber-800 leading-tight">
              Max {chemical.solubility}g per 100ml. Current limit for {volume}ml: 
              <span className="font-bold ml-1">{((chemical.solubility * volume) / 100).toFixed(1)}g</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ControlPanel;

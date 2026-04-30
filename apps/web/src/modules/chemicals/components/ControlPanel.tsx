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
    <div className="space-y-6 rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-md">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <h2 className="text-sm font-black uppercase tracking-widest text-orange-400">Simulation Controls</h2>
        {chemical.allowsLiquidView && (
          <button
            onClick={() => onToggleLiquidMode(!isLiquidMode)}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              isLiquidMode 
                ? 'bg-orange-500 text-black shadow-lg shadow-orange-500/30' 
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
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
            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Solute Mass (g)</label>
            <span className="rounded bg-orange-500/15 px-2 py-1 text-xs font-mono font-bold text-orange-300">
              {mass.toFixed(1)} g
            </span>
          </div>
          <input 
            type="range" min="0.1" max="200" step="0.1" value={mass}
            onChange={(e) => onMassChange(parseFloat(e.target.value))}
            className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-white/15 accent-orange-500"
          />
        </div>

        {/* Volume Slider (Visible only in Liquid Mode or for specific states) */}
        {(isLiquidMode || chemical.state === 'liquid') && (
          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Solvent Volume (ml)</label>
              <span className="rounded bg-orange-500/15 px-2 py-1 text-xs font-mono font-bold text-orange-300">
                {volume} ml
              </span>
            </div>
            <input 
              type="range" min="50" max="600" step="10" value={volume}
              onChange={(e) => onVolumeChange(parseInt(e.target.value))}
              className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-white/15 accent-orange-500"
            />
          </div>
        )}

        {/* Solubility Context */}
        {isLiquidMode && chemical.solubility !== undefined && (
          <div className="rounded-xl border border-orange-500/30 bg-orange-500/10 p-4">
            <div className="flex items-center gap-2 mb-1">
               <span className="text-[10px] font-black uppercase text-orange-300">Solubility Alert</span>
            </div>
            <p className="text-[11px] leading-tight text-orange-200">
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


import React from 'react';
import type { Chemical } from '../types';

interface ChemicalCardProps {
  chemical: Chemical;
  isActive: boolean;
  onClick: (chemical: Chemical) => void;
}

const ChemicalCard: React.FC<ChemicalCardProps> = ({ chemical, isActive, onClick }) => {
  return (
    <button
      onClick={() => onClick(chemical)}
      className={`relative aspect-square overflow-hidden border bg-black/40 p-2 text-left backdrop-blur-md transition-all duration-300 group
        ${isActive 
          ? 'border-orange-500 shadow-[0_0_15px_rgba(255,122,24,0.35)]'
          : 'border-white/15 hover:border-orange-400 hover:shadow-[0_0_15px_rgba(255,122,24,0.2)]'
        }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="flex items-start justify-between">
          <span className="text-[10px] font-mono leading-none text-gray-500">
            {chemical.id}
          </span>
          <div
            className="h-3 w-3 rounded-full border border-white/20"
            style={{ backgroundColor: chemical.color }}
          />
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-base font-bold tracking-tight text-white transition-colors group-hover:text-orange-400 md:text-lg">
            {chemical.formula}
          </h3>
          <p className="line-clamp-1 text-[10px] uppercase tracking-wider text-gray-400">
            {chemical.name}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-[9px] font-mono uppercase tracking-wider text-gray-500">{chemical.state}</span>
          <span className="text-[9px] font-mono text-gray-500">{chemical.molecularWeight.toFixed(1)}</span>
        </div>
      </div>
    </button>
  );
};

export default ChemicalCard;

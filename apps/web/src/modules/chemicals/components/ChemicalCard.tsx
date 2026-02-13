
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
      className={`relative overflow-hidden flex flex-col p-3 rounded-xl border-2 transition-all duration-200 text-left group
        ${isActive 
          ? 'border-blue-500 bg-blue-50 shadow-md transform scale-102' 
          : 'border-slate-200 bg-white hover:border-blue-300 hover:shadow-sm active:scale-95'
        }`}
    >
      <div className="flex justify-between items-start mb-1">
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-blue-400 transition-colors">
          {chemical.state}
        </span>
        <div 
          className="w-3 h-3 rounded-full border border-slate-200" 
          style={{ backgroundColor: chemical.color }}
        />
      </div>
      <h3 className="font-bold text-slate-800 text-sm truncate leading-tight">
        {chemical.name}
      </h3>
      <p className="font-mono text-xs font-bold text-blue-600 mt-0.5">
        {chemical.formula}
      </p>
      
      {/* Visual State Indicator */}
      <div className="absolute -bottom-1 -right-1 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity">
        <span className="text-3xl font-mono">{chemical.formula.charAt(0)}</span>
      </div>
    </button>
  );
};

export default ChemicalCard;


import React from 'react';
import type { Chemical } from '../types';

interface BeakerProps {
  volume: number; // 0 to 1000 ml
  mass: number;
  chemical: Chemical;
  molarity: number;
}

const Beaker: React.FC<BeakerProps> = ({ volume, mass, chemical, molarity }) => {
  // Volume mapping to visual height (max beaker height is 400px)
  const maxVolume = 600; 
  const fillHeightPercent = Math.min((volume / maxVolume) * 100, 100);
  
  // Calculate solubility limit
  const solubilityLimit = (chemical.solubility * volume) / 100;
  const isPrecipitated = chemical.solubility > 0 && mass > solubilityLimit;
  
  // Opacity logic: More solute + less solvent = higher opacity
  const baseOpacity = 0.1;
  const saturationFactor = molarity > 0 ? Math.min(0.1 + (molarity / 2), 0.9) : baseOpacity;
  
  // Precipitation visual
  const precipHeight = isPrecipitated ? Math.min(10 + (mass - solubilityLimit) / 10, 40) : 0;

  return (
    <div className="relative w-72 h-96 mx-auto group">
      {/* Beaker Glass Body */}
      <div className="absolute inset-0 rounded-b-3xl border-4 border-slate-300/30 bg-white/10 backdrop-blur-[1px] shadow-2xl overflow-hidden ring-1 ring-white/20">
        {/* Glass Reflections */}
        <div className="absolute left-6 top-0 bottom-0 w-1 bg-white/20 blur-[1px]" />
        <div className="absolute right-10 top-0 bottom-0 w-2 bg-white/5 blur-[2px]" />
        
        {/* Measurement Marks */}
        <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col justify-between py-8 px-2 pointer-events-none select-none z-20">
          {[500, 400, 300, 200, 100, 50].map((mark) => (
            <div key={mark} className="flex items-center gap-2">
              <div className={`h-[2px] bg-slate-400 ${mark % 100 === 0 ? 'w-4' : 'w-2'}`} />
              <span className="text-[10px] font-mono text-slate-500 font-bold">{mark}</span>
            </div>
          ))}
        </div>

        {/* Liquid Layer */}
        <div 
          className="absolute bottom-0 left-0 right-0 transition-all duration-700 ease-in-out z-10"
          style={{ 
            height: `${fillHeightPercent}%`,
            backgroundColor: chemical.color,
            opacity: saturationFactor
          }}
        >
          {/* Meniscus Effect */}
          <div 
            className="absolute -top-[10px] left-0 right-0 h-5 rounded-[100%] transition-all duration-700"
            style={{ 
              backgroundColor: chemical.color,
              filter: 'brightness(1.1)'
            }}
          />
          
          {/* Particles (Bubbles for gas, granules for powder) */}
          {chemical.state === 'gas' && (
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(15)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute w-1 h-1 bg-white/40 rounded-full animate-bounce"
                  style={{
                    left: `${Math.random() * 100}%`,
                    bottom: `-${Math.random() * 20}%`,
                    animationDuration: `${1 + Math.random() * 3}s`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
          )}

          {/* Plasma Glow */}
          {chemical.state === 'plasma' && (
            <div className="absolute inset-0 bg-blue-400/20 blur-xl animate-pulse" />
          )}
        </div>

        {/* Precipitation (Solid layer at bottom) */}
        {isPrecipitated && (
          <div 
            className="absolute bottom-0 left-0 right-0 bg-slate-200/80 z-20 transition-all duration-500 border-t border-slate-300"
            style={{ 
              height: `${precipHeight}px`,
              backgroundColor: chemical.color,
              filter: 'brightness(0.7) contrast(1.2)'
            }}
          />
        )}
        
        {/* Label on Glass */}
        <div className="absolute bottom-12 right-6 z-30 opacity-40 select-none">
          <p className="font-mono text-2xl font-bold text-slate-800 rotate-90 origin-bottom-right">BORO 3.3</p>
        </div>
      </div>

      {/* Spout */}
      <div className="absolute -top-1 -left-2 w-12 h-6 bg-slate-100 border-4 border-slate-300/30 rounded-full -rotate-[30deg] z-0" />
    </div>
  );
};

export default Beaker;

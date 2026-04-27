
import React, { useMemo } from 'react';
import type { Chemical } from '../types';

interface BeakerProps {
  volume: number; // ml
  mass: number; // g
  chemical: Chemical;
  isLiquidMode: boolean;
  molarity: number;
}

const Beaker: React.FC<BeakerProps> = ({ volume, mass, chemical, isLiquidMode, molarity }) => {
  const currentState = isLiquidMode ? 'liquid' : chemical.state;
  
  // Calculate heights and visuals
  const maxBeakerVolume = 600;
  const liquidHeightPercent = isLiquidMode ? Math.min((volume / maxBeakerVolume) * 100, 100) : 0;
  
  // Solubility logic for Liquid Mode
  const solubilityLimit = (chemical.solubility || 0) * (volume / 100);
  const isPrecipitated = isLiquidMode && (chemical.solubility || 0) > 0 && mass > solubilityLimit;
  const precipHeight = isPrecipitated ? Math.min(10 + (mass - solubilityLimit) / 5, 50) : 0;

  // Solid/Powder Height (Based on density)
  const substanceVolumeCm3 = mass / (chemical.density || 1);
  const solidHeightPercent = !isLiquidMode && (currentState === 'solid' || currentState === 'powder') 
    ? Math.min((substanceVolumeCm3 / maxBeakerVolume) * 100 * 5, 20) // Multiplier for visibility
    : 0;

  // Saturation for liquids
  const saturationFactor = isLiquidMode ? Math.min(0.1 + (molarity / 1.5), 0.9) : 1;

  // Random particles for gas
  const particles = useMemo(() => {
    return [...Array(currentState === 'gas' ? 30 : 0)].map(() => ({
      left: Math.random() * 90 + 5,
      top: Math.random() * 90 + 5,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5
    }));
  }, [currentState]);

  return (
    <div className="relative w-72 h-96 mx-auto">
      {/* Beaker Container / Sealed Chamber */}
      <div className={`absolute inset-0 border-4 border-slate-300/30 bg-white/5 backdrop-blur-[1px] shadow-2xl overflow-hidden
        ${currentState === 'gas' ? 'rounded-3xl border-slate-400/50' : 'rounded-b-3xl'}
      `}>
        {/* Glass Detail */}
        <div className="absolute left-4 top-0 bottom-0 w-1 bg-white/20 blur-[1px]" />
        
        {/* Measurement Marks (Scale) */}
        <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col justify-between py-10 px-2 pointer-events-none z-30">
          {[500, 400, 300, 200, 100, 50].map((mark) => (
            <div key={mark} className="flex items-center gap-2">
              <div className={`h-[2px] bg-slate-400/50 ${mark % 100 === 0 ? 'w-4' : 'w-2'}`} />
              <span className="text-[9px] font-mono text-slate-500 font-bold">{mark}</span>
            </div>
          ))}
        </div>

        {/* GAS Particles (Sealed Chamber) */}
        {currentState === 'gas' && (
          <div className="absolute inset-0 bg-blue-50/5">
             {particles.map((p, i) => (
              <div 
                key={i}
                className="absolute rounded-full animate-pulse transition-all duration-1000"
                style={{
                  left: `${p.left}%`,
                  top: `${p.top}%`,
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                  backgroundColor: chemical.color,
                  opacity: 0.6,
                  filter: 'blur(1px)',
                  animation: `moveRandom ${p.duration}s infinite alternate ease-in-out`
                }}
              />
            ))}
          </div>
        )}

        {/* LIQUID Mode / Natural Liquid */}
        {(currentState === 'liquid' || isLiquidMode) && (
          <div 
            className="absolute bottom-0 left-0 right-0 transition-all duration-700 ease-in-out z-10"
            style={{ 
              height: `${liquidHeightPercent}%`,
              backgroundColor: chemical.color,
              opacity: saturationFactor
            }}
          >
            {/* Liquid Surface / Meniscus */}
            <div 
              className="absolute -top-[10px] left-0 right-0 h-5 rounded-[100%] transition-all duration-700"
              style={{ backgroundColor: chemical.color, filter: 'brightness(1.1)' }}
            />
          </div>
        )}

        {/* SOLID Chunk Visuals */}
        {currentState === 'solid' && !isLiquidMode && (
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full flex justify-center items-end gap-1 p-4 z-20">
             {[...Array(Math.max(1, Math.floor(mass / 10)))].map((_, i) => (
               <div 
                key={i}
                className="w-12 h-12 rotate-12 shadow-inner border border-black/10 transition-all duration-500"
                style={{ 
                  backgroundColor: chemical.color, 
                  clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)',
                  transform: `rotate(${Math.sin(i) * 30}deg)`
                }}
               />
             ))}
          </div>
        )}

        {/* POWDER Pile Visuals */}
        {currentState === 'powder' && !isLiquidMode && (
          <div 
            className="absolute bottom-0 left-0 right-0 z-20 transition-all duration-500"
            style={{ 
              height: `${Math.max(15, solidHeightPercent)}px`,
              backgroundColor: chemical.color,
              clipPath: 'polygon(0% 100%, 100% 100%, 85% 20%, 50% 0%, 15% 20%)',
              filter: 'brightness(0.9) contrast(1.1)'
            }}
          />
        )}

        {/* PRECIPITATION (Bottom Layer in Solution) */}
        {isPrecipitated && (
          <div 
            className="absolute bottom-0 left-0 right-0 z-20 transition-all duration-500"
            style={{ 
              height: `${precipHeight}px`,
              backgroundColor: chemical.color,
              filter: 'brightness(0.6) saturate(1.5)'
            }}
          />
        )}

      </div>

      {/* Glass Top / Rim Detail */}
      <div className={`absolute -top-1 left-1 right-1 h-2 bg-slate-200/20 border-t border-white/30 rounded-full z-40 ${currentState === 'gas' ? 'hidden' : ''}`} />
      
      {/* Dynamic CSS for gas motion */}
      <style>{`
        @keyframes moveRandom {
          0% { transform: translate(0, 0); }
          100% { transform: translate(100px, 100px); }
        }
      `}</style>
    </div>
  );
};

export default Beaker;

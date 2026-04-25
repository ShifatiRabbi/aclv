import React from 'react';
import type { Equipment, Measurement } from '../types';

interface GlasswareRendererProps {
  equipment: Equipment;
  measurement: Measurement;
}

export const GlasswareRenderer: React.FC<GlasswareRendererProps> = ({ equipment, measurement }) => {
  const { height_mm, diameter_mm, capacity_ml, graduation_step_ml, neck_diameter_mm } = measurement;
  
  // FIX: DYNAMIC SCALING ENGINE
  // Instead of a fixed baseScale, we calculate one based on the available area.
  // We want the item to fit within a 450x600 px area while maintaining proportions.
  const targetMaxHeight = 450;
  const targetMaxWidth = 350;
  const maxScale = 5; // Cap the scale for smaller items to appear proportionally smaller
  
  const scaleH = targetMaxHeight / height_mm;
  const scaleW = targetMaxWidth / diameter_mm;
  // Use the smaller scale factor to ensure the whole object fits, capped by maxScale
  const scale = Math.min(maxScale, Math.min(scaleH, scaleW));
  
  // Calculated SVG dimensions
  const svgWidth = Math.max(diameter_mm * scale + 140, 400); 
  const svgHeight = height_mm * scale + 100;
  
  const centerX = svgWidth / 2;
  const bottomY = svgHeight - 60;
  const topY = bottomY - (height_mm * scale);
  const radius = (diameter_mm * scale) / 2;

  // Calculate dynamic container height to fit the content + padding (p-8 = 32px top/bottom) + border (~2px)
  const containerHeight = svgHeight + 66;
  
  const renderPath = () => {
    switch (equipment.id) {
      case 'beaker':
        return (
          <path
            d={`M ${centerX - radius},${topY} 
               L ${centerX - radius},${bottomY - 5} 
               Q ${centerX - radius},${bottomY} ${centerX - radius + 5},${bottomY} 
               L ${centerX + radius - 5},${bottomY} 
               Q ${centerX + radius},${bottomY} ${centerX + radius},${bottomY - 5} 
               L ${centerX + radius},${topY} 
               L ${centerX + radius + 10},${topY - 5}
               L ${centerX - radius},${topY} Z`}
            fill="rgba(173, 216, 230, 0.15)"
            stroke="#64748b"
            strokeWidth="2"
          />
        );
      case 'erlenmeyer':
        {
          const neckRadius = (neck_diameter_mm || 20) * scale / 2;
          const neckHeight = (height_mm * 0.3) * scale;
          return (
            <path
              d={`M ${centerX - neckRadius},${topY} 
                L ${centerX - neckRadius},${topY + neckHeight} 
                L ${centerX - radius},${bottomY - 5} 
                Q ${centerX - radius},${bottomY} ${centerX - radius + 5},${bottomY} 
                L ${centerX + radius - 5},${bottomY} 
                Q ${centerX + radius},${bottomY} ${centerX + radius},${bottomY - 5} 
                L ${centerX + neckRadius},${topY + neckHeight} 
                L ${centerX + neckRadius},${topY} Z`}
              fill="rgba(173, 216, 230, 0.15)"
              stroke="#64748b"
              strokeWidth="1.5"
            />
          );
        }
      case 'filtering_flask':
        {
          const eNeckRadius = (neck_diameter_mm || 20) * scale / 2;
          const eNeckHeight = (height_mm * 0.3) * scale;
          return (
            <g>
              <path
                d={`M ${centerX - eNeckRadius},${topY} 
                  L ${centerX - eNeckRadius},${topY + eNeckHeight} 
                  L ${centerX - radius},${bottomY - 5} 
                  Q ${centerX - radius},${bottomY} ${centerX - radius + 5},${bottomY} 
                  L ${centerX + radius - 5},${bottomY} 
                  Q ${centerX + radius},${bottomY} ${centerX + radius},${bottomY - 5} 
                  L ${centerX + eNeckRadius},${topY + eNeckHeight} 
                  L ${centerX + eNeckRadius},${topY} Z`}
                fill="rgba(173, 216, 230, 0.15)"
                stroke="#64748b"
                strokeWidth={equipment.id === 'filtering_flask' ? "3" : "2"}
              />
              {equipment.id === 'filtering_flask' && (
                <path 
                  d={`M ${centerX + eNeckRadius},${topY + eNeckHeight - 10} L ${centerX + eNeckRadius + 15},${topY + eNeckHeight - 10} L ${centerX + eNeckRadius + 15},${topY + eNeckHeight - 5} L ${centerX + eNeckRadius},${topY + eNeckHeight - 5}`}
                  fill="#94a3b8"
                  stroke="#64748b"
                />
              )}
            </g>
          );
        }
      case 'separatory_funnel':
        {
          const sfNeckRadius = (neck_diameter_mm || 18) * scale / 2;
          const sfNeckHeight = (height_mm * 0.15) * scale;
          const stemY = bottomY - 30;
          return (
            <g>
              {/* Body - Pear shape */}
              <path
                d={`M ${centerX - sfNeckRadius},${topY} 
                  L ${centerX - sfNeckRadius},${topY + sfNeckHeight} 
                  C ${centerX - radius * 1.5},${topY + sfNeckHeight + radius} ${centerX - radius},${stemY - 40} ${centerX - 5},${stemY} 
                  L ${centerX - 5},${bottomY} 
                  L ${centerX + 5},${bottomY} 
                  L ${centerX + 5},${stemY} 
                  C ${centerX + radius},${stemY - 40} ${centerX + radius * 1.5},${topY + sfNeckHeight + radius} ${centerX + sfNeckRadius},${topY + sfNeckHeight} 
                  L ${centerX + sfNeckRadius},${topY} Z`}
                fill="rgba(173, 216, 230, 0.15)"
                stroke="#64748b"
                strokeWidth="2"
              />
              {/* Stopcock */}
              <circle cx={centerX} cy={stemY - 10} r="7" fill="#1e293b" />
              <rect x={centerX - 10} y={stemY - 11} width="20" height="2" fill="#94a3b8" />
            </g>
          );
        }
      case 'condenser':
        {
          const jacketRadius = radius;
          const tubeRadius = radius * 0.4;
          return (
            <g>
              {/* Outer Jacket */}
              <rect 
                x={centerX - jacketRadius} y={topY + 40} 
                width={jacketRadius * 2} height={height_mm * scale - 80} 
                fill="rgba(173, 216, 230, 0.1)" stroke="#64748b" strokeWidth="1"
              />
              {/* Ports */}
              <rect x={centerX + jacketRadius} y={topY + 60} width="10" height="4" fill="#64748b" />
              <rect x={centerX - jacketRadius - 10} y={bottomY - 60} width="10" height="4" fill="#64748b" />
              {/* Inner Tube */}
              <path
                d={`M ${centerX - tubeRadius},${topY} L ${centerX - tubeRadius},${bottomY} L ${centerX + tubeRadius},${bottomY} L ${centerX + tubeRadius},${topY} Z`}
                fill="rgba(255, 255, 255, 0.2)" stroke="#1e293b" strokeWidth="1.5"
              />
            </g>
          );
        }
      case 'measuring_cylinder':
        return (
          <g>
            <path
              d={`M ${centerX - radius - 20},${bottomY} L ${centerX + radius + 20},${bottomY} L ${centerX + radius + 10},${bottomY + 15} L ${centerX - radius - 10},${bottomY + 15} Z`}
              fill="#94a3b8"
              stroke="#475569"
            />
            <path
              d={`M ${centerX - radius},${topY} 
                 L ${centerX - radius},${bottomY} 
                 L ${centerX + radius},${bottomY} 
                 L ${centerX + radius},${topY} 
                 Q ${centerX + radius + 10},${topY - 10} ${centerX + radius},${topY} Z`}
              fill="rgba(173, 216, 230, 0.15)"
              stroke="#64748b"
              strokeWidth="2"
            />
          </g>
        );
      case 'volumetric_flask':
        {
          const vNeckRadius = (neck_diameter_mm || 15) * scale / 2;
          const vNeckHeight = (height_mm * 0.6) * scale;
          return (
            <path
              d={`M ${centerX - vNeckRadius},${topY} 
                L ${centerX - vNeckRadius},${topY + vNeckHeight} 
                C ${centerX - vNeckRadius},${topY + vNeckHeight + 20} ${centerX - radius},${bottomY - radius} ${centerX - radius},${bottomY - radius/2}
                Q ${centerX - radius},${bottomY} ${centerX},${bottomY}
                Q ${centerX + radius},${bottomY} ${centerX + radius},${bottomY - radius/2}
                C ${centerX + radius},${bottomY - radius} ${centerX + vNeckRadius},${topY + vNeckHeight + 20} ${centerX + vNeckRadius},${topY + vNeckHeight}
                L ${centerX + vNeckRadius},${topY} Z`}
              fill="rgba(173, 216, 230, 0.15)"
              stroke="#64748b"
              strokeWidth="2"
            />
          );
        }
      case 'crucible':
        return (
          <g>
            {/* Lid */}
            <path d={`M ${centerX - radius - 2},${topY - 5} L ${centerX + radius + 2},${topY - 5} L ${centerX + radius},${topY} L ${centerX - radius},${topY} Z`} fill="#cbd5e1" stroke="#475569" />
            <circle cx={centerX} cy={topY - 8} r="3" fill="#475569" />
            {/* Cup */}
            <path
              d={`M ${centerX - radius},${topY} 
                 L ${centerX - radius * 0.7},${bottomY} 
                 L ${centerX + radius * 0.7},${bottomY} 
                 L ${centerX + radius},${topY} Z`}
              fill="#f1f5f9"
              stroke="#94a3b8"
              strokeWidth="2"
            />
          </g>
        );
      case 'test_tube':
        return (
          <path
            d={`M ${centerX - radius},${topY} 
               L ${centerX - radius},${bottomY - radius} 
               A ${radius},${radius} 0 0 0 ${centerX + radius},${bottomY - radius} 
               L ${centerX + radius},${topY} Z`}
            fill="rgba(173, 216, 230, 0.15)"
            stroke="#64748b"
            strokeWidth="2"
          />
        );
      case 'burette':
        {
          const stopcockY = bottomY - 40;
          return (
            <g>
              <path
                d={`M ${centerX - radius},${topY} L ${centerX - radius},${stopcockY} L ${centerX + radius},${stopcockY} L ${centerX + radius},${topY} Z`}
                fill="rgba(173, 216, 230, 0.15)"
                stroke="#64748b"
                strokeWidth="1.5"
              />
              <path
                d={`M ${centerX - 4},${stopcockY} L ${centerX + 4},${stopcockY} L ${centerX},${bottomY} Z`}
                fill="#94a3b8"
                stroke="#475569"
              />
              <circle cx={centerX} cy={stopcockY - 12} r="6" fill="#1e293b" />
            </g>
          );
        }
      case 'petri_dish':
        {
          const dishH = height_mm * scale;
          return (
            <g>
              <path
                d={`M ${centerX - radius},${bottomY - dishH} L ${centerX - radius},${bottomY - 5} Q ${centerX - radius},${bottomY} ${centerX - radius + 5},${bottomY} L ${centerX + radius - 5},${bottomY} Q ${centerX + radius},${bottomY} ${centerX + radius},${bottomY - 5} L ${centerX + radius},${bottomY - dishH} Z`}
                fill="rgba(173, 216, 230, 0.1)" stroke="#64748b" strokeWidth="1.5"
              />
              <path
                d={`M ${centerX - radius - 5},${bottomY - dishH - 10} L ${centerX - radius - 5},${bottomY - 10} L ${centerX + radius + 5},${bottomY - 10} L ${centerX + radius + 5},${bottomY - dishH - 10} Z`}
                fill="rgba(255, 255, 255, 0.2)" stroke="#475569" strokeWidth="1"
              />
            </g>
          );
        }
      case 'wash_bottle':
        return (
          <g>
            {/* Body */}
            <path d={`M ${centerX - radius},${topY + 20} L ${centerX - radius},${bottomY - 10} Q ${centerX - radius},${bottomY} ${centerX},${bottomY} Q ${centerX + radius},${bottomY} ${centerX + radius},${bottomY - 10} L ${centerX + radius},${topY + 20} Z`} fill="rgba(255,255,255,0.4)" stroke="#94a3b8" strokeWidth="1.5" />
            {/* Cap */}
            <rect x={centerX - radius - 2} y={topY} width={radius * 2 + 4} height="20" rx="2" fill="#475569" />
            {/* Delivery Tube */}
            <path d={`M ${centerX},${topY + 10} L ${centerX},${topY - 30} L ${centerX + 40},${topY - 10}`} fill="none" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
          </g>
        );
      default:
        return null;
    }
  };

  const renderGraduations = () => {
    if (graduation_step_ml === 0) return null;
    
    const lines = [];
    const maxVal = capacity_ml;
    const step = graduation_step_ml;
    const graduationHeight = height_mm * scale * 0.8;
    const pxPerMl = graduationHeight / maxVal;
    
    // Logic for top-down (Burette) vs bottom-up (others)
    const isTopDown = equipment.id === 'burette';
    const startY = isTopDown ? topY + 10 : bottomY - 10;
    const rightEdge = centerX + radius;

    for (let v = 0; v <= maxVal; v += step) {
      const y = isTopDown ? startY + (v * pxPerMl) : startY - (v * pxPerMl);
      const isMajor = (v % (step * 5) === 0) || v === maxVal || v === 0;
      const lineLen = isMajor ? 20 : 12;
      
      lines.push(
        <line
          key={`grad-${v}`}
          x1={rightEdge - lineLen} y1={y}
          x2={rightEdge} y2={y}
          stroke="#1e293b" strokeWidth={isMajor ? 1.5 : 0.8}
        />
      );

      if (isMajor && (v > 0 || isTopDown)) {
        lines.push(
          <text
            key={`label-${v}`}
            x={rightEdge + 8} y={y + 4}
            fontSize="11" fontFamily="monospace" fontWeight="bold" fill="#334155"
          >
            {v.toFixed(step < 1 ? 1 : 0)}
          </text>
        );
      }
    }
    return lines;
  };

  return (
    <div
      style={{ height: `${containerHeight}px` }}
      className="glass-panel flex justify-center items-center w-full overflow-hidden rounded-3xl relative border border-white/10 p-8 neumorphic-inset"
    >
      <div className="absolute top-6 left-6 flex flex-col gap-2 z-20">
        <span className="text-[10px] font-black text-primary-container uppercase tracking-[0.3em]">Engineering Spec</span>
        <div className="flex items-center gap-4 bg-black/30 backdrop-blur-sm p-3 rounded-2xl border border-white/10">
          <div className="flex flex-col">
            <span className="text-[9px] font-bold text-white/35 uppercase">H (Z-axis)</span>
            <span className="text-sm font-mono font-black text-white/85">{height_mm}mm</span>
          </div>
          <div className="w-px h-8 bg-white/10"></div>
          <div className="flex flex-col">
            <span className="text-[9px] font-bold text-white/35 uppercase">Bore (Ø)</span>
            <span className="text-sm font-mono font-black text-white/85">{diameter_mm}mm</span>
          </div>
          <div className="w-px h-8 bg-white/10"></div>
          <div className="flex flex-col">
            <span className="text-[9px] font-bold text-white/35 uppercase">Scale</span>
            <span className="text-sm font-mono font-black text-primary-container">x{scale.toFixed(2)}</span>
          </div>
        </div>
      </div>
      
      <svg
        width={svgWidth}
        height={svgHeight}
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        className="transition-all duration-700 ease-out drop-shadow-md"
      >
        <defs>
          <linearGradient id="glassReflect" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0.05" />
            <stop offset="20%" stopColor="white" stopOpacity="0.3" />
            <stop offset="40%" stopColor="white" stopOpacity="0.1" />
            <stop offset="100%" stopColor="white" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {renderPath()}
        
        {/* Optical highlights */}
        {!['petri_dish', 'crucible', 'wash_bottle'].includes(equipment.id) && (
          <rect 
            x={centerX - radius + 4} y={topY + 10} 
            width={radius * 0.4} height={height_mm * scale - 20} 
            fill="url(#glassReflect)" pointerEvents="none" className="opacity-60"
          />
        )}

        {renderGraduations()}
        
        <text
          x={centerX} y={bottomY + 35}
          textAnchor="middle" fontSize="10" fontWeight="bold" fill="rgba(245, 222, 211, 0.35)"
          className="select-none tracking-widest uppercase opacity-60"
        >
          {equipment.material}
        </text>
      </svg>
    </div>
  );
};
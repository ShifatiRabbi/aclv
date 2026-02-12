import React from 'react';
import type { Equipment, Measurement } from '../types';

interface GlasswareRendererProps {
  equipment: Equipment;
  measurement: Measurement;
}

export const GlasswareRenderer: React.FC<GlasswareRendererProps> = ({ equipment, measurement }) => {
  const { height_mm, diameter_mm, capacity_ml, graduation_step_ml, neck_diameter_mm } = measurement;
  
  // Scaling factors to fit viewport while maintaining mm ratios
  const baseScale = 2; 
  const width = diameter_mm * baseScale + 100; // Extra room for labels
  const height = height_mm * baseScale + 40;
  
  const centerX = width / 2;
  const bottomY = height - 20;
  const topY = bottomY - (height_mm * baseScale);
  const radius = (diameter_mm * baseScale) / 2;
  
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
            strokeWidth="1.5"
          />
        );
      case 'erlenmeyer':
        {
            const neckRadius = (neck_diameter_mm || 20) * baseScale / 2;
            const neckHeight = (height_mm * 0.3) * baseScale;
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
      case 'measuring_cylinder':
        return (
          <g>
            {/* Hexagonal Base (Simplified) */}
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
              strokeWidth="1.5"
            />
          </g>
        );
      case 'volumetric_flask':
        {
            const vNeckRadius = (neck_diameter_mm || 15) * baseScale / 2;
            const vNeckHeight = (height_mm * 0.5) * baseScale;
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
                strokeWidth="1.5"
            />
            );
        }
      case 'test_tube':
        return (
          <path
            d={`M ${centerX - radius},${topY} 
               L ${centerX - radius},${bottomY - radius} 
               A ${radius},${radius} 0 0 0 ${centerX + radius},${bottomY - radius} 
               L ${centerX + radius},${topY} Z`}
            fill="rgba(173, 216, 230, 0.15)"
            stroke="#64748b"
            strokeWidth="1.5"
          />
        );
      default:
        return null;
    }
  };

  const renderGraduations = () => {
    const lines = [];
    const maxVal = capacity_ml;
    const step = graduation_step_ml;
    const pxPerMl = (height_mm * baseScale * 0.8) / maxVal; // Use 80% height for graduations
    const startY = bottomY - 10;
    
    // Graduations on the RIGHT side
    const rightEdge = centerX + radius;

    for (let v = step; v <= maxVal; v += step) {
      const y = startY - (v * pxPerMl);
      const isMajor = (v % (step * 5) === 0) || v === maxVal;
      const lineLen = isMajor ? 15 : 8;
      
      lines.push(
        <line
          key={`grad-${v}`}
          x1={rightEdge - lineLen}
          y1={y}
          x2={rightEdge}
          y2={y}
          stroke="#1e293b"
          strokeWidth={isMajor ? 1.5 : 1}
        />
      );

      if (isMajor) {
        lines.push(
          <text
            key={`label-${v}`}
            x={rightEdge + 5}
            y={y + 4}
            fontSize="10"
            fontFamily="monospace"
            fill="#1e293b"
          >
            {v} ml
          </text>
        );
      }
    }
    return lines;
  };

  return (
    <div className="flex justify-center items-center w-full h-[500px] overflow-hidden bg-white rounded-xl shadow-inner relative">
      <div className="absolute top-4 left-4 flex flex-col gap-1">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Dimension Info</span>
        <span className="text-sm font-semibold text-slate-700">H: {height_mm}mm</span>
        <span className="text-sm font-semibold text-slate-700">Ø: {diameter_mm}mm</span>
      </div>
      
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className="transition-all duration-500 transform hover:scale-105"
      >
        {/* Glass highlighting / reflections */}
        <defs>
          <linearGradient id="glassReflect" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0.1" />
            <stop offset="50%" stopColor="white" stopOpacity="0.4" />
            <stop offset="100%" stopColor="white" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {renderPath()}
        
        {/* Reflection Path (simplified overlay) */}
        <rect 
          x={centerX - radius + 5} 
          y={topY + 10} 
          width={radius/2} 
          height={height_mm * baseScale - 20} 
          fill="url(#glassReflect)" 
          pointerEvents="none"
        />

        {renderGraduations()}
        
        {/* Equipment Label on Glass */}
        <text
          x={centerX}
          y={bottomY - 10}
          textAnchor="middle"
          fontSize="12"
          fontWeight="bold"
          fill="#334155"
          className="select-none opacity-40"
        >
          {equipment.material}
        </text>
      </svg>
    </div>
  );
};
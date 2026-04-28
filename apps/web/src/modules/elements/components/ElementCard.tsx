/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import type { Element } from '../types';

interface ElementCardProps {
  element: Element;
  onClick: (id: number) => void;
}

const categoryColors: Record<string, string> = {
  'reactive nonmetal': 'border-orange-500 shadow-[0_0_15px_rgba(255,122,24,0.3)]',
  'noble gas': 'border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.3)]',
  'alkali metal': 'border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.3)]',
  'alkaline earth metal': 'border-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.3)]',
  'metalloid': 'border-teal-500 shadow-[0_0_15px_rgba(20,184,166,0.3)]',
  'post-transition metal': 'border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]',
  'transition metal': 'border-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.3)]',
  'lanthanide': 'border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.3)]',
  'actinide': 'border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]',
};

export function ElementCard({ element, onClick }: ElementCardProps) {
  const borderColor = categoryColors[element.category] || 'border-gray-700';

  return (
    <motion.div
      layoutId={`element-${element.atomic_number}`}
      whileHover={{ scale: 1.05, rotateY: 10, rotateX: -10, z: 50 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onClick={() => onClick(element.atomic_number)}
      className={`
        relative aspect-square p-2 border bg-black/40 backdrop-blur-md cursor-pointer 
        transition-all duration-300 group overflow-hidden
        ${borderColor}
      `}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="flex flex-col h-full justify-between relative z-10">
        <div className="flex justify-between items-start">
          <span className="text-[10px] font-mono text-gray-400 leading-none">
            {element.atomic_number}
          </span>
          <span className="text-[8px] font-mono text-gray-500 leading-none">
            {element.atomic_mass.toFixed(3)}
          </span>
        </div>
        
        <div className="flex flex-col items-center">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-orange-400 transition-colors">
            {element.symbol}
          </h2>
          <span className="text-[9px] uppercase tracking-wider text-gray-400 hidden sm:block">
            {element.name}
          </span>
        </div>

        <div className="flex justify-center">
           <div className={`w-1 h-1 rounded-full ${element.phase_at_stp === 'gas' ? 'bg-blue-400' : 'bg-green-400'}`} />
        </div>
      </div>
    </motion.div>
  );
}

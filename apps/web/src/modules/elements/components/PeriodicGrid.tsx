/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Element } from '../types';
import { ElementCard } from './ElementCard';

interface PeriodicGridProps {
  elements: Element[];
  onElementClick: (id: number) => void;
}

// Map atomic number to [row, col] (1-indexed)
const elementPositions: Record<number, [number, number]> = {
  1: [1, 1],   // H
  2: [1, 18],  // He
  3: [2, 1],   // Li
  4: [2, 2],   // Be
  5: [2, 13],  // B
  6: [2, 14],  // C
  7: [2, 15],  // N
  8: [2, 16],  // O
  9: [2, 17],  // F
  10: [2, 18], // Ne
  // Add more as needed for a full table, but for the seed data we have H, He, Li
};

export function PeriodicGrid({ elements, onElementClick }: PeriodicGridProps) {
  return (
    <div className="w-full overflow-x-auto pb-8 custom-scrollbar">
      <div 
        className="grid grid-cols-18 gap-1 md:gap-2 min-w-[1000px] mx-auto p-4"
        id="periodic-grid"
      >
        {elements.map((element) => {
          const position = elementPositions[element.atomic_number] || [1, 1];
          return (
            <div 
              key={element.atomic_number}
              style={{
                gridRow: position[0],
                gridColumn: position[1]
              }}
            >
              <ElementCard element={element} onClick={onElementClick} />
            </div>
          );
        })}
        
        {/* Placeholder for empty cells to maintain grid structure */}
        {/* This is a simplified version, ideally we'd fill the whole 7x18 grid */}
      </div>
    </div>
  );
}

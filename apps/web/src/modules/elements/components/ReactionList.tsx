/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Reaction } from '../types';
import { FlaskConical, MapPin } from 'lucide-react';

interface ReactionListProps {
  reactions: Reaction[];
}

export function ReactionList({ reactions }: ReactionListProps) {
  if (reactions.length === 0) return null;

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white flex items-center gap-2">
        <FlaskConical size={18} className="text-orange-400" />
        Chemical Reactions
      </h3>
      <div className="grid gap-4">
        {reactions.map((r) => (
          <div 
            key={r.id} 
            className="group bg-black/40 border border-orange-500/10 hover:border-orange-500/30 p-5 rounded-xl transition-all"
          >
            <div className="flex justify-between items-start mb-3">
              <h4 className="text-orange-400 font-bold text-lg">{r.title}</h4>
              <span className="text-[10px] px-2 py-1 bg-white/5 text-gray-400 rounded uppercase font-bold border border-white/10">
                {r.role}
              </span>
            </div>
            
            <div className="bg-black/60 p-4 rounded-lg font-mono text-xl text-white mb-4 border border-white/5 text-center shadow-inner">
              {r.equation}
            </div>
            
            <div className="space-y-3">
              <p className="text-gray-400 text-sm italic">{r.description}</p>
              <div className="flex items-center gap-2 text-xs text-orange-300 font-mono">
                <MapPin size={12} />
                <span>Conditions: {r.conditions}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

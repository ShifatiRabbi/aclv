import React from 'react'
import { FlaskConical, Droplets, FlaskRound, Pipette as PipetteIcon } from 'lucide-react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { useLabStore } from '../../store/useLabStore'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const ControlPanel: React.FC = () => {
  const { currentExperiment, selectedChemicalId, allChemicals, selectedTool, selectTool, error, history } = useLabStore()

  const tools = [
    { id: 'pipette', name: 'Pipette', icon: PipetteIcon },
    { id: 'beaker', name: 'Beaker', icon: FlaskRound },
    { id: 'dropper', name: 'Dropper', icon: Droplets },
    { id: 'burette', name: 'Burette', icon: FlaskConical }
  ] as const

  const activeChemicalName = allChemicals.find((c) => c.id === selectedChemicalId)?.name || 'None Selected'

  return (
    <aside className="w-full bg-lab-panel flex flex-col border-l border-white/10 xl:w-80 shrink-0">
      <div className="p-6 border-b border-white/10 bg-white/[0.02]">
        <span className="text-[10px] text-lab-accent uppercase font-bold tracking-widest mb-1 block">Current Protocol</span>
        <h3 className="text-lg font-serif italic text-white/90 mb-4 line-clamp-1">{currentExperiment?.name}</h3>

        <div className="space-y-3">
          <div className="flex justify-between items-center text-[11px]">
            <span className="text-white/40 uppercase tracking-wider font-bold">Titrant</span>
            <span className="font-mono text-lab-titrant">0.1M NaOH</span>
          </div>
          <div className="flex justify-between items-center text-[11px]">
            <span className="text-white/40 uppercase tracking-wider font-bold">Indicator</span>
            <span className="font-mono text-lab-analyte">Phenolphthalein</span>
          </div>
        </div>
      </div>

      <div className="flex-1 p-6 space-y-6">
        <div>
          <h4 className="text-[10px] text-white/40 uppercase tracking-widest mb-4 font-bold">Selection Status</h4>
          <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
            <div className="text-[9px] text-white/30 uppercase tracking-wider mb-1">Active Substance</div>
            <div className="text-sm font-bold text-lab-accent truncate">{activeChemicalName}</div>
          </div>
        </div>

        <div>
          <h4 className="text-[10px] text-white/40 uppercase tracking-widest mb-4 font-bold">Action Controls</h4>
          <div className="grid grid-cols-4 gap-2 mb-4">
            {tools.map((tool) => {
              const Icon = tool.icon
              return (
                <button
                  key={tool.id}
                  onClick={() => selectTool(selectedTool === tool.id ? null : tool.id)}
                  className={cn(
                    'aspect-square rounded border flex items-center justify-center transition-all',
                    selectedTool === tool.id
                      ? 'bg-lab-accent border-lab-accent text-black'
                      : 'bg-white/5 border-white/10 text-white/40 hover:bg-white/10'
                  )}
                  title={tool.name}
                >
                  <Icon size={18} />
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <div className="h-80 bg-black/40 border-t border-white/10 p-5 font-mono text-[10px] leading-relaxed overflow-y-scroll">
        <div className="flex items-center justify-between mb-3 opacity-40 uppercase tracking-widest font-black">
          <span>Action Log</span>
          <span className="animate-pulse">● Live</span>
        </div>
        <div className="space-y-1.5">
          {history.length === 0 ? (
            <p className="text-white/20 italic">_ Awaiting user input...</p>
          ) : (
            history
              .slice()
              .reverse()
              .map((log, i) => (
                <p key={i} className="text-white/60">
                  <span className="text-lab-status">
                    [{new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })}]
                  </span>{' '}
                  {log}
                </p>
              ))
          )}
          {error && <p className="text-lab-analyte font-bold animate-pulse">!! ERROR: {error}</p>}
          <p className="text-lab-titrant animate-pulse">_</p>
        </div>
      </div>
    </aside>
  )
}


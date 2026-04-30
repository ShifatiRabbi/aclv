import React from 'react'
import { motion } from 'motion/react'
import { Search, FlaskConical, Beaker as BeakerIcon, Database } from 'lucide-react'
import { useLabStore } from '../../store/useLabStore'

export const ChemicalLibrary: React.FC = () => {
  const { allChemicals, selectChemical, selectedChemicalId, points } = useLabStore()
  const [searchTerm, setSearchTerm] = React.useState('')

  const filtered = allChemicals.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.formula.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="w-full bg-[#0F0F12] border-r border-white/5 flex flex-col xl:w-80">
      <div className="p-6 border-b border-white/5 bg-black/20">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Database size={18} className="text-lab-accent" />
            <h2 className="text-sm font-black uppercase tracking-widest text-white/90">Reagent Database</h2>
          </div>
          <div className="px-3 py-1 bg-lab-accent/10 border border-lab-accent/20 rounded-full">
            <span className="text-[10px] font-black text-lab-accent tracking-tighter">PTS: {points}</span>
          </div>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20" size={14} />
          <input
            type="text"
            placeholder="Search chemicals..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-black/40 border border-white/10 rounded-xl py-2.5 pl-9 pr-4 text-xs text-white placeholder:text-white/10 focus:border-lab-accent/50 transition-all outline-none"
          />
        </div>
      </div>

      <div className="flex-1 p-4 space-y-2">
        {filtered.map((chemical) => (
          <motion.div
            key={chemical.id}
            whileHover={{ x: 4 }}
            onClick={() => selectChemical(chemical.id)}
            className={`p-4 rounded-2xl border transition-all cursor-pointer group relative overflow-hidden ${
              selectedChemicalId === chemical.id
                ? 'bg-lab-accent/10 border-lab-accent/30'
                : 'bg-white/[0.02] border-white/5 hover:border-white/20'
            }`}
          >
            <div className="flex items-start justify-between mb-1 relative z-10">
              <div>
                <h4 className="text-xs font-bold text-white group-hover:text-lab-accent transition-colors">{chemical.name}</h4>
                <p className="text-[10px] font-mono text-white/40">{chemical.formula}</p>
              </div>
              <div
                className={`p-1.5 rounded-lg border flex items-center justify-center ${
                  chemical.state === 'liquid' ? 'text-blue-400 border-blue-500/20' : 'text-orange-400 border-orange-500/20'
                }`}
              >
                {chemical.state === 'liquid' ? <FlaskConical size={12} /> : <BeakerIcon size={12} />}
              </div>
            </div>

            <div className="flex items-center justify-between mt-3 relative z-10">
              <span className="text-[9px] text-white/20 uppercase font-bold tracking-widest">{chemical.state}</span>
              <span className="text-[9px] font-black text-white/40">{chemical.cost ?? 0} pts/ml</span>
            </div>

            {selectedChemicalId === chemical.id && (
              <motion.div layoutId="active-bg" className="absolute inset-0 bg-lab-accent/5 pointer-events-none" />
            )}
          </motion.div>
        ))}
      </div>

      <div className="p-4 bg-black/20 border-t border-white/5">
        <p className="text-[9px] text-white/20 uppercase font-black tracking-[0.2em] text-center">Simulation Assets</p>
      </div>
    </div>
  )
}


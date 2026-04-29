import React from 'react'
import { motion } from 'motion/react'
import { ArrowLeft, Beaker, Pipette, ChevronRight } from 'lucide-react'
import { useLabStore } from '../store/useLabStore'
import type { Experiment } from '../types'

interface SelectionProps {
  onBack: () => void
  onSelect: () => void
}

export const Selection: React.FC<SelectionProps> = ({ onBack, onSelect }) => {
  const { setExperiment, allExperiments } = useLabStore()
  const { selectedType } = useLabStore()

  const filteredExperiments = selectedType
                              ? allExperiments.filter(exp => exp.type === selectedType)
                              : allExperiments

  // React.useEffect(() => {
  //   if (allExperiments.length > 0) return
  //   api
  //     .get('/reactions')
  //     .then((res: { data?: { experiments?: unknown[] } }) =>
  //       setAllExperiments((res.data?.experiments as any[]) ?? [])
  //     )
  //     .catch((err: unknown) => console.error('Failed to load experiments', err))
  // }, [allExperiments.length, setAllExperiments])

  const handleSelect = (exp: Experiment) => {
    setExperiment(exp)
    onSelect()
  }

  return (
    <div className="min-h-screen bg-[#0A0A0C] p-12 overflow-y-auto">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-white/30 hover:text-lab-accent transition-colors mb-12 font-bold text-xs uppercase tracking-[0.2em]"
      >
        <ArrowLeft size={14} /> Back to Dashboard
      </button>

      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-[10px] text-lab-accent uppercase font-bold tracking-[0.4em] mb-4 block">
            Simulation Catalog
          </span>
          <h2 className="text-5xl font-black text-white tracking-tight mb-4 uppercase leading-none">Select Protocol</h2>
          <p className="text-white/40 font-serif italic text-lg leading-relaxed">
            Choose an experimental procedure to initiate the simulation environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredExperiments.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => handleSelect(exp)}
              className="group bg-[#0F0F12] p-10 rounded-[40px] border border-white/5 hover:border-lab-accent/30 cursor-pointer transition-all hover:bg-white/[0.02] shadow-2xl relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                  <div className="p-4 bg-black/40 rounded-2xl border border-white/10 text-lab-accent group-hover:scale-110 transition-transform">
                    {exp.type === 'titration' ? <Beaker size={28} /> : <Pipette size={28} />}
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-lab-accent/10 rounded-full text-[9px] font-black text-lab-accent uppercase tracking-[0.2em] border border-lab-accent/20">
                    Protocol: {exp.type.split('_').join(' ')}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-lab-accent transition-colors uppercase tracking-tight">
                  {exp.name}
                </h3>
                <p className="text-white/30 text-sm leading-relaxed mb-8 line-clamp-2 italic font-serif">{exp.theory}</p>
                <div className="flex items-center justify-between pt-8 border-t border-white/5">
                  <span className="text-[9px] font-black text-white/10 uppercase tracking-[0.3em] font-mono">
                    {exp.steps.length} STAGES DETECTED
                  </span>
                  <span className="text-lab-accent text-xs font-black flex items-center gap-2 uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                    Initialize <ChevronRight size={12} />
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-lab-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}


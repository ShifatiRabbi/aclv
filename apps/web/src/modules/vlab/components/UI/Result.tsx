import React from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { CheckCircle2, FlaskRound, Share2, RotateCcw, Home } from 'lucide-react'
import { useLabStore } from '../../store/useLabStore'

interface ResultProps {
  onReset: () => void
  onHome: () => void
}

export const Result: React.FC<ResultProps> = ({ onReset, onHome }) => {
  const { currentExperiment, showResult } = useLabStore()

  if (!currentExperiment || !showResult) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ scale: 0.9, y: 40, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 40, opacity: 0 }}
          className="relative w-full max-w-2xl bg-slate-900 rounded-[40px] border border-white/10 shadow-2xl overflow-hidden"
        >
          <div className="bg-emerald-500/10 p-10 border-b border-emerald-500/20 text-center">
            <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(16,185,129,0.4)]">
              <CheckCircle2 size={40} className="text-white" />
            </div>
            <h2 className="text-4xl font-black text-white tracking-tight">EXPERIMENT COMPLETE</h2>
            <p className="text-emerald-400 text-sm font-bold uppercase tracking-widest mt-2">Analysis Report Verified</p>
          </div>

          <div className="p-10 space-y-8">
            <div>
              <h4 className="text-white/30 text-[10px] font-bold uppercase mb-4 tracking-widest">Balanced Equation</h4>
              <div className="bg-black/20 p-6 rounded-2xl border border-white/5 font-mono text-xl text-blue-300 text-center">
                {currentExperiment.result.equation}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-white/30 text-[10px] font-bold uppercase mb-4 tracking-widest">Observations</h4>
                <ul className="space-y-3">
                  {currentExperiment.result.observations.map((obs, i) => (
                    <li key={i} className="flex gap-3 text-slate-300 text-xs leading-relaxed">
                      <span className="text-emerald-500 font-bold shrink-0">✓</span>
                      {obs}
                    </li>
                  ))}
                </ul>
              </div>
              {currentExperiment.type === 'titration' && (
                <div>
                  <h4 className="text-white/30 text-[10px] font-bold uppercase mb-4 tracking-widest">Calculation Method</h4>
                  <div className="p-4 bg-slate-800 rounded-xl border border-white/5 flex items-center gap-4">
                    <div className="p-3 bg-slate-950 rounded-lg text-blue-400">
                      <FlaskRound size={20} />
                    </div>
                    <span className="text-xl font-bold text-white font-mono">M1V1 = M2V2</span>
                  </div>
                </div>
              )}
            </div>

            <div className="flex gap-4 pt-6">
              <button
                onClick={onReset}
                className="flex-1 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-3"
              >
                <RotateCcw size={18} /> RESET LAB
              </button>
              <button
                onClick={onHome}
                className="flex-1 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl shadow-lg transition-all flex items-center justify-center gap-3"
              >
                <Home size={18} /> BACK TO HOME
              </button>
              <button className="p-4 bg-slate-800 hover:bg-slate-700 text-white rounded-2xl transition-all" title="Share (coming soon)">
                <Share2 size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}


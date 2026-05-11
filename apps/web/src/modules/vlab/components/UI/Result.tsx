import React from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { CheckCircle2, FlaskRound, Share2, RotateCcw, Home } from 'lucide-react'
import { useLabStore } from '../../store/useLabStore'

interface ResultProps {
  onReset: () => void
  onHome: () => void
  onClose: () => void
}

export const Result: React.FC<ResultProps> = ({ onReset, onHome, onClose }) => {
  const { currentExperiment, showResult, titrantVolume, liquidLevel } = useLabStore()

  if (!currentExperiment || !showResult) return null

  const buildReactionMath = () => {
    if (currentExperiment.type === 'titration') {
      const acidVolumeMl = 25
      const acidMolarity = 0.1
      const baseMolarity = 0.1
      const usedBaseMl = Math.max(0, titrantVolume)
      const acidMoles = (acidVolumeMl * acidMolarity) / 1000
      const baseMoles = (usedBaseMl * baseMolarity) / 1000
      const molarityDerived = usedBaseMl > 0 ? (baseMolarity * usedBaseMl) / acidVolumeMl : 0

      return {
        title: 'Step-by-Step Stoichiometric Calculation',
        lines: [
          `1) Balanced ratio from equation: HCl : NaOH = 1 : 1`,
          `2) Known values: Va = ${acidVolumeMl.toFixed(2)} mL, Ma = ${acidMolarity.toFixed(3)} M, Mb = ${baseMolarity.toFixed(3)} M`,
          `3) Titrant consumed at endpoint: Vb = ${usedBaseMl.toFixed(2)} mL`,
          `4) Apply MaVa = MbVb -> Ma = (Mb * Vb) / Va`,
          `5) Ma = (${baseMolarity.toFixed(3)} * ${usedBaseMl.toFixed(2)}) / ${acidVolumeMl.toFixed(2)} = ${molarityDerived.toFixed(4)} M`,
          `6) Moles check: n(HCl) = ${acidMoles.toExponential(3)} mol, n(NaOH) = ${baseMoles.toExponential(3)} mol`,
          `7) Interpretation: endpoint is reached when moles of base equal moles of acid.`
        ],
        metrics: [
          { label: 'Measured NaOH Volume', value: `${usedBaseMl.toFixed(2)} mL` },
          { label: 'Derived HCl Molarity', value: `${molarityDerived.toFixed(4)} M` },
          { label: 'Total Mixture Volume', value: `${(acidVolumeMl + usedBaseMl).toFixed(2)} mL` }
        ]
      }
    }

    return {
      title: 'Reaction Analysis',
      lines: [
        '1) Confirm reagent interaction from the balanced equation.',
        '2) Identify the visible marker: precipitate, gas, or color shift.',
        '3) Use the marker to conclude ion presence or reaction completion.',
        '4) For precipitation reactions, product formation confirms the target ion.',
        '5) Educational takeaway: qualitative tests are interpreted from observable evidence.'
      ],
      metrics: [
        { label: 'Observed Liquid Fill', value: `${liquidLevel.toFixed(0)}%` },
        { label: 'Reaction Outcome', value: currentExperiment.result.precipitate ? 'Precipitate formed' : 'Color/phase change observed' },
        { label: 'Inference', value: 'Analyte confirmed by product evidence' }
      ]
    }
  }

  const reactionMath = buildReactionMath()

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

            <div>
              <h4 className="text-white/30 text-[10px] font-bold uppercase mb-4 tracking-widest">{reactionMath.title}</h4>
              <div className="bg-slate-950/70 border border-white/10 rounded-2xl p-5 space-y-2">
                {reactionMath.lines.map((line) => (
                  <p key={line} className="text-xs text-slate-300 leading-relaxed font-mono">
                    {line}
                  </p>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {reactionMath.metrics.map((metric) => (
                <div key={metric.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{metric.label}</div>
                  <div className="text-sm text-white/90 font-semibold mt-1">{metric.value}</div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-6">
              <button
                onClick={onClose}
                className="py-4 px-6 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-2xl transition-all"
              >
                CLOSE
              </button>
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


import React from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useLabStore } from '../../store/useLabStore'

export const LabHeader: React.FC = () => {
  const { currentExperiment } = useLabStore()

  return (
    <header className="h-16 border-b border-white/10 flex items-center justify-between px-6 bg-lab-panel shrink-0 z-30">
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 rounded bg-lab-accent flex items-center justify-center font-bold text-black text-sm">CH</div>
        <h1 className="text-sm font-semibold tracking-tight uppercase text-white/90">
          Virtual Lab <span className="text-white/40 font-normal ml-2">— v2</span>
        </h1>
      </div>

      <div className="flex items-center gap-8">
        <div className="flex flex-col items-end">
          <span className="text-[9px] uppercase tracking-widest text-white/40 font-bold">Status</span>
          <span className="text-[11px] text-lab-status font-mono flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-lab-status shadow-[0_0_8px_#00FF00] animate-pulse"></span>
            SIMULATION ACTIVE
          </span>
        </div>
        <div className="h-8 w-[1px] bg-white/10"></div>
        <div className="flex flex-col">
          <span className="text-[9px] uppercase tracking-widest text-white/40 font-bold">Protocol</span>
          <span className="text-xs font-mono text-white/80">
            {currentExperiment?.id.split('_').join(' ').toUpperCase() || 'IDLE'}
          </span>
        </div>
      </div>
    </header>
  )
}

export const LearningPanel: React.FC = () => {
  const { currentExperiment, currentStepIndex } = useLabStore()

  if (!currentExperiment) return null

  const currentStep = currentExperiment.steps[currentStepIndex]

  return (
    <div className="absolute top-6 left-6 right-6 z-20 pointer-events-none">
      <AnimatePresence mode="wait">
        {currentStep && (
          <motion.div
            key={currentStep.id}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            className="bg-[#141418]/60 backdrop-blur-xl border border-white/10 p-5 rounded-xl shadow-2xl max-w-2xl pointer-events-auto"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="p-1 px-2 rounded bg-lab-accent/10 border border-lab-accent/20">
                  <h2 className="text-[10px] font-black text-lab-accent uppercase tracking-widest italic">
                    Step {String(currentStepIndex + 1).padStart(2, '0')}: {currentStep.action}
                  </h2>
                </div>
              </div>
              <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">
                {currentStepIndex} / {currentExperiment.steps.length} Complete
              </span>
            </div>

            <p className="text-sm leading-relaxed text-white/80 font-medium">{currentStep.hint}</p>

            <div className="mt-4 h-[1px] w-full bg-white/5 relative overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-lab-accent"
                initial={{ width: 0 }}
                animate={{ width: `${(currentStepIndex / currentExperiment.steps.length) * 100}%` }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}


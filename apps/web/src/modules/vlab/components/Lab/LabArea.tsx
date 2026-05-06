import React from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useLabStore } from '../../store/useLabStore'
import { Flask } from '../Equipment/Flask'
import { Burette } from '../Equipment/Burette'
import { Dropper } from '../Equipment/Dropper'
import { TestTube } from '../Equipment/TestTube'
import { useSimulation } from '../../hooks/useSimulation'

export const LabArea: React.FC = () => {
  const {
    currentExperiment,
    currentStepIndex,
    liquidLevel,
    liquidColor,
    isStirring,
    isTitrating,
    titrantVolume,
    setTitrantVolume,
    setTitrating,
    updateLiquid,
    advanceStep,
    precipitateProgress,
    selectedTool,
    selectedChemicalId,
    allChemicals,
    buretteError,
    completeExperiment,
    visualPhase
  } = useLabStore()

  const selectedChemical = React.useMemo(
    () => allChemicals.find((c) => c.id === selectedChemicalId),
    [allChemicals, selectedChemicalId]
  )

  void selectedChemical

  const { performAction } = useSimulation()

  React.useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined
    const currentStep = currentExperiment?.steps[currentStepIndex]

    if (isTitrating && currentStep?.action === 'burette') {
      interval = setInterval(() => {
        setTitrantVolume((prev) => {
          const nextVolume = prev + 0.1

          if (nextVolume > 20 && nextVolume < 25) {
            updateLiquid(liquidLevel, `rgba(255, 45, 146, ${0.1 * Math.sin(nextVolume * 10)})`)
          }

          if (nextVolume >= 25) {
            setTitrating(false)
            updateLiquid(liquidLevel, 'rgba(255, 45, 146, 0.4)')
            if (currentStep?.id === 'titrate') {
              advanceStep()
              completeExperiment()
            }
          }

          return nextVolume
        })
      }, 50)
    }
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [
    isTitrating,
    currentExperiment,
    setTitrantVolume,
    updateLiquid,
    liquidLevel,
    setTitrating,
    currentStepIndex,
    completeExperiment,
    advanceStep
  ])

  const calculatePH = () => {
    if (currentExperiment?.id === 'acid_base_strong') {
      const v_acid = 25
      const c_acid = 0.1
      const c_base = 0.1
      const v_base = titrantVolume

      const moles_acid = (v_acid * c_acid) / 1000
      const moles_base = (v_base * c_base) / 1000
      const total_vol = (v_acid + v_base) / 1000

      if (v_base < v_acid) {
        const h_plus = (moles_acid - moles_base) / total_vol
        return -Math.log10(h_plus)
      } else if (Math.abs(v_base - v_acid) < 0.05) {
        return 7.0
      } else {
        const oh_minus = (moles_base - moles_acid) / total_vol
        const pOH = -Math.log10(oh_minus)
        return 14 - pOH
      }
    }
    return 7.0
  }

  const handleEquipmentClick = (action: string) => {
    const currentStep = currentExperiment?.steps[currentStepIndex]
    if (!currentStep) return

    performAction(action)

    if (currentStep.action === 'burette') {
      setTitrating(!isTitrating)
    }
  }

  if (!currentExperiment) return null

  return (
    <div className="relative flex-1 h-full bg-gradient-to-b from-[#141418] to-[#0A0A0C] overflow-hidden flex items-center justify-center p-8 border-r border-white/10 select-none">
      <div className="absolute bottom-8 right-8 flex flex-col gap-3 z-30">
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="p-3 bg-black/60 backdrop-blur-md rounded-lg border border-white/10 flex items-center justify-between w-40 shadow-2xl"
        >
          <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">pH Level</span>
          <span className="font-mono text-lg text-lab-status">{calculatePH().toFixed(2)}</span>
        </motion.div>
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="p-3 bg-black/60 backdrop-blur-md rounded-lg border border-white/10 flex items-center justify-between w-40 shadow-2xl"
        >
          <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Temp</span>
          <span className="font-mono text-lg text-white/90">
            24.5<span className="text-xs ml-0.5 opacity-40">°C</span>
          </span>
        </motion.div>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-12">
        <div className="h-96 flex items-end">
          <AnimatePresence mode="wait">
            {currentExperiment.type === 'titration' && selectedTool === 'burette' && (
              <motion.div
                key="burette"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                onClick={() => handleEquipmentClick('burette')}
                className="cursor-pointer"
              >
                <Burette isTitrating={isTitrating} value={titrantVolume} onValueChange={setTitrantVolume} hasError={buretteError} />
              </motion.div>
            )}

            {selectedTool === 'dropper' && (
              <motion.div
                key="dropper"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                onClick={() => handleEquipmentClick('drop')}
                className="cursor-pointer"
              >
                <Dropper chemicalColor="#4DA6FF" isActive={false} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.div
          className="relative cursor-pointer hover:scale-[1.02] transition-transform active:scale-[0.98]"
          onClick={() => {
            if (selectedTool === 'beaker') handleEquipmentClick('pour')
            if (selectedTool === 'pipette') handleEquipmentClick('pipette')
          }}
        >
          {currentExperiment.type === 'titration' ? (
            <Flask liquidLevel={liquidLevel} liquidColor={liquidColor} isStirring={isStirring} />
          ) : (
            <TestTube liquidLevel={liquidLevel} liquidColor={liquidColor} precipitateProgress={precipitateProgress} />
          )}
          {visualPhase !== 'idle' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.25, 0.4, 0.25] }}
              transition={{ duration: 1.2, repeat: Infinity }}
              className="absolute inset-0 rounded-full blur-2xl pointer-events-none bg-lab-accent/30"
            />
          )}
        </motion.div>

        <div className="absolute -bottom-16 w-[600px] h-4 bg-[#111] border-t border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] rounded-full blur-[2px] opacity-50" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  )
}


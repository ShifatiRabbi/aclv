import { useCallback } from 'react'
import { useLabStore } from '../store/useLabStore'
import { SimulationEngine } from '../engine/SimulationEngine'

export const useSimulation = () => {
  const {
    currentExperiment,
    currentStepIndex,
    selectedChemicalId,
    allChemicals,
    selectedTool,
    advanceStep,
    setError,
    addHistory,
    updateLiquid,
    liquidLevel,
    liquidColor,
    currentPH,
    setCurrentPH,
    setPrecipitateProgress,
    triggerDropAnimation,
    setBuretteError,
    setTitrantVolume,
    setStirring,
    setVisualPhase,
    completeExperiment,
    deductPoints
  } = useLabStore()

  const performAction = useCallback(
    (action: string) => {
      if (!currentExperiment) return

      const currentStep = currentExperiment.steps[currentStepIndex]
      if (!currentStep) return

      const selectedChemical = allChemicals.find((c) => c.id === selectedChemicalId)
      const chemDisplayName = selectedChemical ? selectedChemical.name : 'Unknown'

      const validation = SimulationEngine.validateAction(currentStep, action, chemDisplayName, selectedTool)

      const updateReactionPH = (nextLevel: number, chemicalId: string) => {
        const id = chemicalId.toLowerCase()
        if (currentExperiment.id === 'acid_base_strong') {
          return
        }
        if (id.includes('hcl')) {
          setCurrentPH(Math.max(1.2, currentPH - Math.min(1.5, nextLevel / 100)))
          return
        }
        if (id.includes('naoh')) {
          setCurrentPH(Math.min(12.5, currentPH + Math.min(1.5, nextLevel / 100)))
          return
        }
        if (id.includes('agno3')) {
          setCurrentPH(Math.max(5.8, currentPH - 0.35))
        }
      }

      if (selectedChemical && selectedChemical.hazards.length > 0) {
        addHistory(`WARNING: ${chemDisplayName} is ${selectedChemical.hazards.join(', ')}.`)
      }

      if (validation.valid && selectedChemical) {
        addHistory(`Applied ${chemDisplayName} using ${selectedTool}`)
        deductPoints(selectedChemical.cost ?? 0)
        setVisualPhase('reacting')

        if (action === 'pour' && currentStep.target === 'burette') {
          setBuretteError(false)
        }

        if (action === 'pipette' || action === 'pour') {
          const newLevel = Math.min(100, liquidLevel + (currentStep.volume || 10))
          const baseColor = selectedChemical.color || liquidColor

          if (currentStep.target === 'burette') {
            setTitrantVolume(0)
            setVisualPhase('pouring')
            addHistory('Burette charged and initial meniscus aligned.')
          }

          let newColor = baseColor
          if (selectedChemical.id.toLowerCase().includes('hcl')) newColor = 'rgba(255, 255, 255, 0.1)'
          if (selectedChemical.id.toLowerCase().includes('nacl')) newColor = 'rgba(255, 255, 255, 0.15)'
          updateLiquid(newLevel, newColor)
          updateReactionPH(newLevel, selectedChemical.id)

          // Simulates real-world swirling right after transfer for immediate visual feedback.
          setStirring(true)
          setVisualPhase('mixing')
          setTimeout(() => {
            setStirring(false)
            setVisualPhase('idle')
          }, 1200)
        }

        if (action === 'drop') {
          triggerDropAnimation()
          setVisualPhase('reacting')
          updateReactionPH(liquidLevel, selectedChemical.id)
          if (selectedChemical.id.toLowerCase().includes('pheno')) {
            addHistory('Indicator added: Preparation complete.')
            updateLiquid(liquidLevel, 'rgba(255, 255, 255, 0.18)')
            setCurrentPH(Math.max(2.8, currentPH - 0.1))
          }
          if (selectedChemical.id.toLowerCase().includes('agno3')) {
            setPrecipitateProgress(1.0)
            updateLiquid(liquidLevel, 'rgba(255, 255, 255, 0.8)')
            setCurrentPH(Math.max(5.8, currentPH - 0.25))
            completeExperiment()
          }
        }

        if (currentStepIndex === currentExperiment.steps.length - 1) {
          if (currentStep.action !== 'burette' && !selectedChemical.id.toLowerCase().includes('agno3')) {
            advanceStep()
            completeExperiment()
          } else if (!selectedChemical.id.toLowerCase().includes('agno3')) {
            advanceStep()
          }
        } else {
          advanceStep()
        }
      } else {
        if (action === 'burette') {
          setBuretteError(true)
        }

        setError(validation.error || 'Invalid action')
        setTimeout(() => setError(null), 2000)
      }
    },
    [
      currentExperiment,
      currentStepIndex,
      selectedChemicalId,
      allChemicals,
      selectedTool,
      advanceStep,
      setError,
      addHistory,
      liquidLevel,
      liquidColor,
      currentPH,
      updateLiquid,
      setCurrentPH,
      setPrecipitateProgress,
      triggerDropAnimation,
      setBuretteError,
      setTitrantVolume,
      setStirring,
      setVisualPhase,
      completeExperiment,
      deductPoints
    ]
  )

  return { performAction }
}


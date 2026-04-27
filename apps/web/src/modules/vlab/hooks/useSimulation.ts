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
    setPrecipitateProgress,
    setBuretteError,
    setTitrantVolume,
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

      if (selectedChemical && selectedChemical.hazards.length > 0) {
        addHistory(`WARNING: ${chemDisplayName} is ${selectedChemical.hazards.join(', ')}.`)
      }

      if (validation.valid && selectedChemical) {
        addHistory(`Applied ${chemDisplayName} using ${selectedTool}`)
        deductPoints(selectedChemical.cost ?? 0)

        if (action === 'pour' && currentStep.target === 'burette') {
          setBuretteError(false)
        }

        if (action === 'pipette' || action === 'pour') {
          const newLevel = Math.min(100, liquidLevel + (currentStep.volume || 10))

          if (currentStep.target === 'burette') {
            setTitrantVolume(0)
          }

          let newColor = liquidColor
          if (selectedChemical.id.toLowerCase().includes('hcl')) newColor = 'rgba(255, 255, 255, 0.1)'
          if (selectedChemical.id.toLowerCase().includes('nacl')) newColor = 'rgba(255, 255, 255, 0.15)'
          updateLiquid(newLevel, newColor)
        }

        if (action === 'drop') {
          if (selectedChemical.id.toLowerCase().includes('pheno')) {
            addHistory('Indicator added: Preparation complete.')
          }
          if (selectedChemical.id.toLowerCase().includes('agno3')) {
            setPrecipitateProgress(1.0)
            updateLiquid(liquidLevel, 'rgba(255, 255, 255, 0.8)')
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
      updateLiquid,
      setPrecipitateProgress,
      setBuretteError,
      setTitrantVolume,
      completeExperiment,
      deductPoints
    ]
  )

  return { performAction }
}


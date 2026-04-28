import React from 'react'
import { useLabStore } from '../../store/useLabStore'
import { typeConfig } from '../../helpers/typeConfig.tsx'
import { formatTypeLabel } from '../../helpers/formatTypeLabel'
import { FlaskConical } from 'lucide-react'
import { ExperimentCard } from './ExperimentCard'

export const ExperimentGrid = ({ onStart }: { onStart: () => void }) => {
  const { allExperiments, setSelectedType } = useLabStore()

  const experimentTypes = React.useMemo(() => {
    const map = new Map<string, any>()
    allExperiments.forEach((exp) => {
      if (!map.has(exp.type)) map.set(exp.type, exp)
    })
    return Array.from(map.values())
  }, [allExperiments])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl w-full">
      {experimentTypes.map((expType) => {
        const config = typeConfig[expType.type]

        const label = config?.label || formatTypeLabel(expType.type)
        const icon =
          config?.icon || <FlaskConical size={32} className="text-white/40" />

        return (
          <ExperimentCard
            key={expType.type}
            title={label}
            desc={expType.theory || 'Explore this experiment type'}
            icon={icon}
            onClick={() => {
              setSelectedType(expType.type)
              onStart()
            }}
          />
        )
      })}
    </div>
  )
}
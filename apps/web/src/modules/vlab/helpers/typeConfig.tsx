import { Beaker, Microscope, Activity, FlaskConical, Atom, Zap, TestTube, Flame, Dna, Gauge, Droplets } from 'lucide-react'
import React from 'react'

export interface TypeConfig {
  icon: React.ReactNode
  label?: string
}

export const typeConfig: Record<
  string,
  TypeConfig
> = {
  gas_evolution: {
    icon: <FlaskConical className="text-lab-accent" size={32} />,
    label: 'Gas Evolution'
  },
  gas_phase_reaction: {
    icon: <Atom className="text-white/40" size={32} />,
    label: 'Gas Phase Reaction'
  },
  redox: {
    icon: <Zap className="text-yellow-400" size={32} />,
    label: 'Redox Reaction'
  },
  biochemical: {
    icon: <Dna className="text-green-400" size={32} />,
    label: 'Biochemical Reaction'
  },
  acid_base: {
    icon: <Droplets className="text-blue-400" size={32} />,
    label: 'Acid-Base Reaction'
  },
  complex_formation: {
    icon: <Atom className="text-purple-400" size={32} />,
    label: 'Complex Formation'
  },
  precipitation: {
    icon: <TestTube className="text-gray-300" size={32} />,
    label: 'Precipitation'
  },
  titration: {
    icon: <Beaker className="text-lab-accent" size={32} />,
    label: 'Titration Analysis'
  },
  electrolysis: {
    icon: <Zap className="text-cyan-400" size={32} />,
    label: 'Electrolysis'
  },
  decomposition: {
    icon: <Flame className="text-orange-400" size={32} />,
    label: 'Decomposition'
  },
  organic_synthesis: {
    icon: <FlaskConical className="text-pink-400" size={32} />,
    label: 'Organic Synthesis'
  },
  qualitative_analysis: {
    icon: <Microscope className="text-white/40" size={32} />,
    label: 'Qualitative Analysis'
  },
  ion_detection: {
    icon: <Microscope className="text-lab-accent" size={32} />,
    label: 'Ion Detection'
  },
  kinetics: {
    icon: <Gauge className="text-yellow-300" size={32} />,
    label: 'Reaction Kinetics'
  },
  organic_qualitative: {
    icon: <Microscope className="text-pink-300" size={32} />,
    label: 'Organic Qualitative'
  },
  displacement: {
    icon: <Activity className="text-red-400" size={32} />,
    label: 'Displacement Reaction'
  },
  gas_test: {
    icon: <FlaskConical className="text-white/40" size={32} />,
    label: 'Gas Test'
  }
}
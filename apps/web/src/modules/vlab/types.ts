export type PhysicalState = 'solid' | 'powder' | 'liquid' | 'gas'

export interface Chemical {
  id: string
  name: string
  formula: string
  state: PhysicalState
  color: string
  molecularWeight: number
  density?: number
  solubility?: number
  cost?: number
  hazards: string[]
  molarity?: number
}

export interface ExperimentStep {
  id: string
  action: 'pipette' | 'drop' | 'burette' | 'pour' | 'stir' | 'heat'
  chemical: string
  target?: string
  volume?: number
  until?: 'color_change' | 'precipitate' | 'fixed_volume'
  hint: string
}

export interface Experiment {
  id: string
  name: string
  type: 'titration' | 'ion_detection'
  theory: string
  steps: ExperimentStep[]
  result: {
    equation: string
    observations: string[]
    color?: string
    precipitate?: boolean
    formula?: string
  }
  initialChemicals: Array<{
    name?: string
    chemicalId?: string
    target: string
    volume?: number
    mass?: number
    color?: string
  }>
}

export interface LabState {
  currentExperiment: Experiment | null
  currentStepIndex: number
  selectedChemicalId: string | null
  selectedTool: 'pipette' | 'burette' | 'dropper' | 'beaker' | null
  liquidLevel: number
  liquidColor: string
  isStirring: boolean
  isTitrating: boolean
  titrantVolume: number
  currentPH: number
  precipitateProgress: number
  dropAnimationTick: number
  error: string | null
  buretteError: boolean
  showResult: boolean
  history: string[]
  visualPhase: 'idle' | 'pouring' | 'mixing' | 'reacting' | 'completed'

  // Economy & User (placeholder; persisted in BE later)
  points: number
  inventory: string[]
}


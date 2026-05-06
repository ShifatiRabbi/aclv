import { create } from 'zustand'
import type { LabState, Experiment, Chemical } from '../types'

interface LabStore extends LabState {
  setExperiment: (experiment: Experiment | null) => void
  selectChemical: (id: string | null) => void
  selectTool: (tool: LabState['selectedTool']) => void
  advanceStep: () => void
  updateLiquid: (level: number, color: string) => void
  setTitrating: (isTitrating: boolean) => void
  setTitrantVolume: (volume: number | ((prev: number) => number)) => void
  setPrecipitateProgress: (progress: number) => void
  setError: (error: string | null) => void
  setBuretteError: (hasError: boolean) => void
  setStirring: (isStirring: boolean) => void
  setVisualPhase: (phase: LabState['visualPhase']) => void
  addHistory: (entry: string) => void
  resetLab: () => void
  completeExperiment: () => void
  closeResult: () => void

  addPoints: (points: number) => void
  deductPoints: (points: number) => void

  allChemicals: Chemical[]
  setAllChemicals: (chemicals: Chemical[]) => void

  allExperiments: Experiment[]
  setAllExperiments: (experiments: Experiment[]) => void

  selectedType: string | null
  setSelectedType: (type: string | null) => void
}

const initialState: LabState = {
  currentExperiment: null,
  currentStepIndex: 0,
  selectedChemicalId: null,
  selectedTool: null,
  liquidLevel: 0,
  liquidColor: 'transparent',
  isStirring: false,
  isTitrating: false,
  titrantVolume: 0,
  precipitateProgress: 0,
  error: null,
  buretteError: false,
  showResult: false,
  history: [],
  visualPhase: 'idle',
  points: 1000,
  inventory: []
}

export const useLabStore = create<LabStore>((set) => ({
  ...initialState,
  allChemicals: [],
  allExperiments: [],

  selectedType: null,
  setSelectedType: (type) => set({ selectedType: type }),

  setAllChemicals: (chemicals) => set({ allChemicals: chemicals }),
  setAllExperiments: (experiments) => set({ allExperiments: experiments }),

  setExperiment: (experiment) =>
    set({
      ...initialState,
      currentExperiment: experiment
    }),

  selectChemical: (id) => set({ selectedChemicalId: id }),
  selectTool: (tool) => set({ selectedTool: tool }),

  advanceStep: () =>
    set((state) => ({
      currentStepIndex: state.currentStepIndex + 1,
      error: null
    })),

  updateLiquid: (level, color) => set({ liquidLevel: level, liquidColor: color }),
  setTitrating: (isTitrating) => set({ isTitrating }),
  setTitrantVolume: (titrantVolume) =>
    set((state) => ({
      titrantVolume: typeof titrantVolume === 'function' ? titrantVolume(state.titrantVolume) : titrantVolume
    })),
  setPrecipitateProgress: (precipitateProgress) => set({ precipitateProgress }),
  setError: (error) => set({ error }),
  setBuretteError: (buretteError) => set({ buretteError }),
  setStirring: (isStirring) => set({ isStirring }),
  setVisualPhase: (visualPhase) => set({ visualPhase }),
  addHistory: (entry) => set((state) => ({ history: [...state.history, entry] })),

  addPoints: (p) => set((state) => ({ points: state.points + p })),
  deductPoints: (p) => set((state) => ({ points: Math.max(0, state.points - p) })),

  resetLab: () =>
    set((state) => ({
      ...initialState,
      currentExperiment: state.currentExperiment,
      points: state.points
    })),

  completeExperiment: () => set({ showResult: true, visualPhase: 'completed', isStirring: false }),
  closeResult: () => set({ showResult: false })
}))


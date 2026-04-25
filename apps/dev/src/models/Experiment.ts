import mongoose from 'mongoose'

export type ExperimentType = 'titration' | 'ion_detection'
export type ExperimentAction = 'pipette' | 'drop' | 'burette' | 'pour' | 'stir' | 'heat'

export interface ExperimentStep {
  id: string
  action: ExperimentAction
  chemical: string
  target?: string
  volume?: number
  concentration?: number
  until?: 'color_change' | 'precipitate' | 'fixed_volume'
  hint: string
}

export interface ExperimentDoc {
  id: string
  name: string
  type: ExperimentType
  theory: string
  initialChemicals: Array<{
    name?: string
    chemicalId?: string
    target: string
    volume?: number
    mass?: number
    color?: string
  }>
  steps: ExperimentStep[]
  result: {
    color?: string
    precipitate?: boolean
    equation: string
    observations: string[]
    formula?: string
  }
}

const StepSchema = new mongoose.Schema<ExperimentStep>(
  {
    id: { type: String, required: true },
    action: { type: String, required: true },
    chemical: { type: String, required: true },
    target: { type: String },
    volume: { type: Number },
    concentration: { type: Number },
    until: { type: String },
    hint: { type: String, required: true }
  },
  { _id: false }
)

const ExperimentSchema = new mongoose.Schema<ExperimentDoc>(
  {
    id: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true },
    type: { type: String, required: true },
    theory: { type: String, required: true },
    // Keep flexible; we’ll normalize later (chemicalId, volume, target, etc.)
    initialChemicals: { type: [Object], default: [] },
    steps: { type: [StepSchema], required: true },
    result: { type: mongoose.Schema.Types.Mixed, required: true }
  },
  { timestamps: true }
)

export const ExperimentModel =
  mongoose.models.Experiment || mongoose.model<ExperimentDoc>('Experiment', ExperimentSchema)


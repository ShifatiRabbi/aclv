import mongoose from 'mongoose'

export type PhysicalState = 'solid' | 'powder' | 'liquid' | 'gas'

export interface ChemicalDoc {
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

const ChemicalSchema = new mongoose.Schema<ChemicalDoc>(
  {
    id: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true },
    formula: { type: String, required: true },
    state: { type: String, required: true },
    color: { type: String, required: true },
    molecularWeight: { type: Number, required: true },
    density: { type: Number },
    solubility: { type: Number },
    cost: { type: Number },
    hazards: { type: [String], default: [] },
    molarity: { type: Number }
  },
  { timestamps: true }
)

export const ChemicalModel =
  mongoose.models.Chemical || mongoose.model<ChemicalDoc>('Chemical', ChemicalSchema)


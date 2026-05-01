import mongoose from 'mongoose'

const accessoriesSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true },
    category: { type: String, required: true },
    capacities: { type: [String], default: [] },
    description: { type: String, default: '' }
  },
  { timestamps: true }
)

export const AccessoriesModel =
  mongoose.models.Accessory || mongoose.model('Accessory', accessoriesSchema)

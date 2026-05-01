import { ChemicalModel } from './chemicals.model.ts'

export const chemicalsService = {
  getAll: () => ChemicalModel.find().sort({ name: 1 }).lean(),
  getById: (id: string) => ChemicalModel.findOne({ id } as never).lean()
}

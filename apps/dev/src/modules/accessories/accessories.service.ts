import { AccessoriesModel } from './accessories.model.ts'

export const accessoriesService = {
  getAll: () => AccessoriesModel.find().sort({ title: 1 }).lean()
}

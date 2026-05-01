import { ExperimentModel } from './reactions.model.ts'

export const reactionsService = {
  getAll: () => ExperimentModel.find().sort({ name: 1 }).lean(),
  getById: (id: string) => ExperimentModel.findOne({ id } as never).lean()
}

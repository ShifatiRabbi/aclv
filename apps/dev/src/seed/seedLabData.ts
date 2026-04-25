import { ChemicalModel } from '../models/Chemical.ts'
import { ExperimentModel } from '../models/Experiment.ts'
import { chemicalsSeed, reactionsSeed } from './labData.ts'
import mongoose from 'mongoose'

export async function seedLabDataIfEmpty() {
  if (mongoose.connection.readyState !== 1) return

  const [chemCount, expCount] = await Promise.all([
    ChemicalModel.countDocuments(),
    ExperimentModel.countDocuments()
  ])

  if (chemCount === 0) {
    await ChemicalModel.insertMany(chemicalsSeed.chemicals, { ordered: false })
    console.log(`Seeded chemicals: ${chemicalsSeed.chemicals.length}`)
  }

  if (expCount === 0) {
    await ExperimentModel.insertMany(reactionsSeed.experiments, { ordered: false })
    console.log(`Seeded experiments: ${reactionsSeed.experiments.length}`)
  }
}


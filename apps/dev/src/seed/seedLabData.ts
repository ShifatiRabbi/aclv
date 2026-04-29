import { ChemicalModel } from '../models/Chemical.ts'
import { ExperimentModel } from '../models/Experiment.ts'
import { ElementModel } from '../models/Element.ts'
import { elementsSeed } from './elements-data/seed/elements.seed.ts'
import { chemicalsSeed, reactionsSeed } from './labData.ts'
import mongoose from 'mongoose'

export async function seedLabDataIfEmpty() {
  if (mongoose.connection.readyState !== 1) return

  // Upsert-based seeding so we can safely add new seed entries over time
  // without requiring an empty database.
  await ChemicalModel.bulkWrite(
    chemicalsSeed.chemicals.map((chemical) => ({
      updateOne: {
        filter: { id: chemical.id },
        update: { $set: chemical },
        upsert: true
      }
    })),
    { ordered: false }
  )

  await ExperimentModel.bulkWrite(
    reactionsSeed.experiments.map((experiment) => ({
      updateOne: {
        filter: { id: experiment.id },
        update: { $set: experiment },
        upsert: true
      }
    })),
    { ordered: false }
  )

  const [chemCountAfter, expCountAfter] = await Promise.all([
    ChemicalModel.countDocuments(),
    ExperimentModel.countDocuments()
  ])

  console.log(`Chemicals in DB: ${chemCountAfter}`)
  console.log(`Experiments in DB: ${expCountAfter}`)
}

export async function seedElementsIfEmpty() {
  await ElementModel.bulkWrite(
    elementsSeed.map((element) => ({
      updateOne: {
        filter: { atomicNumber: element.atomic_number }, // or symbol
        update: { $set: element },
        upsert: true
      }
    })),
    { ordered: false }
  );

  console.log(`Elements seeded/updated: ${elementsSeed.length}`);
}

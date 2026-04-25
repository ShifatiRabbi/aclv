import { Router } from 'express'
import { ExperimentModel } from '../models/Experiment.ts'

const router = Router()

router.get('/', async (_req, res) => {
  const experiments = await ExperimentModel.find().sort({ name: 1 }).lean()
  res.json({ experiments })
})

router.get('/:id', async (req, res) => {
  const experiment = await ExperimentModel.findOne({ id: req.params.id }).lean()
  if (!experiment) return res.status(404).json({ error: 'Experiment not found' })
  res.json({ experiment })
})

export default router


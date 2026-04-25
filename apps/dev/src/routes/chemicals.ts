import { Router } from 'express'
import { ChemicalModel } from '../models/Chemical.ts'

const router = Router()

router.get('/', async (_req, res) => {
  const chemicals = await ChemicalModel.find().sort({ name: 1 }).lean()
  res.json({ chemicals })
})

router.get('/:id', async (req, res) => {
  const chemical = await ChemicalModel.findOne({ id: req.params.id }).lean()
  if (!chemical) return res.status(404).json({ error: 'Chemical not found' })
  res.json({ chemical })
})

export default router


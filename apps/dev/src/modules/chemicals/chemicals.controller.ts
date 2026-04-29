import type { Request, Response } from 'express'
import { sendSuccess } from '../../common/utils/apiResponse.ts'
import { chemicalsService } from './chemicals.service.ts'

export const chemicalsController = {
  async getAll(_req: Request, res: Response) {
    const items = await chemicalsService.getAll()
    res.json(sendSuccess('Chemicals fetched successfully', { items }))
  },
  async getById(req: Request, res: Response) {
    const item = await chemicalsService.getById(String(req.params.id))
    if (!item) {
      return res.status(404).json({ success: false, message: 'Chemical not found' })
    }
    res.json(sendSuccess('Chemical fetched successfully', { item }))
  }
}

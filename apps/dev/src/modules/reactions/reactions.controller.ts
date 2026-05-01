import type { Request, Response } from 'express'
import { sendSuccess } from '../../common/utils/apiResponse.ts'
import { reactionsService } from './reactions.service.ts'

export const reactionsController = {
  async getAll(_req: Request, res: Response) {
    const items = await reactionsService.getAll()
    res.json(sendSuccess('Reactions fetched successfully', { items }))
  },
  async getById(req: Request, res: Response) {
    const item = await reactionsService.getById(String(req.params.id))
    if (!item) {
      return res.status(404).json({ success: false, message: 'Reaction not found' })
    }
    res.json(sendSuccess('Reaction fetched successfully', { item }))
  }
}

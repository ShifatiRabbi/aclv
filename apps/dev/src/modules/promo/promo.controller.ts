import type { Request, Response } from 'express'
import { sendSuccess } from '../../common/utils/apiResponse.ts'
import { promoService } from './promo.service.ts'

export const promoController = {
  async create(req: Request, res: Response) {
    const item = await promoService.create(req.body)
    res.status(201).json(sendSuccess('Promo code created', { item }))
  },
  async list(_req: Request, res: Response) {
    const items = await promoService.list()
    res.json(sendSuccess('Promo codes fetched', { items }))
  },
  async update(req: Request, res: Response) {
    const item = await promoService.update(String(req.params.id), req.body)
    if (!item) {
      return res.status(404).json({ success: false, message: 'Promo code not found' })
    }
    res.json(sendSuccess('Promo code updated', { item }))
  },
  async delete(req: Request, res: Response) {
    const item = await promoService.delete(String(req.params.id))
    if (!item) {
      return res.status(404).json({ success: false, message: 'Promo code not found' })
    }
    res.json(sendSuccess('Promo code deleted', { item }))
  }
}

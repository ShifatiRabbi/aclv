import type { Request, Response } from 'express'
import { sendSuccess } from '../../common/utils/apiResponse.ts'
import { referralService } from './referrals.service.ts'

export const referralsController = {
  async create(req: Request, res: Response) {
    const item = await referralService.create(req.body)
    res.status(201).json(sendSuccess('Referral campaign created', { item }))
  },
  async list(_req: Request, res: Response) {
    const items = await referralService.list()
    res.json(sendSuccess('Referral campaigns fetched', { items }))
  },
  async update(req: Request, res: Response) {
    const item = await referralService.update(String(req.params.id), req.body)
    if (!item) {
      return res.status(404).json({ success: false, message: 'Referral campaign not found' })
    }
    res.json(sendSuccess('Referral campaign updated', { item }))
  },
  async delete(req: Request, res: Response) {
    const item = await referralService.delete(String(req.params.id))
    if (!item) {
      return res.status(404).json({ success: false, message: 'Referral campaign not found' })
    }
    res.json(sendSuccess('Referral campaign deleted', { item }))
  },
  async analytics(_req: Request, res: Response) {
    const data = await referralService.analytics()
    res.json(sendSuccess('Referral analytics fetched', data))
  }
}

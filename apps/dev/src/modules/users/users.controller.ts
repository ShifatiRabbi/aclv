import type { Request, Response } from 'express'
import { sendSuccess } from '../../common/utils/apiResponse.ts'
import { usersService } from './users.service.ts'

export const usersController = {
  async list(req: Request, res: Response) {
    const role = String(req.query.role || '')
    const items = await usersService.list(role || undefined)
    res.json(sendSuccess('Users fetched', { items }))
  },
  async updateRole(req: Request, res: Response) {
    const item = await usersService.updateRole(String(req.params.id), String(req.body.role))
    if (!item) {
      return res.status(404).json({ success: false, message: 'User not found' })
    }
    res.json(sendSuccess('User role updated', { item }))
  }
}

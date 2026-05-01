import type { Request, Response } from 'express'
import { sendSuccess } from '../../common/utils/apiResponse.ts'
import { accessoriesService } from './accessories.service.ts'

export const accessoriesController = {
  async getAll(_req: Request, res: Response) {
    const items = await accessoriesService.getAll()
    res.json(sendSuccess('Accessories fetched successfully', { items }))
  }
}

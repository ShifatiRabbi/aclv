import type { Request, Response } from 'express'
import { sendSuccess } from '../../common/utils/apiResponse.ts'
import { blogService } from './blog.service.ts'

export const blogController = {
  async list(req: Request, res: Response) {
    try {
      const includeDrafts = req.query.includeDrafts === 'true'
      const items = includeDrafts ? await blogService.listAllForAdmin() : await blogService.listPublished()
      res.json(sendSuccess('Blogs fetched', { items }))
    } catch (error) {
      console.error('[blog] list failed', { error })
      res.status(500).json({ success: false, message: 'Failed to fetch blogs' })
    }
  },

  async getBySlug(req: Request, res: Response) {
    try {
      const item = await blogService.getBySlug(String(req.params.slug))
      if (!item) {
        return res.status(404).json({ success: false, message: 'Blog not found' })
      }
      res.json(sendSuccess('Blog fetched', { item }))
    } catch (error) {
      console.error('[blog] getBySlug failed', { error })
      res.status(500).json({ success: false, message: 'Failed to fetch blog' })
    }
  },

  async generate(_req: Request, res: Response) {
    try {
      const autoPublish = process.env.AUTO_PUBLISH === 'true'
      const result = await blogService.generateFromLatestNews({ autoPublish })
      res.status(201).json(sendSuccess('Blog generation executed', result))
    } catch (error) {
      console.error('[blog] manual generation failed', { error })
      res.status(500).json({ success: false, message: 'Blog generation failed' })
    }
  },

  async publish(req: Request, res: Response) {
    try {
      const item = await blogService.publishById(String(req.params.id))
      if (!item) {
        return res.status(404).json({ success: false, message: 'Blog not found' })
      }
      res.json(sendSuccess('Blog published', { item }))
    } catch (error) {
      console.error('[blog] publish failed', { error })
      res.status(500).json({ success: false, message: 'Publish failed' })
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const item = await blogService.deleteById(String(req.params.id))
      if (!item) {
        return res.status(404).json({ success: false, message: 'Blog not found' })
      }
      res.json(sendSuccess('Blog deleted', { item }))
    } catch (error) {
      console.error('[blog] delete failed', { error })
      res.status(500).json({ success: false, message: 'Delete failed' })
    }
  }
}

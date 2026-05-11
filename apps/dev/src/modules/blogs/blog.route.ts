import { Router } from 'express'
import { blogController } from './blog.controller.ts'
import { authenticate, authorize } from '../../common/middleware/auth.ts'
import { validateRequest } from '../../common/middleware/validate.ts'
import { generateBlogSchema } from './blog.validation.ts'

const blogRouter = Router()

blogRouter.get('/', blogController.list)
blogRouter.get('/:slug', blogController.getBySlug)
blogRouter.post(
  '/generate',
  authenticate,
  authorize('super_admin', 'admin', 'staff'),
  validateRequest(generateBlogSchema),
  blogController.generate
)
blogRouter.post('/publish/:id', authenticate, authorize('super_admin', 'admin', 'staff'), blogController.publish)
blogRouter.delete('/:id', authenticate, authorize('super_admin', 'admin', 'staff'), blogController.delete)

export default blogRouter

import { Router } from 'express'
import { promoController } from './promo.controller.ts'
import { authenticate, authorize } from '../../common/middleware/auth.ts'
import { validateRequest } from '../../common/middleware/validate.ts'
import { createPromoSchema, updatePromoSchema } from './promo.validation.ts'

const promoRouter = Router()

promoRouter.get('/', authenticate, authorize('super_admin', 'admin', 'staff'), promoController.list)
promoRouter.post('/', authenticate, authorize('super_admin', 'admin', 'staff'), validateRequest(createPromoSchema), promoController.create)
promoRouter.patch(
  '/:id',
  authenticate,
  authorize('super_admin', 'admin', 'staff'),
  validateRequest(updatePromoSchema),
  promoController.update
)
promoRouter.delete('/:id', authenticate, authorize('super_admin', 'admin', 'staff'), promoController.delete)

export default promoRouter

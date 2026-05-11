import { Router } from 'express'
import { referralsController } from './referrals.controller.ts'
import { authenticate, authorize } from '../../common/middleware/auth.ts'
import { validateRequest } from '../../common/middleware/validate.ts'
import { createReferralSchema, updateReferralSchema } from './referrals.validation.ts'

const referralsRouter = Router()

referralsRouter.get('/', authenticate, authorize('super_admin', 'admin', 'staff'), referralsController.list)
referralsRouter.get('/analytics', authenticate, authorize('super_admin', 'admin', 'staff'), referralsController.analytics)
referralsRouter.post(
  '/',
  authenticate,
  authorize('super_admin', 'admin', 'staff'),
  validateRequest(createReferralSchema),
  referralsController.create
)
referralsRouter.patch(
  '/:id',
  authenticate,
  authorize('super_admin', 'admin', 'staff'),
  validateRequest(updateReferralSchema),
  referralsController.update
)
referralsRouter.delete('/:id', authenticate, authorize('super_admin', 'admin', 'staff'), referralsController.delete)

export default referralsRouter

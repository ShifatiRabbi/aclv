import { Router } from 'express'
import { usersController } from './users.controller.ts'
import { authenticate, authorize } from '../../common/middleware/auth.ts'
import { validateRequest } from '../../common/middleware/validate.ts'
import { updateRoleSchema } from './users.validation.ts'

const usersRouter = Router()

usersRouter.get('/', authenticate, authorize('super_admin', 'admin'), usersController.list)
usersRouter.patch('/:id/role', authenticate, authorize('super_admin', 'admin'), validateRequest(updateRoleSchema), usersController.updateRole)

export default usersRouter

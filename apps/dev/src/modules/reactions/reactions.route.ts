import { Router } from 'express'
import { reactionsController } from './reactions.controller.ts'
import { validateRequest } from '../../common/middleware/validate.ts'
import { getReactionByIdSchema } from './reactions.validation.ts'

const reactionsRouter = Router()

reactionsRouter.get('/', reactionsController.getAll)
reactionsRouter.get('/:id', validateRequest(getReactionByIdSchema), reactionsController.getById)

export default reactionsRouter

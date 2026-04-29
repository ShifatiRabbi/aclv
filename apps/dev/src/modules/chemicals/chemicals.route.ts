import { Router } from 'express'
import { chemicalsController } from './chemicals.controller.ts'
import { validateRequest } from '../../common/middleware/validate.ts'
import { getChemicalByIdSchema } from './chemicals.validation.ts'

const chemicalsRouter = Router()

chemicalsRouter.get('/', chemicalsController.getAll)
chemicalsRouter.get('/:id', validateRequest(getChemicalByIdSchema), chemicalsController.getById)

export default chemicalsRouter

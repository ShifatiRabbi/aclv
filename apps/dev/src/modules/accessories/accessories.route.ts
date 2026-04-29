import { Router } from 'express'
import { accessoriesController } from './accessories.controller.ts'

const accessoriesRouter = Router()

accessoriesRouter.get('/', accessoriesController.getAll)

export default accessoriesRouter

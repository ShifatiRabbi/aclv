import { Router } from 'express'
import { elementsController } from './elements.controller.ts'

const elementsRouter = Router()

elementsRouter.get('/', elementsController.getAllElements)
elementsRouter.get('/:id', elementsController.getElementById)
elementsRouter.get('/:id/fulldata', elementsController.getElementFullData)

export default elementsRouter

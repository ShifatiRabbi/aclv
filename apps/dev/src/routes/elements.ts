import { Router } from 'express';
import { elementsController } from '../modules/elements/elements.controller.ts';

const router = Router();

router.get('/', elementsController.getAllElements);
router.get('/:id', elementsController.getElementById);
router.get('/:id/reactions', elementsController.getElementReactions);

export default router;

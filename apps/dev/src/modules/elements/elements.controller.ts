import type { Request, Response } from 'express';
import { elementsService } from './elements.service.ts';

export class ElementsController {
  async getAllElements(req: Request, res: Response) {
    try {
      const elements = await elementsService.getAllElements();
      res.json(elements);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch elements' });
    }
  }

  async getElementById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id as string);
      if (isNaN(id)) {
        return res.status(400).json({ error: 'Invalid atomic number' });
      }
      const element = await elementsService.getElementByAtomicNumber(id);
      if (!element) {
        return res.status(404).json({ error: 'Element not found' });
      }
      res.json(element);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch element' });
    }
  }

  async getElementReactions(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id as string);
      if (isNaN(id)) {
        return res.status(400).json({ error: 'Invalid atomic number' });
      }
      // const reactions = await elementsService.getReactionsByElement(id);
      // res.json(reactions);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch reactions' });
    }
  }
}

export const elementsController = new ElementsController();

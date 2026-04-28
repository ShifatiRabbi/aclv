import fs from 'fs/promises';
import type { Element, Reaction } from './types.ts';
import { ElementModel } from '../../models/Element.ts';

export class ElementsService {
  private static instance: ElementsService;
  private elements: Element[] = [];
  private reactions: Reaction[] = [];

  private constructor() {}

  public static getInstance(): ElementsService {
    if (!ElementsService.instance) {
      ElementsService.instance = new ElementsService();
    }
    return ElementsService.instance;
  }

  async getAllElements(): Promise<Element[]> {
    return ElementModel.find();
  }

  async getElementByAtomicNumber(atomicNumber: number): Promise<Element | null> {
    return ElementModel.findOne({ atomic_number: atomicNumber });
  }

  // async getReactionsByElement(atomicNumber: number): Promise<Reaction[]> {
  //   return this.reactions.filter(r => r.relatedElements.includes(atomicNumber));
  // }
}

export const elementsService = ElementsService.getInstance();

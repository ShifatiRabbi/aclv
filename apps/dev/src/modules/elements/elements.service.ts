import { ElementModel } from '../../models/Element.ts';

type Reaction = {
  relatedElements: number[]
}

export class ElementsService {
  private static instance: ElementsService;
  private reactions: Reaction[] = [];

  private constructor() {}

  public static getInstance(): ElementsService {
    if (!ElementsService.instance) {
      ElementsService.instance = new ElementsService();
    }
    return ElementsService.instance;
  }

  async getAllElements(): Promise<unknown[]> {
    return ElementModel.find();
  }

  async getElementByAtomicNumber(atomicNumber: number): Promise<unknown | null> {
    return ElementModel.findOne({ atomic_number: atomicNumber } as never);
  }

  async getElementFullDataByElement(atomicNumber: number): Promise<Reaction[]> {
    return this.reactions.filter(r => r.relatedElements.includes(atomicNumber));
  }
}

export const elementsService = ElementsService.getInstance();

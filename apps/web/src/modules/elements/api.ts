
import type { Element, Reaction } from './types';
import { getElementById, getElementReactions, getElements } from '../../services/elements.service'

export async function fetchElements(): Promise<Element[]> {
  return getElements();
}

export async function fetchElementById(id: number): Promise<Element> {
  return getElementById(id);
}

export async function fetchElementReactions(id: number): Promise<Reaction[]> {
  return getElementReactions(id);
}

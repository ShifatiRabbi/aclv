/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Element, Reaction } from './types';
import { api } from '../../shared/utils/api'

export async function fetchElements(): Promise<Element[]> {
  const response = await api.get('/elements');
  if (!response) throw new Error('Failed to fetch elements');
  return response.data;
}

export async function fetchElementById(id: number): Promise<Element> {
  const response = await api.get(`/elements/${id}`);
  if (!response) throw new Error('Failed to fetch element details');
  return response.data;
}

export async function fetchElementReactions(id: number): Promise<Reaction[]> {
  const response = await api.get(`/elements/${id}/fulldata`);
  if (!response) throw new Error('Failed to fetch element complete data');
  return response.data;
}

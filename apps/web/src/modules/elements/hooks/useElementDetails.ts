/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import type { Element, Reaction } from '../types';
import { fetchElementById, fetchElementReactions } from '../api';

export function useElementDetails(id: number | null) {
  const [element, setElement] = useState<Element | null>(null);
  const [reactions, setReactions] = useState<Reaction[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id === null) {
      setElement(null);
      setReactions([]);
      return;
    }

    async function loadDetails() {
      setLoading(true);
      setError(null);
      try {
        const [elementData, reactionsData] = await Promise.all([
          fetchElementById(id!),
          fetchElementReactions(id!)
        ]);
        setElement(elementData);
        setReactions(reactionsData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    }
    loadDetails();
  }, [id]);

  return { element, reactions, loading, error };
}

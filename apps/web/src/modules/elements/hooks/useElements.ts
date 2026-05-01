import { useState, useEffect } from 'react';
import type { Element } from '../types';
import { fetchElements } from '../api';

export function useElements() {
  const [elements, setElements] = useState<Element[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadElements() {
      try {
        const data = await fetchElements();
        setElements(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    }
    loadElements();
  }, []);

  return { elements, loading, error };
}

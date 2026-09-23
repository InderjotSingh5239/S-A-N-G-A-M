import { useEffect, useCallback } from 'react';

/**
 * Tracks the mouse position within a section and updates CSS custom properties
 * --spot-x and --spot-y (in %) for a cursor spotlight effect.
 * No-op when prefers-reduced-motion is set.
 */
export function useCursorSpotlight() {
  const onMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty('--spot-x', `${x}%`);
    e.currentTarget.style.setProperty('--spot-y', `${y}%`);
  }, []);

  return onMouseMove;
}

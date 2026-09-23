import { useEffect, useRef } from 'react';

/**
 * Scroll-reveal hook using IntersectionObserver.
 * Adds `is-visible` class when the element enters the viewport (one-time trigger).
 * Respects prefers-reduced-motion automatically via CSS overrides.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

/**
 * Scroll-reveal for multiple staggered children.
 * Apply the returned ref to a container; each child with class `reveal`
 * will be revealed with a stagger delay based on its index.
 */
export function useStaggeredReveal<T extends HTMLElement = HTMLDivElement>(stagger = 100) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const children = Array.from(container.querySelectorAll<HTMLElement>('.reveal'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = children.indexOf(entry.target as HTMLElement);
            (entry.target as HTMLElement).style.transitionDelay = `${index * stagger}ms`;
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    children.forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, [stagger]);

  return ref;
}

"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Fallback if IntersectionObserver is unsupported
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay) {
            setTimeout(() => {
              entry.target.classList.add("is-visible");
            }, delay);
          } else {
            entry.target.classList.add("is-visible");
          }
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, [delay]);

  return (
    <div ref={ref} className={`scroll-reveal ${className}`}>
      {children}
    </div>
  );
}

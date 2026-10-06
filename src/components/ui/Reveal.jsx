"use client";

import { useEffect, useRef } from "react";

// Content remains visible in exported HTML and without JavaScript.
export function Reveal({ children, delay = 0, style = {} }) {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    if (!element || !window.IntersectionObserver || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      element.animate?.([{ transform: "translateY(24px)" }, { transform: "translateY(0)" }], {
        duration: 700, delay: delay * 1000, easing: "ease-out",
      });
      observer.unobserve(element);
    }, { threshold: 0.12 });
    observer.observe(element);
    return () => observer.disconnect();
  }, [delay]);
  return <div ref={ref} style={style}>{children}</div>;
}

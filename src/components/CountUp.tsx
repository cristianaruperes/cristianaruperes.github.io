import React, { useEffect, useRef, useState } from "react";

interface CountUpProps {
  to: number;
  /** Trailing glyph such as "+" — kept out of the number so it never animates. */
  suffix?: string;
  durationMs?: number;
}

/** Counts from zero up to `to` the first time it scrolls into view. */
export const CountUp: React.FC<CountUpProps> = ({ to, suffix = "", durationMs = 1400 }) => {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(to);
      return;
    }

    let frameId = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / durationMs, 1);
          // easeOutCubic, so the number decelerates into its final value.
          setValue(Math.round(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) frameId = requestAnimationFrame(tick);
        };
        frameId = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameId);
    };
  }, [to, durationMs]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
};

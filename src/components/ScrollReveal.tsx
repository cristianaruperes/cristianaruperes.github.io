import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  delay = 0 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay * 1000);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${isVisible ? 'visible' : ''}`}
    >
      {children}
    </div>
  );
};
// ============================================
// src/components/About.tsx
// ============================================
import React from "react";
import { ScrollReveal } from "./ScrollReveal";

export const About: React.FC = () => {
  return (
    <ScrollReveal>
      <section className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          I'm a passionate frontend developer with experience building
          responsive, user-friendly websites using React, TailwindCSS, and modern web technologies. 
          I enjoy turning design ideas into clean, interactive interfaces.
        </p>
      </section>
    </ScrollReveal>
  );
};

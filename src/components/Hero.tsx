// ============================================
// src/components/Hero.tsx
// ============================================
import React from "react";

export const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-20 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center px-4">
        <img
          src="https://avatars.githubusercontent.com/u/000000?v=4"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-lg animate-fadeInScale"
        />
        <h1 className="text-4xl font-bold mb-2 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          Cristiana Daniel Aruperes
        </h1>
        <p className="text-lg opacity-90 mb-4 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          IT Enthusiast
        </p>
        <div className="space-x-4 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <a
            href="https://github.com/cristianaruperes"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-indigo-200 transition-colors duration-300 inline-block hover:scale-105 transform"
          >
            GitHub
          </a>
          <a
            href="mailto:cristianaruperes@gmail.com"
            className="underline hover:text-indigo-200 transition-colors duration-300 inline-block hover:scale-105 transform"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
};

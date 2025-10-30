import React from "react";

export const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="text-center text-white px-8">
        <h1 className="text-6xl font-bold mb-6 animate-fadeInUp">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          Frontend developer passionate about creating beautiful, responsive web experiences with modern technologies.
        </p>
        <button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition-all duration-300 hover:scale-105 animate-fadeInUp"
          style={{ animationDelay: '0.4s' }}
        >
          Explore My Work
        </button>
      </div>
    </section>
  );
};

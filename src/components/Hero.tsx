import React from "react";

export const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="text-center text-white px-8">
        <h1 className="text-6xl font-bold mb-4 animate-fadeInUp">
          Cristian Daniel Aruperes
        </h1>
        <p className="text-2xl text-blue-300 mb-6 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          IT Enthusiast
        </p>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          Building things that solve real problems — from deep learning for medical imaging to conversational chatbots and full-stack web systems.
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

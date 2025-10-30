import React from "react";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Portfolio } from "./components/Portfolio";
import { Footer } from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Hero />
      <About />
      <Experience />
      <Education />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default App;
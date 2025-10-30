import React, { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Portfolio } from "./components/Portfolio";
import { Footer } from "./components/Footer";

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Close sidebar by default on mobile
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Sidebar isOpen={isSidebarOpen} onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
      <main className={`transition-all duration-300 ${isSidebarOpen ? 'lg:ml-64' : 'ml-0'}`}>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Portfolio />
        <Footer />
      </main>
    </div>
  );
};

export default App;
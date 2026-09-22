import React, { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Portfolio } from "./components/Portfolio";
import { Publications } from "./components/Publications";
import { Footer } from "./components/Footer";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { LanguageProvider } from "./i18n/LanguageProvider";

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
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Sidebar isOpen={isSidebarOpen} onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
        <LanguageSwitcher className="fixed top-6 right-6 z-50" />
        <main className={`transition-all duration-300 ${isSidebarOpen ? 'lg:ml-64' : 'ml-0'}`}>
          <Hero />
          <About />
          <Experience />
          <Education />
          <Portfolio />
          <Publications />
          <Footer />
        </main>
      </div>
    </LanguageProvider>
  );
};

export default App;
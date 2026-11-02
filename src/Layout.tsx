import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Footer } from "./components/Footer";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { ParticleField } from "./components/ParticleField";
import { ScrollProgress } from "./components/ScrollProgress";

export const Layout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { pathname } = useLocation();

  // Close sidebar by default on mobile
  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Each route is its own page, so start it at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="relative min-h-screen bg-deep">
      <ParticleField />
      <ScrollProgress />

      <Sidebar isOpen={isSidebarOpen} onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
      <LanguageSwitcher className="fixed right-6 top-6 z-50" />

      <main
        className={`relative z-10 flex min-h-screen flex-col transition-all duration-300 ${
          isSidebarOpen ? "lg:ml-64" : "ml-0"
        }`}
      >
        {/* Keyed on pathname so every route fades in as its own page. */}
        <div key={pathname} className="animate-fadeInUp flex-1">
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
};

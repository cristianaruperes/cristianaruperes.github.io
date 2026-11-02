import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "./components/Footer";
import { FloatingNav } from "./components/FloatingNav";
import { ParticleField } from "./components/ParticleField";
import { ScrollProgress } from "./components/ScrollProgress";

export const Layout: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // A hash means the nav asked for a section; otherwise start at the top.
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <div className="relative min-h-screen bg-deep">
      <ParticleField />
      <ScrollProgress />
      <FloatingNav />

      {/* Bottom padding clears the floating dock, which sits outside the flow. */}
      <main className="relative z-10 flex min-h-screen flex-col pb-28">
        {/* Keyed on the route so each page fades in — not on the hash, which
            would restart the animation every time a section link is used. */}
        <div key={pathname} className="animate-fadeInUp flex-1">
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
};

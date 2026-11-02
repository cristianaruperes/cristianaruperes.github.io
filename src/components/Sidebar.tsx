import React from "react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../i18n/context";
import { navItems } from "../navigation";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

/** Mono labels mirroring each route, shown as a file tree beside the nav. */
const navFiles: Record<string, string> = {
  "/": "index",
  "/about": "about",
  "/experience": "work",
  "/education": "edu",
  "/portfolio": "projects",
  "/publications": "papers",
};

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  const { t } = useLanguage();

  /** Close the overlay sidebar after navigating on mobile. */
  const handleNavigate = () => {
    if (window.innerWidth < 1024 && isOpen) {
      onToggle();
    }
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Toggle Button */}
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className={`fixed top-6 z-50 rounded-full border border-white/10 bg-base p-3 shadow-lg transition-all duration-300 hover:scale-110 hover:border-mint/50 ${
          isOpen ? "left-60 lg:left-60" : "left-6"
        }`}
      >
        <svg
          className={`h-5 w-5 text-mint transition-transform duration-300 ${isOpen ? "" : "rotate-180"}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-white/10 bg-base/95 backdrop-blur transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        <div className="px-8 pb-5 pt-8">
          <div className="animate-fadeInScale mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-mint/30 bg-mint/10 font-mono text-xl font-bold text-mint shadow-lg">
            CR
          </div>
          <h2
            className="animate-fadeInUp text-center text-lg font-bold text-white"
            style={{ animationDelay: "0.2s" }}
          >
            {t.sidebar.name}
          </h2>
          <p
            className="animate-fadeInUp mt-2 text-center font-mono text-small text-mint"
            style={{ animationDelay: "0.3s" }}
          >
            {t.sidebar.role}
          </p>
          <p
            className="animate-fadeInUp mt-1 text-center text-xs text-slate-500"
            style={{ animationDelay: "0.35s" }}
          >
            {t.sidebar.location}
          </p>
        </div>

        <nav className="flex-1 overflow-y-auto px-5">
          <ul className="space-y-1">
            {navItems.map((item, index) => (
              <li
                key={item.path}
                className="animate-fadeInLeft"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  onClick={handleNavigate}
                  className={({ isActive }) =>
                    `group relative flex w-full items-center justify-between gap-2 overflow-hidden rounded-xl px-4 py-3 text-left transition-all duration-300 ${
                      isActive
                        ? "bg-mint/10 font-semibold text-mint"
                        : "text-slate-400 hover:bg-white/5 hover:text-white"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <span className="absolute bottom-0 left-0 top-0 w-1 rounded-r-full bg-mint" />
                      )}
                      <span className={`transition-all duration-300 ${isActive ? "ml-3" : "ml-0"}`}>
                        {t.nav[item.key]}
                      </span>
                      <span className="font-mono text-xs text-slate-600 transition-colors duration-300 group-hover:text-mint/60">
                        {navFiles[item.path]}
                      </span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-white/10 p-6">
          <div className="flex justify-center gap-3">
            <a
              href="https://github.com/cristianaruperes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-500 transition-all duration-300 hover:scale-110 hover:text-mint"
            >
              {t.sidebar.github}
            </a>
            <span className="text-slate-700">•</span>
            <a
              href="https://www.linkedin.com/in/cristian-aruperes/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-500 transition-all duration-300 hover:scale-110 hover:text-mint"
            >
              {t.sidebar.linkedin}
            </a>
            <span className="text-slate-700">•</span>
            <a
              href="mailto:cristianaruperes@gmail.com"
              className="text-sm font-medium text-slate-500 transition-all duration-300 hover:scale-110 hover:text-mint"
            >
              {t.sidebar.email}
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

import React, { useState } from "react";
import { useLanguage } from "../i18n/context";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  const [activeSection, setActiveSection] = useState("home");
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: "home", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "experience", label: t.nav.experience },
    { id: "education", label: t.nav.education },
    { id: "portfolio", label: t.nav.portfolio },
    { id: "publications", label: t.nav.publications },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Toggle Button */}
      <button
        onClick={onToggle}
        className={`fixed top-6 z-50 bg-white border border-slate-200 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${
          isOpen ? 'left-60 lg:left-60' : 'left-6'
        }`}
      >
        <svg
          className={`w-5 h-5 text-slate-600 transition-transform duration-300 ${isOpen ? '' : 'rotate-180'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Sidebar */}
      <aside className={`fixed left-0 top-0 h-screen w-64 bg-white border-r border-slate-200 flex flex-col z-40 transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-64'
      }`}>
        <div className="px-8 pt-8 pb-5">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 mx-auto mb-3 flex items-center justify-center text-xl font-bold text-white shadow-lg animate-fadeInScale">
            CR
          </div>
          <h2 className="text-center font-bold text-xl text-slate-900 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            {t.sidebar.name}
          </h2>
          <p className="text-center text-sm text-slate-500 mt-2 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            {t.sidebar.role}
          </p>
          <p className="text-center text-xs text-slate-400 mt-1 animate-fadeInUp" style={{ animationDelay: '0.35s' }}>
            {t.sidebar.location}
          </p>
        </div>

        <nav className="flex-1 px-6 overflow-y-auto">
          <ul className="space-y-1">
            {navItems.map((item, index) => (
              <li key={item.id} className="animate-fadeInLeft" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 relative overflow-hidden group ${
                    activeSection === item.id
                      ? 'text-blue-600 font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {activeSection === item.id && (
                    <span className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 rounded-r-full"></span>
                  )}
                  <span className={`transition-all duration-300 ${activeSection === item.id ? 'ml-3' : 'ml-0'}`}>
                    {item.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-6 border-t border-slate-200">
          <div className="flex gap-3 justify-center">
            <a
              href="https://github.com/cristianaruperes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-600 transition-all duration-300 hover:scale-110 text-sm font-medium"
            >
              GitHub
            </a>
            <span className="text-slate-300">•</span>
            <a
              href="https://www.linkedin.com/in/cristian-aruperes/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-600 transition-all duration-300 hover:scale-110 text-sm font-medium"
            >
              LinkedIn
            </a>
            <span className="text-slate-300">•</span>
            <a
              href="mailto:cristianaruperes@gmail.com"
              className="text-slate-400 hover:text-blue-600 transition-all duration-300 hover:scale-110 text-sm font-medium"
            >
              {t.sidebar.email}
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};
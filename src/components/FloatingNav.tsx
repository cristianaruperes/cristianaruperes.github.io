import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useLanguage } from "../i18n/context";
import { navItems } from "../navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";

/**
 * Floating glass navigation pill. Most entries are anchors into the single-page
 * home route, tracked with a scroll-spy; the portfolio is a real route. On
 * small screens the links collapse into a dropdown.
 */
export const FloatingNav: React.FC = () => {
  const { t } = useLanguage();
  const { pathname, hash } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight whichever section is currently in view.
  useEffect(() => {
    if (!isHome) return;

    const sections = navItems
      .filter((item) => item.kind === "section")
      .map((item) => document.getElementById(item.kind === "section" ? item.id : ""))
      .filter((node): node is HTMLElement => node !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // The entry nearest the top of the viewport wins.
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  // Never leave the dropdown hanging open after navigating.
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname, hash]);

  // Escape closes the dropdown, matching what the focus ring implies.
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  const isItemActive = (item: (typeof navItems)[number]) =>
    item.kind === "route" ? pathname === item.path : isHome && activeSection === item.id;

  const pillClasses = (active: boolean) =>
    `rounded-pill px-4 py-2 text-sm font-medium transition-all duration-300 ${
      active ? "bg-mint/15 text-mint" : "text-slate-400 hover:bg-white/5 hover:text-white"
    }`;

  const blockClasses = (active: boolean) =>
    `block rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-300 ${
      active ? "bg-mint/15 text-mint" : "text-slate-300 hover:bg-white/5 hover:text-white"
    }`;

  /** Section anchors point at the home route so they work from /portfolio too. */
  const renderLink = (item: (typeof navItems)[number], className: string) =>
    item.kind === "route" ? (
      <NavLink to={item.path} className={className}>
        {t.nav[item.key]}
      </NavLink>
    ) : (
      <Link to={item.id === "home" ? "/" : `/#${item.id}`} className={className}>
        {t.nav[item.key]}
      </Link>
    );

  return (
    <header className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6">
      {/* Dropdown sits above the dock, so it opens upward into the page. */}
      {isMenuOpen && (
        <div
          id="floating-menu"
          className="animate-fadeInUp mx-auto mb-2 max-w-6xl rounded-2xl border border-white/10 bg-deep/80 p-3 shadow-2xl backdrop-blur-2xl lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.key}>{renderLink(item, blockClasses(isItemActive(item)))}</li>
            ))}
          </ul>

          <div className="mt-3 flex justify-center gap-3 border-t border-white/10 pt-3">
            <a
              href="https://github.com/cristianaruperes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-500 transition-colors duration-300 hover:text-mint"
            >
              {t.sidebar.github}
            </a>
            <span className="text-slate-700">•</span>
            <a
              href="https://www.linkedin.com/in/cristian-aruperes/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-500 transition-colors duration-300 hover:text-mint"
            >
              {t.sidebar.linkedin}
            </a>
            <span className="text-slate-700">•</span>
            <a
              href="mailto:cristianaruperes12@gmail.com"
              className="text-sm font-medium text-slate-500 transition-colors duration-300 hover:text-mint"
            >
              {t.sidebar.email}
            </a>
          </div>
        </div>
      )}

      <nav
        /* Darker and less transparent than the cards: text sits on top of it, so
           legibility wins over translucency. */
        className={`mx-auto flex max-w-6xl items-center gap-3 rounded-pill border border-white/10 bg-deep/80 px-4 shadow-2xl backdrop-blur-2xl transition-all duration-300 ${
          isScrolled ? "py-2" : "py-3"
        }`}
      >
        {/* Brand */}
        <Link
          to="/"
          aria-label="CristianAruperes"
          /* Not `text-base`: the palette defines a `base` colour, so that class
             sets the text colour instead of its size. */
          className="shrink-0 pl-2 pr-1 text-lg font-bold tracking-tight text-white transition-opacity duration-300 hover:opacity-80"
        >
          Cristian<span className="text-mint">Aruperes</span>
        </Link>

        <span aria-hidden="true" className="hidden h-6 w-px bg-white/10 lg:block" />

        {/* Full nav from large screens up */}
        <ul className="hidden flex-1 items-center justify-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.key}>{renderLink(item, pillClasses(isItemActive(item)))}</li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <LanguageSwitcher />

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="floating-menu"
            aria-label={isMenuOpen ? t.menu.close : t.menu.open}
            className="rounded-full border border-white/10 p-2.5 text-mint transition-colors duration-300 hover:border-mint/50 lg:hidden"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

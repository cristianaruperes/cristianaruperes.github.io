import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/context";
import { CountUp } from "./CountUp";

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative overflow-hidden px-6 py-20 sm:px-10 lg:py-28">
      {/* Soft colour wash behind the content. */}
      <div className="blob -left-32 -top-28 h-[420px] w-[420px] animate-drift bg-mint/40" />
      <div className="blob -bottom-32 -right-24 h-[360px] w-[360px] bg-brand-react/30" />

      {/* Name ribbon — two copies so the loop is seamless. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-6 overflow-hidden border-y border-white/5 py-2"
      >
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {[0, 1].map((copy) => (
            <span
              key={copy}
              className="px-4 font-mono text-small uppercase tracking-[0.3em] text-white/15"
            >
              {t.hero.name} — {t.hero.role} —&nbsp;
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 pt-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-pill border border-mint/30 bg-mint/10 px-4 py-1.5 font-mono text-small text-mintSoft">
            <span className="h-2 w-2 animate-pulseDot rounded-full bg-mint" />
            {t.hero.status}
          </p>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t.hero.name}
          </h1>
          <p className="mt-3 font-mono text-lead text-mint">{t.hero.role}</p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">{t.hero.tagline}</p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-2 rounded-pill bg-mint px-7 py-3 font-semibold text-deep transition-all duration-300 hover:shadow-[0_0_30px_-6px_rgba(18,247,214,.8)]"
            >
              {t.hero.cta}
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <a
              href="mailto:cristianaruperes@gmail.com"
              className="inline-flex items-center gap-2 rounded-pill border border-white/15 px-7 py-3 font-semibold text-slate-200 transition-all duration-300 hover:border-mint/60 hover:text-mint"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        {/* Portrait framed as an editor window. */}
        <div className="panel mx-auto w-full max-w-sm overflow-hidden">
          <div className="tbar">
            <span className="tdot bg-red-400/80" />
            <span className="tdot bg-yellow-400/80" />
            <span className="tdot bg-green-400/80" />
            <span className="ml-2 font-mono text-xs text-slate-500">cristian.webp</span>
          </div>
          <img
            src="/cristian.webp"
            alt={t.hero.photoAlt}
            width={720}
            height={723}
            className="w-full object-cover"
          />
        </div>
      </div>

      {/* Headline numbers. */}
      <div className="relative z-10 mx-auto mt-20 grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
        {t.hero.stats.map((stat) => (
          <div key={stat.label} className="bg-base/80 px-6 py-8 text-center backdrop-blur">
            <p className="font-mono text-4xl font-bold text-mint">
              <CountUp to={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

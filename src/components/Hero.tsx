import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/context";
import { CountUp } from "./CountUp";

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  // The first stat floats beside the portrait; the rest fill the strip below.
  const [headlineStat, ...otherStats] = t.hero.stats;

  return (
    <section id="home" className="relative overflow-hidden px-6 pb-20 pt-16 sm:px-10 lg:pb-28">
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

          <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-6xl">
            {t.hero.name}
          </h1>
          <p className="mt-3 font-mono text-lg text-mint sm:text-lead">{t.hero.role}</p>
          <p className="mt-6 max-w-xl leading-relaxed text-slate-400 sm:text-lg">
            {t.hero.tagline}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-2 rounded-pill bg-mint px-7 py-3 font-semibold text-deep transition-all duration-300 hover:shadow-[0_0_30px_-6px_rgba(18,247,214,.8)]"
            >
              {t.hero.cta}
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <a
              href="mailto:cristianaruperes12@gmail.com"
              className="inline-flex items-center gap-2 rounded-pill border border-white/15 px-7 py-3 font-semibold text-slate-200 transition-all duration-300 hover:border-mint/60 hover:text-mint"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        {/* Portrait in a gradient ring, with a code window and stat badge floating over it. */}
        <div className="relative mx-auto mt-10 w-full max-w-sm lg:mt-0">
          <div className="relative aspect-square">
            {/* Glow sitting behind the ring. */}
            <div
              aria-hidden="true"
              className="absolute inset-6 rounded-full bg-mint/20 blur-3xl"
            />

            {/* Gradient ring — padding reveals it as a border around the disc. */}
            <div className="relative h-full w-full rounded-full bg-gradient-to-br from-mint via-brand-react to-mint/40 p-1.5 shadow-2xl">
              {/* The portrait is a cut-out, so the disc behind it supplies the backdrop. */}
              <div className="h-full w-full overflow-hidden rounded-full border-4 border-deep bg-gradient-to-b from-base to-deep">
                <img
                  src="/cristian.webp"
                  alt={t.hero.photoAlt}
                  width={720}
                  height={723}
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>

            {/* Floating code window, low on the right so it never covers the face. */}
            <div className="panel absolute -bottom-6 -right-4 w-60 overflow-hidden sm:-right-8 lg:-right-14">
              <div className="tbar !py-2">
                <span className="tdot bg-red-400/80" />
                <span className="tdot bg-yellow-400/80" />
                <span className="tdot bg-green-400/80" />
              </div>
              <pre className="overflow-x-auto px-4 py-3 font-mono text-xs leading-relaxed">
                <code>
                  <span className="text-brand-react">const</span>{" "}
                  <span className="text-white">engineer</span>{" "}
                  <span className="text-slate-500">= {"{"}</span>
                  {"\n  "}
                  <span className="text-slate-400">stack</span>
                  <span className="text-slate-500">: [</span>
                  <span className="text-mintSoft">"React"</span>
                  <span className="text-slate-500">, </span>
                  <span className="text-mintSoft">"C#"</span>
                  <span className="text-slate-500">],</span>
                  {"\n  "}
                  <span className="text-slate-400">focus</span>
                  <span className="text-slate-500">: </span>
                  <span className="text-mintSoft">"AI & data"</span>
                  <span className="text-slate-500">,</span>
                  {"\n  "}
                  <span className="text-slate-400">learning</span>
                  <span className="text-slate-500">: </span>
                  <span className="text-mint">∞</span>
                  {"\n"}
                  <span className="text-slate-500">{"}"}</span>
                </code>
              </pre>
            </div>

            {/* Floating headline stat — the remaining three sit in the strip below. */}
            <div className="panel absolute -left-3 top-6 px-5 py-3 text-center sm:-left-6 lg:-left-10">
              <p className="font-mono text-3xl font-bold text-mint">
                <CountUp to={headlineStat.value} suffix={headlineStat.suffix} />
              </p>
              <p className="mt-1 text-xs text-slate-400">{headlineStat.label}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Remaining numbers. */}
      <div className="relative z-10 mx-auto mt-24 grid max-w-6xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
        {otherStats.map((stat) => (
          <div key={stat.label} className="bg-white/[0.04] px-6 py-8 text-center backdrop-blur-xl">
            <p className="font-mono text-3xl font-bold text-mint sm:text-4xl">
              <CountUp to={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

import React, { useEffect, useRef, useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { ScrollReveal } from "./ScrollReveal";
import { useLanguage } from "../i18n/context";
import { journeyStart, milestones } from "../journey";

/**
 * Milestones sit at even steps between these two edges, in percent. The insets
 * leave room for the year caps and for the outermost labels, which are centred
 * on their node and would otherwise overflow the rail.
 */
const FIRST_STOP = 10;
const LAST_STOP = 90;

/** Shape of the wave, in the same 0–100 space the SVG uses for both axes. */
const AMPLITUDE = 15;
const CYCLES = 1.5;

/** Vertical position of the wave at a given horizontal percentage. */
const waveY = (x: number) => 50 - AMPLITUDE * Math.sin((x / 100) * Math.PI * 2 * CYCLES);

/** The wave as an SVG path, sampled every percent. */
const wavePath = Array.from({ length: 101 }, (_, x) => `${x},${waveY(x).toFixed(2)}`)
  .map((point, index) => (index === 0 ? `M${point}` : `L${point}`))
  .join(" ");

/**
 * Every work and education milestone on a single wave, from the first year of
 * university to today. The wave draws itself in as the section scrolls into
 * view, like a progress bar following a curve.
 *
 * Stops are spaced evenly rather than by true date: three of them fall inside
 * eighteen months, and on a real scale their labels would sit on top of each
 * other. Each label carries its own dates, so the sequence stays honest.
 */
export const Journey: React.FC = () => {
  const { t } = useLanguage();
  const [hasEntered, setHasEntered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setHasEntered(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const stops = milestones.map((milestone, index) => {
    const source =
      milestone.kind === "education"
        ? t.education.items[milestone.index]
        : t.experience.items[milestone.index];

    // The two lists name their fields differently; normalise them here.
    const title = "degree" in source ? source.degree : source.title;
    const org = "school" in source ? source.school : source.company;
    const left = FIRST_STOP + (index / (milestones.length - 1)) * (LAST_STOP - FIRST_STOP);

    return {
      key: `${milestone.kind}-${milestone.index}`,
      kind: milestone.kind,
      isCurrent: milestone.end === undefined,
      title,
      org,
      period: source.period,
      left,
      top: waveY(left),
      /**
       * Put the label on the outside of the curve — above a crest, below a
       * trough — so the text never has to cross the line it belongs to.
       */
      above: waveY(left) < 50
    };
  });

  return (
    <section id="journey" className="px-6 py-20 sm:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeader command="git log --reverse --since=2015" title={t.journey.heading} />

        <ScrollReveal>
          <div className="panel p-6 sm:p-8">
            {/* Legend */}
            <div className="mb-4 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-small">
              <span className="flex items-center gap-2 text-slate-400">
                <span className="h-3 w-3 rounded-full bg-brand-react" />
                {t.journey.education}
              </span>
              <span className="flex items-center gap-2 text-slate-400">
                <span className="h-3 w-3 rounded-full bg-mint" />
                {t.journey.work}
              </span>
            </div>

            {/* The wave needs room for six labels, so it scrolls on narrow screens. */}
            <div className="-mx-2 overflow-x-auto px-2 pb-2">
              {/* Wide enough that neighbouring labels clear each other, and tall
                  enough that the outermost ones clear the top and bottom. */}
              <div ref={ref} className="relative h-[30rem] min-w-[66rem]">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  className="absolute inset-0 h-full w-full"
                >
                  <defs>
                    <linearGradient id="journeyLine" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#28a9e0" />
                      <stop offset="60%" stopColor="#12f7d6" />
                      <stop offset="100%" stopColor="#98faec" />
                    </linearGradient>
                  </defs>

                  {/* Unfilled track */}
                  <path
                    d={wavePath}
                    fill="none"
                    stroke="rgba(255,255,255,.1)"
                    strokeWidth={6}
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                  />

                  {/* Progress, drawn in by animating the dash offset */}
                  <path
                    d={wavePath}
                    fill="none"
                    stroke="url(#journeyLine)"
                    strokeWidth={6}
                    strokeLinecap="round"
                    pathLength={1}
                    strokeDasharray={1}
                    strokeDashoffset={hasEntered ? 0 : 1}
                    vectorEffect="non-scaling-stroke"
                    className="transition-[stroke-dashoffset] duration-[2000ms] ease-out"
                  />
                </svg>

                {/* Year caps, so the span the wave covers is obvious */}
                <span
                  className="absolute -translate-x-1 -translate-y-1/2 rounded-pill border border-white/10 bg-deep px-2 py-1 font-mono text-xs text-slate-400"
                  style={{ left: 0, top: `${waveY(0)}%` }}
                >
                  {journeyStart}
                </span>
                <span
                  className="absolute -translate-y-1/2 translate-x-1 rounded-pill border border-mint/40 bg-deep px-2 py-1 font-mono text-xs text-mint"
                  style={{ right: 0, top: `${waveY(100)}%` }}
                >
                  {t.journey.now}
                </span>

                {stops.map((stop, index) => (
                  <div
                    key={stop.key}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${stop.left}%`, top: `${stop.top}%` }}
                  >
                    {/* Node */}
                    <span
                      className={`relative z-10 block h-4 w-4 rounded-full border-2 border-deep transition-all duration-500 ${
                        stop.kind === "education" ? "bg-brand-react" : "bg-mint"
                      } ${stop.isCurrent ? "animate-pulseDot" : ""} ${
                        hasEntered ? "scale-100 opacity-100" : "scale-0 opacity-0"
                      }`}
                      style={{ transitionDelay: `${400 + index * 200}ms` }}
                    />

                    {/* Label, alternating above and below the wave */}
                    <div
                      className={`absolute left-1/2 w-40 -translate-x-1/2 text-center transition-all duration-500 ${
                        stop.above ? "bottom-12" : "top-12"
                      } ${hasEntered ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}
                      style={{ transitionDelay: `${500 + index * 200}ms` }}
                    >
                      {/* Stalk connecting the label to its node */}
                      <span
                        className={`absolute left-1/2 h-9 w-px -translate-x-1/2 bg-white/15 ${
                          stop.above ? "-bottom-9" : "-top-9"
                        }`}
                      />
                      <p className="font-mono text-xs text-mint">{stop.period}</p>
                      <p className="mt-1 text-sm font-semibold leading-snug text-white">
                        {stop.title}
                      </p>
                      <p className="mt-0.5 text-xs leading-snug text-slate-500">{stop.org}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

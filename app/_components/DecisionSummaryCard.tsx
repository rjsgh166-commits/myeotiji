"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { trackEvent } from "../_lib/analytics";

type Metric = {
  label: string;
  value: string;
};

type Props = {
  title: string;
  description?: string;
  metrics?: Metric[];
  tone?: "blue" | "violet" | "amber" | "emerald";
  actionHref?: string;
  actionLabel?: string;
  analyticsId?: string;
};

const styles = {
  blue: {
    wrap: "border-blue-100 bg-gradient-to-br from-blue-50 via-white to-sky-50",
    eyebrow: "text-blue-600",
    metric: "bg-white text-blue-950 ring-blue-100",
    action: "bg-blue-600 hover:bg-blue-700",
  },
  violet: {
    wrap: "border-violet-100 bg-gradient-to-br from-violet-50 via-white to-fuchsia-50",
    eyebrow: "text-violet-600",
    metric: "bg-white text-violet-950 ring-violet-100",
    action: "bg-violet-600 hover:bg-violet-700",
  },
  amber: {
    wrap: "border-amber-100 bg-gradient-to-br from-amber-50 via-white to-orange-50",
    eyebrow: "text-amber-700",
    metric: "bg-white text-amber-950 ring-amber-100",
    action: "bg-amber-600 hover:bg-amber-700",
  },
  emerald: {
    wrap: "border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-teal-50",
    eyebrow: "text-emerald-700",
    metric: "bg-white text-emerald-950 ring-emerald-100",
    action: "bg-emerald-600 hover:bg-emerald-700",
  },
} as const;

export default function DecisionSummaryCard({
  title,
  description,
  metrics = [],
  tone = "blue",
  actionHref,
  actionLabel,
  analyticsId,
}: Props) {
  const style = styles[tone];
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element || !analyticsId) return;

    let tracked = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!tracked && entry?.isIntersecting && entry.intersectionRatio >= 0.35) {
          tracked = true;
          trackEvent("decision_view", { calculator: analyticsId });
          observer.disconnect();
        }
      },
      { threshold: [0.35] },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [analyticsId]);

  return (
    <section
      ref={sectionRef}
      className={`mt-6 rounded-3xl border p-5 shadow-sm sm:p-6 ${style.wrap}`}
    >
      <p className={`text-xs font-black tracking-wider ${style.eyebrow}`}>
        몇이지? 결론
      </p>
      <h2 className="mt-2 text-xl font-black leading-8 sm:text-2xl">{title}</h2>
      {description ? (
        <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
      ) : null}

      {metrics.length > 0 ? (
        <div className="mt-5 grid gap-2 sm:grid-cols-3">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className={`rounded-2xl p-4 ring-1 ${style.metric}`}
            >
              <p className="text-xs font-bold text-slate-400">{metric.label}</p>
              <p className="mt-1 text-base font-black">{metric.value}</p>
            </div>
          ))}
        </div>
      ) : null}

      {actionHref && actionLabel ? (
        <Link
          href={actionHref}
          onClick={() =>
            trackEvent("calculation_continue", {
              from_calculator: analyticsId || "unknown",
              destination: actionHref.split("?")[0],
            })
          }
          className={`mt-5 inline-flex rounded-xl px-4 py-3 text-sm font-black text-white transition ${style.action}`}
        >
          {actionLabel}
        </Link>
      ) : null}
    </section>
  );
}

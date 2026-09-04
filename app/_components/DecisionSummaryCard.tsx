"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { trackEvent } from "../_lib/analytics";
import { storeCalculationTransfer } from "../_lib/calculationTransfer";

type Metric = { label: string; value: string };

type Props = {
  title: string;
  description?: string;
  metrics?: Metric[];
  tone?: "blue" | "violet" | "amber" | "emerald";
  actionHref?: string;
  actionLabel?: string;
  actionState?: Record<string, unknown>;
  analyticsId?: string;
};

const styles = {
  blue: { wrap: "border-blue-200 bg-blue-50", eyebrow: "text-blue-600", action: "bg-blue-600 hover:bg-blue-700" },
  violet: { wrap: "border-violet-200 bg-violet-50", eyebrow: "text-violet-600", action: "bg-violet-600 hover:bg-violet-700" },
  amber: { wrap: "border-amber-200 bg-amber-50", eyebrow: "text-amber-700", action: "bg-amber-600 hover:bg-amber-700" },
  emerald: { wrap: "border-emerald-200 bg-emerald-50", eyebrow: "text-emerald-700", action: "bg-emerald-600 hover:bg-emerald-700" },
} as const;

export default function DecisionSummaryCard({
  title,
  description,
  metrics = [],
  tone = "blue",
  actionHref,
  actionLabel,
  actionState,
  analyticsId,
}: Props) {
  const style = styles[tone];
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element || !analyticsId) return;
    let tracked = false;
    const observer = new IntersectionObserver(([entry]) => {
      if (!tracked && entry?.isIntersecting && entry.intersectionRatio >= 0.35) {
        tracked = true;
        trackEvent("decision_view", { calculator: analyticsId });
        observer.disconnect();
      }
    }, { threshold: [0.35] });
    observer.observe(element);
    return () => observer.disconnect();
  }, [analyticsId]);

  return (
    <section ref={sectionRef} className={`mt-6 rounded-2xl border p-5 sm:p-6 ${style.wrap}`}>
      <p className={`text-xs font-bold ${style.eyebrow}`}>몇이지? 결론</p>
      <h2 className="mt-2 text-xl font-bold leading-8 sm:text-2xl">{title}</h2>
      {description ? <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p> : null}

      {metrics.length > 0 ? (
        <div className="mt-5 grid gap-3 border-t border-black/5 pt-4 sm:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <p className="text-xs font-medium text-slate-500">{metric.label}</p>
              <p className="mt-1 text-base font-bold text-slate-900">{metric.value}</p>
            </div>
          ))}
        </div>
      ) : null}

      {actionHref && actionLabel ? (
        <Link
          href={actionHref}
          onClick={() => {
            if (actionState) storeCalculationTransfer(actionHref, actionState);
            trackEvent("calculation_continue", {
              from_calculator: analyticsId || "unknown",
              destination: actionHref,
            });
          }}
          className={`mt-5 inline-flex rounded-xl px-4 py-3 text-sm font-semibold text-white transition ${style.action}`}
        >
          {actionLabel}
        </Link>
      ) : null}
    </section>
  );
}

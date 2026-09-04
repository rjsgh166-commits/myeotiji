"use client";

import { useEffect, useState } from "react";
import { trackEvent } from "../_lib/analytics";

type Props = {
  calculator: string;
  label: string;
  value: string;
  targetId: string;
  tone?: "blue" | "violet" | "amber";
};

const toneClass = {
  blue: "text-blue-700",
  violet: "text-violet-700",
  amber: "text-amber-700",
};

export default function StickyResultBar({
  calculator,
  label,
  value,
  targetId,
  tone = "blue",
}: Props) {
  const [targetVisible, setTargetVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => setTargetVisible(Boolean(entry?.isIntersecting)),
      { threshold: [0.08] },
    );
    observer.observe(target);

    const onScroll = () => setScrolled(window.scrollY > 280);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [targetId]);

  const goToResult = () => {
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    document.getElementById(targetId)?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    trackEvent("sticky_result_open", { calculator, target: targetId });
  };

  if (!scrolled || targetVisible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 px-4 pb-[max(12px,env(safe-area-inset-bottom))] pt-3 shadow-[0_-8px_30px_rgba(15,23,42,0.08)] backdrop-blur lg:hidden">
      <div className="mx-auto flex max-w-2xl items-center gap-3">
        <div className="min-w-0 flex-1" aria-live="polite">
          <p className="text-xs font-semibold text-slate-500">{label}</p>
          <p className={`truncate text-base font-bold ${toneClass[tone]}`}>{value}</p>
        </div>
        <button
          type="button"
          onClick={goToResult}
          className="min-h-11 shrink-0 rounded-xl bg-slate-950 px-4 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-slate-200"
          aria-label={`${label} 결과로 이동`}
        >
          결과 보기 ↑
        </button>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { trackEvent } from "../_lib/analytics";

type Props = {
  calculator: string;
  signature: string;
  mode?: string;
  valid?: boolean;
  hasCompare?: boolean;
  delayMs?: number;
};

export default function CalculationAnalytics({
  calculator,
  signature,
  mode = "default",
  valid = true,
  hasCompare = false,
  delayMs = 1200,
}: Props) {
  const lastTracked = useRef("");
  const [interacted, setInteracted] = useState(false);

  useEffect(() => {
    const markInteraction = (event: Event) => {
      const target = event.target as HTMLElement | null;
      if (target?.matches("input, select, textarea") || target?.closest("[data-calculation-control=\"true\"]")) {
        setInteracted(true);
      }
    };

    document.addEventListener("input", markInteraction, true);
    document.addEventListener("change", markInteraction, true);
    document.addEventListener("click", markInteraction, true);
    return () => {
      document.removeEventListener("input", markInteraction, true);
      document.removeEventListener("change", markInteraction, true);
      document.removeEventListener("click", markInteraction, true);
    };
  }, []);

  useEffect(() => {
    if (!interacted || !valid || !signature || lastTracked.current === signature) return;

    const timer = window.setTimeout(() => {
      if (lastTracked.current === signature) return;
      lastTracked.current = signature;
      trackEvent("calculation_complete", {
        calculator,
        mode,
        has_compare: hasCompare ? 1 : 0,
      });
    }, delayMs);

    return () => window.clearTimeout(timer);
  }, [calculator, signature, mode, valid, hasCompare, delayMs, interacted]);

  return null;
}

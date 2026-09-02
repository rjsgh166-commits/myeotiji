"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const CALCULATORS: Record<string, string> = {
  "/salary": "연봉 실수령액",
  "/retirement": "퇴직금",
  "/weekly-pay": "주휴수당",
  "/discount": "할인율",
  "/age": "만나이",
  "/lunar": "음력",
  "/holiday-tracker": "꿀연휴",
  "/stock-average": "주식 물타기·불타기",
};

function sendEvent(
  eventName: string,
  parameters: Record<string, string | number | boolean>
) {
  if (typeof window === "undefined" || !window.gtag) return;

  window.gtag("event", eventName, parameters);
}

export default function AnalyticsTracker() {
  const usedCalculatorPath = useRef<string | null>(null);

  useEffect(() => {
    const handleCalculatorOpen = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const link = target.closest("a");
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href || !CALCULATORS[href]) return;

      sendEvent("calculator_open", {
        calculator_name: CALCULATORS[href],
        calculator_path: href,
        source_path: window.location.pathname,
      });
    };

    document.addEventListener("click", handleCalculatorOpen);

    return () => {
      document.removeEventListener("click", handleCalculatorOpen);
    };
  }, []);

  useEffect(() => {
    const markCalculatorUsed = (interactionType: string) => {
      const currentPath = window.location.pathname;
      const calculatorName = CALCULATORS[currentPath];

      if (!calculatorName) return;

      // 같은 계산기 페이지를 보고 있는 동안 첫 조작만 1회 기록
      if (usedCalculatorPath.current === currentPath) return;

      usedCalculatorPath.current = currentPath;

      sendEvent("calculator_use", {
        calculator_name: calculatorName,
        calculator_path: currentPath,
        interaction_type: interactionType,
      });
    };

    const handleInput = (event: Event) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLSelectElement ||
        target instanceof HTMLTextAreaElement
      ) {
        markCalculatorUsed("input");
      }
    };

    const handleButtonClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const button = target.closest("button");
      if (!button) return;

      markCalculatorUsed("button");
    };

    document.addEventListener("input", handleInput);
    document.addEventListener("change", handleInput);
    document.addEventListener("click", handleButtonClick);

    return () => {
      document.removeEventListener("input", handleInput);
      document.removeEventListener("change", handleInput);
      document.removeEventListener("click", handleButtonClick);
    };
  }, []);

  return null;
}

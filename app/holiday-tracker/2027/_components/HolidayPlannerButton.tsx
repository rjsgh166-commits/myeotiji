"use client";

import { storeCalculationTransfer } from "../../../_lib/calculationTransfer";
import { trackEvent } from "../../../_lib/analytics";

export default function HolidayPlannerButton({
  ptoBudget,
  style,
}: {
  ptoBudget: number;
  style: "long" | "efficient" | "frequent";
}) {
  const openPlanner = () => {
    storeCalculationTransfer("/holiday-tracker", {
      year: 2027,
      ptoBudget,
      style,
    });
    trackEvent("holiday_guide_to_planner", {
      year: 2027,
      pto_budget: ptoBudget,
      style,
    });
    window.location.assign("/holiday-tracker");
  };

  return (
    <button
      type="button"
      onClick={openPlanner}
      className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
    >
      이 조건으로 꿀연휴 계산 →
    </button>
  );
}

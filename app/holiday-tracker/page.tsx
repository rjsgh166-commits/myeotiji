"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import RelatedCalculators from "../_components/RelatedCalculators";
import ResultActionBar from "../_components/ResultActionBar";
import SaveCalculationButton from "../_components/SaveCalculationButton";
import StickyResultBar from "../_components/StickyResultBar";
import AccessibleResultStatus from "../_components/AccessibleResultStatus";
import { trackEvent } from "../_lib/analytics";
import { consumeCalculationTransfer } from "../_lib/calculationTransfer";
import {
  addDays,
  buildHolidayMapsAround,
  efficiencyText,
  findMinimumPtoBreak,
  formatFullDate,
  formatRange,
  formatShortDate,
  freeLongWeekends,
  getBreakComposition,
  getNextHoliday,
  optimizePortfolio,
  planKey,
  startOfDay,
  toKey,
  topAlternativePlans,
  type BreakPlan,
  type HolidayConstraints,
  type HolidayStyle,
} from "../_lib/holidayEngine";

const HolidayScheduleCalendar = dynamic(() => import("./_components/HolidayScheduleCalendar"), {
  loading: () => <div className="h-80 animate-pulse rounded-2xl bg-slate-100" aria-label="일정 달력 불러오는 중" />,
});

const STYLE_OPTIONS: { id: HolidayStyle; title: string; description: string; icon: string }[] = [
  { id: "long", title: "한 번 길게", description: "가장 긴 휴가를 우선", icon: "✈️" },
  { id: "efficient", title: "효율 최우선", description: "연차 1일의 효과를 크게", icon: "🍯" },
  { id: "frequent", title: "자주 쉬기", description: "4~6일 연휴를 여러 번", icon: "🏖️" },
];

const PTO_QUICK = [0, 1, 2, 3, 5, 7, 10, 15];
const TARGET_QUICK = [4, 5, 7, 9, 10, 14];
type PlannerMode = "budget" | "target";

function getPlanMonths(plan: BreakPlan) {
  const months: { year: number; month: number }[] = [];
  let cursor = new Date(plan.start.getFullYear(), plan.start.getMonth(), 1);
  const last = new Date(plan.end.getFullYear(), plan.end.getMonth(), 1);
  while (cursor <= last) {
    months.push({ year: cursor.getFullYear(), month: cursor.getMonth() + 1 });
    cursor = new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1);
  }
  return months;
}

function MiniMonthCalendar({
  year,
  month,
  plan,
  companyDaysOff,
}: {
  year: number;
  month: number;
  plan: BreakPlan;
  companyDaysOff: string[];
}) {
  const labels = ["일", "월", "화", "수", "목", "금", "토"];
  const firstDay = new Date(year, month - 1, 1);
  const firstWeekday = firstDay.getDay();
  const daysInMonth = new Date(year, month, 0).getDate();
  const holidays = buildHolidayMapsAround(year, companyDaysOff);
  const companySet = new Set(companyDaysOff);
  const ptoKeys = new Set(plan.ptoDays.map(toKey));
  const startKey = toKey(plan.start);
  const endKey = toKey(plan.end);
  const cells: (number | null)[] = [
    ...Array.from({ length: firstWeekday }, () => null),
    ...Array.from({ length: daysInMonth }, (_, index) => index + 1),
  ];
  while (cells.length % 7 !== 0) cells.push(null);

  return (
    <div className="min-w-0 rounded-2xl border border-slate-200 bg-white p-4">
      <p className="mb-3 text-sm font-bold text-slate-900">{year}년 {month}월</p>
      <div className="grid grid-cols-7">
        {labels.map((label, index) => (
          <div key={label} className={`pb-2 text-center text-xs font-semibold ${index === 0 ? "text-rose-500" : index === 6 ? "text-blue-500" : "text-slate-500"}`}>
            {label}
          </div>
        ))}
        {cells.map((day, index) => {
          if (day === null) return <div key={`empty-${index}`} className="aspect-square" />;
          const date = new Date(year, month - 1, day);
          const key = toKey(date);
          const isHoliday = holidays.has(key);
          const isCompanyOff = companySet.has(key);
          const isPto = ptoKeys.has(key);
          const inPlan = key >= startKey && key <= endKey;
          let cls = "text-slate-700";
          if (inPlan) cls = "bg-amber-100 font-semibold text-amber-950";
          if (isHoliday) cls = "bg-rose-100 font-bold text-rose-700";
          if (isCompanyOff) cls = "bg-emerald-100 font-bold text-emerald-700";
          if (isPto) cls = "bg-blue-600 font-bold text-white";
          if (!inPlan && !isHoliday && !isPto && date.getDay() === 0) cls = "text-rose-500";
          if (!inPlan && !isHoliday && !isPto && date.getDay() === 6) cls = "text-blue-500";
          return (
            <div key={key} className="flex aspect-square items-center justify-center p-0.5">
              <div className={`flex h-full w-full items-center justify-center rounded-lg text-xs ${cls}`}>{day}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PlanCalendar({ plan, companyDaysOff }: { plan: BreakPlan; companyDaysOff: string[] }) {
  const months = getPlanMonths(plan);
  return (
    <div className="mt-5 border-t border-slate-200 pt-5">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <p className="text-xs font-bold text-slate-500">한눈에 보는 달력</p>
        <div className="flex flex-wrap gap-3 text-xs font-semibold">
          <span className="text-amber-700">■ 연휴 기간</span>
          <span className="text-rose-600">■ 공휴일</span>
          <span className="text-emerald-600">■ 회사 휴무</span>
          <span className="text-blue-600">■ 추천 연차</span>
        </div>
      </div>
      <div className={`grid gap-3 ${months.length > 1 ? "sm:grid-cols-2" : "grid-cols-1"}`}>
        {months.map(({ year, month }) => (
          <MiniMonthCalendar key={`${year}-${month}`} year={year} month={month} plan={plan} companyDaysOff={companyDaysOff} />
        ))}
      </div>
    </div>
  );
}

function ptoText(plan: BreakPlan) {
  if (plan.ptoDays.length === 0) return "연차 필요 없음";
  return plan.ptoDays.map(formatShortDate).join(", ");
}

function compositionText(plan: BreakPlan, companyDaysOff: string[]) {
  const composition = getBreakComposition(plan, companyDaysOff);
  const parts = [
    composition.weekendDays > 0 ? `주말 ${composition.weekendDays}일` : "",
    composition.holidayDays > 0 ? `공휴일 ${composition.holidayDays}일` : "",
    composition.companyOffDays > 0 ? `회사휴무 ${composition.companyOffDays}일` : "",
    composition.ptoDays > 0 ? `연차 ${composition.ptoDays}일` : "",
  ].filter(Boolean);
  return `${parts.join(" + ")} = ${plan.totalDays}일 연속 휴식`;
}

function escapeIcs(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/,/g, "\\,").replace(/;/g, "\\;");
}

function icsDate(date: Date) {
  return `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, "0")}${String(date.getDate()).padStart(2, "0")}`;
}

function downloadPlansIcs(year: number, plans: BreakPlan[], mode: "pto" | "full") {
  if (plans.length === 0) return;
  const events = mode === "pto"
    ? plans.flatMap((plan, planIndex) => plan.ptoDays.map((date, dateIndex) => {
        const endExclusive = addDays(date, 1);
        return [
          "BEGIN:VEVENT",
          `UID:myeotiji-pto-${year}-${planIndex}-${dateIndex}-${icsDate(date)}@myeotiji.kr`,
          `DTSTART;VALUE=DATE:${icsDate(date)}`,
          `DTEND;VALUE=DATE:${icsDate(endExclusive)}`,
          `SUMMARY:${escapeIcs("연차 추천 🍯")}`,
          `DESCRIPTION:${escapeIcs(`${formatRange(plan)} 휴가를 위한 추천 연차 · 몇이지? myeotiji.kr`)}`,
          "END:VEVENT",
        ].join("\r\n");
      }))
    : plans.map((plan, index) => {
        const endExclusive = addDays(plan.end, 1);
        const title = `${year} 꿀연휴 추천 ${index + 1} · ${plan.totalDays}일`;
        const description = `추천 연차: ${ptoText(plan)}\n공휴일: ${plan.holidayNames.join(" · ") || "-"}\n몇이지? myeotiji.kr`;
        return [
          "BEGIN:VEVENT",
          `UID:myeotiji-holiday-${year}-${index}-${icsDate(plan.start)}@myeotiji.kr`,
          `DTSTART;VALUE=DATE:${icsDate(plan.start)}`,
          `DTEND;VALUE=DATE:${icsDate(endExclusive)}`,
          `SUMMARY:${escapeIcs(title)}`,
          `DESCRIPTION:${escapeIcs(description)}`,
          "END:VEVENT",
        ].join("\r\n");
      });

  if (events.length === 0) return;
  const ics = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//myeotiji.kr//Holiday Engine//KO", "CALSCALE:GREGORIAN", ...events, "END:VCALENDAR"].join("\r\n");
  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `myeotiji-${year}-${mode === "pto" ? "pto-days" : "holiday-plan"}.ics`;
  link.click();
  URL.revokeObjectURL(url);
  trackEvent("holiday_calendar_add", { year, plan_count: plans.length, calendar_mode: mode });
  trackEvent("holiday_calendar_download", { year, plan_count: plans.length, calendar_mode: mode });
}

function CalendarDownloadMenu({ year, plans }: { year: number; plans: BreakPlan[] }) {
  return (
    <details className="relative">
      <summary className="inline-flex min-h-11 cursor-pointer list-none items-center justify-center rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-100">
        <span aria-hidden="true">📅</span>&nbsp;캘린더 추가 ▾
      </summary>
      <div className="absolute bottom-full left-0 z-20 mb-2 w-56 rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl">
        <button type="button" onClick={() => downloadPlansIcs(year, plans, "pto")} className="min-h-11 w-full rounded-lg px-3 text-left text-sm font-semibold text-slate-700 hover:bg-slate-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-100">연차 신청일만 추가</button>
        <button type="button" onClick={() => downloadPlansIcs(year, plans, "full")} className="min-h-11 w-full rounded-lg px-3 text-left text-sm font-semibold text-slate-700 hover:bg-slate-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-100">휴가 전체 기간 추가</button>
      </div>
    </details>
  );
}

function overlaps(a: BreakPlan, b: BreakPlan) {
  return Math.max(a.start.getTime(), b.start.getTime()) <= Math.min(a.end.getTime(), b.end.getTime());
}

function PlanCard({
  plan,
  index,
  companyDaysOff,
  defaultExpanded = false,
  badge,
}: {
  plan: BreakPlan;
  index?: number;
  companyDaysOff: string[];
  defaultExpanded?: boolean;
  badge?: string;
}) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-7">
      <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-start">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            {badge ? <span className="rounded-full bg-violet-100 px-2.5 py-1 text-xs font-bold text-violet-700">{badge}</span> : null}
            {typeof index === "number" ? <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-bold text-amber-800">#{index + 1}</span> : null}
            <span className="text-xs font-semibold text-slate-500">{plan.holidayNames.join(" · ")}</span>
          </div>
          <h3 className="mt-3 text-xl font-bold text-slate-950 sm:text-2xl">{formatRange(plan)}</h3>
          <p className="mt-2 text-sm text-slate-600">추천 연차: <strong className="text-blue-700">{ptoText(plan)}</strong></p>
          <p className="mt-2 text-xs font-semibold leading-5 text-slate-500">{compositionText(plan, companyDaysOff)}</p>
        </div>
        <div className="grid grid-cols-2 gap-2 text-center sm:min-w-60">
          <div className="rounded-xl bg-slate-50 px-3 py-3"><p className="text-xs text-slate-500">연속 휴식</p><p className="mt-1 text-lg font-bold text-slate-950">{plan.totalDays}일</p></div>
          <div className="rounded-xl bg-blue-50 px-3 py-3"><p className="text-xs text-blue-500">연차 효율</p><p className="mt-1 text-sm font-bold text-blue-700">{efficiencyText(plan)}</p></div>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
        <p className="text-xs leading-5 text-slate-500">연차 효율 = 연속 휴식일 ÷ 사용 연차</p>
        <button type="button" onClick={() => setExpanded((value) => !value)} className="text-sm font-semibold text-slate-600 hover:text-slate-950">
          {expanded ? "달력 접기 ↑" : "달력으로 보기 ↓"}
        </button>
      </div>
      {expanded ? <PlanCalendar plan={plan} companyDaysOff={companyDaysOff} /> : null}
    </article>
  );
}

export default function HolidayTrackerPage() {
  const [today, setToday] = useState<Date | null>(null);
  const [plannerMode, setPlannerMode] = useState<PlannerMode>("budget");
  const [selectedYear, setSelectedYear] = useState(2027);
  const [ptoBudget, setPtoBudget] = useState(7);
  const [targetDays, setTargetDays] = useState(9);
  const [style, setStyle] = useState<HolidayStyle>("efficient");
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [companyDaysOff, setCompanyDaysOff] = useState<string[]>([]);
  const [blockedPtoDays, setBlockedPtoDays] = useState<string[]>([]);
  const [companionBlockedPtoDays, setCompanionBlockedPtoDays] = useState<string[]>([]);

  useEffect(() => {
    const now = startOfDay(new Date());
    setToday(now);
    const transferred = consumeCalculationTransfer("/holiday-tracker");
    if (!transferred) return;
    if (transferred.plannerMode === "budget" || transferred.plannerMode === "target") setPlannerMode(transferred.plannerMode);
    if (typeof transferred.year === "number" && [2026, 2027].includes(transferred.year)) setSelectedYear(transferred.year);
    if (typeof transferred.ptoBudget === "number") setPtoBudget(Math.min(15, Math.max(0, transferred.ptoBudget)));
    if (typeof transferred.targetDays === "number") setTargetDays(Math.min(30, Math.max(3, transferred.targetDays)));
    if (transferred.style === "long" || transferred.style === "efficient" || transferred.style === "frequent") setStyle(transferred.style);
    if (Array.isArray(transferred.companyDaysOff)) setCompanyDaysOff(transferred.companyDaysOff.filter((item): item is string => typeof item === "string"));
    if (Array.isArray(transferred.blockedPtoDays)) setBlockedPtoDays(transferred.blockedPtoDays.filter((item): item is string => typeof item === "string"));
    if (Array.isArray(transferred.companionBlockedPtoDays)) setCompanionBlockedPtoDays(transferred.companionBlockedPtoDays.filter((item): item is string => typeof item === "string"));
  }, []);

  useEffect(() => {
    const prefix = `${selectedYear}-`;
    setCompanyDaysOff((values) => values.filter((value) => value.startsWith(prefix)));
    setBlockedPtoDays((values) => values.filter((value) => value.startsWith(prefix)));
    setCompanionBlockedPtoDays((values) => values.filter((value) => value.startsWith(prefix)));
  }, [selectedYear]);

  const analysisToday = selectedYear === 2026 ? today : null;
  const constraints = useMemo<HolidayConstraints>(() => ({
    companyDaysOff,
    blockedPtoDays,
    companionBlockedPtoDays,
  }), [companyDaysOff, blockedPtoDays, companionBlockedPtoDays]);

  const portfolio = useMemo(
    () => optimizePortfolio(
      selectedYear,
      ptoBudget,
      style,
      analysisToday,
      style === "long" ? 3 : Math.min(10, Math.max(5, Math.ceil(ptoBudget / 1.5))),
      constraints,
    ),
    [selectedYear, ptoBudget, style, analysisToday, constraints],
  );

  const targetResult = useMemo(
    () => findMinimumPtoBreak(selectedYear, targetDays, analysisToday, constraints, 15),
    [selectedYear, targetDays, analysisToday, constraints],
  );

  useEffect(() => {
    if (plannerMode !== "target") return;
    trackEvent("holiday_reverse_use", {
      year: selectedYear,
      target_days: targetDays,
      result_found: Boolean(targetResult.best),
    });
  }, [plannerMode, selectedYear, targetDays, targetResult.best]);

  const rawAlternatives = useMemo(
    () => topAlternativePlans(selectedYear, Math.min(Math.max(ptoBudget, 1), 15), style, analysisToday, portfolio.plans, constraints, 16),
    [selectedYear, ptoBudget, style, analysisToday, portfolio.plans, constraints],
  );
  const samePeriodAlternatives = rawAlternatives.filter((plan) => portfolio.plans.some((picked) => overlaps(plan, picked))).slice(0, 4);
  const otherAlternatives = rawAlternatives.filter((plan) => !portfolio.plans.some((picked) => overlaps(plan, picked))).slice(0, 4);
  const freeBreaks = useMemo(() => freeLongWeekends(selectedYear, analysisToday, constraints), [selectedYear, analysisToday, constraints]);
  const nextHoliday = useMemo(() => (today ? getNextHoliday(today) : null), [today]);
  const remainingPto = Math.max(0, ptoBudget - portfolio.usedPto);
  const styleLabel = STYLE_OPTIONS.find((item) => item.id === style)?.title ?? "효율 최우선";
  const naturalBreakDays = Math.max(0, portfolio.totalBreakDays - portfolio.usedPto);
  const activePlans = plannerMode === "budget" ? portfolio.plans : targetResult.best ? [targetResult.best] : [];

  const updateYear = (year: number) => {
    setSelectedYear(year);
    trackEvent("holiday_year_select", { year });
  };

  const updateBudget = (value: number) => {
    const next = Math.min(15, Math.max(0, value));
    setPtoBudget(next);
    trackEvent("holiday_pto_budget", { year: selectedYear, pto_budget: next });
  };

  const updateTarget = (value: number) => {
    const next = Math.min(30, Math.max(3, value));
    setTargetDays(next);
    trackEvent("holiday_target_days", { year: selectedYear, target_days: next });
  };

  const updateStyle = (next: HolidayStyle) => {
    setStyle(next);
    trackEvent("holiday_style_select", { year: selectedYear, style: next });
  };

  const savedState = {
    plannerMode,
    year: selectedYear,
    ptoBudget,
    targetDays,
    style,
    companyDaysOff,
    blockedPtoDays,
    companionBlockedPtoDays,
  };

  const shareText = plannerMode === "budget"
    ? portfolio.plans.length > 0
      ? `🍯 ${selectedYear} 연차 최적화 · ${styleLabel}\n원래 쉬는 날 ${naturalBreakDays}일 + 연차 ${portfolio.usedPto}일 → 총 ${portfolio.totalBreakDays}일의 연휴 구간\n${portfolio.plans.slice(0, 3).map((plan, index) => `${index + 1}. ${formatRange(plan)} · 연차 ${plan.ptoDays.length}일 → ${plan.totalDays}일`).join("\n")}`
      : `🍯 ${selectedYear} 꿀연휴 플래너`
    : targetResult.best
      ? `🍯 ${selectedYear} ${targetDays}일 쉬기 역산\n최소 연차 ${targetResult.best.ptoDays.length}일 → ${targetResult.best.totalDays}일 연속 휴식\n${formatRange(targetResult.best)}\n추천 연차: ${ptoText(targetResult.best)}`
      : `🍯 ${selectedYear} ${targetDays}일 휴가 역산`;

  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#191f28]">
      <div className="mx-auto w-full max-w-6xl px-5 pb-28 pt-10 sm:px-8 sm:pt-14 lg:pb-14">
        <Link href="/" className="text-sm font-semibold text-slate-500 hover:text-slate-900">← 몇이지? 홈</Link>

        <header className="mt-7 grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div>
            <p className="text-sm font-bold text-amber-700">날짜 · 휴가</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl"><span aria-hidden="true">🍯 </span>꿀연휴 플래너</h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
              남은 연차를 어디에 써야 할지, 또는 원하는 만큼 쉬려면 최소 연차가 몇 일 필요한지 역산해요. 회사 일정과 동행인이 연차를 못 쓰는 날까지 피해서 같이 쉴 수 있는 조합을 찾습니다.
            </p>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <p className="text-xs font-semibold text-amber-800">다음 빨간날</p>
            {nextHoliday ? (
              <>
                <div className="mt-2 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-lg font-bold text-slate-950">{nextHoliday.names.join(" · ")}</p>
                    <p className="mt-1 text-sm text-slate-500">{formatFullDate(nextHoliday.date)}</p>
                  </div>
                  <p className="text-3xl font-bold text-amber-700">{nextHoliday.dday === 0 ? "D-DAY" : `D-${nextHoliday.dday}`}</p>
                </div>
                {nextHoliday.bridge ? <p className="mt-3 text-xs font-semibold leading-5 text-amber-900">연차 {nextHoliday.bridge.ptoDays.length}일을 붙이면 최대 {nextHoliday.bridge.totalDays}일 연속 휴식</p> : null}
              </>
            ) : <div className="mt-3 h-14 animate-pulse rounded-xl bg-amber-100" />}
          </div>
        </header>

        <Link href="/holiday-tracker/2027" className="mt-7 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-blue-200 bg-blue-50 px-5 py-4 transition hover:border-blue-300 hover:bg-blue-100/70">
          <div>
            <p className="text-xs font-bold text-blue-700">2027 공식 월력요항 반영</p>
            <p className="mt-1 text-sm font-semibold text-slate-800">추석 연차 2일 → 9일 휴가 · 주5일제 기준 3일 이상 연휴 10번</p>
          </div>
          <span className="text-sm font-bold text-blue-700">2027 상세 보기 →</span>
        </Link>

        <section className="mt-7 rounded-3xl border border-slate-200 bg-white p-5 sm:p-7">
          <div className="grid gap-2 rounded-2xl bg-slate-100 p-1 sm:grid-cols-2">
            <button type="button" onClick={() => { setPlannerMode("budget"); trackEvent("holiday_planner_mode", { mode: "budget" }); }} aria-pressed={plannerMode === "budget"} className={`min-h-11 rounded-xl px-4 py-3 text-sm font-bold transition focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-100 ${plannerMode === "budget" ? "bg-white text-slate-950 shadow-sm" : "text-slate-500"}`}>
              남은 연차로 최적화
            </button>
            <button type="button" onClick={() => { setPlannerMode("target"); trackEvent("holiday_planner_mode", { mode: "target" }); }} aria-pressed={plannerMode === "target"} className={`min-h-11 rounded-xl px-4 py-3 text-sm font-bold transition focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-100 ${plannerMode === "target" ? "bg-white text-violet-700 shadow-sm" : "text-slate-500"}`}>
              원하는 휴가 길이 역산
            </button>
          </div>

          <div className={`mt-7 grid gap-7 ${plannerMode === "budget" ? "lg:grid-cols-3" : "lg:grid-cols-2"}`}>
            <div>
              <p className="text-sm font-bold text-slate-900">어느 해를 볼까요?</p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {[2026, 2027].map((year) => (
                  <button key={year} type="button" onClick={() => updateYear(year)} aria-pressed={selectedYear === year} className={`rounded-xl border px-4 py-3 text-sm font-semibold transition ${selectedYear === year ? "border-blue-600 bg-blue-50 text-blue-700" : "border-slate-200 text-slate-600 hover:bg-slate-50"}`}>
                    {year}년
                  </button>
                ))}
              </div>
              {selectedYear === 2026 ? <p className="mt-2 text-xs leading-5 text-slate-500">2026년은 오늘 이후의 연휴만 추천해요.</p> : null}
            </div>

            {plannerMode === "budget" ? (
              <>
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-bold text-slate-900">남은 연차</p>
                    <div className="flex items-center gap-1 rounded-xl bg-slate-50 p-1">
                      <button type="button" onClick={() => updateBudget(ptoBudget - 1)} aria-label="남은 연차 1일 줄이기" className="h-11 w-11 rounded-lg text-slate-600 hover:bg-white focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-100">−</button>
                      <span className="min-w-12 text-center text-sm font-bold text-blue-700">{ptoBudget}일</span>
                      <button type="button" onClick={() => updateBudget(ptoBudget + 1)} aria-label="남은 연차 1일 늘리기" className="h-11 w-11 rounded-lg text-slate-600 hover:bg-white focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-100">＋</button>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {PTO_QUICK.map((days) => <button key={days} type="button" onClick={() => updateBudget(days)} aria-pressed={ptoBudget === days} className={`min-h-11 rounded-full border px-3 py-1.5 text-xs font-semibold transition focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-100 ${ptoBudget === days ? "border-blue-600 bg-blue-600 text-white" : "border-slate-200 text-slate-500 hover:bg-slate-50"}`}>{days}일</button>)}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-900">어떻게 쉬고 싶어요?</p>
                  <div className="mt-3 space-y-2">
                    {STYLE_OPTIONS.map((option) => (
                      <button key={option.id} type="button" onClick={() => updateStyle(option.id)} aria-pressed={style === option.id} className={`flex min-h-11 w-full items-center gap-3 rounded-xl border px-3.5 py-2.5 text-left transition focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-100 ${style === option.id ? "border-amber-400 bg-amber-50" : "border-slate-200 hover:bg-slate-50"}`}>
                        <span>{option.icon}</span>
                        <span className="min-w-0"><span className="block text-sm font-bold text-slate-900">{option.title}</span><span className="block text-xs text-slate-500">{option.description}</span></span>
                      </button>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div>
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-bold text-slate-900">몇 일 연속 쉬고 싶어요?</p>
                    <p className="mt-1 text-xs text-slate-500">그 휴가를 만들기 위한 최소 연차를 역산해요.</p>
                  </div>
                  <div className="flex items-center gap-1 rounded-xl bg-violet-50 p-1">
                    <button type="button" onClick={() => updateTarget(targetDays - 1)} aria-label="원하는 휴가 길이 1일 줄이기" className="h-11 w-11 rounded-lg text-violet-700 hover:bg-white focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-100">−</button>
                    <span className="min-w-12 text-center text-sm font-bold text-violet-700">{targetDays}일</span>
                    <button type="button" onClick={() => updateTarget(targetDays + 1)} aria-label="원하는 휴가 길이 1일 늘리기" className="h-11 w-11 rounded-lg text-violet-700 hover:bg-white focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-100">＋</button>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {TARGET_QUICK.map((days) => <button key={days} type="button" onClick={() => updateTarget(days)} aria-pressed={targetDays === days} className={`min-h-11 rounded-full border px-3 py-1.5 text-xs font-semibold transition focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-100 ${targetDays === days ? "border-violet-600 bg-violet-600 text-white" : "border-slate-200 text-slate-500 hover:bg-slate-50"}`}>{days}일</button>)}
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 border-t border-slate-100 pt-5">
            <button
              type="button"
              onClick={() => {
                const next = !scheduleOpen;
                setScheduleOpen(next);
                if (next) trackEvent("holiday_schedule_open", { year: selectedYear, planner_mode: plannerMode });
              }}
              className="flex min-h-11 w-full items-center justify-between gap-4 text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-100"
              aria-expanded={scheduleOpen}
              aria-controls="holiday-schedule-calendar"
            >
              <div>
                <p className="text-sm font-bold text-slate-900">＋ 우리 일정까지 맞춰보기</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">회사 휴무와 나·동행인의 불가일을 달력에서 여러 날짜 한 번에 골라요.</p>
              </div>
              <span className="text-sm font-bold text-blue-600">{scheduleOpen ? "접기 ↑" : "달력 열기"}</span>
            </button>

            {scheduleOpen ? (
              <div id="holiday-schedule-calendar" className="mt-5">
                <HolidayScheduleCalendar
                  year={selectedYear}
                  companyDaysOff={companyDaysOff}
                  blockedPtoDays={blockedPtoDays}
                  companionBlockedPtoDays={companionBlockedPtoDays}
                  onCompanyDaysOffChange={setCompanyDaysOff}
                  onBlockedPtoDaysChange={setBlockedPtoDays}
                  onCompanionBlockedPtoDaysChange={setCompanionBlockedPtoDays}
                />
              </div>
            ) : null}
          </div>
        </section>

        {plannerMode === "budget" ? (
          <section id="holiday-result-budget" className="mt-7 scroll-mt-24 overflow-hidden rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-orange-50 p-5 sm:p-8">
            <p className="text-xs font-bold text-amber-700">몇이지? 추천 연차 포트폴리오</p>
            {portfolio.plans.length > 0 ? (
              <>
                <div className="mt-3 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">연차 {portfolio.usedPto}일을 연결해 <span className="text-amber-700">총 {portfolio.totalBreakDays}일</span>의 연휴 구간 확보</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">원래 쉬는 날 {naturalBreakDays}일 + 사용할 연차 {portfolio.usedPto}일이에요. {styleLabel} 기준으로 서로 겹치지 않는 {portfolio.plans.length}개 연휴를 골랐어요. {remainingPto > 0 ? `연차 ${remainingPto}일은 남겨둡니다.` : "선택한 연차 예산 안에서 배분했어요."}</p>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="rounded-xl bg-white px-3 py-3 ring-1 ring-amber-100"><p className="text-xs text-slate-500">원래 휴일</p><p className="mt-1 font-bold">{naturalBreakDays}일</p></div>
                    <div className="rounded-xl bg-white px-3 py-3 ring-1 ring-amber-100"><p className="text-xs text-slate-500">사용 연차</p><p className="mt-1 font-bold">{portfolio.usedPto}일</p></div>
                    <div className="rounded-xl bg-white px-3 py-3 ring-1 ring-amber-100"><p className="text-xs text-slate-500">남은 연차</p><p className="mt-1 font-bold">{remainingPto}일</p></div>
                  </div>
                </div>

                <ResultActionBar calculatorPath="/holiday-tracker" shareTitle={`${selectedYear} 꿀연휴 플래너`} shareText={shareText} image={{ eyebrow: `몇이지? · ${selectedYear} 꿀연휴`, title: `연차 ${portfolio.usedPto}일 → 연휴 구간 ${portfolio.totalBreakDays}일`, tone: "amber", filename: `myeotiji-${selectedYear}-holiday-plan.png`, lines: portfolio.plans.slice(0, 4).map((plan, index) => ({ label: `추천 ${index + 1} · 연차 ${plan.ptoDays.length}일`, value: `${formatShortDate(plan.start)} ~ ${formatShortDate(plan.end)} · ${plan.totalDays}일`, strong: index === 0 })), caption: `원래 쉬는 날 ${naturalBreakDays}일에 연차 ${portfolio.usedPto}일을 연결한 결과입니다.` }}>
                  <CalendarDownloadMenu year={selectedYear} plans={portfolio.plans} />
                  <SaveCalculationButton title={`${selectedYear} 연차 ${ptoBudget}일 · ${styleLabel}`} href="/holiday-tracker" primaryValue={`연차 ${portfolio.usedPto}일 → 연휴 ${portfolio.totalBreakDays}일`} summary={`${portfolio.plans.length}개 연휴 조합 · 원래 휴일 ${naturalBreakDays}일`} state={savedState} />
                </ResultActionBar>
              </>
            ) : <div className="mt-3 rounded-2xl bg-white p-5 text-sm text-slate-500 ring-1 ring-amber-100">조건에 맞는 연휴를 찾지 못했어요. 연차 개수를 늘리거나 회사·동행인 불가일을 줄여보세요.</div>}
          </section>
        ) : (
          <section id="holiday-result-target" className="mt-7 scroll-mt-24 overflow-hidden rounded-3xl border border-violet-200 bg-gradient-to-br from-violet-50 via-white to-blue-50 p-5 sm:p-8">
            <p className="text-xs font-bold text-violet-700">몇이지? 휴가 마지노선 역산</p>
            {targetResult.best ? (
              <>
                <div className="mt-3 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight sm:text-3xl"><span className="text-violet-700">{targetDays}일 이상</span> 쉬려면 최소 연차 {targetResult.best.ptoDays.length}일</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">가장 적은 연차로 조건을 만족하는 첫 번째 조합은 {formatRange(targetResult.best)}이에요. 실제로는 {targetResult.best.totalDays}일 연속 쉴 수 있어요.</p>
                    <p className="mt-2 text-xs font-semibold text-slate-500">{compositionText(targetResult.best, companyDaysOff)}</p>
                  </div>
                  <div className="rounded-2xl bg-white px-5 py-4 text-center ring-1 ring-violet-100">
                    <p className="text-xs font-semibold text-slate-500">필요 최소 연차</p>
                    <p className="mt-1 text-3xl font-bold text-violet-700">{targetResult.best.ptoDays.length}일</p>
                  </div>
                </div>
                <ResultActionBar calculatorPath="/holiday-tracker" shareTitle={`${selectedYear} ${targetDays}일 휴가 역산`} shareText={shareText} image={{ eyebrow: `몇이지? · ${selectedYear} 휴가 역산`, title: `${targetDays}일 쉬려면 연차가 몇 일이지?`, tone: "violet", filename: `myeotiji-${selectedYear}-${targetDays}day-holiday.png`, lines: [ { label: "필요 최소 연차", value: `${targetResult.best.ptoDays.length}일`, strong: true }, { label: "추천 기간", value: formatRange(targetResult.best) }, { label: "실제 연속 휴식", value: `${targetResult.best.totalDays}일`, strong: true }, { label: "추천 연차", value: ptoText(targetResult.best) } ], caption: compositionText(targetResult.best, companyDaysOff) }}>
                  <CalendarDownloadMenu year={selectedYear} plans={[targetResult.best!]} />
                  <SaveCalculationButton title={`${selectedYear} ${targetDays}일 휴가 역산`} href="/holiday-tracker" primaryValue={`최소 연차 ${targetResult.best.ptoDays.length}일`} summary={`${formatRange(targetResult.best)} · 실제 ${targetResult.best.totalDays}일 휴식`} state={savedState} />
                </ResultActionBar>
              </>
            ) : <div className="mt-3 rounded-2xl bg-white p-5 text-sm text-slate-500 ring-1 ring-violet-100">연차 15일 안에서는 조건을 만족하는 조합을 찾지 못했어요. 원하는 휴가 길이를 줄이거나 회사·동행인 불가일을 조정해보세요.</div>}
          </section>
        )}

        {plannerMode === "budget" && portfolio.plans.length > 0 ? (
          <section className="mt-8">
            <div className="mb-4"><h2 className="text-2xl font-bold">이렇게 나눠 쓰세요</h2><p className="mt-2 text-sm text-slate-500">각 카드에서 달력을 펼쳐 정확한 날짜를 확인할 수 있어요.</p></div>
            <div className="space-y-4">{portfolio.plans.map((plan, index) => <PlanCard key={planKey(plan)} plan={plan} index={index} companyDaysOff={companyDaysOff} defaultExpanded={index === 0} />)}</div>
          </section>
        ) : null}

        {plannerMode === "target" && targetResult.best ? (
          <section className="mt-8">
            <div className="mb-4"><h2 className="text-2xl font-bold">추천 날짜 검산</h2><p className="mt-2 text-sm text-slate-500">주말·공휴일·회사휴무·연차가 어떻게 이어지는지 직접 확인해보세요.</p></div>
            <PlanCard plan={targetResult.best} companyDaysOff={companyDaysOff} defaultExpanded badge="최소 연차" />
            {targetResult.alternatives.length > 0 ? (
              <div className="mt-8"><h2 className="text-xl font-bold">같은 목표, 다른 날짜</h2><div className="mt-4 grid gap-3 sm:grid-cols-2">{targetResult.alternatives.slice(0, 4).map((plan) => <div key={planKey(plan)} className="rounded-2xl border border-slate-200 bg-white p-5"><p className="font-bold text-slate-900">{formatRange(plan)}</p><p className="mt-2 text-xs leading-5 text-slate-500">연차 {plan.ptoDays.length}일 · 실제 {plan.totalDays}일 휴식</p><p className="mt-2 text-xs font-semibold text-slate-500">{compositionText(plan, companyDaysOff)}</p></div>)}</div></div>
            ) : null}
          </section>
        ) : null}

        {freeBreaks.length > 0 ? (
          <section className="mt-10"><h2 className="text-xl font-bold">연차 없이도 챙길 연휴</h2><p className="mt-2 text-sm text-slate-500">연차를 쓰지 않아도 3일 이상 이어지는 기간이에요.</p><div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{freeBreaks.map((plan) => <div key={planKey(plan)} className="rounded-2xl border border-slate-200 bg-white p-4"><p className="text-sm font-bold text-slate-900">{formatRange(plan)}</p><p className="mt-2 text-2xl font-bold text-emerald-600">{plan.totalDays}일</p><p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-500">{plan.holidayNames.join(" · ")}</p></div>)}</div></section>
        ) : null}

        {plannerMode === "budget" && samePeriodAlternatives.length > 0 ? (
          <section className="mt-10"><h2 className="text-xl font-bold">같은 연휴, 다른 연차 방법</h2><p className="mt-2 text-sm text-slate-500">추천 연차 날짜가 어렵다면 같은 연휴를 다른 방식으로 붙여보세요.</p><div className="mt-4 grid gap-3 sm:grid-cols-2">{samePeriodAlternatives.map((plan) => <div key={planKey(plan)} className="rounded-2xl border border-slate-200 bg-white p-5"><div className="flex items-start justify-between gap-4"><div><p className="font-bold text-slate-900">{formatRange(plan)}</p><p className="mt-2 text-xs leading-5 text-slate-500">연차 {plan.ptoDays.length}일 · {ptoText(plan)}</p></div><span className="shrink-0 rounded-full bg-amber-50 px-3 py-1 text-sm font-bold text-amber-700">{plan.totalDays}일</span></div></div>)}</div></section>
        ) : null}

        {plannerMode === "budget" && otherAlternatives.length > 0 ? (
          <section className="mt-10"><h2 className="text-xl font-bold">다른 시기 추천</h2><p className="mt-2 text-sm text-slate-500">회사 일정 때문에 추천일을 쓰기 어렵다면 다른 달 후보도 확인해보세요.</p><div className="mt-4 grid gap-3 sm:grid-cols-2">{otherAlternatives.map((plan) => <div key={planKey(plan)} className="rounded-2xl border border-slate-200 bg-white p-5"><div className="flex items-start justify-between gap-4"><div><p className="font-bold text-slate-900">{formatRange(plan)}</p><p className="mt-2 text-xs leading-5 text-slate-500">연차 {plan.ptoDays.length}일 · {ptoText(plan)}</p></div><span className="shrink-0 rounded-full bg-amber-50 px-3 py-1 text-sm font-bold text-amber-700">{plan.totalDays}일</span></div></div>)}</div></section>
        ) : null}

        <section className="mt-10">
          <div className="flex flex-wrap items-end justify-between gap-3"><div><h2 className="text-xl font-bold">2027 황금연휴 미리보기</h2><p className="mt-2 text-sm text-slate-500">검색 많이 하는 연차 조합부터 바로 확인해보세요.</p></div><Link href="/holiday-tracker/2027" className="text-sm font-bold text-blue-600 hover:text-blue-700">2027 전체 가이드 →</Link></div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{[["/holiday-tracker/2027/chuseok", "추석", "연차 2일 → 9일"], ["/holiday-tracker/2027/pto-1", "연차 1일", "최대 6일"], ["/holiday-tracker/2027/pto-2", "연차 2일", "최대 9일"]].map(([href, title, sub]) => <Link key={href} href={href} className="rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-amber-300 hover:bg-amber-50/30"><p className="font-bold text-slate-900">{title}</p><p className="mt-1 text-xs text-slate-500">{sub}</p></Link>)}</div>
        </section>

        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-5"><div><h2 className="font-bold text-slate-900">계산 기준과 공식 자료</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">주5일 근무를 기본으로 공휴일·대체공휴일·토·일요일을 쉬는 날로 계산합니다. 회사 추가 휴무일은 쉬는 날로 더하고, 나 또는 동행인이 연차를 못 쓰는 날이 추천 연차 날짜에 포함되는 조합은 제외합니다. 2026년은 오늘 이전 날짜를 추천에서 제외하고, 2027년은 우주항공청이 2026년 6월 29일 발표한 「2027년 월력요항」을 기준으로 확인했습니다.</p></div><div className="flex flex-col gap-2 text-sm font-semibold"><a href="https://www.kasa.go.kr/prog/plcyBrf/brief/kor/sub01_01_04/view.do?plcyBrfNo=431" target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-700">2027 월력요항 ↗<span className="sr-only"> (새 창)</span></a><a href="https://www.kasa.go.kr/prog/bbsArticle/BBSMSTR_000000000010/view.do?bbsId=BBSMSTR_000000000010&nttId=B000000001860Pe2zT3" target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-700">2026 월력요항 ↗<span className="sr-only"> (새 창)</span></a></div></div>
        </section>

        <RelatedCalculators currentHref="/holiday-tracker" />
        <AccessibleResultStatus
          signature={`${plannerMode}|${selectedYear}|${ptoBudget}|${targetDays}|${style}|${companyDaysOff.join(",")}|${blockedPtoDays.join(",")}|${companionBlockedPtoDays.join(",")}`}
          message={plannerMode === "budget"
            ? portfolio.plans.length > 0
              ? `계산 결과가 업데이트되었습니다. 연차 ${portfolio.usedPto}일을 연결해 총 ${portfolio.totalBreakDays}일의 연휴 구간을 확보합니다.`
              : "계산 결과가 업데이트되었습니다. 현재 조건에 맞는 연휴를 찾지 못했습니다."
            : targetResult.best
              ? `계산 결과가 업데이트되었습니다. ${targetDays}일 이상 쉬려면 최소 연차 ${targetResult.best.ptoDays.length}일이 필요합니다.`
              : "계산 결과가 업데이트되었습니다. 현재 조건에서는 원하는 휴가 길이를 만들 수 없습니다."}
        />
      </div>

      {plannerMode === "budget" && portfolio.plans.length > 0 ? (
        <StickyResultBar
          calculator="holiday_tracker"
          label="추천 연차 포트폴리오"
          value={`연차 ${portfolio.usedPto}일 → 총 ${portfolio.totalBreakDays}일`}
          targetId="holiday-result-budget"
          tone="amber"
        />
      ) : plannerMode === "target" && targetResult.best ? (
        <StickyResultBar
          calculator="holiday_tracker"
          label={`${targetDays}일 휴가 마지노선`}
          value={`최소 연차 ${targetResult.best.ptoDays.length}일`}
          targetId="holiday-result-target"
          tone="violet"
        />
      ) : null}
    </main>
  );
}

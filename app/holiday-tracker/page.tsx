"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import RelatedCalculators from "../_components/RelatedCalculators";
import ResultActionBar from "../_components/ResultActionBar";
import SaveCalculationButton from "../_components/SaveCalculationButton";
import { trackEvent } from "../_lib/analytics";
import { consumeCalculationTransfer } from "../_lib/calculationTransfer";
import {
  addDays,
  buildHolidayMapsAround,
  efficiencyText,
  formatFullDate,
  formatRange,
  formatShortDate,
  freeLongWeekends,
  getNextHoliday,
  optimizePortfolio,
  planKey,
  startOfDay,
  toKey,
  topAlternativePlans,
  type BreakPlan,
  type HolidayStyle,
} from "../_lib/holidayEngine";

const STYLE_OPTIONS: { id: HolidayStyle; title: string; description: string; icon: string }[] = [
  { id: "long", title: "한 번 길게", description: "가장 긴 휴가를 우선", icon: "✈️" },
  { id: "efficient", title: "효율 최우선", description: "연차 1일의 효과를 크게", icon: "🍯" },
  { id: "frequent", title: "자주 쉬기", description: "4~6일 연휴를 여러 번", icon: "🏖️" },
];

const PTO_QUICK = [0, 1, 2, 3, 5, 7, 10, 15];
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

function MiniMonthCalendar({ year, month, plan }: { year: number; month: number; plan: BreakPlan }) {
  const labels = ["일", "월", "화", "수", "목", "금", "토"];
  const firstDay = new Date(year, month - 1, 1);
  const firstWeekday = firstDay.getDay();
  const daysInMonth = new Date(year, month, 0).getDate();
  const holidays = buildHolidayMapsAround(year);
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
          <div key={label} className={`pb-2 text-center text-[11px] font-semibold ${index === 0 ? "text-rose-500" : index === 6 ? "text-blue-500" : "text-slate-400"}`}>
            {label}
          </div>
        ))}
        {cells.map((day, index) => {
          if (day === null) return <div key={`empty-${index}`} className="aspect-square" />;
          const date = new Date(year, month - 1, day);
          const key = toKey(date);
          const isHoliday = holidays.has(key);
          const isPto = ptoKeys.has(key);
          const inPlan = key >= startKey && key <= endKey;
          let cls = "text-slate-700";
          if (inPlan) cls = "bg-amber-100 font-semibold text-amber-950";
          if (isHoliday) cls = "bg-rose-100 font-bold text-rose-700";
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

function PlanCalendar({ plan }: { plan: BreakPlan }) {
  const months = getPlanMonths(plan);
  return (
    <div className="mt-5 border-t border-slate-200 pt-5">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <p className="text-xs font-bold text-slate-500">한눈에 보는 달력</p>
        <div className="flex flex-wrap gap-3 text-[10px] font-semibold">
          <span className="text-amber-700">■ 연휴 기간</span>
          <span className="text-rose-600">■ 공휴일</span>
          <span className="text-blue-600">■ 추천 연차</span>
        </div>
      </div>
      <div className={`grid gap-3 ${months.length > 1 ? "sm:grid-cols-2" : "grid-cols-1"}`}>
        {months.map(({ year, month }) => <MiniMonthCalendar key={`${year}-${month}`} year={year} month={month} plan={plan} />)}
      </div>
    </div>
  );
}

function ptoText(plan: BreakPlan) {
  if (plan.ptoDays.length === 0) return "연차 필요 없음";
  return plan.ptoDays.map(formatShortDate).join(", ");
}

function escapeIcs(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/,/g, "\\,").replace(/;/g, "\\;");
}

function icsDate(date: Date) {
  return `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, "0")}${String(date.getDate()).padStart(2, "0")}`;
}

function downloadPortfolioIcs(year: number, plans: BreakPlan[]) {
  if (plans.length === 0) return;
  const events = plans.map((plan, index) => {
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

  const ics = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//myeotiji.kr//Holiday Engine//KO", "CALSCALE:GREGORIAN", ...events, "END:VCALENDAR"].join("\r\n");
  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `myeotiji-${year}-holiday-plan.ics`;
  link.click();
  URL.revokeObjectURL(url);
  trackEvent("holiday_calendar_add", { year, plan_count: plans.length });
}

function overlaps(a: BreakPlan, b: BreakPlan) {
  return Math.max(a.start.getTime(), b.start.getTime()) <= Math.min(a.end.getTime(), b.end.getTime());
}

export default function HolidayTrackerPage() {
  const [today, setToday] = useState<Date | null>(null);
  const [selectedYear, setSelectedYear] = useState(2027);
  const [ptoBudget, setPtoBudget] = useState(7);
  const [style, setStyle] = useState<HolidayStyle>("efficient");

  useEffect(() => {
    const now = startOfDay(new Date());
    setToday(now);
    const transferred = consumeCalculationTransfer("/holiday-tracker");
    if (!transferred) return;
    if (typeof transferred.year === "number" && [2026, 2027].includes(transferred.year)) setSelectedYear(transferred.year);
    if (typeof transferred.ptoBudget === "number") setPtoBudget(Math.min(15, Math.max(0, transferred.ptoBudget)));
    if (transferred.style === "long" || transferred.style === "efficient" || transferred.style === "frequent") setStyle(transferred.style);
  }, []);

  const analysisToday = selectedYear === 2026 ? today : null;
  const portfolio = useMemo(
    () => optimizePortfolio(
      selectedYear,
      ptoBudget,
      style,
      analysisToday,
      style === "long" ? 3 : Math.min(10, Math.max(5, Math.ceil(ptoBudget / 1.5))),
    ),
    [selectedYear, ptoBudget, style, analysisToday],
  );
  const alternatives = useMemo(
    () => topAlternativePlans(selectedYear, Math.min(Math.max(ptoBudget, 1), 15), style, analysisToday, portfolio.plans).filter((plan) => !portfolio.plans.some((picked) => overlaps(plan, picked))).slice(0, 4),
    [selectedYear, ptoBudget, style, analysisToday, portfolio.plans],
  );
  const freeBreaks = useMemo(() => freeLongWeekends(selectedYear, analysisToday), [selectedYear, analysisToday]);
  const nextHoliday = useMemo(() => (today ? getNextHoliday(today) : null), [today]);
  const bestPlan = portfolio.plans[0] ?? null;
  const remainingPto = Math.max(0, ptoBudget - portfolio.usedPto);
  const styleLabel = STYLE_OPTIONS.find((item) => item.id === style)?.title ?? "효율 최우선";

  const updateYear = (year: number) => {
    setSelectedYear(year);
    trackEvent("holiday_year_select", { year });
  };

  const updateBudget = (value: number) => {
    const next = Math.min(15, Math.max(0, value));
    setPtoBudget(next);
    trackEvent("holiday_pto_budget", { year: selectedYear, pto_budget: next });
  };

  const updateStyle = (next: HolidayStyle) => {
    setStyle(next);
    trackEvent("holiday_style_select", { year: selectedYear, style: next });
  };

  const shareText = portfolio.plans.length > 0
    ? `🍯 ${selectedYear} 연차 최적화 · ${styleLabel}\n남은 연차 ${ptoBudget}일 중 ${portfolio.usedPto}일 사용 → ${portfolio.totalBreakDays}일의 긴 휴식 구간\n${portfolio.plans.slice(0, 3).map((plan, index) => `${index + 1}. ${formatRange(plan)} · 연차 ${plan.ptoDays.length}일 → ${plan.totalDays}일`).join("\n")}`
    : `🍯 ${selectedYear} 꿀연휴 플래너`;

  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#191f28]">
      <div className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
        <Link href="/" className="text-sm font-semibold text-slate-500 hover:text-slate-900">← 몇이지? 홈</Link>

        <header className="mt-7 grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div>
            <p className="text-sm font-bold text-amber-700">날짜 · 휴가</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl">🍯 꿀연휴 플래너</h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
              남은 연차를 몇 번의 휴가에 나눠 쓰면 좋을지 계산해요. 한 번 길게, 연차 효율, 자주 쉬기 중 원하는 스타일을 고르면 서로 겹치지 않는 연휴 조합을 찾아드립니다.
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
                {nextHoliday.bridge ? (
                  <p className="mt-3 text-xs font-semibold leading-5 text-amber-900">연차 {nextHoliday.bridge.ptoDays.length}일을 붙이면 최대 {nextHoliday.bridge.totalDays}일 연속 휴식</p>
                ) : null}
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
          <div className="grid gap-7 lg:grid-cols-3">
            <div>
              <p className="text-sm font-bold text-slate-900">어느 해를 볼까요?</p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {[2026, 2027].map((year) => (
                  <button key={year} type="button" onClick={() => updateYear(year)} className={`rounded-xl border px-4 py-3 text-sm font-semibold transition ${selectedYear === year ? "border-blue-600 bg-blue-50 text-blue-700" : "border-slate-200 text-slate-600 hover:bg-slate-50"}`}>
                    {year}년
                  </button>
                ))}
              </div>
              {selectedYear === 2026 ? <p className="mt-2 text-xs leading-5 text-slate-400">2026년은 오늘 이후의 연휴만 추천해요.</p> : null}
            </div>

            <div>
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-bold text-slate-900">남은 연차</p>
                <div className="flex items-center gap-1 rounded-xl bg-slate-50 p-1">
                  <button type="button" onClick={() => updateBudget(ptoBudget - 1)} className="h-8 w-8 rounded-lg text-slate-600 hover:bg-white">−</button>
                  <span className="min-w-12 text-center text-sm font-bold text-blue-700">{ptoBudget}일</span>
                  <button type="button" onClick={() => updateBudget(ptoBudget + 1)} className="h-8 w-8 rounded-lg text-slate-600 hover:bg-white">＋</button>
                </div>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {PTO_QUICK.map((days) => (
                  <button key={days} type="button" onClick={() => updateBudget(days)} className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${ptoBudget === days ? "border-blue-600 bg-blue-600 text-white" : "border-slate-200 text-slate-500 hover:bg-slate-50"}`}>
                    {days}일
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-bold text-slate-900">어떻게 쉬고 싶어요?</p>
              <div className="mt-3 space-y-2">
                {STYLE_OPTIONS.map((option) => (
                  <button key={option.id} type="button" onClick={() => updateStyle(option.id)} className={`flex w-full items-center gap-3 rounded-xl border px-3.5 py-2.5 text-left transition ${style === option.id ? "border-amber-400 bg-amber-50" : "border-slate-200 hover:bg-slate-50"}`}>
                    <span>{option.icon}</span>
                    <span className="min-w-0">
                      <span className="block text-sm font-bold text-slate-900">{option.title}</span>
                      <span className="block text-xs text-slate-500">{option.description}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-7 overflow-hidden rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-orange-50 p-5 sm:p-8">
          <p className="text-xs font-bold text-amber-700">몇이지? 추천 연차 포트폴리오</p>
          {portfolio.plans.length > 0 ? (
            <>
              <div className="mt-3 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                    연차 {portfolio.usedPto}일로 <span className="text-amber-700">{portfolio.totalBreakDays}일</span>의 긴 휴식 구간
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {styleLabel} 기준으로 서로 겹치지 않는 {portfolio.plans.length}개의 연휴를 골랐어요. {remainingPto > 0 ? `연차 ${remainingPto}일은 남겨둡니다.` : "선택한 연차 예산 안에서 배분했어요."}
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="rounded-xl bg-white px-3 py-3 ring-1 ring-amber-100"><p className="text-[10px] text-slate-400">사용 연차</p><p className="mt-1 font-bold">{portfolio.usedPto}일</p></div>
                  <div className="rounded-xl bg-white px-3 py-3 ring-1 ring-amber-100"><p className="text-[10px] text-slate-400">연휴 묶음</p><p className="mt-1 font-bold">{portfolio.plans.length}개</p></div>
                  <div className="rounded-xl bg-white px-3 py-3 ring-1 ring-amber-100"><p className="text-[10px] text-slate-400">남은 연차</p><p className="mt-1 font-bold">{remainingPto}일</p></div>
                </div>
              </div>

              <ResultActionBar
                calculatorPath="/holiday-tracker"
                shareTitle={`${selectedYear} 꿀연휴 플래너`}
                shareText={shareText}
                image={{
                  eyebrow: `몇이지? · ${selectedYear} 꿀연휴`,
                  title: `연차 ${portfolio.usedPto}일 → 긴 휴식 ${portfolio.totalBreakDays}일`,
                  tone: "amber",
                  filename: `myeotiji-${selectedYear}-holiday-plan.png`,
                  lines: portfolio.plans.slice(0, 4).map((plan, index) => ({ label: `추천 ${index + 1} · 연차 ${plan.ptoDays.length}일`, value: `${formatShortDate(plan.start)} ~ ${formatShortDate(plan.end)} · ${plan.totalDays}일`, strong: index === 0 })),
                  caption: "공휴일·주말과 선택한 연차 예산을 기준으로 겹치지 않는 추천 조합을 계산했습니다.",
                }}
              >
                <button type="button" onClick={() => downloadPortfolioIcs(selectedYear, portfolio.plans)} className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                  📅 캘린더
                </button>
                <SaveCalculationButton
                  title={`${selectedYear} 연차 ${ptoBudget}일 · ${styleLabel}`}
                  href="/holiday-tracker"
                  primaryValue={`연차 ${portfolio.usedPto}일 → 휴식 ${portfolio.totalBreakDays}일`}
                  summary={`${portfolio.plans.length}개 연휴 조합 · ${styleLabel}`}
                  state={{ year: selectedYear, ptoBudget, style }}
                />
              </ResultActionBar>
            </>
          ) : (
            <div className="mt-3 rounded-2xl bg-white p-5 text-sm text-slate-500 ring-1 ring-amber-100">조건에 맞는 연휴를 찾지 못했어요. 연차 개수를 늘리거나 다른 연도를 골라보세요.</div>
          )}
        </section>

        {portfolio.plans.length > 0 ? (
          <section className="mt-8">
            <div className="mb-4">
              <h2 className="text-2xl font-bold">이렇게 나눠 쓰세요</h2>
              <p className="mt-2 text-sm text-slate-500">추천 순서가 아니라 실제 날짜 순서예요. 첫 번째 카드에는 달력까지 펼쳐 보여드려요.</p>
            </div>
            <div className="space-y-4">
              {portfolio.plans.map((plan, index) => (
                <article key={planKey(plan)} className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-7">
                  <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-start">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-bold text-amber-800">#{index + 1}</span>
                        <span className="text-xs font-semibold text-slate-400">{plan.holidayNames.join(" · ")}</span>
                      </div>
                      <h3 className="mt-3 text-xl font-bold text-slate-950 sm:text-2xl">{formatRange(plan)}</h3>
                      <p className="mt-2 text-sm text-slate-600">추천 연차: <strong className="text-blue-700">{ptoText(plan)}</strong></p>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-center sm:min-w-60">
                      <div className="rounded-xl bg-slate-50 px-3 py-3"><p className="text-[10px] text-slate-400">연속 휴식</p><p className="mt-1 text-lg font-bold text-slate-950">{plan.totalDays}일</p></div>
                      <div className="rounded-xl bg-blue-50 px-3 py-3"><p className="text-[10px] text-blue-500">연차 효율</p><p className="mt-1 text-sm font-bold text-blue-700">{efficiencyText(plan)}</p></div>
                    </div>
                  </div>
                  {index === 0 ? <PlanCalendar plan={plan} /> : null}
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {freeBreaks.length > 0 ? (
          <section className="mt-10">
            <h2 className="text-xl font-bold">연차 없이도 챙길 연휴</h2>
            <p className="mt-2 text-sm text-slate-500">연차를 쓰지 않아도 3일 이상 이어지는 기간이에요.</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {freeBreaks.map((plan) => (
                <div key={planKey(plan)} className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-sm font-bold text-slate-900">{formatRange(plan)}</p>
                  <p className="mt-2 text-2xl font-bold text-emerald-600">{plan.totalDays}일</p>
                  <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-500">{plan.holidayNames.join(" · ")}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {alternatives.length > 0 ? (
          <section className="mt-10">
            <h2 className="text-xl font-bold">다른 좋은 조합</h2>
            <p className="mt-2 text-sm text-slate-500">회사 일정 때문에 추천일을 쓰기 어렵다면 이 후보도 확인해보세요.</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {alternatives.map((plan) => (
                <div key={planKey(plan)} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-bold text-slate-900">{formatRange(plan)}</p>
                      <p className="mt-2 text-xs leading-5 text-slate-500">연차 {plan.ptoDays.length}일 · {ptoText(plan)}</p>
                    </div>
                    <span className="shrink-0 rounded-full bg-amber-50 px-3 py-1 text-sm font-bold text-amber-700">{plan.totalDays}일</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <section className="mt-10">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-xl font-bold">2027 황금연휴 미리보기</h2>
              <p className="mt-2 text-sm text-slate-500">검색 많이 하는 연차 조합부터 바로 확인해보세요.</p>
            </div>
            <Link href="/holiday-tracker/2027" className="text-sm font-bold text-blue-600 hover:text-blue-700">2027 전체 가이드 →</Link>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["/holiday-tracker/2027/chuseok", "추석", "연차 2일 → 9일"],
              ["/holiday-tracker/2027/pto-1", "연차 1일", "최대 6일"],
              ["/holiday-tracker/2027/pto-2", "연차 2일", "최대 9일"],
            ].map(([href, title, sub]) => (
              <Link key={href} href={href} className="rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-amber-300 hover:bg-amber-50/30">
                <p className="font-bold text-slate-900">{title}</p>
                <p className="mt-1 text-xs text-slate-500">{sub}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-5">
            <div>
              <h2 className="font-bold text-slate-900">계산 기준과 공식 자료</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">
                주5일 근무를 기본으로 공휴일·대체공휴일·토·일요일을 쉬는 날로 계산합니다. 2026년은 오늘 이전 날짜를 추천에서 제외하고, 2027년은 우주항공청이 2026년 6월 29일 발표한 「2027년 월력요항」을 기준으로 확인했습니다. 임시공휴일이나 회사별 휴무일은 별도로 반영될 수 있어요.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-sm font-semibold">
              <a href="https://www.kasa.go.kr/prog/plcyBrf/brief/kor/sub01_01_04/view.do?plcyBrfNo=431" target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-700">2027 월력요항 →</a>
              <a href="https://www.kasa.go.kr/prog/bbsArticle/BBSMSTR_000000000010/view.do?bbsId=BBSMSTR_000000000010&nttId=B000000001860Pe2zT3" target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-700">2026 월력요항 →</a>
            </div>
          </div>
        </section>

        <RelatedCalculators currentHref="/holiday-tracker" />
      </div>
    </main>
  );
}

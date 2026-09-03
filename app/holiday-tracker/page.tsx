"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import KoreanLunarCalendar from "korean-lunar-calendar";
import RelatedCalculators from "../_components/RelatedCalculators";
import ResultShareButton from "../_components/ResultShareButton";

type Holiday = {
  date: string;
  name: string;
};

type BreakPlan = {
  start: Date;
  end: Date;
  totalDays: number;
  ptoDays: Date[];
  holidayNames: string[];
};

type YearAnalysis = {
  year: number;
  plans: BreakPlan[];
  best: BreakPlan | null;
};

const DAY_MS = 24 * 60 * 60 * 1000;

function pad(value: number) {
  return String(value).padStart(2, "0");
}

function toKey(date: Date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
    date.getDate()
  )}`;
}

function fromYMD(year: number, month: number, day: number) {
  return new Date(year, month - 1, day);
}

function addDays(date: Date, amount: number) {
  const next = new Date(date);
  next.setDate(next.getDate() + amount);
  return next;
}

function daysBetweenInclusive(start: Date, end: Date) {
  const s = Date.UTC(start.getFullYear(), start.getMonth(), start.getDate());
  const e = Date.UTC(end.getFullYear(), end.getMonth(), end.getDate());
  return Math.floor((e - s) / DAY_MS) + 1;
}

function isWeekend(date: Date) {
  const day = date.getDay();
  return day === 0 || day === 6;
}

function formatShortDate(date: Date) {
  const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
  return `${date.getMonth() + 1}/${date.getDate()}(${weekdays[date.getDay()]})`;
}

function formatRange(plan: BreakPlan) {
  return `${formatShortDate(plan.start)} ~ ${formatShortDate(plan.end)}`;
}

function lunarToSolar(year: number, month: number, day: number) {
  const calendar = new KoreanLunarCalendar();
  const ok = calendar.setLunarDate(year, month, day, false);

  if (!ok) return null;

  const solar = calendar.getSolarCalendar();
  return fromYMD(solar.year, solar.month, solar.day);
}

function buildHolidayMap(year: number) {
  const baseEvents: Holiday[] = [];

  const addBase = (date: Date, name: string) => {
    baseEvents.push({ date: toKey(date), name });
  };

  // 고정 공휴일 - 현재 2026년 이후 법정 공휴일 기준
  addBase(fromYMD(year, 1, 1), "신정");
  addBase(fromYMD(year, 3, 1), "삼일절");
  addBase(fromYMD(year, 5, 1), "노동절");
  addBase(fromYMD(year, 5, 5), "어린이날");
  addBase(fromYMD(year, 6, 6), "현충일");
  addBase(fromYMD(year, 7, 17), "제헌절");
  addBase(fromYMD(year, 8, 15), "광복절");
  addBase(fromYMD(year, 10, 3), "개천절");
  addBase(fromYMD(year, 10, 9), "한글날");
  addBase(fromYMD(year, 12, 25), "성탄절");

  // 음력 공휴일
  const seollal = lunarToSolar(year, 1, 1);
  if (seollal) {
    addBase(addDays(seollal, -1), "설날 연휴");
    addBase(seollal, "설날");
    addBase(addDays(seollal, 1), "설날 연휴");
  }

  const buddha = lunarToSolar(year, 4, 8);
  if (buddha) {
    addBase(buddha, "부처님오신날");
  }

  const chuseok = lunarToSolar(year, 8, 15);
  if (chuseok) {
    addBase(addDays(chuseok, -1), "추석 연휴");
    addBase(chuseok, "추석");
    addBase(addDays(chuseok, 1), "추석 연휴");
  }

  const map = new Map<string, string[]>();

  for (const event of baseEvents) {
    const names = map.get(event.date) ?? [];
    names.push(event.name);
    map.set(event.date, names);
  }

  const substituteTriggers: { source: string; reason: string }[] = [];

  const weekendSubstituteNames = new Set([
    "삼일절",
    "노동절",
    "어린이날",
    "제헌절",
    "광복절",
    "개천절",
    "한글날",
    "부처님오신날",
    "성탄절",
  ]);

  // 토·일요일과 겹치면 대체공휴일이 생기는 공휴일
  for (const event of baseEvents) {
    if (!weekendSubstituteNames.has(event.name)) continue;

    const [y, m, d] = event.date.split("-").map(Number);
    const date = fromYMD(y, m, d);

    if (isWeekend(date)) {
      substituteTriggers.push({
        source: event.date,
        reason: `${event.name} 대체공휴일`,
      });
    }
  }

  // 설·추석 연휴는 일요일과 겹치는 경우 대체공휴일
  for (const event of baseEvents) {
    if (event.name !== "설날" &&
        event.name !== "설날 연휴" &&
        event.name !== "추석" &&
        event.name !== "추석 연휴") {
      continue;
    }

    const [y, m, d] = event.date.split("-").map(Number);
    const date = fromYMD(y, m, d);

    if (date.getDay() === 0) {
      const group = event.name.startsWith("설") ? "설날" : "추석";
      if (!substituteTriggers.some((item) => item.reason === `${group} 대체공휴일`)) {
        substituteTriggers.push({
          source: event.date,
          reason: `${group} 대체공휴일`,
        });
      }
    }
  }

  // 서로 다른 공휴일이 같은 평일에 겹치는 경우
  for (const [dateKey, names] of map.entries()) {
    if (names.length < 2) continue;

    const [y, m, d] = dateKey.split("-").map(Number);
    const date = fromYMD(y, m, d);

    if (!isWeekend(date)) {
      substituteTriggers.push({
        source: dateKey,
        reason: "공휴일 중복 대체공휴일",
      });
    }
  }

  // 발생한 대체공휴일을 다음 첫 비근무일이 아닌 날로 순서대로 배정
  // 토·일 및 이미 존재하는 공휴일은 건너뜀
  substituteTriggers.sort((a, b) => a.source.localeCompare(b.source));

  for (const trigger of substituteTriggers) {
    const [y, m, d] = trigger.source.split("-").map(Number);
    let candidate = addDays(fromYMD(y, m, d), 1);

    while (true) {
      const key = toKey(candidate);
      if (!isWeekend(candidate) && !map.has(key)) {
        map.set(key, [trigger.reason]);
        break;
      }
      candidate = addDays(candidate, 1);
    }
  }

  return map;
}

function buildHolidayMapsAround(year: number) {
  const merged = new Map<string, string[]>();

  for (const target of [year - 1, year, year + 1]) {
    const map = buildHolidayMap(target);
    for (const [key, names] of map.entries()) {
      const existing = merged.get(key) ?? [];
      merged.set(key, [...existing, ...names]);
    }
  }

  return merged;
}

function findBreakPlans(year: number, maxPto: number) {
  const holidays = buildHolidayMapsAround(year);

  // 연말 → 다음 해 초 연결 연휴도 잡기 위해 1월 7일까지 분석
  const start = fromYMD(year, 1, 1);
  const end = fromYMD(year + 1, 1, 7);

  const dates: Date[] = [];
  let cursor = start;

  while (cursor <= end) {
    dates.push(new Date(cursor));
    cursor = addDays(cursor, 1);
  }

  const isOff = (date: Date) => isWeekend(date) || holidays.has(toKey(date));

  const candidates: BreakPlan[] = [];

  for (let i = 0; i < dates.length; i++) {
    let ptoCount = 0;
    let holidayCount = 0;

    for (let j = i; j < dates.length; j++) {
      const date = dates[j];
      const key = toKey(date);

      if (!isOff(date)) {
        ptoCount += 1;
      }

      if (holidays.has(key)) {
        holidayCount += 1;
      }

      if (ptoCount > maxPto) break;

      const length = j - i + 1;

      // 최소 3일, 공휴일이 실제로 포함된 구간만 추천
      if (length >= 3 && holidayCount >= 1) {
        const ptoDays = dates
          .slice(i, j + 1)
          .filter((item) => !isOff(item))
          .map((item) => new Date(item));

        const holidayNames = Array.from(
          new Set(
            dates
              .slice(i, j + 1)
              .flatMap((item) => holidays.get(toKey(item)) ?? [])
          )
        );

        candidates.push({
          start: new Date(dates[i]),
          end: new Date(dates[j]),
          totalDays: length,
          ptoDays,
          holidayNames,
        });
      }
    }
  }

  // 구간 시작/끝이 근무일인데 굳이 연차로 끼워 넣은 비효율적 후보를 줄이기 위해
  // 같은 연차 수에서 더 길거나 동일한 구간을 우선 정렬
  candidates.sort((a, b) => {
    if (b.totalDays !== a.totalDays) return b.totalDays - a.totalDays;
    if (a.ptoDays.length !== b.ptoDays.length)
      return a.ptoDays.length - b.ptoDays.length;
    return a.start.getTime() - b.start.getTime();
  });

  const selected: BreakPlan[] = [];

  for (const plan of candidates) {
    const overlapsTooMuch = selected.some((picked) => {
      const latestStart = Math.max(plan.start.getTime(), picked.start.getTime());
      const earliestEnd = Math.min(plan.end.getTime(), picked.end.getTime());
      const overlap =
        latestStart <= earliestEnd
          ? Math.floor((earliestEnd - latestStart) / DAY_MS) + 1
          : 0;

      return overlap >= Math.min(plan.totalDays, picked.totalDays) * 0.6;
    });

    if (!overlapsTooMuch) {
      selected.push(plan);
    }

    if (selected.length >= 5) break;
  }

  return selected;
}

function analyzeYears(startYear: number, yearCount: number, maxPto: number) {
  const years: YearAnalysis[] = [];

  for (let year = startYear; year < startYear + yearCount; year++) {
    const plans = findBreakPlans(year, maxPto);
    years.push({
      year,
      plans,
      best: plans[0] ?? null,
    });
  }

  return years;
}

function efficiencyLabel(plan: BreakPlan) {
  if (plan.ptoDays.length === 0) return "연차 없이";
  return `연차 ${plan.ptoDays.length}일로`;
}

function honeyBadge(plan: BreakPlan | null) {
  if (!plan) return "보통";
  if (plan.totalDays >= 8 && plan.ptoDays.length <= 2) return "🔥 역대급";
  if (plan.totalDays >= 6 && plan.ptoDays.length <= 2) return "🍯 꿀연휴";
  if (plan.totalDays >= 4) return "✨ 괜찮음";
  return "보통";
}

function getPlanMonths(plan: BreakPlan) {
  const months: { year: number; month: number }[] = [];
  let cursor = new Date(plan.start.getFullYear(), plan.start.getMonth(), 1);
  const last = new Date(plan.end.getFullYear(), plan.end.getMonth(), 1);

  while (cursor <= last) {
    months.push({
      year: cursor.getFullYear(),
      month: cursor.getMonth() + 1,
    });
    cursor = new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1);
  }

  return months;
}

function MiniMonthCalendar({
  year,
  month,
  plan,
}: {
  year: number;
  month: number;
  plan: BreakPlan;
}) {
  const weekdayLabels = ["일", "월", "화", "수", "목", "금", "토"];
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

  while (cells.length % 7 !== 0) {
    cells.push(null);
  }

  return (
    <div className="min-w-0 rounded-2xl border border-gray-200 bg-white p-4">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm font-black text-gray-900">
          {year}년 {month}월
        </p>
      </div>

      <div className="grid grid-cols-7">
        {weekdayLabels.map((label, index) => (
          <div
            key={label}
            className={`pb-2 text-center text-[11px] font-bold ${
              index === 0
                ? "text-rose-500"
                : index === 6
                  ? "text-blue-500"
                  : "text-gray-400"
            }`}
          >
            {label}
          </div>
        ))}

        {cells.map((day, index) => {
          if (day === null) {
            return <div key={`empty-${index}`} className="aspect-square" />;
          }

          const date = fromYMD(year, month, day);
          const key = toKey(date);
          const weekday = date.getDay();
          const holidayNames = holidays.get(key) ?? [];
          const isHoliday = holidayNames.length > 0;
          const isPto = ptoKeys.has(key);
          const inPlan = key >= startKey && key <= endKey;

          let cellClass =
            "text-gray-700 hover:bg-gray-50";

          if (inPlan) {
            cellClass = "bg-amber-100 font-bold text-amber-900";
          }

          if (isHoliday) {
            cellClass = "bg-rose-100 font-black text-rose-700";
          }

          if (isPto) {
            cellClass = "bg-blue-600 font-black text-white";
          }

          if (!inPlan && !isHoliday && !isPto && weekday === 0) {
            cellClass = "text-rose-500";
          }

          if (!inPlan && !isHoliday && !isPto && weekday === 6) {
            cellClass = "text-blue-500";
          }

          const titleParts = [];
          if (holidayNames.length > 0) {
            titleParts.push(holidayNames.join(" · "));
          }
          if (isPto) {
            titleParts.push("연차 추천");
          }
          if (inPlan && !isHoliday && !isPto) {
            titleParts.push(isWeekend(date) ? "주말" : "추천 연휴 기간");
          }

          return (
            <div
              key={key}
              className="flex aspect-square items-center justify-center p-0.5"
            >
              <div
                title={titleParts.join(" / ") || undefined}
                className={`flex h-full w-full items-center justify-center rounded-lg text-xs transition ${cellClass}`}
              >
                {day}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PlanCalendars({
  plan,
  compact = false,
}: {
  plan: BreakPlan;
  compact?: boolean;
}) {
  const months = getPlanMonths(plan);

  return (
    <div
      className={`border-t border-gray-200 ${
        compact ? "mt-4 pt-4" : "mt-5 pt-5"
      }`}
    >
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <p className="text-xs font-black tracking-wider text-gray-500">
          한눈에 보는 달력
        </p>

        <div
          className={`flex flex-wrap gap-x-3 gap-y-1 font-semibold ${
            compact ? "text-[10px]" : "text-[11px]"
          }`}
        >
          <span className="inline-flex items-center gap-1.5 text-amber-700">
            <span className="h-2.5 w-2.5 rounded-sm bg-amber-100 ring-1 ring-amber-200" />
            연휴 기간
          </span>
          <span className="inline-flex items-center gap-1.5 text-rose-600">
            <span className="h-2.5 w-2.5 rounded-sm bg-rose-100 ring-1 ring-rose-200" />
            공휴일
          </span>
          <span className="inline-flex items-center gap-1.5 text-blue-600">
            <span className="h-2.5 w-2.5 rounded-sm bg-blue-600" />
            연차 추천
          </span>
        </div>
      </div>

      <div
        className={`grid gap-3 ${
          compact
            ? "grid-cols-1"
            : months.length > 1
              ? "sm:grid-cols-2"
              : "grid-cols-1"
        }`}
      >
        {months.map(({ year, month }) => (
          <MiniMonthCalendar
            key={`${year}-${month}`}
            year={year}
            month={month}
            plan={plan}
          />
        ))}
      </div>
    </div>
  );
}

export default function HolidayTrackerPage() {
  const currentYear = new Date().getFullYear();
  const [yearCount, setYearCount] = useState(10);
  const [maxPto, setMaxPto] = useState(2);

  const analyses = useMemo(
    () => analyzeYears(currentYear, yearCount, maxPto),
    [currentYear, yearCount, maxPto]
  );

  const ranking = useMemo(() => {
    return [...analyses].sort((a, b) => {
      if (!a.best && !b.best) return a.year - b.year;
      if (!a.best) return 1;
      if (!b.best) return -1;

      if (b.best.totalDays !== a.best.totalDays)
        return b.best.totalDays - a.best.totalDays;

      if (a.best.ptoDays.length !== b.best.ptoDays.length)
        return a.best.ptoDays.length - b.best.ptoDays.length;

      return a.year - b.year;
    });
  }, [analyses]);

  const topYears = ranking.slice(0, 3);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <div className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
        <div className="mb-8">
          <Link
            href="/"
            className="mb-5 inline-flex text-sm font-medium text-gray-500 transition hover:text-gray-900"
          >
            ← 몇이지? 홈
          </Link>

          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="mb-2 text-sm font-bold text-blue-600">
                날짜 · 휴가
              </p>
              <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
                🍯 꿀연휴 추적기
              </h1>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-gray-500 sm:text-base">
                앞으로 어떤 해가 쉬기 좋은지 한 번에 확인해 보세요.
                공휴일과 주말을 분석해 연차 1~2일로 길게 쉴 수 있는 기간을
                찾고, 추천 결과를 작은 달력으로 바로 보여드려요.
              </p>
            </div>

            <div className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-600 shadow-sm ring-1 ring-gray-200">
              현재 법정 공휴일 기준
            </div>
          </div>
        </div>

        <Link
          href="/holiday-tracker/2027"
          className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-amber-200 bg-amber-50 p-5 transition hover:border-amber-300 hover:bg-amber-100/70 sm:p-6"
        >
          <div>
            <p className="text-xs font-black tracking-wider text-amber-700">2027 미리보기</p>
            <p className="mt-1 text-lg font-black text-gray-900">추석에 연차 2일 쓰면 9일 연휴 🍯</p>
            <p className="mt-1 text-sm text-gray-600">2027 황금연휴만 빠르게 정리한 전용 페이지를 만들었어요.</p>
          </div>
          <span className="shrink-0 text-sm font-black text-amber-800">2027 바로보기 →</span>
        </Link>

        <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-8">
          <div className="grid gap-7 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-bold">몇 년까지 볼까요?</p>
              <div className="flex gap-2">
                {[5, 10, 15].map((count) => (
                  <button
                    key={count}
                    type="button"
                    onClick={() => setYearCount(count)}
                    className={`flex-1 rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                      yearCount === count
                        ? "border-blue-600 bg-blue-50 text-blue-700"
                        : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    앞으로 {count}년
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm font-bold">연차를 최대 며칠 쓸까요?</p>
              <div className="flex gap-2">
                {[0, 1, 2].map((days) => (
                  <button
                    key={days}
                    type="button"
                    onClick={() => setMaxPto(days)}
                    className={`flex-1 rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                      maxPto === days
                        ? "border-blue-600 bg-blue-50 text-blue-700"
                        : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {days === 0 ? "연차 없이" : `최대 ${days}일`}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {topYears.length > 0 && (
          <section className="mt-6">
            <div className="mb-4">
              <h2 className="text-xl font-black">🏆 앞으로 가장 좋은 해</h2>
              <p className="mt-1 text-sm text-gray-500">
                선택한 연차 조건에서 가장 길게 쉴 수 있는 해를 먼저 보여줘요.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {topYears.map((item, index) => (
                <div
                  key={item.year}
                  className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-black text-blue-600">
                      {index === 0 ? "1위" : `${index + 1}위`}
                    </span>
                    <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700">
                      {honeyBadge(item.best)}
                    </span>
                  </div>

                  <div className="mt-4 text-3xl font-black">
                    {item.year}년
                  </div>

                  {item.best ? (
                    <>
                      <p className="mt-3 text-lg font-bold">
                        {efficiencyLabel(item.best)}{" "}
                        <span className="text-blue-600">
                          {item.best.totalDays}일
                        </span>{" "}
                        휴식
                      </p>
                      <p className="mt-2 text-sm text-gray-500">
                        {formatRange(item.best)}
                      </p>

                      <PlanCalendars plan={item.best} compact />

                      <ResultShareButton
                        title={`${item.year}년 꿀연휴 추천`}
                        calculatorPath="/holiday-tracker"
                        compact
                        text={`🍯 ${item.year}년 꿀연휴 추천
${formatRange(item.best)}
총 ${item.best.totalDays}일 휴식
연차 추천: ${
                          item.best.ptoDays.length === 0
                            ? "필요 없음"
                            : item.best.ptoDays.map(formatShortDate).join(", ")
                        }`}
                      />
                    </>
                  ) : (
                    <p className="mt-3 text-sm text-gray-500">
                      추천 연휴를 찾지 못했어요.
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="mt-10">
          <div className="mb-5">
            <h2 className="text-2xl font-black">연도별 꿀연휴</h2>
            <p className="mt-2 text-sm text-gray-500">
              {currentYear}년부터 {currentYear + yearCount - 1}년까지 비교해요.
            </p>
          </div>

          <div className="space-y-5">
            {analyses.map((item) => (
              <article
                key={item.year}
                className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-8"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-black">{item.year}년</h3>
                    <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700">
                      {honeyBadge(item.best)}
                    </span>
                  </div>

                  {item.best && (
                    <div className="text-sm font-semibold text-gray-500">
                      최장 추천{" "}
                      <span className="font-black text-blue-600">
                        {item.best.totalDays}일
                      </span>
                    </div>
                  )}
                </div>

                {item.plans.length === 0 ? (
                  <div className="mt-5 rounded-2xl bg-gray-50 p-5 text-sm text-gray-500">
                    선택한 조건에서 3일 이상 이어지는 공휴일 연휴를 찾지
                    못했어요.
                  </div>
                ) : (
                  <div className="mt-6 grid gap-4 lg:grid-cols-2">
                    {item.plans.map((plan, index) => (
                      <div
                        key={`${toKey(plan.start)}-${toKey(plan.end)}-${index}`}
                        className="rounded-2xl border border-gray-100 bg-gray-50 p-5"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-lg font-black">
                              {plan.totalDays}일 연휴
                            </p>
                            <p className="mt-1 text-sm font-semibold text-gray-600">
                              {formatRange(plan)}
                            </p>
                          </div>

                          <span
                            className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold ${
                              plan.ptoDays.length === 0
                                ? "bg-green-100 text-green-700"
                                : "bg-blue-100 text-blue-700"
                            }`}
                          >
                            {plan.ptoDays.length === 0
                              ? "연차 0일"
                              : `연차 ${plan.ptoDays.length}일`}
                          </span>
                        </div>

                        <div className="mt-4 space-y-2 text-sm">
                          <div className="flex gap-3">
                            <span className="w-16 shrink-0 text-gray-400">
                              공휴일
                            </span>
                            <span className="font-medium text-gray-700">
                              {plan.holidayNames.join(" · ")}
                            </span>
                          </div>

                          <div className="flex gap-3">
                            <span className="w-16 shrink-0 text-gray-400">
                              연차 추천
                            </span>
                            <span className="font-medium text-gray-700">
                              {plan.ptoDays.length === 0
                                ? "필요 없음"
                                : plan.ptoDays.map(formatShortDate).join(", ")}
                            </span>
                          </div>
                        </div>

                        <PlanCalendars plan={plan} />
                      </div>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-8">
          <h2 className="text-lg font-bold">계산 기준</h2>

          <div className="mt-5 grid gap-4 text-sm leading-6 text-gray-600 md:grid-cols-2">
            <div className="rounded-2xl bg-gray-50 p-5">
              <p className="mb-1 font-bold text-gray-800">주 5일 근무 기준</p>
              <p>
                토요일과 일요일을 쉬는 일반적인 주 5일 근무자를 기준으로
                연휴를 분석해요.
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-5">
              <p className="mb-1 font-bold text-gray-800">대체공휴일 반영</p>
              <p>
                현재 공휴일 규정에 따른 대체공휴일을 계산해 추천 기간에
                반영해요.
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-5">
              <p className="mb-1 font-bold text-gray-800">음력 공휴일 반영</p>
              <p>
                설날·추석·부처님오신날은 음력을 양력으로 변환해 매년 날짜를
                계산해요.
              </p>
            </div>

            <div className="rounded-2xl bg-amber-50 p-5">
              <p className="mb-1 font-bold text-amber-800">미래 일정 주의</p>
              <p className="text-amber-700">
                정부가 추후 지정하는 임시공휴일이나 선거일, 법령 개정은
                아직 반영되지 않을 수 있어요. 미래 연도는 여행·연차 계획용
                예상 정보로 활용해 주세요.
              </p>
            </div>
          </div>
        </section>

        <RelatedCalculators currentHref="/holiday-tracker" />
      </div>
    </main>
  );
}

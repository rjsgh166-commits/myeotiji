"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState, type ChangeEvent } from "react";

const DAY_MS = 24 * 60 * 60 * 1000;

type Mode = "birth" | "couple" | "work" | "military" | "exam" | "weekday";

type DateParts = {
  year: number;
  month: number;
  day: number;
};

type CalendarSpan = {
  years: number;
  months: number;
  days: number;
};

type BirthResultData =
  | { error: string }
  | {
      elapsed: number;
      calendar: CalendarSpan;
      nextMilestone: number;
      milestoneDate: DateParts;
    };

type CoupleResultData =
  | { error: string }
  | {
      dayNumber: number;
      calendar: CalendarSpan;
      upcoming: Array<{ value: number; date: DateParts; remaining: number }>;
    };

type WorkResultData =
  | { error: string }
  | {
      totalDays: number;
      calendar: CalendarSpan;
      nextAnniversary: DateParts;
      anniversaryRemaining: number;
    };

type MilitaryResultData =
  | { error: string }
  | {
      remaining: number;
      calendar: CalendarSpan | null;
      progress: number | null;
      elapsed: number | null;
      total: number | null;
    };

type ExamResultData = {
  remaining: number;
  weeks: number;
  days: number;
};

type WeekdayResultData = {
  date: DateParts;
  weekday: string;
  weekdayIndex: number;
  relativeDays: number;
};

const MODES: Array<{
  id: Mode;
  icon: string;
  label: string;
  shortLabel: string;
  description: string;
}> = [
  {
    id: "birth",
    icon: "🎂",
    label: "태어난 지 며칠이지?",
    shortLabel: "태어난 지",
    description: "내가 태어난 날부터 오늘까지 얼마나 지났는지 확인해요.",
  },
  {
    id: "couple",
    icon: "❤️",
    label: "우리가 만난 지 며칠이지?",
    shortLabel: "우리가 만난 지",
    description: "오늘이 몇 일째인지와 다음 기념일을 확인해요.",
  },
  {
    id: "work",
    icon: "💼",
    label: "입사한 지 얼마나 됐지?",
    shortLabel: "입사한 지",
    description: "입사일부터 오늘까지의 근속기간을 계산해요.",
  },
  {
    id: "military",
    icon: "🪖",
    label: "전역까지 며칠이지?",
    shortLabel: "전역까지",
    description: "전역 D-Day와 복무 진행률을 확인해요.",
  },
  {
    id: "exam",
    icon: "📝",
    label: "시험까지 며칠이지?",
    shortLabel: "시험까지",
    description: "시험일까지 남은 날짜를 주와 일 단위로 확인해요.",
  },
  {
    id: "weekday",
    icon: "📅",
    label: "이 날짜는 무슨 요일이지?",
    shortLabel: "무슨 요일이지?",
    description: "궁금한 날짜가 무슨 요일인지 바로 확인해요.",
  },
];

function pad(value: number) {
  return String(value).padStart(2, "0");
}

function todayISO() {
  const now = new Date();
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
}

function parseISODate(value: string): DateParts | null {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return null;

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);

  if (month < 1 || month > 12 || day < 1 || day > 31) return null;

  const date = new Date(Date.UTC(year, month - 1, day));
  if (
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() + 1 !== month ||
    date.getUTCDate() !== day
  ) {
    return null;
  }

  return { year, month, day };
}

function toUtcMs(date: DateParts) {
  return Date.UTC(date.year, date.month - 1, date.day);
}

function compareDates(a: DateParts, b: DateParts) {
  return Math.sign(toUtcMs(a) - toUtcMs(b));
}

function diffDays(start: DateParts, end: DateParts) {
  return Math.round((toUtcMs(end) - toUtcMs(start)) / DAY_MS);
}

function daysInMonth(year: number, month: number) {
  return new Date(Date.UTC(year, month, 0)).getUTCDate();
}

function addYears(date: DateParts, years: number): DateParts {
  const year = date.year + years;
  return {
    year,
    month: date.month,
    day: Math.min(date.day, daysInMonth(year, date.month)),
  };
}

function addMonths(date: DateParts, months: number): DateParts {
  const zeroBased = date.year * 12 + (date.month - 1) + months;
  const year = Math.floor(zeroBased / 12);
  const month = (zeroBased % 12) + 1;
  return {
    year,
    month,
    day: Math.min(date.day, daysInMonth(year, month)),
  };
}

function addDays(date: DateParts, days: number): DateParts {
  const next = new Date(toUtcMs(date) + days * DAY_MS);
  return {
    year: next.getUTCFullYear(),
    month: next.getUTCMonth() + 1,
    day: next.getUTCDate(),
  };
}

function calendarDifference(start: DateParts, end: DateParts) {
  if (compareDates(start, end) > 0) {
    return { years: 0, months: 0, days: 0 };
  }

  let years = end.year - start.year;
  if (compareDates(addYears(start, years), end) > 0) years -= 1;

  const afterYears = addYears(start, years);
  let months = 0;

  while (months < 11 && compareDates(addMonths(afterYears, months + 1), end) <= 0) {
    months += 1;
  }

  const afterMonths = addMonths(afterYears, months);
  const days = diffDays(afterMonths, end);

  return { years, months, days };
}

function formatKoreanDate(date: DateParts) {
  return `${date.year}년 ${date.month}월 ${date.day}일`;
}

function number(value: number) {
  return value.toLocaleString("ko-KR");
}

function ddayLabel(days: number) {
  if (days === 0) return "D-DAY";
  return days > 0 ? `D-${number(days)}` : `D+${number(Math.abs(days))}`;
}

function weekdayInfo(date: DateParts) {
  const names = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
  const index = new Date(toUtcMs(date)).getUTCDay();
  return { name: names[index], index };
}

function modeFromString(value: string | null): Mode | null {
  if (
    value === "birth" ||
    value === "couple" ||
    value === "work" ||
    value === "military" ||
    value === "exam" ||
    value === "weekday"
  ) {
    return value;
  }
  return null;
}

function fireGaEvent(name: string, params: Record<string, string | number | boolean>) {
  if (typeof window === "undefined") return;

  const gtag = (
    window as Window & {
      gtag?: (...args: unknown[]) => void;
    }
  ).gtag;

  gtag?.("event", name, params);
}

export default function DaysPage() {
  const [mode, setMode] = useState<Mode>("birth");
  const [today, setToday] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [coupleDate, setCoupleDate] = useState("");
  const [workDate, setWorkDate] = useState("");
  const [enlistDate, setEnlistDate] = useState("");
  const [dischargeDate, setDischargeDate] = useState("");
  const [examDate, setExamDate] = useState("");
  const [weekdayDate, setWeekdayDate] = useState("");
  const [shareStatus, setShareStatus] = useState("");
  const trackedModes = useRef<Set<Mode>>(new Set());

  useEffect(() => {
    setToday(todayISO());

    const params = new URLSearchParams(window.location.search);
    const queryMode = modeFromString(params.get("mode"));
    if (!queryMode) return;

    setMode(queryMode);

    const date = params.get("date") ?? "";
    const start = params.get("start") ?? "";

    if (queryMode === "birth") setBirthDate(date);
    if (queryMode === "couple") setCoupleDate(date);
    if (queryMode === "work") setWorkDate(date);
    if (queryMode === "exam") setExamDate(date);
    if (queryMode === "weekday") setWeekdayDate(date);
    if (queryMode === "military") {
      setDischargeDate(date);
      setEnlistDate(start);
    }
  }, []);

  const todayParts = useMemo(() => parseISODate(today), [today]);

  const birthResult = useMemo<BirthResultData | null>(() => {
    const start = parseISODate(birthDate);
    if (!start || !todayParts) return null;
    if (compareDates(start, todayParts) > 0) return { error: "생년월일은 오늘보다 미래일 수 없어요." } as const;

    const elapsed = diffDays(start, todayParts);
    const calendar = calendarDifference(start, todayParts);
    const nextMilestone = (Math.floor(elapsed / 1000) + 1) * 1000;
    const milestoneDate = addDays(start, nextMilestone);

    return { elapsed, calendar, nextMilestone, milestoneDate } as const;
  }, [birthDate, todayParts]);

  const coupleResult = useMemo<CoupleResultData | null>(() => {
    const start = parseISODate(coupleDate);
    if (!start || !todayParts) return null;
    if (compareDates(start, todayParts) > 0) return { error: "처음 만난 날짜는 오늘보다 미래일 수 없어요." } as const;

    const dayNumber = diffDays(start, todayParts) + 1;
    const calendar = calendarDifference(start, todayParts);
    const baseMilestones = [100, 200, 300, 500, 1000, 1500, 2000, 3000, 5000, 10000];
    let milestones = baseMilestones.filter((value) => value >= dayNumber).slice(0, 4);

    if (milestones.length < 4) {
      let next = Math.max(1000, (Math.floor(dayNumber / 1000) + 1) * 1000);
      while (milestones.length < 4) {
        if (!milestones.includes(next)) milestones.push(next);
        next += 1000;
      }
    }

    const upcoming = milestones.map((value) => ({
      value,
      date: addDays(start, value - 1),
      remaining: value - dayNumber,
    }));

    return { dayNumber, calendar, upcoming } as const;
  }, [coupleDate, todayParts]);

  const workResult = useMemo<WorkResultData | null>(() => {
    const start = parseISODate(workDate);
    if (!start || !todayParts) return null;
    if (compareDates(start, todayParts) > 0) return { error: "입사일은 오늘보다 미래일 수 없어요." } as const;

    const totalDays = diffDays(start, todayParts);
    const calendar = calendarDifference(start, todayParts);
    const nextAnniversary = addYears(start, calendar.years + 1);
    const anniversaryRemaining = diffDays(todayParts, nextAnniversary);

    return { totalDays, calendar, nextAnniversary, anniversaryRemaining } as const;
  }, [workDate, todayParts]);

  const militaryResult = useMemo<MilitaryResultData | null>(() => {
    const discharge = parseISODate(dischargeDate);
    if (!discharge || !todayParts) return null;

    const remaining = diffDays(todayParts, discharge);
    const calendar = remaining >= 0 ? calendarDifference(todayParts, discharge) : null;
    const enlist = parseISODate(enlistDate);

    if (enlist && compareDates(enlist, discharge) > 0) {
      return { error: "입대일은 전역일보다 늦을 수 없어요." } as const;
    }

    let progress: number | null = null;
    let elapsed: number | null = null;
    let total: number | null = null;

    if (enlist) {
      total = diffDays(enlist, discharge);
      elapsed = diffDays(enlist, todayParts);

      if (total > 0) {
        progress = Math.max(0, Math.min(100, (elapsed / total) * 100));
      }
    }

    return { remaining, calendar, progress, elapsed, total } as const;
  }, [dischargeDate, enlistDate, todayParts]);

  const examResult = useMemo<ExamResultData | null>(() => {
    const exam = parseISODate(examDate);
    if (!exam || !todayParts) return null;

    const remaining = diffDays(todayParts, exam);
    const absolute = Math.abs(remaining);
    const weeks = Math.floor(absolute / 7);
    const days = absolute % 7;

    return { remaining, weeks, days } as const;
  }, [examDate, todayParts]);

  const weekdayResult = useMemo<WeekdayResultData | null>(() => {
    const date = parseISODate(weekdayDate);
    if (!date || !todayParts) return null;

    const info = weekdayInfo(date);
    return {
      date,
      weekday: info.name,
      weekdayIndex: info.index,
      relativeDays: diffDays(todayParts, date),
    };
  }, [weekdayDate, todayParts]);

  const trackModeUse = (selectedMode: Mode) => {
    if (trackedModes.current.has(selectedMode)) return;
    trackedModes.current.add(selectedMode);

    fireGaEvent("days_calculator_use", {
      calculator_name: "며칠이지?",
      days_mode: selectedMode,
    });
  };

  const selectMode = (nextMode: Mode) => {
    setMode(nextMode);
    setShareStatus("");

    fireGaEvent("days_mode_select", {
      calculator_name: "며칠이지?",
      days_mode: nextMode,
    });
  };

  const shareResult = async () => {
    const params = new URLSearchParams();
    params.set("mode", mode);

    let text = "며칠이지?에서 날짜를 계산해봤어요.";

    if (mode === "birth" && birthDate && birthResult && !("error" in birthResult)) {
      params.set("date", birthDate);
      text = `🎂 태어난 지 ${number(birthResult.elapsed)}일!`;
    } else if (mode === "couple" && coupleDate && coupleResult && !("error" in coupleResult)) {
      params.set("date", coupleDate);
      text = `❤️ 오늘은 우리가 만난 지 ${number(coupleResult.dayNumber)}일째!`;
    } else if (mode === "work" && workDate && workResult && !("error" in workResult)) {
      params.set("date", workDate);
      const c = workResult.calendar;
      text = `💼 입사한 지 ${c.years}년 ${c.months}개월 ${c.days}일!`;
    } else if (mode === "military" && dischargeDate && militaryResult && !("error" in militaryResult)) {
      params.set("date", dischargeDate);
      if (enlistDate) params.set("start", enlistDate);
      text = `🪖 전역 ${ddayLabel(militaryResult.remaining)}`;
    } else if (mode === "exam" && examDate && examResult) {
      params.set("date", examDate);
      text = `📝 시험 ${ddayLabel(examResult.remaining)}`;
    } else if (mode === "weekday" && weekdayDate && weekdayResult) {
      params.set("date", weekdayDate);
      text = `📅 ${formatKoreanDate(weekdayResult.date)}은 ${weekdayResult.weekday}!`;
    } else {
      setShareStatus("먼저 날짜를 입력해 계산 결과를 만들어주세요.");
      return;
    }

    const url = `${window.location.origin}/days?${params.toString()}`;
    const shareText = `${text}\n${url}`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: "며칠이지? | 몇이지?",
          text,
          url,
        });
        setShareStatus("공유했어요.");
      } else if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareText);
        setShareStatus("결과 링크를 복사했어요.");
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = shareText;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        textarea.remove();
        setShareStatus("결과 링크를 복사했어요.");
      }

      fireGaEvent("days_result_share", {
        calculator_name: "며칠이지?",
        days_mode: mode,
      });
    } catch {
      setShareStatus("공유를 취소했거나 복사하지 못했어요.");
    }
  };

  const currentMode = MODES.find((item) => item.id === mode) ?? MODES[0];

  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#191f28]">
      <div className="mx-auto w-full max-w-5xl px-5 py-8 sm:px-8 sm:py-12">
        <div className="mb-6 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-semibold text-gray-500 transition hover:text-gray-900"
          >
            ← 몇이지? 홈
          </Link>
          <span className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-gray-500 shadow-sm ring-1 ring-gray-100">
            날짜 계산기
          </span>
        </div>

        <section className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-gray-200">
          <div className="border-b border-gray-100 px-5 py-7 sm:px-8 sm:py-9">
            <p className="text-sm font-bold text-blue-600">DATE & D-DAY</p>
            <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
              며칠이지?
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
              태어난 날부터 커플 기념일, 입사 근속기간, 전역일, 시험일,
              특정 날짜의 요일까지 한 번에 계산해보세요.
            </p>
          </div>

          <div className="border-b border-gray-100 px-4 py-4 sm:px-7">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
              {MODES.map((item) => {
                const active = item.id === mode;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => selectMode(item.id)}
                    className={`min-h-16 rounded-2xl px-3 py-3 text-left transition ${
                      active
                        ? "bg-blue-600 text-white shadow-sm"
                        : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <div className="text-lg">{item.icon}</div>
                    <div className={`mt-1 text-xs font-bold sm:text-sm ${active ? "text-white" : "text-gray-700"}`}>
                      {item.shortLabel}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b border-gray-100 p-5 sm:p-8 lg:border-b-0 lg:border-r">
              <div className="flex items-start gap-3">
                <div className="text-3xl">{currentMode.icon}</div>
                <div>
                  <h2 className="text-xl font-black">{currentMode.label}</h2>
                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    {currentMode.description}
                  </p>
                </div>
              </div>

              <div className="mt-7">
                {mode === "birth" && (
                  <DateField
                    label="생년월일"
                    value={birthDate}
                    max={today || undefined}
                    onChange={(value) => {
                      setBirthDate(value);
                      if (value) trackModeUse("birth");
                    }}
                  />
                )}

                {mode === "couple" && (
                  <DateField
                    label="처음 만난 날짜"
                    value={coupleDate}
                    max={today || undefined}
                    onChange={(value) => {
                      setCoupleDate(value);
                      if (value) trackModeUse("couple");
                    }}
                  />
                )}

                {mode === "work" && (
                  <DateField
                    label="입사일"
                    value={workDate}
                    max={today || undefined}
                    onChange={(value) => {
                      setWorkDate(value);
                      if (value) trackModeUse("work");
                    }}
                  />
                )}

                {mode === "military" && (
                  <div className="space-y-5">
                    <DateField
                      label="입대일 (선택)"
                      value={enlistDate}
                      onChange={(value) => {
                        setEnlistDate(value);
                        if (value) trackModeUse("military");
                      }}
                    />
                    <DateField
                      label="전역 예정일"
                      value={dischargeDate}
                      onChange={(value) => {
                        setDischargeDate(value);
                        if (value) trackModeUse("military");
                      }}
                    />
                    <p className="text-xs leading-5 text-gray-400">
                      입대일까지 입력하면 전체 복무기간 대비 진행률도 보여드려요.
                    </p>
                  </div>
                )}

                {mode === "exam" && (
                  <DateField
                    label="시험일"
                    value={examDate}
                    onChange={(value) => {
                      setExamDate(value);
                      if (value) trackModeUse("exam");
                    }}
                  />
                )}

                {mode === "weekday" && (
                  <DateField
                    label="궁금한 날짜"
                    value={weekdayDate}
                    onChange={(value) => {
                      setWeekdayDate(value);
                      if (value) trackModeUse("weekday");
                    }}
                  />
                )}
              </div>

              <div className="mt-7 rounded-2xl bg-gray-50 p-4 text-xs leading-5 text-gray-500">
                날짜는 사용 중인 기기의 오늘 날짜를 기준으로 계산해요. 날짜만
                비교하므로 시·분·초는 계산에 포함하지 않습니다.
              </div>
            </div>

            <div className="p-5 sm:p-8">
              <div className="mb-5 flex items-center justify-between gap-3">
                <h2 className="text-sm font-bold text-gray-500">계산 결과</h2>
                <button
                  type="button"
                  onClick={shareResult}
                  className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-xs font-bold text-gray-600 transition hover:border-blue-200 hover:text-blue-600"
                >
                  결과 공유하기
                </button>
              </div>

              {shareStatus && (
                <p className="mb-4 rounded-xl bg-blue-50 px-4 py-3 text-xs font-semibold text-blue-700">
                  {shareStatus}
                </p>
              )}

              {mode === "birth" && <BirthResult result={birthResult} />}
              {mode === "couple" && <CoupleResult result={coupleResult} />}
              {mode === "work" && <WorkResult result={workResult} />}
              {mode === "military" && <MilitaryResult result={militaryResult} />}
              {mode === "exam" && <ExamResult result={examResult} />}
              {mode === "weekday" && <WeekdayResult result={weekdayResult} />}
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <InfoCard
            title="날짜 계산 기준"
            text="태어난 지·근속기간은 시작일에서 오늘까지 경과한 기간을 계산하고, 커플 날짜는 처음 만난 날을 1일째로 계산합니다. 요일은 입력한 날짜 자체를 기준으로 계산합니다."
          />
          <InfoCard
            title="D-Day 계산 기준"
            text="전역일과 시험일이 오늘이면 D-DAY, 미래면 D-N, 이미 지난 날짜라면 D+N으로 표시합니다."
          />
          <InfoCard
            title="중요한 일정은 한 번 더 확인"
            text="공식 전역일, 시험일처럼 중요한 날짜는 소속 기관이나 시험 주관기관의 안내와 함께 확인해주세요."
          />
        </section>

        <section className="mt-10 border-t border-gray-200 pt-8">
          <h2 className="text-lg font-bold">다른 계산기도 확인해보세요</h2>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              ["📅", "만나이", "/age"],
              ["🌙", "음력", "/lunar"],
              ["🍯", "꿀연휴", "/holiday-tracker"],
              ["🏦", "퇴직금", "/retirement"],
            ].map(([icon, title, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-2xl border border-gray-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-sm"
              >
                <div className="text-xl">{icon}</div>
                <div className="mt-3 text-sm font-bold text-gray-800">{title}</div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function DateField({
  label,
  value,
  onChange,
  max,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  max?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-gray-700">{label}</span>
      <input
        type="date"
        value={value}
        max={max}
        onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value)}
        className="min-h-14 w-full rounded-2xl border border-gray-200 bg-white px-4 text-base font-semibold text-gray-900 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
      />
    </label>
  );
}

function EmptyResult({ text = "날짜를 입력하면 바로 계산해드릴게요." }: { text?: string }) {
  return (
    <div className="flex min-h-64 items-center justify-center rounded-2xl bg-gray-50 p-6 text-center">
      <div>
        <div className="text-4xl">🗓️</div>
        <p className="mt-4 text-sm font-semibold text-gray-500">{text}</p>
      </div>
    </div>
  );
}

function ErrorResult({ text }: { text: string }) {
  return (
    <div className="rounded-2xl bg-red-50 p-5 text-sm font-semibold leading-6 text-red-700">
      {text}
    </div>
  );
}

function BigResult({ eyebrow, value, subtitle }: { eyebrow: string; value: string; subtitle?: string }) {
  return (
    <div className="rounded-2xl bg-gray-50 p-6">
      <p className="text-sm font-bold text-gray-500">{eyebrow}</p>
      <p className="mt-2 break-words text-4xl font-black tracking-tight text-gray-950 sm:text-5xl">
        {value}
      </p>
      {subtitle && <p className="mt-3 text-sm leading-6 text-gray-500">{subtitle}</p>}
    </div>
  );
}

function BirthResult({ result }: { result: BirthResultData | null }) {
  if (!result) return <EmptyResult />;
  if ("error" in result) return <ErrorResult text={result.error} />;

  return (
    <div className="space-y-4">
      <BigResult
        eyebrow="태어난 지"
        value={`${number(result.elapsed)}일`}
        subtitle={`${result.calendar.years}년 ${result.calendar.months}개월 ${result.calendar.days}일이 지났어요.`}
      />
      <div className="rounded-2xl border border-gray-200 p-5">
        <p className="text-sm font-bold">다음 천 일 기념일 🎉</p>
        <p className="mt-2 text-2xl font-black">{number(result.nextMilestone)}일</p>
        <p className="mt-1 text-sm text-gray-500">{formatKoreanDate(result.milestoneDate)}</p>
      </div>
    </div>
  );
}

function CoupleResult({ result }: { result: CoupleResultData | null }) {
  if (!result) return <EmptyResult />;
  if ("error" in result) return <ErrorResult text={result.error} />;

  return (
    <div className="space-y-4">
      <BigResult
        eyebrow="오늘은 우리가 만난 지"
        value={`${number(result.dayNumber)}일째 ❤️`}
        subtitle={`${result.calendar.years}년 ${result.calendar.months}개월 ${result.calendar.days}일을 함께했어요.`}
      />
      <div className="rounded-2xl border border-gray-200 p-5">
        <p className="text-sm font-bold">다가오는 기념일</p>
        <div className="mt-4 space-y-3">
          {result.upcoming.map((item) => (
            <div key={item.value} className="flex items-center justify-between gap-3 text-sm">
              <div>
                <span className="font-bold text-gray-900">{number(item.value)}일</span>
                <span className="ml-2 text-gray-400">{formatKoreanDate(item.date)}</span>
              </div>
              <span className="shrink-0 font-semibold text-blue-600">
                {item.remaining === 0 ? "오늘" : `${number(item.remaining)}일 후`}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WorkResult({ result }: { result: WorkResultData | null }) {
  if (!result) return <EmptyResult />;
  if ("error" in result) return <ErrorResult text={result.error} />;

  return (
    <div className="space-y-4">
      <BigResult
        eyebrow="현재 근속기간"
        value={`${result.calendar.years}년 ${result.calendar.months}개월`}
        subtitle={`${result.calendar.days}일 · 입사 후 총 ${number(result.totalDays)}일이 지났어요.`}
      />
      <div className="rounded-2xl border border-gray-200 p-5">
        <p className="text-sm font-bold">다음 입사 기념일</p>
        <p className="mt-2 text-xl font-black">{formatKoreanDate(result.nextAnniversary)}</p>
        <p className="mt-1 text-sm text-gray-500">{number(result.anniversaryRemaining)}일 남았어요.</p>
      </div>
      <Link
        href="/retirement"
        className="flex items-center justify-between rounded-2xl bg-blue-50 p-5 text-sm font-bold text-blue-700 transition hover:bg-blue-100"
      >
        근속기간을 확인했으니 퇴직금도 계산해볼까요?
        <span>→</span>
      </Link>
    </div>
  );
}

function MilitaryResult({ result }: { result: MilitaryResultData | null }) {
  if (!result) return <EmptyResult text="전역 예정일을 입력하면 D-Day를 계산해드릴게요." />;
  if ("error" in result) return <ErrorResult text={result.error} />;

  const remainingText =
    result.remaining > 0
      ? `${result.calendar?.years ? `${result.calendar.years}년 ` : ""}${result.calendar?.months ?? 0}개월 ${result.calendar?.days ?? 0}일 남았어요.`
      : result.remaining === 0
        ? "오늘이 전역일이에요. 🎉"
        : `전역한 지 ${number(Math.abs(result.remaining))}일 지났어요.`;

  return (
    <div className="space-y-4">
      <BigResult eyebrow="전역까지" value={ddayLabel(result.remaining)} subtitle={remainingText} />

      {result.progress !== null && result.total !== null && result.elapsed !== null && (
        <div className="rounded-2xl border border-gray-200 p-5">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-bold">복무 진행률</p>
            <p className="text-lg font-black text-blue-600">{result.progress.toFixed(1)}%</p>
          </div>
          <div className="mt-4 h-3 overflow-hidden rounded-full bg-gray-100">
            <div
              className="h-full rounded-full bg-blue-600 transition-all"
              style={{ width: `${result.progress}%` }}
            />
          </div>
          <p className="mt-3 text-xs text-gray-400">
            전체 {number(result.total)}일 중 약 {number(Math.min(result.total, Math.max(0, result.elapsed)))}일 경과
          </p>
        </div>
      )}
    </div>
  );
}

function ExamResult({ result }: { result: ExamResultData | null }) {
  if (!result) return <EmptyResult text="시험일을 입력하면 D-Day를 계산해드릴게요." />;

  const subtitle =
    result.remaining > 0
      ? `${number(result.weeks)}주 ${result.days}일 남았습니다. 오늘부터 시험 전날까지 매일 공부하면 ${number(result.remaining)}번의 공부할 기회가 있어요.`
      : result.remaining === 0
        ? "오늘이 시험일이에요. 준비한 만큼 잘 보고 오세요."
        : `시험일로부터 ${number(Math.abs(result.remaining))}일 지났어요.`;

  return (
    <div className="space-y-4">
      <BigResult eyebrow="시험까지" value={ddayLabel(result.remaining)} subtitle={subtitle} />
      {result.remaining > 0 && (
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-gray-200 p-5 text-center">
            <p className="text-xs font-bold text-gray-400">주 단위</p>
            <p className="mt-2 text-2xl font-black">{number(result.weeks)}주</p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-5 text-center">
            <p className="text-xs font-bold text-gray-400">남은 일수</p>
            <p className="mt-2 text-2xl font-black">{number(result.remaining)}일</p>
          </div>
        </div>
      )}
    </div>
  );
}

function WeekdayResult({ result }: { result: WeekdayResultData | null }) {
  if (!result) return <EmptyResult text="날짜를 입력하면 무슨 요일인지 알려드릴게요." />;

  const isWeekend = result.weekdayIndex === 0 || result.weekdayIndex === 6;
  const relativeText =
    result.relativeDays === 0
      ? "오늘 날짜예요."
      : result.relativeDays > 0
        ? `오늘로부터 ${number(result.relativeDays)}일 후예요.`
        : `오늘보다 ${number(Math.abs(result.relativeDays))}일 전이에요.`;

  return (
    <div className="space-y-4">
      <BigResult
        eyebrow={formatKoreanDate(result.date)}
        value={result.weekday}
        subtitle={`${relativeText} ${isWeekend ? "주말에 해당해요." : "평일에 해당해요."}`}
      />

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-2xl border border-gray-200 p-5 text-center">
          <p className="text-xs font-bold text-gray-400">구분</p>
          <p className="mt-2 text-2xl font-black">{isWeekend ? "주말" : "평일"}</p>
        </div>
        <div className="rounded-2xl border border-gray-200 p-5 text-center">
          <p className="text-xs font-bold text-gray-400">오늘과 차이</p>
          <p className="mt-2 text-2xl font-black">
            {result.relativeDays === 0
              ? "오늘"
              : `${number(Math.abs(result.relativeDays))}일`}
          </p>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
      <h2 className="text-sm font-bold text-gray-900">{title}</h2>
      <p className="mt-2 text-xs leading-5 text-gray-500">{text}</p>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import KoreanLunarCalendar from "korean-lunar-calendar";
import RelatedCalculators from "../_components/RelatedCalculators";

type Mode = "solar-to-lunar" | "lunar-to-solar";

function pad(value: number) {
  return String(value).padStart(2, "0");
}

function solarWeekday(year: number, month: number, day: number) {
  const names = ["일", "월", "화", "수", "목", "금", "토"];
  const index = new Date(Date.UTC(year, month - 1, day)).getUTCDay();
  return names[index];
}

function formatSolarDate(year: number, month: number, day: number) {
  return `${year}.${pad(month)}.${pad(day)} (${solarWeekday(
    year,
    month,
    day,
  )})`;
}

function ModeButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex-1 rounded-xl border px-4 py-3 text-sm font-semibold transition ${
        active
          ? "border-blue-600 bg-blue-50 text-blue-700"
          : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
      }`}
    >
      {children}
    </button>
  );
}

function ToggleButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex-1 rounded-xl border px-4 py-3 text-sm font-semibold transition ${
        active
          ? "border-blue-600 bg-blue-50 text-blue-700"
          : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
      }`}
    >
      {children}
    </button>
  );
}

function DateInput({
  year,
  month,
  day,
  setYear,
  setMonth,
  setDay,
}: {
  year: string;
  month: string;
  day: string;
  setYear: (value: string) => void;
  setMonth: (value: string) => void;
  setDay: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <input
        type="text"
        inputMode="numeric"
        maxLength={4}
        value={year}
        onChange={(e) =>
          setYear(e.target.value.replace(/\D/g, "").slice(0, 4))
        }
        placeholder="2026"
        className="h-14 w-24 rounded-xl border border-gray-200 px-3 text-center text-lg font-semibold outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
      />
      <span className="text-sm text-gray-500">년</span>

      <input
        type="text"
        inputMode="numeric"
        maxLength={2}
        value={month}
        onChange={(e) =>
          setMonth(e.target.value.replace(/\D/g, "").slice(0, 2))
        }
        placeholder="09"
        className="h-14 w-16 rounded-xl border border-gray-200 px-2 text-center text-lg font-semibold outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
      />
      <span className="text-sm text-gray-500">월</span>

      <input
        type="text"
        inputMode="numeric"
        maxLength={2}
        value={day}
        onChange={(e) =>
          setDay(e.target.value.replace(/\D/g, "").slice(0, 2))
        }
        placeholder="02"
        className="h-14 w-16 rounded-xl border border-gray-200 px-2 text-center text-lg font-semibold outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
      />
      <span className="text-sm text-gray-500">일</span>
    </div>
  );
}

function ResultRow({
  label,
  value,
  emphasized = false,
}: {
  label: string;
  value: string;
  emphasized?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between gap-4 py-3 ${
        emphasized ? "text-base font-bold" : "text-sm"
      }`}
    >
      <span className={emphasized ? "text-gray-900" : "text-gray-500"}>
        {label}
      </span>
      <span
        className={
          emphasized ? "text-gray-950" : "font-semibold text-gray-800"
        }
      >
        {value}
      </span>
    </div>
  );
}

export default function LunarPage() {
  const [mode, setMode] = useState<Mode>("solar-to-lunar");

  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [isLeapMonth, setIsLeapMonth] = useState(false);

  useEffect(() => {
    const today = new Date();
    setYear(String(today.getFullYear()));
    setMonth(pad(today.getMonth() + 1));
    setDay(pad(today.getDate()));
  }, []);

  const result = useMemo(() => {
    const y = Number(year);
    const m = Number(month);
    const d = Number(day);

    if (!y || !m || !d) {
      return {
        valid: false,
        primary: "-",
        inputText: "-",
        outputText: "-",
        leapText: "-",
        gapja: "-",
        chineseGapja: "-",
        error: "날짜를 입력해 주세요.",
      };
    }

    const calendar = new KoreanLunarCalendar();

    if (mode === "solar-to-lunar") {
      const ok = calendar.setSolarDate(y, m, d);

      if (!ok) {
        return {
          valid: false,
          primary: "-",
          inputText: "-",
          outputText: "-",
          leapText: "-",
          gapja: "-",
          chineseGapja: "-",
          error: "변환할 수 없는 날짜예요. 날짜와 지원 범위를 확인해 주세요.",
        };
      }

      const lunar = calendar.getLunarCalendar();
      const gapja = calendar.getKoreanGapja();
      const chinese = calendar.getChineseGapja();

      const lunarText = `${lunar.year}.${pad(lunar.month)}.${pad(
        lunar.day
      )}${lunar.intercalation ? " (윤달)" : ""}`;

      return {
        valid: true,
        primary: lunarText,
        inputText: `${y}.${pad(m)}.${pad(d)} (양력)`,
        outputText: `${lunarText} (음력)`,
        leapText: lunar.intercalation ? "윤달" : "평달",
        gapja: `${gapja.year} ${gapja.month} ${gapja.day}`,
        chineseGapja: `${chinese.year} ${chinese.month} ${chinese.day}`,
        error: "",
      };
    }

    const ok = calendar.setLunarDate(y, m, d, isLeapMonth);

    if (!ok) {
      return {
        valid: false,
        primary: "-",
        inputText: "-",
        outputText: "-",
        leapText: isLeapMonth ? "윤달 선택" : "평달 선택",
        gapja: "-",
        chineseGapja: "-",
        error: isLeapMonth
          ? "해당 연도·월에 윤달이 없거나 날짜가 올바르지 않아요."
          : "변환할 수 없는 음력 날짜예요. 날짜와 지원 범위를 확인해 주세요.",
      };
    }

    const solar = calendar.getSolarCalendar();
    const gapja = calendar.getKoreanGapja();
    const chinese = calendar.getChineseGapja();

    const solarText = `${solar.year}.${pad(solar.month)}.${pad(solar.day)}`;

    return {
      valid: true,
      primary: solarText,
      inputText: `${y}.${pad(m)}.${pad(d)} ${
        isLeapMonth ? "(음력 윤달)" : "(음력)"
      }`,
      outputText: `${solarText} (양력)`,
      leapText: isLeapMonth ? "윤달" : "평달",
      gapja: `${gapja.year} ${gapja.month} ${gapja.day}`,
      chineseGapja: `${chinese.year} ${chinese.month} ${chinese.day}`,
      error: "",
    };
  }, [mode, year, month, day, isLeapMonth]);

  const fiveYearSolarDates = useMemo(() => {
    if (mode !== "lunar-to-solar") return [];

    const startYear = Number(year);
    const lunarMonth = Number(month);
    const lunarDay = Number(day);

    if (!startYear || !lunarMonth || !lunarDay) return [];

    return Array.from({ length: 5 }, (_, index) => {
      const lunarYear = startYear + index;
      const calendar = new KoreanLunarCalendar();
      const ok = calendar.setLunarDate(
        lunarYear,
        lunarMonth,
        lunarDay,
        isLeapMonth,
      );

      if (!ok) {
        return {
          lunarYear,
          valid: false,
          solarText: isLeapMonth
            ? `해당 연도에 윤${lunarMonth}월 날짜가 없거나 변환 범위를 벗어났어요.`
            : "해당 날짜가 없거나 변환 지원 범위를 벗어났어요.",
        };
      }

      const solar = calendar.getSolarCalendar();

      return {
        lunarYear,
        valid: true,
        solarText: formatSolarDate(solar.year, solar.month, solar.day),
      };
    });
  }, [mode, year, month, day, isLeapMonth]);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <div className="mx-auto w-full max-w-5xl px-5 py-10 sm:px-8 sm:py-14">
        <div className="mb-8">
          <Link
            href="/"
            className="mb-5 inline-flex text-sm font-medium text-gray-500 transition hover:text-gray-900"
          >
            ← 몇이지? 홈
          </Link>

          <div>
            <p className="mb-2 text-sm font-bold text-blue-600">날짜 · 생활</p>
            <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
              음력 계산기
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
              양력 날짜를 음력으로, 음력 날짜를 양력으로 간편하게 변환해 보세요.
              윤달 여부와 간지도 함께 확인할 수 있어요.
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-8">
            <h2 className="mb-5 text-lg font-bold">변환 방식</h2>

            <div className="mb-8 flex gap-2">
              <ModeButton
                active={mode === "solar-to-lunar"}
                onClick={() => {
                  setMode("solar-to-lunar");
                  setIsLeapMonth(false);
                }}
              >
                양력 → 음력
              </ModeButton>

              <ModeButton
                active={mode === "lunar-to-solar"}
                onClick={() => setMode("lunar-to-solar")}
              >
                음력 → 양력
              </ModeButton>
            </div>

            <div>
              <label className="mb-3 block text-sm font-semibold">
                {mode === "solar-to-lunar" ? "양력 날짜" : "음력 날짜"}
              </label>

              <DateInput
                year={year}
                month={month}
                day={day}
                setYear={setYear}
                setMonth={setMonth}
                setDay={setDay}
              />

              <p className="mt-3 text-xs leading-5 text-gray-400">
                지원 범위: 양력 1000.02.13 ~ 2050.12.31 / 음력 1000.01.01 ~
                2050.11.18
              </p>
            </div>

            {mode === "lunar-to-solar" && (
              <div className="mt-7">
                <p className="mb-2 text-sm font-semibold">윤달 여부</p>

                <div className="flex gap-2">
                  <ToggleButton
                    active={!isLeapMonth}
                    onClick={() => setIsLeapMonth(false)}
                  >
                    평달
                  </ToggleButton>

                  <ToggleButton
                    active={isLeapMonth}
                    onClick={() => setIsLeapMonth(true)}
                  >
                    윤달
                  </ToggleButton>
                </div>

                <p className="mt-2 text-xs leading-5 text-gray-400">
                  윤달이 아닌 일반 음력 날짜라면 평달을 선택하세요.
                </p>
              </div>
            )}

            <div className="mt-8 rounded-2xl bg-gray-50 p-5">
              <p className="text-sm font-bold text-gray-800">윤달이란?</p>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                음력과 태양력의 차이를 맞추기 위해 추가되는 달이에요. 같은
                연도·월이라도 평달과 윤달은 서로 다른 날짜로 변환될 수 있어요.
              </p>
            </div>
          </section>

          <section className="h-fit rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-8 lg:sticky lg:top-6">
            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-500">
                {mode === "solar-to-lunar" ? "변환된 음력 날짜" : "변환된 양력 날짜"}
              </p>

              <div className="mt-2 text-4xl font-black tracking-tight text-blue-600">
                {result.primary}
              </div>
            </div>

            {!result.valid && (
              <div className="mb-6 rounded-2xl bg-red-50 px-4 py-4 text-sm font-semibold leading-6 text-red-600">
                {result.error}
              </div>
            )}

            {result.valid && (
              <div className="mb-6 rounded-2xl bg-blue-50 px-4 py-4 text-sm font-semibold leading-6 text-blue-700">
                날짜 변환이 완료됐어요.
              </div>
            )}

            <div className="divide-y divide-gray-100 border-y border-gray-100">
              <ResultRow label="입력 날짜" value={result.inputText} />
              <ResultRow label="변환 결과" value={result.outputText} emphasized />
              <ResultRow label="음력 구분" value={result.leapText} />
              <ResultRow label="간지" value={result.gapja} />
              <ResultRow label="한자 간지" value={result.chineseGapja} />
            </div>
          </section>
        </div>

        {mode === "lunar-to-solar" && fiveYearSolarDates.length > 0 && (
          <section className="mt-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-8">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-xs font-black tracking-wider text-blue-600">
                  NEXT 5 YEARS
                </p>
                <h2 className="mt-2 text-lg font-bold">
                  앞으로 5개년 양력 날짜
                </h2>
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  입력한 음력 {pad(Number(month))}월 {pad(Number(day))}일이
                  입력 연도를 포함해 앞으로 5개년 동안 양력으로 언제인지 보여드려요.
                </p>
              </div>
              <span className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-bold text-gray-500">
                {isLeapMonth ? "윤달 기준" : "평달 기준"}
              </span>
            </div>

            <div className="mt-5 overflow-hidden rounded-2xl border border-gray-200">
              {fiveYearSolarDates.map((item, index) => (
                <div
                  key={item.lunarYear}
                  className={`grid gap-2 px-4 py-4 sm:grid-cols-[160px_1fr] sm:items-center sm:px-5 ${
                    index !== fiveYearSolarDates.length - 1
                      ? "border-b border-gray-100"
                      : ""
                  }`}
                >
                  <div>
                    <p className="text-xs font-bold text-gray-400">
                      음력 {item.lunarYear}년
                    </p>
                    <p className="mt-1 text-sm font-black text-gray-900">
                      {isLeapMonth ? "윤" : ""}
                      {Number(month)}월 {Number(day)}일
                    </p>
                  </div>

                  <div
                    className={`text-sm font-bold sm:text-right ${
                      item.valid ? "text-blue-600" : "text-gray-400"
                    }`}
                  >
                    {item.valid ? `양력 ${item.solarText}` : item.solarText}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-3 text-xs leading-5 text-gray-400">
              음력 윤달은 매년 존재하지 않기 때문에 윤달을 선택한 경우 일부 연도는
              변환 가능한 날짜가 없을 수 있습니다.
            </p>
          </section>
        )}

        <section className="mt-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-8">
          <h2 className="text-lg font-bold">음력 계산기 사용 예시</h2>

          <div className="mt-5 grid gap-4 text-sm leading-6 text-gray-600 md:grid-cols-2">
            <div className="rounded-2xl bg-gray-50 p-5">
              <p className="mb-1 font-bold text-gray-800">양력 → 음력</p>
              <p>
                생일이나 기념일의 음력 날짜를 확인하고 싶을 때 양력 날짜를
                입력하면 돼요.
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-5">
              <p className="mb-1 font-bold text-gray-800">음력 → 양력</p>
              <p>
                음력 생일이나 제사 날짜를 입력하면 해당 연도의 양력 날짜와
                앞으로 5개년 날짜까지 한 번에 확인할 수 있어요.
              </p>
            </div>
          </div>
        </section>

        <RelatedCalculators currentHref="/lunar" />
      </div>
    </main>
  );
}

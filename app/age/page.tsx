"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import RelatedCalculators from "../_components/RelatedCalculators";

function pad(value: number) {
  return String(value).padStart(2, "0");
}

function isValidDate(year: number, month: number, day: number) {
  if (!year || !month || !day) return false;
  const date = new Date(year, month - 1, day);
  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
}

function differenceInDays(from: Date, to: Date) {
  const msPerDay = 1000 * 60 * 60 * 24;
  const fromUTC = Date.UTC(
    from.getFullYear(),
    from.getMonth(),
    from.getDate()
  );
  const toUTC = Date.UTC(to.getFullYear(), to.getMonth(), to.getDate());
  return Math.round((toUTC - fromUTC) / msPerDay);
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
        placeholder="1990"
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

export default function AgePage() {
  const [year, setYear] = useState("1990");
  const [month, setMonth] = useState("09");
  const [day, setDay] = useState("02");

  const result = useMemo(() => {
    const birthYear = Number(year);
    const birthMonth = Number(month);
    const birthDay = Number(day);

    if (!isValidDate(birthYear, birthMonth, birthDay)) {
      return {
        valid: false,
        age: 0,
        birthDateText: "-",
        nextBirthdayText: "-",
        daysUntilBirthday: 0,
        hasBirthdayPassed: false,
        birthdayThisYearText: "-",
      };
    }

    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth() + 1;
    const todayDay = today.getDate();

    if (
      birthYear > todayYear ||
      (birthYear === todayYear &&
        (birthMonth > todayMonth ||
          (birthMonth === todayMonth && birthDay > todayDay)))
    ) {
      return {
        valid: false,
        future: true,
        age: 0,
        birthDateText: "-",
        nextBirthdayText: "-",
        daysUntilBirthday: 0,
        hasBirthdayPassed: false,
        birthdayThisYearText: "-",
      };
    }

    const birthdayPassed =
      todayMonth > birthMonth ||
      (todayMonth === birthMonth && todayDay >= birthDay);

    let age = todayYear - birthYear;
    if (!birthdayPassed) age -= 1;

    const birthdayThisYear = new Date(todayYear, birthMonth - 1, birthDay);

    let nextBirthdayYear = birthdayPassed ? todayYear + 1 : todayYear;
    let nextBirthday = new Date(
      nextBirthdayYear,
      birthMonth - 1,
      birthDay
    );

    // 2월 29일생은 비윤년에는 3월 1일로 Date가 보정되므로,
    // 화면에는 실제 Date 객체가 계산한 날짜를 그대로 표시한다.
    const daysUntilBirthday = differenceInDays(today, nextBirthday);

    return {
      valid: true,
      future: false,
      age,
      birthDateText: `${birthYear}.${pad(birthMonth)}.${pad(birthDay)}`,
      nextBirthdayText: `${nextBirthday.getFullYear()}.${pad(
        nextBirthday.getMonth() + 1
      )}.${pad(nextBirthday.getDate())}`,
      daysUntilBirthday,
      hasBirthdayPassed: birthdayPassed,
      birthdayThisYearText: `${todayYear}.${pad(birthMonth)}.${pad(
        birthDay
      )}`,
    };
  }, [year, month, day]);

  const message = !result.valid
    ? result.future
      ? "생년월일이 오늘보다 미래예요."
      : "올바른 생년월일을 입력해 주세요."
    : result.daysUntilBirthday === 0
    ? "오늘이 생일이에요! 🎉"
    : `다음 생일까지 ${result.daysUntilBirthday.toLocaleString(
        "ko-KR"
      )}일 남았어요.`;

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
              만나이 계산기
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
              생년월일을 입력하면 오늘 기준 만나이와 다음 생일까지 남은 날짜를
              계산해 드려요.
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-8">
            <h2 className="mb-7 text-lg font-bold">생년월일 입력</h2>

            <div>
              <label className="mb-3 block text-sm font-semibold">
                생년월일
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
                예: 1990년 9월 2일 → 1990 / 09 / 02
              </p>
            </div>

            <div className="mt-8 rounded-2xl bg-gray-50 p-5">
              <p className="text-sm font-bold text-gray-800">
                만나이는 어떻게 계산하나요?
              </p>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                현재 연도에서 출생 연도를 뺀 뒤, 올해 생일이 아직 지나지
                않았다면 1살을 빼요.
              </p>
            </div>
          </section>

          <section className="h-fit rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-8 lg:sticky lg:top-6">
            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-500">
                오늘 기준 만나이
              </p>
              <div className="mt-2 text-4xl font-black tracking-tight text-blue-600">
                {result.valid ? `만 ${result.age}세` : "-"}
              </div>
            </div>

            <div
              className={`mb-6 rounded-2xl px-4 py-4 text-sm font-semibold leading-6 ${
                result.valid
                  ? "bg-blue-50 text-blue-700"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {message}
            </div>

            <div className="divide-y divide-gray-100 border-y border-gray-100">
              <ResultRow
                label="생년월일"
                value={result.valid ? result.birthDateText : "-"}
              />
              <ResultRow
                label="올해 생일"
                value={result.valid ? result.birthdayThisYearText : "-"}
              />
              <ResultRow
                label="올해 생일 여부"
                value={
                  result.valid
                    ? result.hasBirthdayPassed
                      ? "지났어요"
                      : "아직 안 지났어요"
                    : "-"
                }
              />
              <ResultRow
                label="다음 생일"
                value={result.valid ? result.nextBirthdayText : "-"}
              />
              <ResultRow
                label="다음 생일까지"
                value={
                  result.valid
                    ? `${result.daysUntilBirthday.toLocaleString("ko-KR")}일`
                    : "-"
                }
                emphasized
              />
            </div>
          </section>
        </div>

        <section className="mt-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-8">
          <h2 className="text-lg font-bold">만나이 계산 예시</h2>

          <div className="mt-5 grid gap-4 text-sm leading-6 text-gray-600 md:grid-cols-2">
            <div className="rounded-2xl bg-gray-50 p-5">
              <p className="mb-1 font-bold text-gray-800">
                올해 생일이 지난 경우
              </p>
              <p>
                현재 연도 - 출생 연도로 계산해요.
                <br />
                예: 2026년 기준 1990년생 → 만 36세
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-5">
              <p className="mb-1 font-bold text-gray-800">
                올해 생일이 아직 안 지난 경우
              </p>
              <p>
                현재 연도 - 출생 연도 - 1로 계산해요.
                <br />
                예: 생일 전이라면 한 살 적게 표시돼요.
              </p>
            </div>
          </div>
        </section>

        <RelatedCalculators currentHref="/age" />
      </div>
    </main>
  );
}

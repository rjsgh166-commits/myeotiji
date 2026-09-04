import Link from "next/link";
import CalculatorSearch from "./_components/CalculatorSearch";
import RecentCalculators from "./_components/RecentCalculators";
import SavedCalculations from "./_components/SavedCalculations";
import HolidayHomeCard from "./_components/HolidayHomeCard";
import {
  CALCULATOR_BY_HREF,
  CALCULATOR_CATEGORIES,
  CALCULATORS,
} from "./_lib/calculators";

const frequentHrefs = [
  "/job-change",
  "/salary",
  "/loan",
  "/holiday-tracker",
  "/retirement",
  "/annual-leave",
  "/discount",
  "/median-income",
];

const frequentCalculators = frequentHrefs
  .map((href) => CALCULATOR_BY_HREF[href])
  .filter(Boolean);

const situations = [
  ["💼", "이직이 이득일까?", "연봉·시간·통근까지 비교", "/job-change"],
  ["💰", "월급 얼마 받지?", "세후 실수령액 바로 확인", "/salary"],
  ["🏠", "대출 뭐가 낫지?", "월 부담과 총이자 비교", "/loan"],
  ["🍯", "연차 언제 쓰지?", "남은 연차를 가장 잘 배분", "/holiday-tracker"],
  ["🛒", "진짜 몇 % 할인?", "중복 할인·쿠폰까지", "/discount"],
] as const;

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#191f28]">
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            몇이지?
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 sm:flex">
            <a href="#situations" className="hover:text-slate-950">상황별</a>
            <a href="#popular" className="hover:text-slate-950">추천 계산기</a>
            <a href="#all-calculators" className="hover:text-slate-950">전체 계산기</a>
            <Link href="/about" className="hover:text-slate-950">계산정보</Link>
          </nav>

          <div className="flex items-center gap-1 sm:hidden">
            <a
              href="#calculator-search"
              className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50"
              aria-label="계산기 검색으로 이동"
            >
              검색
            </a>
            <a
              href="#my-calculations"
              className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50"
              aria-label="내 계산함으로 이동"
            >
              ☆ 저장
            </a>
          </div>
        </div>
      </header>

      <section className="px-5 pb-10 pt-14 sm:pb-14 sm:pt-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            일상에서 궁금한 숫자,
            <br />
            <span className="text-blue-600">몇이지?</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
            비교하고 끝내지 않습니다. 어디부터 이득인지, 몇 일이면 가능한지 마지노선까지 계산해요.
          </p>

          <div id="calculator-search" className="scroll-mt-24">
            <CalculatorSearch items={CALCULATORS} />
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {[
              ["연봉", "/salary"],
              ["이직", "/job-change"],
              ["대출", "/loan"],
              ["퇴직금", "/retirement"],
              ["D-Day", "/days"],
              ["연차 개수", "/annual-leave"],
              ["꿀연휴", "/holiday-tracker"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 transition hover:border-slate-300 hover:bg-slate-50"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <HolidayHomeCard />

      <SavedCalculations />

      <section id="situations" className="scroll-mt-24 px-5 pb-12 sm:pb-14">
        <div className="mx-auto max-w-6xl">
          <div className="mb-5">
            <h2 className="text-2xl font-bold">지금 뭐가 궁금하세요?</h2>
            <p className="mt-2 text-sm text-slate-500">계산기 이름 대신 지금 상황에서 시작해도 돼요.</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {situations.map(([icon, title, description, href]) => (
              <Link
                key={title}
                href={href}
                data-ga-event="situation_start"
                data-ga-situation={title}
                data-ga-destination={href}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-sm"
              >
                <div className="text-2xl">{icon}</div>
                <p className="mt-3 font-bold text-slate-900">{title}</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">{description}</p>
                <p className="mt-4 text-xs font-semibold text-blue-600">바로 계산 →</p>
              </Link>
            ))}
          </div>

          <div className="mt-4 text-right">
            <Link href="/situations" className="text-sm font-semibold text-slate-500 hover:text-slate-900">
              상황별 계산 순서 전체 보기 →
            </Link>
          </div>
        </div>
      </section>

      <section id="popular" className="scroll-mt-24 px-5 pb-12 sm:pb-14">
        <div className="mx-auto max-w-6xl">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold">추천 계산기</h2>
              <p className="mt-2 text-sm text-slate-500">판단이 필요한 계산과 자주 쓰는 기능부터 골랐어요.</p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {frequentCalculators.map((calculator) => (
              <Link
                key={calculator.href}
                href={calculator.href}
                className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-200 hover:shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <span className="text-xl">{calculator.icon}</span>
                  <div>
                    <h3 className="font-bold text-slate-900">{calculator.title}</h3>
                    <p className="mt-1 text-xs leading-5 text-slate-500">{calculator.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RecentCalculators />

      <section className="px-5 pb-12 sm:pb-14">
        <div className="mx-auto max-w-6xl border-y border-blue-100 bg-blue-50/70 px-5 py-5 sm:flex sm:items-center sm:justify-between sm:gap-5">
          <div>
            <p className="text-sm font-bold text-blue-700">2027 미리보기</p>
            <p className="mt-1 text-sm text-slate-600">최저임금·중위소득·황금연휴처럼 확정된 정보부터 반영하고 있어요.</p>
          </div>
          <div className="mt-3 flex flex-wrap gap-3 text-sm font-semibold sm:mt-0">
            <Link href="/hourly-monthly" className="text-blue-700 hover:text-blue-900">최저임금 →</Link>
            <Link href="/median-income" className="text-blue-700 hover:text-blue-900">중위소득 →</Link>
            <Link href="/holiday-tracker/2027" className="text-blue-700 hover:text-blue-900">황금연휴 →</Link>
          </div>
        </div>
      </section>

      <section id="all-calculators" className="scroll-mt-24 px-5 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6">
            <h2 className="text-2xl font-bold">전체 계산기</h2>
            <p className="mt-2 text-sm text-slate-500">필요한 분야를 골라 찾아보세요.</p>
          </div>

          <div className="space-y-8">
            {CALCULATOR_CATEGORIES.map((category) => {
              const items = CALCULATORS.filter((item) => item.category === category.id);
              return (
                <section key={category.id}>
                  <div className="mb-3 flex items-center gap-2">
                    <span>{category.icon}</span>
                    <h3 className="font-bold text-slate-900">{category.title}</h3>
                    <span className="text-xs text-slate-400">{category.description}</span>
                  </div>
                  <div className="grid gap-x-6 gap-y-1 border-t border-slate-200 pt-2 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center justify-between gap-4 border-b border-slate-100 py-3 text-sm hover:text-blue-600"
                      >
                        <span className="font-medium">{item.title}</span>
                        <span className="text-xs text-slate-400">→</span>
                      </Link>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

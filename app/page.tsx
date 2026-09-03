import Link from "next/link";
import CalculatorSearch from "./_components/CalculatorSearch";
import RecentCalculators from "./_components/RecentCalculators";
import {
  CALCULATOR_BY_HREF,
  CALCULATOR_CATEGORIES,
  CALCULATORS,
} from "./_lib/calculators";

const frequentHrefs = [
  "/salary",
  "/retirement",
  "/days",
  "/loan",
  "/compound",
  "/unemployment",
  "/hourly-monthly",
  "/annual-leave",
  "/goal-savings",
  "/rent-conversion",
  "/median-income",
  "/unit-converter",
];

const frequentCalculators = frequentHrefs
  .map((href) => CALCULATOR_BY_HREF[href])
  .filter(Boolean);

const ownerPicks = [
  {
    href: "/holiday-tracker",
    kicker: "한 번쯤 눌러볼 만한 기능",
    title: "🍯 꿀연휴 추적기",
    description:
      "연차를 0~2일만 썼을 때 앞으로 어느 해에 가장 길게 쉴 수 있는지 달력으로 한눈에 확인해보세요.",
    cta: "내 꿀연휴 찾아보기",
    theme: "amber",
  },
  {
    href: "/discount",
    kicker: "쇼핑 전에 빠르게 확인",
    title: "🛒 할인율 계산기",
    description:
      "정가와 할인율만 넣으면 최종 가격을, 정가와 판매가를 넣으면 실제 할인율을 바로 계산해요.",
    cta: "할인가 계산하기",
    theme: "blue",
  },
] as const;

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#191f28]">
      <header className="border-b border-gray-100 bg-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            몇이지?
          </Link>

          <nav className="hidden gap-8 text-sm font-medium text-gray-600 sm:flex">
            <a href="#owner-picks" className="hover:text-black">
              주인장 추천
            </a>
            <a href="#calculators" className="hover:text-black">
              자주 찾는 계산기
            </a>
            <a href="#categories" className="hover:text-black">
              전체 계산기
            </a>
            <Link href="/about" className="hover:text-black">
              계산정보
            </Link>
          </nav>
        </div>
      </header>

      <section className="px-5 pb-14 pt-16 sm:pb-20 sm:pt-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold text-blue-600">
            LIFE CALCULATOR
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            일상에서 궁금한 숫자,
            <br />
            <span className="text-blue-600">몇이지?</span>
          </h1>

          <p className="mt-5 text-base text-gray-500 sm:text-lg">
            급여부터 날짜, 금융, 생활까지 필요한 계산을 빠르고 쉽게 해보세요.
          </p>

          <CalculatorSearch items={CALCULATORS} />

          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {[
              ["연봉", "/salary"],
              ["퇴직금", "/retirement"],
              ["D-Day", "/days"],
              ["대출이자", "/loan"],
              ["연차", "/annual-leave"],
              ["적금이자", "/savings-interest"],
              ["중위소득", "/median-income"],
              ["단위변환", "/unit-converter"],
            ].map(([keyword, href]) => (
              <Link
                key={keyword}
                href={href}
                className="rounded-full bg-white px-4 py-2 text-sm text-gray-600 shadow-sm transition hover:bg-gray-100"
              >
                {keyword}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RecentCalculators />

      <section id="owner-picks" className="px-5 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-black tracking-wider text-blue-600">
                OWNER&apos;S PICK
              </p>
              <h2 className="mt-2 text-2xl font-black">👑 주인장 추천 기능</h2>
              <p className="mt-2 text-sm text-gray-500">
                몇이지?에서 먼저 한번 써보면 좋은 기능 두 가지를 골랐어요.
              </p>
            </div>
            <span className="rounded-full bg-white px-3 py-1.5 text-xs font-bold text-gray-500 shadow-sm">
              직접 추천
            </span>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {ownerPicks.map((pick) => (
              <Link
                key={pick.href}
                href={pick.href}
                className={`group relative overflow-hidden rounded-3xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-8 ${
                  pick.theme === "amber"
                    ? "border-amber-100 bg-gradient-to-br from-amber-50 via-white to-orange-50"
                    : "border-blue-100 bg-gradient-to-br from-blue-50 via-white to-sky-50"
                }`}
              >
                <div className="relative z-10">
                  <p
                    className={`text-xs font-black ${
                      pick.theme === "amber" ? "text-amber-700" : "text-blue-700"
                    }`}
                  >
                    {pick.kicker}
                  </p>
                  <h3 className="mt-3 text-2xl font-black tracking-tight">
                    {pick.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-gray-600">
                    {pick.description}
                  </p>
                  <div
                    className={`mt-6 inline-flex items-center gap-2 text-sm font-black ${
                      pick.theme === "amber" ? "text-amber-700" : "text-blue-700"
                    }`}
                  >
                    {pick.cta}
                    <span className="transition group-hover:translate-x-1">→</span>
                  </div>
                </div>

                <div
                  className={`absolute -bottom-12 -right-10 h-40 w-40 rounded-full opacity-40 blur-2xl ${
                    pick.theme === "amber" ? "bg-amber-200" : "bg-blue-200"
                  }`}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="calculators" className="px-5 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-7">
            <h2 className="text-2xl font-bold">자주 찾는 계산기</h2>
            <p className="mt-2 text-sm text-gray-500">
              처음 방문했을 때 많이 찾을 만한 계산기를 먼저 모아봤어요.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {frequentCalculators.map((calculator) => (
              <Link
                key={calculator.href}
                href={calculator.href}
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 text-2xl">
                  {calculator.icon}
                </div>
                <h3 className="text-lg font-bold">{calculator.title}</h3>
                <p className="mt-2 text-sm text-gray-500">
                  {calculator.description}
                </p>
                <div className="mt-5 text-sm font-semibold text-blue-600">
                  계산하기 →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="categories" className="border-t border-gray-100 bg-white px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <div>
            <h2 className="text-2xl font-bold">전체 계산기</h2>
            <p className="mt-2 text-sm text-gray-500">
              현재 제공하는 모든 계산기를 카테고리별로 정리했어요.
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {CALCULATOR_CATEGORIES.map((category) => {
              const items = CALCULATORS.filter(
                (calculator) => calculator.category === category.id,
              );

              return (
                <section
                  key={category.title}
                  className="rounded-3xl bg-[#f7f8fa] p-6"
                >
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">{category.icon}</div>
                    <div>
                      <h3 className="text-lg font-black">{category.title}</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-2 sm:grid-cols-2">
                    {items.map((calculator) => (
                      <Link
                        key={calculator.href}
                        href={calculator.href}
                        className="group rounded-2xl bg-white p-4 ring-1 ring-gray-100 transition hover:-translate-y-0.5 hover:ring-blue-200"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div className="min-w-0">
                            <p className="truncate text-sm font-bold">
                              {calculator.icon} {calculator.title}
                            </p>
                            <p className="mt-1 line-clamp-2 text-xs leading-5 text-gray-500">
                              {calculator.description}
                            </p>
                          </div>
                          <span className="shrink-0 text-blue-600 transition group-hover:translate-x-0.5">
                            →
                          </span>
                        </div>
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

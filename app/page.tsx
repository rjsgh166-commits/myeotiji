import CalculatorSearch from "./_components/CalculatorSearch";

const allCalculators = [
  { icon: "💰", title: "연봉 실수령액", description: "내 월급은 실제로 얼마일까?", href: "/salary" },
  { icon: "🏦", title: "퇴직금", description: "퇴직하면 받을 금액 계산", href: "/retirement" },
  { icon: "🧾", title: "주휴수당", description: "내 주휴수당은 얼마일까?", href: "/weekly-pay" },
  { icon: "🛟", title: "실업급여", description: "2026년 예상 구직급여와 지급일수 계산", href: "/unemployment" },
  { icon: "⏱️", title: "시급 ↔ 월급", description: "시급을 월급으로, 월급을 시급으로 변환", href: "/hourly-monthly" },
  { icon: "🏖️", title: "연차 발생일수", description: "입사일 기준 법정 연차 발생일수 계산", href: "/annual-leave" },

  { icon: "🏠", title: "대출이자", description: "월 상환액과 총 대출이자 계산", href: "/loan" },
  { icon: "🌱", title: "복리", description: "장기 투자금이 복리로 얼마나 불어날까?", href: "/compound" },
  { icon: "🏦", title: "적금 이자", description: "적금 세전·세후 이자와 만기금액 계산", href: "/savings-interest" },
  { icon: "🎯", title: "목표금액 모으기", description: "목표금액까지 몇 년이 걸릴까?", href: "/goal-savings" },
  { icon: "📈", title: "주식 물타기 · 불타기", description: "추가매수 후 평단과 목표 평단 계산", href: "/stock-average" },
  { icon: "🧮", title: "수수료", description: "수수료와 실수령액을 빠르게 계산", href: "/fee" },

  { icon: "🏘️", title: "전월세 전환율", description: "보증금과 월세를 서로 환산", href: "/rent-conversion" },
  { icon: "📊", title: "기준 중위소득", description: "내 소득은 중위소득의 몇 %일까?", href: "/median-income" },

  { icon: "📆", title: "며칠이지?", description: "태어난 날부터 D-Day와 요일까지", href: "/days" },
  { icon: "📅", title: "만나이", description: "내 정확한 만나이와 다음 생일 확인", href: "/age" },
  { icon: "🌙", title: "음력 계산기", description: "양력과 음력을 서로 변환", href: "/lunar" },
  { icon: "🍯", title: "꿀연휴 추적기", description: "연차 조금 쓰고 길게 쉬는 해 찾기", href: "/holiday-tracker" },
  { icon: "🤰", title: "출산 예정일", description: "예상 출산일과 임신 주수 계산", href: "/due-date" },

  { icon: "🛒", title: "할인율", description: "할인 후 가격과 실제 할인율 계산", href: "/discount" },
  { icon: "📏", title: "단위변환", description: "길이·넓이·무게·부피·온도 변환", href: "/unit-converter" },
  { icon: "🔥", title: "칼로리 소모", description: "운동별 예상 소모 칼로리 계산", href: "/calorie-burn" },
  { icon: "🐶", title: "반려견 나이", description: "강아지 실제 나이와 사람 나이 환산", href: "/dog-age" },
];

const popularHrefs = [
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

const popularCalculators = popularHrefs
  .map((href) => allCalculators.find((item) => item.href === href))
  .filter((item): item is (typeof allCalculators)[number] => Boolean(item));

const categories = [
  {
    icon: "💼",
    title: "직장 · 급여",
    description: "월급부터 퇴직·연차까지",
    hrefs: ["/salary", "/retirement", "/weekly-pay", "/unemployment", "/hourly-monthly", "/annual-leave"],
  },
  {
    icon: "💰",
    title: "금융 · 투자",
    description: "대출·저축·투자금 계산",
    hrefs: ["/loan", "/compound", "/savings-interest", "/goal-savings", "/stock-average", "/fee"],
  },
  {
    icon: "🏠",
    title: "부동산 · 복지",
    description: "주거비와 지원기준 확인",
    hrefs: ["/rent-conversion", "/median-income"],
  },
  {
    icon: "📅",
    title: "날짜 · 가족",
    description: "날짜와 기념일을 한눈에",
    hrefs: ["/days", "/age", "/lunar", "/holiday-tracker", "/due-date"],
  },
  {
    icon: "🧰",
    title: "생활 · 건강",
    description: "일상에서 자주 쓰는 계산",
    hrefs: ["/discount", "/unit-converter", "/calorie-burn", "/dog-age"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#191f28]">
      <header className="border-b border-gray-100 bg-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="/" className="text-2xl font-bold tracking-tight">몇이지?</a>

          <nav className="hidden gap-8 text-sm font-medium text-gray-600 sm:flex">
            <a href="#calculators" className="hover:text-black">인기 계산기</a>
            <a href="#categories" className="hover:text-black">전체 계산기</a>
            <a href="/about" className="hover:text-black">계산정보</a>
          </nav>
        </div>
      </header>

      <section className="px-5 pb-14 pt-16 sm:pb-20 sm:pt-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold text-blue-600">LIFE CALCULATOR</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            일상에서 궁금한 숫자,
            <br />
            <span className="text-blue-600">몇이지?</span>
          </h1>

          <p className="mt-5 text-base text-gray-500 sm:text-lg">
            급여부터 날짜, 금융, 생활까지 필요한 계산을 빠르고 쉽게 해보세요.
          </p>

          <CalculatorSearch items={allCalculators} />

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
              <a
                key={keyword}
                href={href}
                className="rounded-full bg-white px-4 py-2 text-sm text-gray-600 shadow-sm transition hover:bg-gray-100"
              >
                {keyword}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="calculators" className="px-5 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-7">
            <h2 className="text-2xl font-bold">인기 계산기</h2>
            <p className="mt-2 text-sm text-gray-500">
              자주 찾을 만한 계산기를 먼저 모아봤어요.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {popularCalculators.map((calculator) => (
              <a
                key={calculator.href}
                href={calculator.href}
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 text-2xl">
                  {calculator.icon}
                </div>
                <h3 className="text-lg font-bold">{calculator.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{calculator.description}</p>
                <div className="mt-5 text-sm font-semibold text-blue-600">계산하기 →</div>
              </a>
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
            {categories.map((category) => {
              const items = category.hrefs
                .map((href) => allCalculators.find((calculator) => calculator.href === href))
                .filter((item): item is (typeof allCalculators)[number] => Boolean(item));

              return (
                <section key={category.title} className="rounded-3xl bg-[#f7f8fa] p-6">
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">{category.icon}</div>
                    <div>
                      <h3 className="text-lg font-black">{category.title}</h3>
                      <p className="mt-1 text-sm text-gray-500">{category.description}</p>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-2 sm:grid-cols-2">
                    {items.map((calculator) => (
                      <a
                        key={calculator.href}
                        href={calculator.href}
                        className="group rounded-2xl bg-white p-4 ring-1 ring-gray-100 transition hover:-translate-y-0.5 hover:ring-blue-200"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div className="min-w-0">
                            <p className="truncate text-sm font-bold">{calculator.icon} {calculator.title}</p>
                            <p className="mt-1 line-clamp-2 text-xs leading-5 text-gray-500">
                              {calculator.description}
                            </p>
                          </div>
                          <span className="shrink-0 text-blue-600 transition group-hover:translate-x-0.5">→</span>
                        </div>
                      </a>
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

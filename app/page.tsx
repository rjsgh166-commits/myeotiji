const calculators = [
  {
    icon: "💰",
    title: "연봉 실수령액",
    description: "내 월급은 실제로 얼마일까?",
    href: "/salary",
  },
  {
    icon: "🏦",
    title: "퇴직금",
    description: "퇴직하면 받을 금액 계산",
    href: "/retirement",
  },
  {
    icon: "🧾",
    title: "주휴수당",
    description: "내 주휴수당은 얼마일까?",
    href: "/weekly-pay",
  },
  {
    icon: "🛒",
    title: "할인율",
    description: "할인 후 가격과 실제 할인율 계산",
    href: "/discount",
  },
  {
    icon: "📅",
    title: "만나이",
    description: "내 정확한 만나이와 다음 생일 확인",
    href: "/age",
  },
  {
    icon: "🌙",
    title: "음력 계산기",
    description: "양력과 음력을 서로 변환",
    href: "/lunar",
  },
  {
    icon: "🍯",
    title: "꿀연휴 추적기",
    description: "연차 조금 쓰고 길게 쉬는 해 찾기",
    href: "/holiday-tracker",
  },
  {
    icon: "📈",
    title: "주식 물타기 · 불타기",
    description: "추가매수 후 평단과 목표 평단 계산",
    href: "/stock-average",
  },
];

const popularCalculators = [
  ["연봉 계산기", "/salary"],
  ["퇴직금", "/retirement"],
  ["주휴수당", "/weekly-pay"],
  ["할인율", "/discount"],
  ["만나이", "/age"],
  ["음력", "/lunar"],
  ["꿀연휴", "/holiday-tracker"],
  ["물타기 계산기", "/stock-average"],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#191f28]">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#" className="text-2xl font-bold tracking-tight">
            몇이지?
          </a>

          <nav className="hidden gap-8 text-sm font-medium text-gray-600 sm:flex">
            <a href="#calculators" className="hover:text-black">
              계산기
            </a>
            <a href="#tools" className="hover:text-black">
              생활도구
            </a>
            <a href="#info" className="hover:text-black">
              계산정보
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
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
            필요한 계산을 빠르고 쉽게 해보세요.
          </p>

          {/* Search */}
          <div className="mx-auto mt-9 flex max-w-2xl items-center rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm transition focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-50">
            <span className="mr-3 text-xl">🔎</span>
            <input
              type="text"
              placeholder="어떤 계산을 찾으세요?"
              className="w-full bg-transparent text-base outline-none placeholder:text-gray-400"
            />
          </div>

          {/* Popular keywords */}
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {popularCalculators.map(([keyword, href]) => (
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

      {/* Calculators */}
      <section id="calculators" className="px-5 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-7">
            <h2 className="text-2xl font-bold">인기 계산기</h2>
            <p className="mt-2 text-sm text-gray-500">
              사람들이 자주 찾는 계산기를 모아봤어요.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {calculators.map((calculator) => (
              <a
                key={calculator.title}
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
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="tools" className="border-t border-gray-100 bg-white px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold">계산기 카테고리</h2>

          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["💰", "돈", "연봉 · 월급 · 퇴직금"],
              ["🏠", "부동산", "대출 · 전월세 · 취득세"],
              ["📅", "날짜", "만나이 · 음력 · 꿀연휴"],
              ["🛒", "생활", "할인 · 비율 · 단위변환"],
              ["📈", "투자", "물타기 · 수익률 · 복리"],
            ].map(([icon, title, description]) => (
              <div
                key={title}
                className="rounded-2xl bg-[#f7f8fa] p-5"
              >
                <div className="text-2xl">{icon}</div>
                <h3 className="mt-4 font-bold">{title}</h3>
                <p className="mt-1 text-xs text-gray-500">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="info" className="border-t border-gray-100 bg-[#f7f8fa] px-5 py-10">
        <div className="mx-auto max-w-6xl text-sm text-gray-400">
          <p className="font-semibold text-gray-600">몇이지?</p>
          <p className="mt-2">
            일상에서 궁금한 숫자를 쉽고 빠르게 계산해드립니다.
          </p>
          <p className="mt-6">
            © 2026 몇이지? All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
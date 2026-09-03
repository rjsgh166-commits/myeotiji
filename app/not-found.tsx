import Link from "next/link";
import CalculatorSearch from "./_components/CalculatorSearch";
import { CALCULATOR_BY_HREF, CALCULATORS } from "./_lib/calculators";

const quickHrefs = [
  "/salary",
  "/loan",
  "/days",
  "/holiday-tracker",
  "/discount",
  "/unit-converter",
];

const quickCalculators = quickHrefs
  .map((href) => CALCULATOR_BY_HREF[href])
  .filter(Boolean);

export default function NotFound() {
  return (
    <main className="min-h-[78vh] bg-[#f7f8fa] px-5 py-10 text-[#191f28] sm:py-16">
      <div className="mx-auto max-w-5xl">
        <section className="overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <p className="text-sm font-black tracking-wider text-blue-600">
                ERROR 404
              </p>

              <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
                찾는 페이지가 없어요.
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
                주소가 잘못 입력됐거나 페이지가 이동했을 수 있어요.
                원하는 계산기를 검색하거나 몇이지? 홈에서 다시 찾아보세요.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-black text-white transition hover:bg-blue-700"
                >
                  ← 몇이지? 홈으로
                </Link>

                <Link
                  href="/#categories"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-black text-gray-700 transition hover:bg-gray-50"
                >
                  전체 계산기 보기
                </Link>
              </div>
            </div>

            <div className="relative mx-auto flex aspect-square w-full max-w-[330px] items-center justify-center rounded-[2.5rem] bg-blue-50">
              <div className="absolute left-8 top-10 h-10 w-10 rounded-2xl bg-white shadow-sm" />
              <div className="absolute bottom-10 right-8 h-14 w-14 rounded-full bg-amber-100" />

              <div className="relative text-center">
                <div className="text-7xl font-black tracking-tight text-blue-600 sm:text-8xl">
                  404
                </div>
                <div className="mt-2 text-5xl">🔎</div>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-gray-100 pt-8">
            <h2 className="text-lg font-black">계산기를 바로 검색해보세요</h2>
            <p className="mt-1 text-sm text-gray-500">
              월급, 물타기, 디데이, 평수 같은 단어로도 찾을 수 있어요.
            </p>

            <div className="-mt-3">
              <CalculatorSearch items={CALCULATORS} />
            </div>
          </div>

          <div className="mt-10 border-t border-gray-100 pt-8">
            <h2 className="text-lg font-black">자주 쓰는 계산기 바로가기</h2>

            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {quickCalculators.map((calculator) => (
                <Link
                  key={calculator.href}
                  href={calculator.href}
                  className="group rounded-2xl border border-gray-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-sm"
                >
                  <div className="text-xl">{calculator.icon}</div>
                  <div className="mt-3 text-sm font-black text-gray-800 transition group-hover:text-blue-600">
                    {calculator.shortTitle}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "2027 직장인 숫자 한눈에 보기 | 최저임금·중위소득·황금연휴",
  description:
    "2027년 최저임금, 월 환산액, 기준 중위소득 변화와 연차 2일로 가능한 9일 황금연휴를 한 페이지에서 비교합니다.",
  keywords: [
    "2027 최저임금",
    "2027 중위소득",
    "2027 황금연휴",
    "2027 직장인",
    "2027 월급",
  ],
  alternates: { canonical: "/insights/2027" },
  openGraph: {
    type: "article",
    url: "/insights/2027",
    title: "2027 직장인 숫자 한눈에 보기",
    description: "최저임금·중위소득·황금연휴, 2027년에 바뀌는 핵심 숫자를 비교해보세요.",
  },
};

const median2026 = [2_564_238, 4_199_292, 5_359_036, 6_494_738, 7_556_719, 8_555_952, 9_515_150];
const median2027 = [2_736_042, 4_480_645, 5_718_091, 6_929_885, 8_063_019, 9_129_201, 10_152_665];

const won = (value: number) => `${Math.round(value).toLocaleString("ko-KR")}원`;
const percent = (before: number, after: number) => `${(((after - before) / before) * 100).toFixed(2)}%`;

export default function Insight2027Page() {
  const minWageIncrease = 10_700 - 10_320;
  const monthlyIncrease = 2_236_300 - 2_156_880;

  return (
    <main className="min-h-screen bg-[#f7f8fa] px-5 py-10 text-[#191f28] sm:py-14">
      <div className="mx-auto max-w-5xl">
        <Link href="/" className="text-sm font-semibold text-gray-500 hover:text-gray-900">
          ← 몇이지? 홈
        </Link>

        <header className="mt-7 max-w-3xl">
          <div className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-black text-blue-700">최종 확인 2026.09.04</div>
          <p className="mt-5 text-sm font-black text-blue-600">MYEOTIJI DATA · 2027</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-5xl">2027 직장인 숫자 한눈에 보기</h1>
          <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
            정부가 확정한 숫자를 그대로 나열하는 대신, 2026년과 얼마나 달라지는지와 실제 생활에서 어떤 의미인지 비교해봤어요.
          </p>
        </header>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          <Link href="/hourly-monthly" className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 transition hover:-translate-y-0.5">
            <p className="text-xs font-black text-blue-600">2027 최저임금</p>
            <p className="mt-2 text-3xl font-black">10,700원</p>
            <p className="mt-2 text-sm text-gray-500">2026년보다 +{minWageIncrease.toLocaleString("ko-KR")}원 · 약 3.7%</p>
          </Link>
          <Link href="/median-income" className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 transition hover:-translate-y-0.5">
            <p className="text-xs font-black text-violet-600">2027 중위소득 4인</p>
            <p className="mt-2 text-3xl font-black">6,929,885원</p>
            <p className="mt-2 text-sm text-gray-500">2026년 대비 +435,147원 · {percent(6_494_738, 6_929_885)}</p>
          </Link>
          <Link href="/holiday-tracker/2027" className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 transition hover:-translate-y-0.5">
            <p className="text-xs font-black text-amber-700">2027 추석 황금연휴</p>
            <p className="mt-2 text-3xl font-black">연차 2일 → 9일</p>
            <p className="mt-2 text-sm text-gray-500">9/11(토) ~ 9/19(일)</p>
          </Link>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-8">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-black tracking-wider text-blue-600">MINIMUM WAGE</p>
              <h2 className="mt-2 text-2xl font-black">최저임금이 오르면 월 환산액은 얼마나 늘까?</h2>
            </div>
            <Link href="/hourly-monthly" className="text-sm font-black text-blue-600">내 근무시간으로 계산 →</Link>
          </div>

          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[580px] text-left text-sm">
              <thead className="border-b border-gray-200 text-gray-500">
                <tr><th className="py-3">구분</th><th className="py-3">2026</th><th className="py-3">2027</th><th className="py-3">차이</th></tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-semibold">
                <tr><td className="py-4">시간급</td><td>10,320원</td><td className="font-black text-blue-700">10,700원</td><td>+380원</td></tr>
                <tr><td className="py-4">월 209시간 환산</td><td>2,156,880원</td><td className="font-black text-blue-700">2,236,300원</td><td>+{monthlyIncrease.toLocaleString("ko-KR")}원</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs leading-5 text-gray-500">월 환산액은 주 40시간, 월 평균 209시간 기준입니다.</p>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-8">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-black tracking-wider text-violet-600">MEDIAN INCOME</p>
              <h2 className="mt-2 text-2xl font-black">가구원 수별 2026 → 2027 중위소득 변화</h2>
            </div>
            <Link href="/median-income" className="text-sm font-black text-violet-600">내 소득 비율 계산 →</Link>
          </div>

          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[650px] text-left text-sm">
              <thead className="border-b border-gray-200 text-gray-500">
                <tr><th className="py-3">가구</th><th className="py-3">2026</th><th className="py-3">2027</th><th className="py-3">증가액</th><th className="py-3">증가율</th></tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {median2026.map((before, index) => {
                  const after = median2027[index];
                  return (
                    <tr key={index + 1}>
                      <td className="py-4 font-black">{index + 1}인</td>
                      <td>{won(before)}</td>
                      <td className="font-black text-violet-700">{won(after)}</td>
                      <td>+{won(after - before)}</td>
                      <td>{percent(before, after)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-6 overflow-hidden rounded-3xl bg-gradient-to-br from-amber-50 via-white to-orange-50 p-6 ring-1 ring-amber-100 sm:p-8">
          <p className="text-xs font-black tracking-wider text-amber-700">HOLIDAY DATA</p>
          <div className="mt-3 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="text-2xl font-black">2027년 가장 눈에 띄는 숫자는 ‘9일’</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600">
                추석 연휴 앞뒤로 9월 13일과 17일에 연차를 사용하면 9월 11일부터 19일까지 9일 연속 휴가가 됩니다. 같은 공식 공휴일 데이터를 ‘언제 연차를 써야 하는가’로 다시 계산한 결과예요.
              </p>
            </div>
            <Link href="/holiday-tracker/2027" className="inline-flex rounded-xl bg-amber-700 px-5 py-3 text-sm font-black text-white">2027 달력 보기 →</Link>
          </div>
        </section>

        <section className="mt-6 rounded-3xl border border-gray-200 bg-white p-6 sm:p-8">
          <h2 className="text-lg font-black">공식 출처</h2>
          <div className="mt-4 space-y-3 text-sm leading-6 text-gray-600">
            <p>• 최저임금: 고용노동부 「2027년도 적용 최저임금 시간급 10,700원」 (2026.08.05)</p>
            <p>• 기준 중위소득: 보건복지부 중앙생활보장위원회 2027년 기준 중위소득 결정 자료</p>
            <p>• 공휴일: 현재 시행 중인 「관공서의 공휴일에 관한 규정」과 대체공휴일 규칙을 기준으로 계산</p>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="https://www.moel.go.kr/news/enews/report/enewsView.do?news_seq=19744" target="_blank" rel="noreferrer" className="text-sm font-black text-blue-600">고용노동부 확인 →</a>
            <a href="https://mohw.go.kr/gallery.es?act=view&b_list=12&bid=0003&cg_code=&keyField=&list_no=380303&mid=a10605040000&nPage=3&orderby=&vlist_no_npage=5" target="_blank" rel="noreferrer" className="text-sm font-black text-blue-600">보건복지부 확인 →</a>
            <a href="https://www.law.go.kr/LSW/lsInfoP.do?ancYnChk=0&lsId=002404" target="_blank" rel="noreferrer" className="text-sm font-black text-blue-600">국가법령정보센터 →</a>
          </div>
        </section>
      </div>
    </main>
  );
}

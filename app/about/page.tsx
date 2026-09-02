import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "몇이지? 소개",
  description:
    "몇이지?의 서비스 목적, 제공하는 생활 계산기와 운영 원칙을 소개합니다.",
  alternates: {
    canonical: "/about",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <div className="mx-auto w-full max-w-4xl px-5 py-10 sm:px-8 sm:py-14">
        <Link
          href="/"
          className="mb-6 inline-flex text-sm font-medium text-gray-500 transition hover:text-gray-900"
        >
          ← 몇이지? 홈
        </Link>

        
        <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-9">
          <p className="text-sm font-bold text-blue-600">ABOUT</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
            몇이지? 소개
          </h1>
          <p className="mt-5 text-base leading-7 text-gray-600">
            몇이지?는 일상에서 자주 궁금해지는 숫자를 쉽고 빠르게 확인할 수
            있도록 만든 생활 계산기 서비스입니다.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ["💰", "급여·근로", "연봉 실수령액, 퇴직금, 주휴수당"],
              ["📅", "날짜·생활", "만나이, 음력 변환, 꿀연휴 추적"],
              ["🛒", "생활 계산", "할인율과 실제 할인 금액"],
              ["📈", "투자 계산", "주식 물타기·불타기와 평균단가"],
            ].map(([icon, name, text]) => (
              <div key={name} className="rounded-2xl bg-gray-50 p-5">
                <div className="text-2xl">{icon}</div>
                <h2 className="mt-3 font-bold">{name}</h2>
                <p className="mt-1 text-sm leading-6 text-gray-500">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-gray-100 pt-7">
            <h2 className="text-lg font-bold">운영 원칙</h2>
            <div className="mt-4 space-y-3 text-sm leading-6 text-gray-600">
              <p>
                계산 기준이 법령·공공기관 기준과 관련된 경우 신뢰할 수 있는
                자료를 우선 확인하고, 변경 가능성이 있는 내용은 페이지에서
                안내합니다.
              </p>
              <p>
                계산 결과를 불필요하게 어렵게 보여주기보다 사용자가 바로
                이해할 수 있는 입력·결과 구조를 지향합니다.
              </p>
              <p>
                계산기는 지속적으로 추가·개선될 수 있으며, 오류나 개선 의견은
                문의 페이지를 통해 알려주세요.
              </p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}

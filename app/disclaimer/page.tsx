import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "계산 결과 및 면책 안내",
  description:
    "몇이지?에서 제공하는 급여, 날짜, 투자 등 계산 결과의 적용 범위와 참고사항을 안내합니다.",
  alternates: {
    canonical: "/disclaimer",
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
          <p className="text-sm font-bold text-blue-600">DISCLAIMER</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
            계산 결과 및 면책 안내
          </h1>
          <p className="mt-5 text-base leading-7 text-gray-600">
            몇이지?의 모든 계산 결과는 일반적인 정보 제공을 위한 참고용입니다.
            실제 계약·신고·의사결정 전에는 적용 기준을 다시 확인해 주세요.
          </p>

          <div className="mt-8 space-y-5">
            {[
              [
                "급여·퇴직금·주휴수당",
                "세율, 보험료율, 근로조건, 비과세 항목, 평균임금 산정 방식 등 개인별 상황과 제도 변경에 따라 실제 금액이 달라질 수 있습니다. 급여명세서, 회사 담당자, 관계 기관의 공식 자료를 함께 확인하세요.",
              ],
              [
                "꿀연휴·공휴일",
                "현재 확인 가능한 공휴일 규칙을 기준으로 계산하지만 미래의 임시공휴일, 선거일, 법령 개정 등은 추후 변경될 수 있습니다.",
              ],
              [
                "주식 물타기·불타기",
                "평균단가 계산을 위한 도구이며 특정 종목의 매수·매도 또는 투자 판단을 권유하지 않습니다. 수수료, 세금, 환율 등은 실제 거래 결과와 다를 수 있습니다.",
              ],
              [
                "음력·날짜 계산",
                "계산 가능한 날짜 범위와 사용한 달력 데이터의 특성에 따라 제한이 있을 수 있으므로 중요한 의사결정에는 공식 달력 자료를 함께 확인하세요.",
              ],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl bg-gray-50 p-5">
                <h2 className="font-bold text-gray-900">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-gray-600">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-gray-100 pt-7 text-sm leading-6 text-gray-500">
            <p>
              몇이지?는 계산 결과의 정확성을 높이기 위해 노력하지만, 계산 결과의
              이용으로 발생한 손해나 의사결정에 대해 법적 책임을 보장하지
              않습니다.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}

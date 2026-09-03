import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "계산 결과 및 면책 안내",
  description:
    "몇이지?의 급여·금융·부동산·복지·날짜·건강 등 계산 결과의 적용 범위와 참고사항을 안내합니다.",
  alternates: {
    canonical: "/disclaimer",
  },
};

const items = [
  [
    "직장 · 급여",
    "연봉 실수령액, 퇴직금, 주휴수당, 실업급여, 시급·월급, 연차 계산은 법령·보험료율·세액표·근로조건과 개인별 사실관계에 따라 달라질 수 있습니다. 실제 급여명세서, 근로계약서 및 고용노동부·국세청·사회보험기관의 최신 자료를 우선 확인하세요.",
  ],
  [
    "대출 · 적금 · 투자",
    "대출이자, 적금이자, 복리, 목표금액, 주식 평단 계산은 입력한 금리·수익률이 유지된다는 가정의 예상값입니다. 금융상품의 금리변동, 세금, 수수료, 환율, 투자손실 가능성은 별도로 확인해야 하며 특정 금융상품이나 투자행위를 권유하지 않습니다.",
  ],
  [
    "부동산 · 복지",
    "전월세 전환율은 계약 시점의 법령과 한국은행 기준금리에 따라 달라질 수 있고, 기준 중위소득 계산만으로 실제 복지사업의 지원자격을 확정할 수 없습니다. 가구구성, 소득인정액, 재산 등 해당 사업의 별도 요건을 확인하세요.",
  ],
  [
    "날짜 · 공휴일",
    "D-Day, 만나이, 음력, 꿀연휴 등 날짜 계산은 입력값과 현재 확인 가능한 달력 규칙을 기준으로 합니다. 미래의 임시공휴일, 선거일, 법령 개정, 달력 데이터 범위 등에 따라 실제 결과가 달라질 수 있습니다.",
  ],
  [
    "출산 예정일 · 칼로리",
    "출산 예정일과 임신 주수는 일반적인 날짜 계산을 이용한 예상값이며 의료적 진단이 아닙니다. 칼로리 소모량도 MET 기반 추정치로 개인별 실제 소비량과 차이가 날 수 있습니다. 건강·임신 관련 판단은 의료전문가의 안내를 우선하세요.",
  ],
  [
    "반려견 나이",
    "사람 나이 환산과 생애단계는 체급을 이용한 대략적인 참고값입니다. 품종, 체중, 유전적 특성, 건강상태에 따라 노화 속도가 다를 수 있으므로 건강 판단에는 수의사의 진료를 우선하세요.",
  ],
  [
    "단위 · 할인 · 수수료",
    "단위변환은 페이지에 표시된 환산기준을 사용하며 컵·데이터용량처럼 분야나 표기 관행에 따라 다른 기준이 존재할 수 있습니다. 할인율과 수수료도 실제 사업자의 부가세·정산·반올림 규칙 등에 따라 달라질 수 있습니다.",
  ],
];

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
            몇이지?의 계산 결과와 설명은 사용자가 숫자를 이해하고 조건을 비교할
            수 있도록 제공하는 일반적인 참고정보입니다. 실제 계약, 신고,
            수급자격, 금융·투자 또는 의료적 의사결정 전에는 관계기관과 전문가의
            최신 자료를 다시 확인해 주세요.
          </p>

          <div className="mt-8 space-y-4">
            {items.map(([title, text]) => (
              <div key={title} className="rounded-2xl bg-gray-50 p-5">
                <h2 className="font-black text-gray-900">{title}</h2>
                <p className="mt-2 text-sm leading-7 text-gray-600">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-gray-100 pt-7 text-sm leading-7 text-gray-500">
            <p>
              몇이지?는 적용 기준과 계산 로직을 가능한 범위에서 확인하고
              업데이트하기 위해 노력하지만, 모든 개인 상황과 제도 변경을
              실시간으로 반영한다고 보장할 수 없습니다. 계산 결과의 이용에 따른
              최종 판단과 책임은 이용자에게 있습니다.
            </p>
            <p className="mt-3">
              오류 또는 오래된 기준을 발견했다면{" "}
              <Link href="/contact" className="font-bold text-blue-600">
                문의 페이지
              </Link>
              를 통해 알려주세요.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

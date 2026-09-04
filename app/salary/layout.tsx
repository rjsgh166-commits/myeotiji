import type { Metadata } from "next";
import type { ReactNode } from "react";
import CalculatorSeoContent from "../_components/CalculatorSeoContent";

export const metadata: Metadata = {
  title: "연봉 실수령액 · 연봉 비교 계산기",
  description:
    "2026년 기준 4대보험과 근로소득 간이세액표를 반영해 예상 월 실수령액을 계산하고 현재 연봉과 이직·협상 연봉의 실수령 차이까지 비교해보세요.",
  keywords: [
    "연봉 실수령액 계산기",
    "월급 실수령액",
    "연봉 계산기",
    "2026 연봉 실수령액",
    "연봉 비교 계산기",
    "이직 연봉 비교",
    "연봉 인상 실수령액",
  ],
  alternates: {
    canonical: "/salary",
  },
  openGraph: {
    type: "website",
    url: "/salary",
    title: "연봉 실수령액 · 연봉 비교 계산기 | 몇이지?",
    description:
      "2026년 기준 4대보험과 근로소득 간이세액표를 반영해 예상 월 실수령액을 계산하고 현재 연봉과 이직·협상 연봉의 실수령 차이까지 비교해보세요.",
  },
  twitter: {
    card: "summary",
    title: "연봉 실수령액 · 연봉 비교 계산기 | 몇이지?",
    description:
      "2026년 기준 4대보험과 근로소득 간이세액표를 반영해 예상 월 실수령액을 계산하고 현재 연봉과 이직·협상 연봉의 실수령 차이까지 비교해보세요.",
  },
};

export default function CalculatorLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      {children}
      <CalculatorSeoContent pathname="/salary" />
    </>
  );
}

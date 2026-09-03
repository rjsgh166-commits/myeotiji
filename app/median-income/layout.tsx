import type { Metadata } from "next";
import type { ReactNode } from "react";
import CalculatorSeoContent from "../_components/CalculatorSeoContent";

export const metadata: Metadata = {
  title: "2026 기준 중위소득 퍼센트 계산기",
  description:
    "가구원 수와 월 소득인정액을 입력해 2026년 기준 중위소득의 몇 퍼센트인지 계산하고 주요 기준 금액을 확인하세요.",
  keywords: [
    "중위소득 계산기",
    "기준 중위소득",
    "중위소득 몇퍼센트",
    "2026 중위소득",
    "소득인정액 계산",
  ],
  alternates: { canonical: "/median-income" },
  openGraph: {
    title: "2026 기준 중위소득 퍼센트 계산기 | 몇이지?",
    description: "내 가구 소득인정액이 기준 중위소득의 몇 %인지 계산하세요.",
    url: "/median-income",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <CalculatorSeoContent pathname="/median-income" />
    </>
  );
}

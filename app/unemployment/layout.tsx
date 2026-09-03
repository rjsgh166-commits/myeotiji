import type { Metadata } from "next";
import type { ReactNode } from "react";
import CalculatorSeoContent from "../_components/CalculatorSeoContent";

export const metadata: Metadata = {
  title: "2026 실업급여 계산기",
  description:
    "2026년 기준 퇴직 전 평균임금, 고용보험 가입기간, 연령을 바탕으로 구직급여 1일액과 예상 지급일수, 총액을 계산하세요.",
  keywords: [
    "실업급여 계산기",
    "2026 실업급여",
    "구직급여 계산기",
    "실업급여 예상액",
    "실업급여 상한액",
  ],
  alternates: { canonical: "/unemployment" },
  openGraph: {
    title: "2026 실업급여 계산기 | 몇이지?",
    description: "2026년 구직급여 1일액·지급일수·예상 총액을 계산하세요.",
    url: "/unemployment",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <CalculatorSeoContent pathname="/unemployment" />
    </>
  );
}

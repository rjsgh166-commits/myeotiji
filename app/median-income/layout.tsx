import type { Metadata } from "next";
import type { ReactNode } from "react";
import CalculatorSeoContent from "../_components/CalculatorSeoContent";

export const metadata: Metadata = {
  title: "2026·2027 기준 중위소득 계산기",
  description:
    "2026년 현재 기준과 2027년 확정 기준 중위소득을 선택해 가구원 수별 중위소득 32%, 40%, 48%, 50% 등 주요 기준을 계산하세요.",
  keywords: [
    "2027 기준 중위소득",
    "2027 중위소득",
    "중위소득 계산기",
    "기준 중위소득",
    "중위소득 몇퍼센트",
    "2026 중위소득",
    "소득인정액",
  ],
  alternates: { canonical: "/median-income" },
  openGraph: {
    title: "2026·2027 기준 중위소득 계산기 | 몇이지?",
    description: "2027년 기준 중위소득과 생계·의료·주거·교육급여 기준을 확인하세요.",
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

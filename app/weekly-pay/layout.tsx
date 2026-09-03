import type { Metadata } from "next";
import type { ReactNode } from "react";
import CalculatorSeoContent from "../_components/CalculatorSeoContent";

export const metadata: Metadata = {
  title: "2026·2027 주휴수당 계산기",
  description:
    "2026년 최저임금 10,320원과 2027년 확정 최저임금 10,700원을 선택해 예상 주휴시간과 주휴수당, 주휴 포함 주급을 계산하세요.",
  keywords: [
    "주휴수당 계산기",
    "2027 주휴수당",
    "2027 최저임금",
    "2026 최저임금",
    "주휴시간",
    "주급 계산기",
  ],
  alternates: { canonical: "/weekly-pay" },
  openGraph: {
    type: "website",
    url: "/weekly-pay",
    title: "2026·2027 주휴수당 계산기 | 몇이지?",
    description: "2026·2027 최저임금을 선택해 예상 주휴수당을 계산하세요.",
  },
};

export default function CalculatorLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <CalculatorSeoContent pathname="/weekly-pay" />
    </>
  );
}

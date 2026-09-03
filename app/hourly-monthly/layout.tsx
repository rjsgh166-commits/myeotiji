import type { Metadata } from "next";
import type { ReactNode } from "react";
import CalculatorSeoContent from "../_components/CalculatorSeoContent";

export const metadata: Metadata = {
  title: "2026·2027 시급 월급 변환기",
  description:
    "2026년 최저임금 10,320원과 2027년 최저임금 10,700원을 선택해 시급을 월급으로, 월급을 시급으로 변환하세요. 주휴시간과 월 209시간 기준을 함께 확인할 수 있습니다.",
  keywords: [
    "시급 월급 계산기",
    "2027 최저임금",
    "2027 월급",
    "2026 최저임금",
    "시급 월급 변환",
    "209시간",
    "주휴수당 포함 월급",
  ],
  alternates: { canonical: "/hourly-monthly" },
  openGraph: {
    title: "2026·2027 시급 월급 변환기 | 몇이지?",
    description: "2027 최저임금 10,700원과 월 209시간 기준 월 환산액을 바로 확인하세요.",
    url: "/hourly-monthly",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <CalculatorSeoContent pathname="/hourly-monthly" />
    </>
  );
}

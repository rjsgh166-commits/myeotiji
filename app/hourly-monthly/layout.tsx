import type { Metadata } from "next";
import type { ReactNode } from "react";
import CalculatorSeoContent from "../_components/CalculatorSeoContent";

export const metadata: Metadata = {
  title: "2026 시급 월급 변환기",
  description:
    "시급을 월급으로, 월급을 시급으로 변환하세요. 2026년 최저임금 10,320원과 주휴시간을 반영해 예상 월급과 시급을 계산합니다.",
  keywords: ["시급 월급 계산기", "시급 월급 변환", "2026 최저임금", "월급 시급 계산", "주휴수당 포함 월급"],
  alternates: { canonical: "/hourly-monthly" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <CalculatorSeoContent pathname="/hourly-monthly" />
    </>
  );
}

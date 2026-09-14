import type { Metadata } from "next";
import type { ReactNode } from "react";
import CalculatorSeoContentV29 from "../_components/CalculatorSeoContentV29";

export const metadata: Metadata = {
  title: "음력 계산기 · 양력 음력 변환 · 윤달 확인",
  description:
    "양력 날짜를 음력으로, 음력 날짜를 양력으로 변환하고 평달·윤달과 간지를 확인하세요. 음력 생일과 윤달 계산법도 함께 안내합니다.",
  keywords: [
    "음력 계산기",
    "양력 음력 변환",
    "음력 양력 변환",
    "음력 생일 계산기",
    "윤달 계산",
    "음력 달력",
  ],
  alternates: { canonical: "/lunar" },
  openGraph: {
    title: "음력 계산기 · 양력 음력 변환 | 몇이지?",
    description:
      "양력↔음력 날짜 변환과 평달·윤달을 확인하고, 음력 날짜가 매년 달라지는 이유까지 알아보세요.",
    url: "/lunar",
  },
  twitter: {
    card: "summary",
    title: "음력 계산기 · 양력 음력 변환 | 몇이지?",
    description: "양력↔음력 변환, 윤달 확인, 음력 생일 계산을 한 번에 확인하세요.",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <CalculatorSeoContentV29 pathname="/lunar" />
    </>
  );
}

import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "퇴직금 계산기",
  description:
    "입사일, 마지막 근무일, 최근 3개월 임금과 상여금·연차수당을 입력해 예상 퇴직금과 1일 평균임금을 계산해보세요.",
  keywords: [
    "퇴직금 계산기",
    "퇴직금 계산",
    "평균임금",
    "예상 퇴직금",
  ],
  alternates: {
    canonical: "/retirement",
  },
  openGraph: {
    type: "website",
    url: "/retirement",
    title: "퇴직금 계산기 | 몇이지?",
    description:
      "입사일, 마지막 근무일, 최근 3개월 임금과 상여금·연차수당을 입력해 예상 퇴직금과 1일 평균임금을 계산해보세요.",
  },
  twitter: {
    card: "summary",
    title: "퇴직금 계산기 | 몇이지?",
    description:
      "입사일, 마지막 근무일, 최근 3개월 임금과 상여금·연차수당을 입력해 예상 퇴직금과 1일 평균임금을 계산해보세요.",
  },
};

export default function CalculatorLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}

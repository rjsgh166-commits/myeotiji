import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "주식 물타기·불타기 계산기",
  description:
    "현재 평단과 보유 수량, 추가 매수 가격을 입력해 물타기·불타기 후 새 평단과 목표 평단에 필요한 수량을 계산하세요.",
  keywords: [
    "물타기 계산기",
    "불타기 계산기",
    "주식 평단 계산기",
    "평균단가 계산",
  ],
  alternates: {
    canonical: "/stock-average",
  },
  openGraph: {
    type: "website",
    url: "/stock-average",
    title: "주식 물타기·불타기 계산기 | 몇이지?",
    description:
      "현재 평단과 보유 수량, 추가 매수 가격을 입력해 물타기·불타기 후 새 평단과 목표 평단에 필요한 수량을 계산하세요.",
  },
  twitter: {
    card: "summary",
    title: "주식 물타기·불타기 계산기 | 몇이지?",
    description:
      "현재 평단과 보유 수량, 추가 매수 가격을 입력해 물타기·불타기 후 새 평단과 목표 평단에 필요한 수량을 계산하세요.",
  },
};

export default function CalculatorLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}

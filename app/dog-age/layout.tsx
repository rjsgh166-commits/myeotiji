import type { Metadata } from "next";
import type { ReactNode } from "react";
import CalculatorSeoContentV29 from "../_components/CalculatorSeoContentV29";

export const metadata: Metadata = {
  title: "강아지 나이 계산기 · 사람 나이 환산과 생애단계",
  description:
    "강아지 나이를 사람 나이로 대략 환산하고 소형견·대형견의 노화 차이와 생애단계를 확인하세요. 단순 ×7 공식의 한계도 안내합니다.",
  keywords: [
    "강아지 나이 계산기",
    "강아지 사람 나이",
    "반려견 나이",
    "노령견 나이",
    "강아지 생애단계",
  ],
  alternates: { canonical: "/dog-age" },
  openGraph: {
    title: "강아지 나이 계산기 | 몇이지?",
    description: "강아지 사람 나이 환산과 체구별 노화 차이, 생애단계를 함께 확인하세요.",
    url: "/dog-age",
  },
  twitter: {
    card: "summary",
    title: "강아지 나이 계산기 | 몇이지?",
    description: "반려견 사람 나이 환산과 생애단계를 참고해보세요.",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <CalculatorSeoContentV29 pathname="/dog-age" />
    </>
  );
}

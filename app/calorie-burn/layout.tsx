import type { Metadata } from "next";
import type { ReactNode } from "react";
import CalculatorSeoContentV29 from "../_components/CalculatorSeoContentV29";

export const metadata: Metadata = {
  title: "운동 칼로리 소모량 계산기 · MET 계산",
  description:
    "체중과 운동시간, 활동강도로 예상 칼로리 소모량을 계산하세요. MET 공식과 실제 소비량이 개인마다 달라지는 이유도 함께 안내합니다.",
  keywords: [
    "칼로리 소모 계산기",
    "운동 칼로리 계산기",
    "MET 계산",
    "운동 칼로리",
    "칼로리 소모량",
  ],
  alternates: { canonical: "/calorie-burn" },
  openGraph: {
    title: "운동 칼로리 소모량 계산기 | 몇이지?",
    description: "체중·시간·MET 활동강도로 운동 칼로리 소모량을 추정하세요.",
    url: "/calorie-burn",
  },
  twitter: {
    card: "summary",
    title: "운동 칼로리 계산기 | 몇이지?",
    description: "MET 기준 예상 운동 칼로리와 계산 한계를 확인하세요.",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <CalculatorSeoContentV29 pathname="/calorie-burn" />
    </>
  );
}

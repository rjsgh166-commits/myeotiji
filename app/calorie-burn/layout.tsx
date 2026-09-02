import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "칼로리 소모 계산기",
  description:
    "체중, 운동시간, 운동 종류를 입력해 MET 기준 예상 칼로리 소모량을 계산하세요.",
  keywords: ["칼로리 소모 계산기", "운동 칼로리 계산", "걷기 칼로리", "러닝 칼로리", "MET 계산기"],
  alternates: { canonical: "/calorie-burn" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}

import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "할인율 계산기 · 추가 할인 쿠폰 계산",
  description:
    "정가와 할인율로 최종 가격을 계산하고, 1차 할인·추가 할인·정액 쿠폰을 순서대로 적용한 실제 총 할인율까지 확인하세요.",
  keywords: [
    "할인율 계산기",
    "추가 할인 계산기",
    "중복 할인 계산기",
    "쿠폰 할인 계산기",
    "실제 할인율",
  ],
  alternates: { canonical: "/discount" },
  openGraph: {
    title: "할인율 · 추가 할인 계산기 | 몇이지?",
    description:
      "20% + 10% 추가 할인은 실제 몇 %일까? 쿠폰까지 포함한 최종 가격과 실제 할인율을 계산하세요.",
    url: "/discount",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}

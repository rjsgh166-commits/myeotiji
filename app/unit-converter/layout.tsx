import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "단위변환 계산기",
  description:
    "길이, 넓이, 무게, 부피, 온도, 데이터 용량을 다양한 단위로 빠르게 변환하세요.",
  keywords: ["단위변환 계산기", "평 제곱미터 변환", "kg lb 변환", "인치 cm 변환", "온도 변환"],
  alternates: { canonical: "/unit-converter" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}

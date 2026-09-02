import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "수수료 계산기",
  description:
    "금액과 수수료율을 입력해 수수료 차감액, 추가 부담액, 실수령액과 목표 실수령액 기준 역산 금액을 계산하세요.",
  keywords: ["수수료 계산기", "수수료율 계산", "실수령액 계산", "플랫폼 수수료", "판매 수수료"],
  alternates: { canonical: "/fee" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}

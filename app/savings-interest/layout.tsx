import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "적금 이자 계산기",
  description:
    "월 납입액, 적금 기간, 연 금리, 세율을 입력해 적금 원금과 세전·세후 이자, 만기 예상 수령액을 계산하세요.",
  keywords: ["적금 이자 계산기", "적금 만기 계산", "적금 세후 이자", "월적금 계산기", "예금 적금 이자"],
  alternates: { canonical: "/savings-interest" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}

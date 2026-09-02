import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "할인율 계산기",
  description:
    "정가와 할인율로 할인 후 가격을 계산하거나, 정가와 판매가를 입력해 실제 할인율과 할인 금액을 빠르게 확인하세요.",
  keywords: [
    "할인율 계산기",
    "할인 계산",
    "할인 가격 계산기",
    "몇 퍼센트 할인",
  ],
  alternates: {
    canonical: "/discount",
  },
  openGraph: {
    type: "website",
    url: "/discount",
    title: "할인율 계산기 | 몇이지?",
    description:
      "정가와 할인율로 할인 후 가격을 계산하거나, 정가와 판매가를 입력해 실제 할인율과 할인 금액을 빠르게 확인하세요.",
  },
  twitter: {
    card: "summary",
    title: "할인율 계산기 | 몇이지?",
    description:
      "정가와 할인율로 할인 후 가격을 계산하거나, 정가와 판매가를 입력해 실제 할인율과 할인 금액을 빠르게 확인하세요.",
  },
};

export default function CalculatorLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from "next";
import type { ReactNode } from "react";
import CalculatorSeoContentV29 from "../../_components/CalculatorSeoContentV29";

export const metadata: Metadata = {
  title: "출산예정일 계산기 | 마지막 생리일·임신주수·40주",
  description:
    "마지막 생리 시작일이나 수정일을 입력해 예상 출산일, 현재 임신주수와 남은 날짜를 확인하세요. 생리주기 보정과 임신 40주 계산 기준, 초음파 결과와의 차이도 안내합니다.",
  keywords: [
    "출산예정일 계산기",
    "임신주수 계산기",
    "임신 40주",
    "출산예정일",
    "마지막 생리 예정일",
  ],
  alternates: { canonical: "/due-date" },
  openGraph: {
    title: "출산예정일 계산기 | 마지막 생리일·임신주수·40주",
    description: "마지막 생리 시작일에서 40주·280일 기준 예상 출산일을 참고 계산하세요.",
    url: "/due-date",
  },
  twitter: {
    card: "summary",
    title: "출산예정일 계산기 | 마지막 생리일·임신주수·40주",
    description: "임신 40주 기준 예상 출산일과 계산 기준을 확인하세요.",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <CalculatorSeoContentV29 pathname="/due-date" />
    </>
  );
}

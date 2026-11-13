import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "이직 마지노선 연봉 계산기 | 실수령·출퇴근·근무시간 비교",
  description:
    "현재 직장과 이직 제안을 세후 실수령액, 근무시간, 출퇴근 시간·비용, 복지 체감가치까지 반영해 비교하고 이직 손익분기 연봉을 계산합니다.",
  keywords: [
    "이직 연봉 계산기",
    "이직 마지노선 연봉",
    "연봉 비교",
    "이직 손익분기",
    "출퇴근 시간 연봉",
    "실질 시급",
  ],
  alternates: { canonical: "/job-change" },
  openGraph: {
    type: "website",
    url: "/job-change",
    title: "이직 마지노선 연봉 계산기 | 몇이지?",
    description:
      "연봉 숫자만 보지 말고 실수령·근무시간·출퇴근 비용까지 반영해 이직 마지노선을 계산해보세요.",
  },
};

export default function JobChangeLayout({ children }: { children: ReactNode }) {
  return children;
}

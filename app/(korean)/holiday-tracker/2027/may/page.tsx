import type { Metadata } from "next";
import HolidayGuidePage from "../_components/HolidayGuidePage";
import { GUIDES } from "../_lib/guides";

export const metadata: Metadata = {
  title: '2027년 5월 공휴일·황금연휴 | 연차 조합 비교',
  description: '2027년 5월 노동절·어린이날과 대체공휴일을 일정별로 확인하세요. 연차 1일·3일 조합을 비교하고 내 연차 일수에 맞는 휴가 계획을 세워보세요.',
  keywords: [
    '2027 5월 황금연휴',
    '2027 노동절 대체공휴일',
    '2027 어린이날 연휴',
    '5월 연차 추천',
  ],
  alternates: { canonical: "/holiday-tracker/2027/may" },
  openGraph: {
    type: "article",
    url: "/holiday-tracker/2027/may",
    title: '2027년 5월 공휴일·황금연휴 | 연차 조합 비교',
    description: '2027년 5월 노동절·어린이날과 대체공휴일을 일정별로 확인하세요. 연차 1일·3일 조합을 비교하고 내 연차 일수에 맞는 휴가 계획을 세워보세요.',
  },
};

export default function Page() {
  return <HolidayGuidePage guide={GUIDES['may']} />;
}

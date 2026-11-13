import type { Metadata } from "next";
import HolidayGuidePage from "../_components/HolidayGuidePage";
import { GUIDES } from "../_lib/guides";

export const metadata: Metadata = {
  title: '2027년 5월 황금연휴 | 연차 1일로 5일 쉬기',
  description: '2027년 5월 노동절·대체공휴일·어린이날을 연결하는 연차 조합. 5월 4일 연차 1일로 5일, 연차 3일로 9일 쉬는 방법을 확인하세요.',
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
    title: '2027년 5월 황금연휴 | 연차 1일로 5일 쉬기',
    description: '2027년 5월 노동절·대체공휴일·어린이날을 연결하는 연차 조합. 5월 4일 연차 1일로 5일, 연차 3일로 9일 쉬는 방법을 확인하세요.',
  },
};

export default function Page() {
  return <HolidayGuidePage guide={GUIDES['may']} />;
}

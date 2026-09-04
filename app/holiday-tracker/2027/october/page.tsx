import type { Metadata } from "next";
import HolidayGuidePage from "../_components/HolidayGuidePage";
import { GUIDES } from "../_lib/guides";

export const metadata: Metadata = {
  title: '2027년 10월 황금연휴 | 개천절·한글날 연차 전략',
  description: '2027년 10월은 개천절·한글날 대체공휴일로 3일 연휴가 두 번입니다. 연차 2일을 나눠 4일씩 쉬거나 연차 4일로 10일 쉬는 방법을 비교하세요.',
  keywords: [
    '2027 10월 황금연휴',
    '2027 개천절 대체공휴일',
    '2027 한글날 대체공휴일',
    '10월 연차 추천',
  ],
  alternates: { canonical: "/holiday-tracker/2027/october" },
  openGraph: {
    type: "article",
    url: "/holiday-tracker/2027/october",
    title: '2027년 10월 황금연휴 | 개천절·한글날 연차 전략',
    description: '2027년 10월은 개천절·한글날 대체공휴일로 3일 연휴가 두 번입니다. 연차 2일을 나눠 4일씩 쉬거나 연차 4일로 10일 쉬는 방법을 비교하세요.',
  },
};

export default function Page() {
  return <HolidayGuidePage guide={GUIDES['october']} />;
}

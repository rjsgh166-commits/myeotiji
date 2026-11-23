import type { Metadata } from "next";
import HolidayGuidePage from "../_components/HolidayGuidePage";
import { GUIDES } from "../_lib/guides";

export const metadata: Metadata = {
  title: '2027년 추석 연휴 날짜·일정 | 연차 1일·2일 비교',
  description: '2027년 추석 연휴 날짜와 앞뒤 주말을 일정별로 확인하세요. 연차를 쓰지 않을 때와 1일·2일 쓸 때의 휴가 일정을 비교하고 내 연차로 계획해보세요.',
  keywords: [
    '2027 추석',
    '2027 추석 연휴',
    '2027 황금연휴',
    '추석 연차',
    '연차 2일 9일',
  ],
  alternates: { canonical: "/holiday-tracker/2027/chuseok" },
  openGraph: {
    type: "article",
    url: "/holiday-tracker/2027/chuseok",
    title: '2027년 추석 연휴 날짜·일정 | 연차 1일·2일 비교',
    description: '2027년 추석 연휴 날짜와 앞뒤 주말을 일정별로 확인하세요. 연차를 쓰지 않을 때와 1일·2일 쓸 때의 휴가 일정을 비교하고 내 연차로 계획해보세요.',
  },
};

export default function Page() {
  return <HolidayGuidePage guide={GUIDES['chuseok']} />;
}

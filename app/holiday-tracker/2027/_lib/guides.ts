export type HolidayGuidePlan = {
  title: string;
  period: string;
  pto: string;
  total: string;
  note: string;
  badge?: string;
};

export type HolidayGuideFaq = {
  question: string;
  answer: string;
};

export type HolidayGuide = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  heroValue: string;
  heroLabel: string;
  heroNote: string;
  keyFacts: { value: string; label: string }[];
  planHeading: string;
  planIntro: string;
  plans: HolidayGuidePlan[];
  insightHeading: string;
  insights: string[];
  faqs: HolidayGuideFaq[];
  shareTitle: string;
  shareText: string;
  imageTitle: string;
  imageLines: { label: string; value: string; strong?: boolean }[];
  plannerBudget: number;
  plannerStyle: "long" | "efficient" | "frequent";
  related: string[];
};

export const GUIDE_NAV = [
  { slug: "chuseok", label: "2027 추석", sub: "연차 2일 → 9일" },
  { slug: "seollal", label: "2027 설날", sub: "기본 4일 연휴" },
  { slug: "pto-1", label: "연차 1일", sub: "최대 6일 휴가" },
  { slug: "pto-2", label: "연차 2일", sub: "최대 9일 휴가" },
  { slug: "may", label: "2027년 5월", sub: "연차 1일 → 5일" },
  { slug: "october", label: "2027년 10월", sub: "두 번의 3일 연휴" },
] as const;

export const GUIDES: Record<string, HolidayGuide> = {
  chuseok: {
    slug: "chuseok",
    eyebrow: "2027 추석 황금연휴",
    title: "2027 추석, 연차 2일로 9일 쉬기",
    description:
      "2027년 추석 연휴는 9월 14일(화)부터 16일(목)까지예요. 9월 13일(월)과 17일(금)에 연차를 쓰면 앞뒤 주말이 연결돼 9월 11일부터 19일까지 9일 연속으로 쉴 수 있습니다.",
    heroValue: "연차 2일 → 9일",
    heroLabel: "9/11(토) ~ 9/19(일)",
    heroNote: "추천 연차: 9/13(월), 9/17(금)",
    keyFacts: [
      { value: "9/14~16", label: "공식 추석 연휴" },
      { value: "6일", label: "연차 1일 사용 시" },
      { value: "9일", label: "연차 2일 사용 시" },
    ],
    planHeading: "연차를 몇 일 쓸지에 따라 이렇게 달라져요",
    planIntro: "하루만 쓸 때도 6일, 이틀을 앞뒤로 붙이면 9일이 됩니다.",
    plans: [
      { title: "연차 1일 · 앞에 붙이기", period: "9/11(토) ~ 9/16(목)", pto: "9/13(월)", total: "6일", note: "주말 + 연차 1일 + 추석 3일을 연결합니다.", badge: "효율 6.0배" },
      { title: "연차 1일 · 뒤에 붙이기", period: "9/14(화) ~ 9/19(일)", pto: "9/17(금)", total: "6일", note: "추석 3일 뒤 금요일 연차를 붙여 주말까지 쉽니다.", badge: "효율 6.0배" },
      { title: "연차 2일 · 최장 조합", period: "9/11(토) ~ 9/19(일)", pto: "9/13(월), 9/17(금)", total: "9일", note: "추석 앞뒤 평일을 모두 연결하는 2027년 대표 황금연휴입니다.", badge: "BEST" },
    ],
    insightHeading: "왜 2027 추석이 가장 강한가요?",
    insights: [
      "공식 추석 연휴가 화·수·목에 있어 앞뒤 평일이 월요일과 금요일 딱 2일만 남습니다.",
      "이 두 날을 연차로 채우면 앞 주말과 뒤 주말이 동시에 연결돼 9일 연속 휴식이 됩니다.",
      "연차가 1일뿐이라면 9/13과 9/17 중 일정에 맞는 한쪽만 골라도 6일을 확보할 수 있어요.",
    ],
    faqs: [
      { question: "2027년 추석 당일은 언제인가요?", answer: "2027년 추석 당일은 9월 15일 수요일이고, 공식 추석 연휴는 9월 14일 화요일부터 16일 목요일까지입니다." },
      { question: "연차 1일만 쓰면 며칠 쉴 수 있나요?", answer: "9월 13일 월요일 또는 17일 금요일 중 하루를 쓰면 앞뒤 주말과 연결해 6일 연속으로 쉴 수 있습니다." },
      { question: "연차 2일이면 왜 9일인가요?", answer: "9월 13일과 17일을 모두 연차로 쓰면 9월 11~12일 주말, 14~16일 추석, 18~19일 주말이 하나로 이어져 총 9일입니다." },
    ],
    shareTitle: "2027 추석 황금연휴",
    shareText: "🍯 2027 추석\n연차 2일 → 9일 휴가\n9/11(토) ~ 9/19(일)\n추천 연차: 9/13(월), 9/17(금)",
    imageTitle: "연차 2일로 9일 휴가",
    imageLines: [
      { label: "추석 연휴", value: "9/14 ~ 9/16" },
      { label: "추천 연차", value: "9/13 · 9/17", strong: true },
      { label: "최종 휴가", value: "9/11 ~ 9/19" },
      { label: "연속 휴식", value: "9일", strong: true },
    ],
    plannerBudget: 2,
    plannerStyle: "long",
    related: ["pto-1", "pto-2", "october"],
  },
  seollal: {
    slug: "seollal",
    eyebrow: "2027 설날 연휴",
    title: "2027 설날, 기본 4일에 연차를 붙이는 법",
    description:
      "2027년 설날은 2월 7일(일)이고 공식 연휴는 2월 6일(토)부터 9일(화)까지 4일이에요. 연차 1일을 앞이나 뒤에 붙이면 5일, 연차 2일이면 6일까지 이어서 쉴 수 있습니다.",
    heroValue: "기본 4일 연휴",
    heroLabel: "2/6(토) ~ 2/9(화)",
    heroNote: "설날 대체공휴일 2/9(화) 포함",
    keyFacts: [
      { value: "2/7", label: "설날 당일" },
      { value: "5일", label: "연차 1일 사용 시" },
      { value: "6일", label: "연차 2일 사용 시" },
    ],
    planHeading: "설 연휴를 하루씩 늘리는 방법",
    planIntro: "귀성·여행 일정에 따라 연휴 앞 또는 뒤를 선택할 수 있어요.",
    plans: [
      { title: "연차 없이", period: "2/6(토) ~ 2/9(화)", pto: "사용 없음", total: "4일", note: "토요일부터 설 대체공휴일 화요일까지 공식적으로 이어집니다.", badge: "기본 연휴" },
      { title: "연차 1일", period: "2/5(금) ~ 2/9(화)", pto: "2/5(금)", total: "5일", note: "설 연휴 전 금요일을 붙이는 가장 단순한 조합입니다.", badge: "연차 1일" },
      { title: "연차 2일", period: "2/4(목) ~ 2/9(화)", pto: "2/4(목), 2/5(금)", total: "6일", note: "목·금 이틀을 쓰면 설 연휴 전부터 6일 연속으로 쉴 수 있습니다.", badge: "연차 2일" },
    ],
    insightHeading: "설날은 추석과 전략이 조금 달라요",
    insights: [
      "2027년 설은 이미 토~화 4일이 붙어 있어 연차를 쓰지 않아도 긴 편입니다.",
      "연차 1일의 효율은 5일 휴가로, 추석의 연차 1일 → 6일보다는 낮지만 이동 일정이 많은 명절에는 활용도가 높아요.",
      "회사 일정상 연휴 전 사용이 어렵다면 2/10(수) 쪽으로 붙여도 같은 방식으로 휴가를 늘릴 수 있습니다.",
    ],
    faqs: [
      { question: "2027 설날 대체공휴일은 언제인가요?", answer: "2027년 설날 대체공휴일은 2월 9일 화요일입니다. 공식 설 연휴와 연결해 2월 6일부터 9일까지 4일이 이어집니다." },
      { question: "설날에 연차 1일을 언제 쓰는 게 좋나요?", answer: "연휴 전이라면 2월 5일 금요일을 추천합니다. 그러면 2월 5일부터 9일까지 5일 연속 휴식이 됩니다." },
      { question: "연차 없이도 4일을 쉬나요?", answer: "주5일 근무 기준으로 토요일 2월 6일부터 대체공휴일 2월 9일까지 4일이 연속으로 이어집니다." },
    ],
    shareTitle: "2027 설날 연휴",
    shareText: "🍯 2027 설날\n기본 4일 연휴 · 2/6(토) ~ 2/9(화)\n연차 1일이면 5일, 연차 2일이면 6일",
    imageTitle: "2027 설날 연휴",
    imageLines: [
      { label: "공식 연휴", value: "2/6 ~ 2/9", strong: true },
      { label: "연차 1일", value: "최대 5일" },
      { label: "연차 2일", value: "최대 6일" },
      { label: "대체공휴일", value: "2/9(화)" },
    ],
    plannerBudget: 2,
    plannerStyle: "long",
    related: ["pto-1", "pto-2", "may"],
  },
  "pto-1": {
    slug: "pto-1",
    eyebrow: "2027 연차 1일 황금연휴",
    title: "2027 연차 1일로 가장 오래 쉬는 날",
    description:
      "연차를 딱 하루만 쓸 수 있다면 2027년에는 추석이 가장 강합니다. 9월 13일 또는 17일 하루로 6일을 만들 수 있고, 설날·5월에는 5일까지 이어서 쉴 수 있어요.",
    heroValue: "연차 1일 → 최대 6일",
    heroLabel: "1위는 2027 추석",
    heroNote: "9/13(월) 또는 9/17(금) 중 하루",
    keyFacts: [
      { value: "6일", label: "최장 연속 휴식" },
      { value: "2개", label: "추석 6일 조합" },
      { value: "5일", label: "설·5월 차선책" },
    ],
    planHeading: "연차 1일 추천 TOP",
    planIntro: "주5일 근무 기준으로 공휴일과 주말 사이 평일 하루를 연결했습니다.",
    plans: [
      { title: "1위 · 추석 앞", period: "9/11(토) ~ 9/16(목)", pto: "9/13(월)", total: "6일", note: "연차 하루 효율이 가장 좋은 대표 조합입니다.", badge: "6.0배" },
      { title: "1위 · 추석 뒤", period: "9/14(화) ~ 9/19(일)", pto: "9/17(금)", total: "6일", note: "앞 조합과 동일하게 연차 1일로 6일을 쉽니다.", badge: "6.0배" },
      { title: "설날", period: "2/5(금) ~ 2/9(화)", pto: "2/5(금)", total: "5일", note: "기본 4일 설 연휴 앞에 금요일 하루를 붙입니다.", badge: "5.0배" },
      { title: "5월", period: "5/1(토) ~ 5/5(수)", pto: "5/4(화)", total: "5일", note: "노동절 대체공휴일과 어린이날 사이 하루를 연결합니다.", badge: "5.0배" },
    ],
    insightHeading: "연차 1일은 ‘사이 하루’를 찾는 게 핵심이에요",
    insights: [
      "공휴일과 주말 사이에 평일 하루만 끼어 있는 구간이 연차 1일 효율이 가장 좋습니다.",
      "2027년 추석은 평일 3일 연휴 양쪽에 주말이 있어, 어느 한쪽만 연결해도 6일이 됩니다.",
      "추석을 쓰기 어렵다면 설날 2/5 또는 5월 5/4가 5일 휴가를 만드는 좋은 대안입니다.",
    ],
    faqs: [
      { question: "2027년에 연차 1일로 가장 길게 쉬는 때는 언제인가요?", answer: "추석입니다. 9월 13일 월요일 또는 17일 금요일 하루를 쓰면 6일 연속 휴식이 가능합니다." },
      { question: "추석 말고 5일 이상 쉴 수 있는 곳도 있나요?", answer: "설 연휴 전 2월 5일 금요일 또는 5월 4일 화요일을 쓰면 각각 5일 연속 휴식이 가능합니다." },
      { question: "연차 1일 효율은 어떻게 보나요?", answer: "몇이지?는 사용 연차 대비 연속 휴식일을 함께 보여줍니다. 같은 연차 1일이라면 4일보다는 5~6일로 이어지는 구간을 우선 추천합니다." },
    ],
    shareTitle: "2027 연차 1일 황금연휴",
    shareText: "🍯 2027 연차 1일 BEST\n추석에 하루만 붙이면 최대 6일 휴가\n9/13(월) 또는 9/17(금)",
    imageTitle: "연차 1일로 최대 6일",
    imageLines: [
      { label: "1위", value: "2027 추석", strong: true },
      { label: "추천 ①", value: "9/13(월)" },
      { label: "추천 ②", value: "9/17(금)" },
      { label: "연속 휴식", value: "최대 6일", strong: true },
    ],
    plannerBudget: 1,
    plannerStyle: "efficient",
    related: ["chuseok", "pto-2", "may"],
  },
  "pto-2": {
    slug: "pto-2",
    eyebrow: "2027 연차 2일 황금연휴",
    title: "2027 연차 2일로 가장 오래 쉬는 조합",
    description:
      "연차 2일을 한 번에 쓸 수 있다면 2027년 추석이 압도적입니다. 9월 13일과 17일을 사용해 9일 연속 휴가를 만들 수 있고, 설날과 5월에는 6일 조합이 가능합니다.",
    heroValue: "연차 2일 → 최대 9일",
    heroLabel: "9/11(토) ~ 9/19(일)",
    heroNote: "추천 연차: 9/13(월), 9/17(금)",
    keyFacts: [
      { value: "9일", label: "추석 최장 조합" },
      { value: "6일", label: "설날 차선책" },
      { value: "6일", label: "5월 차선책" },
    ],
    planHeading: "연차 2일 추천 조합",
    planIntro: "두 날을 어디에 붙이느냐에 따라 한 번 길게 쉬거나 다른 시기의 휴가를 만들 수 있어요.",
    plans: [
      { title: "1위 · 추석", period: "9/11(토) ~ 9/19(일)", pto: "9/13(월), 9/17(금)", total: "9일", note: "2027년 전체에서 가장 강한 연차 2일 조합입니다.", badge: "BEST" },
      { title: "2위 · 설날", period: "2/4(목) ~ 2/9(화)", pto: "2/4(목), 2/5(금)", total: "6일", note: "기본 4일 설 연휴 앞에 목·금을 연결합니다.", badge: "6일" },
      { title: "2위 · 5월", period: "4/30(금) ~ 5/5(수)", pto: "4/30(금), 5/4(화)", total: "6일", note: "노동절 대체공휴일과 어린이날을 앞 금요일까지 확장합니다.", badge: "6일" },
      { title: "대안 · 10월", period: "10/2(토) ~ 10/6(수)", pto: "10/5(화), 10/6(수)", total: "5일", note: "개천절 3일 연휴 뒤에 이틀을 붙이는 조합입니다.", badge: "5일" },
    ],
    insightHeading: "연차 2일은 ‘한 번 길게’와 ‘나눠 쓰기’를 비교하세요",
    insights: [
      "가장 긴 한 번의 휴가가 목표라면 추석 9일이 정답에 가깝습니다.",
      "하지만 연차 2일을 한 번에 쓰지 않고 1일씩 나누면 10월처럼 4일 연휴를 두 번 만드는 선택도 가능해요.",
      "남은 연차가 더 많다면 꿀연휴 플래너의 ‘한 번 길게 / 효율 / 자주 쉬기’ 모드로 전체 연차를 배분해보세요.",
    ],
    faqs: [
      { question: "2027 연차 2일 최장 연휴는 며칠인가요?", answer: "추석 앞뒤인 9월 13일과 17일을 연차로 쓰면 9월 11일부터 19일까지 9일입니다." },
      { question: "연차 2일로 6일 쉬는 다른 시기도 있나요?", answer: "설 연휴 앞 2월 4~5일을 쓰거나, 5월에 4월 30일과 5월 4일을 쓰는 방식으로 6일 연속 휴식을 만들 수 있습니다." },
      { question: "연차 2일을 따로 쓰는 게 더 나을 수도 있나요?", answer: "네. 한 번의 최장 휴가가 아니라 자주 쉬는 것이 목적이라면 서로 다른 3일 연휴에 하루씩 붙여 4일 휴가를 두 번 만드는 방식이 더 잘 맞을 수 있습니다." },
    ],
    shareTitle: "2027 연차 2일 황금연휴",
    shareText: "🍯 2027 연차 2일 BEST\n추석 9/13 + 9/17 연차 → 9일 휴가\n9/11(토) ~ 9/19(일)",
    imageTitle: "연차 2일로 최대 9일",
    imageLines: [
      { label: "1위", value: "2027 추석", strong: true },
      { label: "추천 연차", value: "9/13 · 9/17" },
      { label: "휴가 기간", value: "9/11 ~ 9/19" },
      { label: "연속 휴식", value: "9일", strong: true },
    ],
    plannerBudget: 2,
    plannerStyle: "long",
    related: ["chuseok", "pto-1", "seollal"],
  },
  may: {
    slug: "may",
    eyebrow: "2027년 5월 황금연휴",
    title: "2027년 5월, 연차 1일로 5일 쉬기",
    description:
      "2027년 5월에는 노동절 5월 1일, 노동절 대체공휴일 5월 3일, 어린이날 5월 5일이 가까이 모여 있어요. 5월 4일 화요일에 연차 하루를 쓰면 5월 1일부터 5일까지 5일 연속 휴식이 됩니다.",
    heroValue: "연차 1일 → 5일",
    heroLabel: "5/1(토) ~ 5/5(수)",
    heroNote: "추천 연차: 5/4(화)",
    keyFacts: [
      { value: "5/1", label: "노동절" },
      { value: "5/3", label: "노동절 대체공휴일" },
      { value: "5/5", label: "어린이날" },
    ],
    planHeading: "5월은 연차 개수에 따라 이렇게 늘어납니다",
    planIntro: "노동절·어린이날 사이의 평일을 연결하는 것이 핵심이에요.",
    plans: [
      { title: "연차 없이", period: "5/1(토) ~ 5/3(월)", pto: "사용 없음", total: "3일", note: "노동절과 대체공휴일 덕분에 기본 3일 연휴입니다.", badge: "기본" },
      { title: "연차 1일", period: "5/1(토) ~ 5/5(수)", pto: "5/4(화)", total: "5일", note: "노동절 연휴와 어린이날 사이 하루를 메웁니다.", badge: "효율 5.0배" },
      { title: "연차 2일", period: "4/30(금) ~ 5/5(수)", pto: "4/30(금), 5/4(화)", total: "6일", note: "연휴 시작을 금요일까지 당겨 6일로 확장합니다.", badge: "6일" },
      { title: "연차 3일", period: "5/1(토) ~ 5/9(일)", pto: "5/4(화), 5/6(목), 5/7(금)", total: "9일", note: "어린이날 뒤 목·금까지 연결해 다음 주말까지 쉽니다.", badge: "9일" },
    ],
    insightHeading: "5월에는 두 번째 휴가 후보도 있어요",
    insights: [
      "5월 13일 목요일은 부처님오신날이라 5월 14일 금요일에 연차를 쓰면 13일부터 16일까지 4일을 쉴 수 있습니다.",
      "즉 5월 초 한 번 길게 쉬거나, 5월 초와 중순에 나눠 쉬는 전략을 선택할 수 있어요.",
      "연차가 제한적이면 5월 4일 하루가 가장 직관적인 선택입니다.",
    ],
    faqs: [
      { question: "2027 노동절 대체공휴일은 언제인가요?", answer: "2027년 노동절은 5월 1일 토요일이고 대체공휴일은 5월 3일 월요일입니다." },
      { question: "5월 연차 1일은 언제 쓰는 게 가장 좋은가요?", answer: "5월 4일 화요일을 쓰면 5월 1일부터 어린이날인 5월 5일까지 5일 연속으로 쉴 수 있습니다." },
      { question: "부처님오신날도 활용할 수 있나요?", answer: "네. 2027년 부처님오신날은 5월 13일 목요일이라 5월 14일 금요일에 연차를 쓰면 주말까지 4일 연속 휴식이 됩니다." },
    ],
    shareTitle: "2027년 5월 황금연휴",
    shareText: "🍯 2027년 5월\n5/4(화) 연차 1일 → 5일 휴가\n5/1(토) ~ 5/5(수)",
    imageTitle: "5월 연차 1일로 5일",
    imageLines: [
      { label: "노동절", value: "5/1(토)" },
      { label: "대체공휴일", value: "5/3(월)" },
      { label: "추천 연차", value: "5/4(화)", strong: true },
      { label: "최종 휴가", value: "5일", strong: true },
    ],
    plannerBudget: 3,
    plannerStyle: "efficient",
    related: ["pto-1", "pto-2", "october"],
  },
  october: {
    slug: "october",
    eyebrow: "2027년 10월 황금연휴",
    title: "2027년 10월, 두 번의 3일 연휴를 어떻게 쓸까?",
    description:
      "2027년 10월에는 개천절과 한글날이 모두 주말과 겹치면서 각각 월요일 대체공휴일이 생겨요. 10월 2~4일, 9~11일 두 번의 3일 연휴가 있고, 연차 4일을 사이에 쓰면 10일 연속 휴가로 연결할 수도 있습니다.",
    heroValue: "3일 연휴가 2번",
    heroLabel: "10/2~4 · 10/9~11",
    heroNote: "연차 4일(10/5~8)이면 10일 연속 휴가",
    keyFacts: [
      { value: "10/4", label: "개천절 대체공휴일" },
      { value: "10/11", label: "한글날 대체공휴일" },
      { value: "10일", label: "연차 4일 연결 시" },
    ],
    planHeading: "길게 한 번 vs 짧게 두 번",
    planIntro: "10월은 휴가 스타일에 따라 선택지가 분명하게 갈립니다.",
    plans: [
      { title: "연차 없이 · 첫 번째", period: "10/2(토) ~ 10/4(월)", pto: "사용 없음", total: "3일", note: "개천절과 대체공휴일로 만드는 첫 번째 3일 연휴입니다.", badge: "3일" },
      { title: "연차 없이 · 두 번째", period: "10/9(토) ~ 10/11(월)", pto: "사용 없음", total: "3일", note: "한글날과 대체공휴일로 만드는 두 번째 3일 연휴입니다.", badge: "3일" },
      { title: "연차 2일 · 나눠 쓰기", period: "10/1~4 + 10/8~11", pto: "10/1(금), 10/8(금)", total: "4일 × 2회", note: "연차를 하루씩 나눠 두 번의 4일 휴가를 만듭니다.", badge: "자주 쉬기" },
      { title: "연차 4일 · 한 번 길게", period: "10/2(토) ~ 10/11(월)", pto: "10/5(화) ~ 10/8(금)", total: "10일", note: "두 3일 연휴 사이 평일 4일을 모두 메워 하나의 장기 휴가로 연결합니다.", badge: "10일" },
    ],
    insightHeading: "10월은 ‘어떻게 쉬고 싶은지’가 더 중요해요",
    insights: [
      "연차가 부족하면 아무것도 쓰지 않아도 3일 연휴를 두 번 확보합니다.",
      "연차 2일을 하루씩 나누면 4일 휴가를 두 번 만들 수 있어 자주 쉬기 스타일에 잘 맞습니다.",
      "장거리 여행처럼 한 번 길게 쉬고 싶다면 10월 5~8일 연차 4일로 두 연휴를 10일로 연결할 수 있어요.",
    ],
    faqs: [
      { question: "2027년 10월 대체공휴일은 언제인가요?", answer: "개천절 대체공휴일은 10월 4일 월요일, 한글날 대체공휴일은 10월 11일 월요일입니다." },
      { question: "연차 없이도 3일 연휴가 두 번인가요?", answer: "네. 주5일 근무 기준으로 10월 2~4일과 10월 9~11일이 각각 3일 연휴입니다." },
      { question: "10일 연휴를 만들려면 연차가 며칠 필요한가요?", answer: "두 연휴 사이인 10월 5일 화요일부터 8일 금요일까지 연차 4일을 사용하면 10월 2일부터 11일까지 10일 연속으로 쉴 수 있습니다." },
    ],
    shareTitle: "2027년 10월 황금연휴",
    shareText: "🍯 2027년 10월\n3일 연휴가 두 번!\n10/5~8 연차 4일을 쓰면 10/2~11 총 10일 휴가",
    imageTitle: "10월, 두 번 쉬거나 10일 쉬거나",
    imageLines: [
      { label: "첫 연휴", value: "10/2 ~ 10/4" },
      { label: "둘째 연휴", value: "10/9 ~ 10/11" },
      { label: "연결 연차", value: "10/5 ~ 10/8" },
      { label: "최장 휴가", value: "10일", strong: true },
    ],
    plannerBudget: 4,
    plannerStyle: "frequent",
    related: ["may", "pto-1", "pto-2"],
  },
};

export type CalculatorItem = {
  href: string;
  icon: string;
  title: string;
  shortTitle: string;
  description: string;
  aliases: string[];
  category: "work" | "finance" | "housing" | "date" | "life";
};

export const CALCULATORS: CalculatorItem[] = [
  {
    href: "/salary",
    icon: "💰",
    title: "연봉 실수령액",
    shortTitle: "연봉 실수령액",
    description: "실수령액 계산 + 이직 연봉 비교",
    aliases: ["연봉", "월급", "실수령액", "세후", "세전", "급여", "연봉계산기", "월급계산기", "연봉비교", "이직연봉", "연봉인상", "협상연봉"],
    category: "work",
  },
  {
    href: "/retirement",
    icon: "🏦",
    title: "퇴직금",
    shortTitle: "퇴직금",
    description: "퇴직하면 받을 금액 계산",
    aliases: ["퇴직", "퇴직금계산기", "평균임금", "퇴사", "퇴사금"],
    category: "work",
  },
  {
    href: "/weekly-pay",
    icon: "🧾",
    title: "주휴수당",
    shortTitle: "주휴수당",
    description: "내 주휴수당은 얼마일까?",
    aliases: ["주휴", "주휴수당계산기", "알바", "아르바이트", "15시간", "주급", "2027주휴수당", "2027최저임금"],
    category: "work",
  },
  {
    href: "/unemployment",
    icon: "🛟",
    title: "실업급여",
    shortTitle: "실업급여",
    description: "2026년 예상 구직급여와 지급일수 계산",
    aliases: ["구직급여", "실업", "고용보험", "실업급여계산기", "퇴사"],
    category: "work",
  },
  {
    href: "/hourly-monthly",
    icon: "⏱️",
    title: "시급 ↔ 월급",
    shortTitle: "시급↔월급",
    description: "시급을 월급으로, 월급을 시급으로 변환",
    aliases: ["시급", "월급", "최저임금", "209시간", "급여환산", "시급계산기", "2027최저임금", "2027월급"],
    category: "work",
  },
  {
    href: "/annual-leave",
    icon: "🏖️",
    title: "연차 발생일수",
    shortTitle: "연차",
    description: "입사일 기준 법정 연차 발생일수 계산",
    aliases: ["연차", "휴가", "연차계산기", "입사일", "근속", "연차개수"],
    category: "work",
  },

  {
    href: "/loan",
    icon: "🏠",
    title: "대출이자",
    shortTitle: "대출이자",
    description: "월 상환액·총이자 계산 + 대출 비교",
    aliases: ["대출", "이자", "원리금균등", "원금균등", "만기일시", "주담대", "주택담보대출", "대출계산기", "대출비교", "금리비교", "총이자비교"],
    category: "finance",
  },
  {
    href: "/compound",
    icon: "🌱",
    title: "복리",
    shortTitle: "복리",
    description: "장기 투자금이 복리로 얼마나 불어날까?",
    aliases: ["복리계산기", "투자", "수익률", "재투자", "장기투자", "ETF"],
    category: "finance",
  },
  {
    href: "/savings-interest",
    icon: "🏦",
    title: "적금 이자",
    shortTitle: "적금이자",
    description: "적금 세전·세후 이자와 만기금액 계산",
    aliases: ["적금", "이자", "만기", "세후이자", "세전이자", "적금계산기"],
    category: "finance",
  },
  {
    href: "/goal-savings",
    icon: "🎯",
    title: "목표금액 모으기",
    shortTitle: "목표금액",
    description: "목표금액까지 몇 년이 걸릴까?",
    aliases: ["1억", "돈모으기", "저축", "목표금액", "목돈", "재테크", "모으기"],
    category: "finance",
  },
  {
    href: "/stock-average",
    icon: "📈",
    title: "주식 물타기 · 불타기",
    shortTitle: "주식 평단",
    description: "추가매수 후 평단과 목표 평단 계산",
    aliases: ["물타기", "불타기", "평단", "평균단가", "주식", "추가매수", "평단가"],
    category: "finance",
  },
  {
    href: "/fee",
    icon: "🧮",
    title: "수수료",
    shortTitle: "수수료",
    description: "수수료와 실수령액을 빠르게 계산",
    aliases: ["수수료계산기", "수수료", "실수령", "정산", "플랫폼수수료"],
    category: "finance",
  },

  {
    href: "/rent-conversion",
    icon: "🏘️",
    title: "전월세 전환율",
    shortTitle: "전월세 전환",
    description: "보증금과 월세를 서로 환산",
    aliases: ["전세", "월세", "보증금", "전월세", "전환율", "반전세", "월세환산"],
    category: "housing",
  },
  {
    href: "/median-income",
    icon: "📊",
    title: "기준 중위소득",
    shortTitle: "중위소득",
    description: "내 소득은 중위소득의 몇 %일까?",
    aliases: ["중위소득", "복지", "생계급여", "의료급여", "주거급여", "교육급여", "소득인정액", "2027중위소득", "2027기준중위소득"],
    category: "housing",
  },

  {
    href: "/days",
    icon: "📆",
    title: "며칠이지?",
    shortTitle: "며칠이지?",
    description: "태어난 날부터 D-Day와 요일까지",
    aliases: ["며칠", "몇일", "디데이", "D-Day", "Dday", "기념일", "100일", "200일", "전역일", "시험일", "입사일"],
    category: "date",
  },
  {
    href: "/age",
    icon: "📅",
    title: "만나이",
    shortTitle: "만나이",
    description: "내 정확한 만나이와 다음 생일 확인",
    aliases: ["나이", "만나이계산기", "생일", "한국나이", "연나이"],
    category: "date",
  },
  {
    href: "/lunar",
    icon: "🌙",
    title: "음력 계산기",
    shortTitle: "음력",
    description: "양력과 음력을 서로 변환",
    aliases: ["음력", "양력", "음력변환", "양력변환", "윤달", "제사", "음력생일"],
    category: "date",
  },
  {
    href: "/holiday-tracker",
    icon: "🍯",
    title: "꿀연휴 추적기",
    shortTitle: "꿀연휴",
    description: "연차 조금 쓰고 길게 쉬는 해 찾기",
    aliases: ["연휴", "꿀연휴", "공휴일", "연차추천", "휴가", "황금연휴", "쉬는날", "2027황금연휴", "2027공휴일", "2027연휴"],
    category: "date",
  },
  {
    href: "/due-date",
    icon: "🤰",
    title: "출산 예정일",
    shortTitle: "출산예정일",
    description: "예상 출산일과 임신 주수 계산",
    aliases: ["임신", "출산", "예정일", "임신주수", "배란", "마지막생리", "출산일"],
    category: "date",
  },

  {
    href: "/discount",
    icon: "🛒",
    title: "할인율",
    shortTitle: "할인율",
    description: "추가 할인·쿠폰까지 실제 할인율 계산",
    aliases: ["할인", "세일", "할인가", "정가", "할인율계산기", "쿠폰", "몇퍼센트", "추가할인", "중복할인", "쿠폰할인", "실제할인율"],
    category: "life",
  },
  {
    href: "/unit-converter",
    icon: "📏",
    title: "단위변환",
    shortTitle: "단위변환",
    description: "길이·넓이·무게·부피·온도 변환",
    aliases: ["단위", "평수", "평", "제곱미터", "인치", "센치", "cm", "kg", "lb", "파운드", "온도"],
    category: "life",
  },
  {
    href: "/calorie-burn",
    icon: "🔥",
    title: "칼로리 소모",
    shortTitle: "칼로리",
    description: "운동별 예상 소모 칼로리 계산",
    aliases: ["칼로리", "운동", "걷기", "달리기", "러닝", "자전거", "수영", "MET"],
    category: "life",
  },
  {
    href: "/dog-age",
    icon: "🐶",
    title: "반려견 나이",
    shortTitle: "반려견 나이",
    description: "강아지 실제 나이와 사람 나이 환산",
    aliases: ["강아지", "개나이", "반려견", "사람나이", "강아지나이"],
    category: "life",
  },
];

export const CALCULATOR_BY_HREF = Object.fromEntries(
  CALCULATORS.map((item) => [item.href, item]),
) as Record<string, CalculatorItem>;

export const CALCULATOR_CATEGORIES = [
  {
    id: "work",
    icon: "💼",
    title: "직장 · 급여",
    description: "월급부터 퇴직·연차까지",
  },
  {
    id: "finance",
    icon: "💰",
    title: "금융 · 투자",
    description: "대출·저축·투자금 계산",
  },
  {
    id: "housing",
    icon: "🏠",
    title: "부동산 · 복지",
    description: "주거비와 지원기준 확인",
  },
  {
    id: "date",
    icon: "📅",
    title: "날짜 · 가족",
    description: "날짜와 기념일을 한눈에",
  },
  {
    id: "life",
    icon: "🧰",
    title: "생활 · 건강",
    description: "일상에서 자주 쓰는 계산",
  },
] as const;

export const RELATED_CALCULATORS: Record<string, string[]> = {
  "/salary": ["/hourly-monthly", "/weekly-pay", "/retirement", "/unemployment"],
  "/retirement": ["/salary", "/annual-leave", "/unemployment", "/hourly-monthly"],
  "/weekly-pay": ["/hourly-monthly", "/salary", "/annual-leave", "/retirement"],
  "/unemployment": ["/salary", "/retirement", "/annual-leave", "/median-income"],
  "/hourly-monthly": ["/salary", "/weekly-pay", "/annual-leave", "/retirement"],
  "/annual-leave": ["/retirement", "/salary", "/weekly-pay", "/unemployment"],

  "/loan": ["/rent-conversion", "/goal-savings", "/savings-interest", "/compound"],
  "/compound": ["/goal-savings", "/savings-interest", "/stock-average", "/loan"],
  "/savings-interest": ["/goal-savings", "/compound", "/fee", "/loan"],
  "/goal-savings": ["/savings-interest", "/compound", "/loan", "/stock-average"],
  "/stock-average": ["/compound", "/goal-savings", "/fee", "/savings-interest"],
  "/fee": ["/discount", "/savings-interest", "/stock-average", "/loan"],

  "/rent-conversion": ["/loan", "/median-income", "/goal-savings", "/fee"],
  "/median-income": ["/unemployment", "/salary", "/rent-conversion", "/due-date"],

  "/days": ["/age", "/lunar", "/holiday-tracker", "/due-date"],
  "/age": ["/days", "/lunar", "/due-date", "/holiday-tracker"],
  "/lunar": ["/days", "/age", "/holiday-tracker", "/due-date"],
  "/holiday-tracker": ["/days", "/annual-leave", "/lunar", "/age"],
  "/due-date": ["/days", "/age", "/lunar", "/median-income"],

  "/discount": ["/fee", "/unit-converter", "/goal-savings", "/savings-interest"],
  "/unit-converter": ["/discount", "/fee", "/calorie-burn", "/dog-age"],
  "/calorie-burn": ["/unit-converter", "/dog-age", "/age", "/days"],
  "/dog-age": ["/age", "/days", "/calorie-burn", "/unit-converter"],
};

export const RECENT_CALCULATORS_KEY = "myeotiji:recent-calculators";

export function normalizeSearchText(value: string) {
  return value
    .toLowerCase()
    .replace(/[\s·↔→←_\-()/%]/g, "");
}

export function searchCalculators(query: string, limit = 8) {
  const normalized = normalizeSearchText(query.trim());
  if (!normalized) return [];

  return CALCULATORS.filter((item) => {
    const haystack = normalizeSearchText(
      [item.title, item.shortTitle, item.description, ...item.aliases].join(" "),
    );
    return haystack.includes(normalized);
  }).slice(0, limit);
}

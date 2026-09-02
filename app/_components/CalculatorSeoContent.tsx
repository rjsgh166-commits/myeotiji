"use client";

import { usePathname } from "next/navigation";

type GuideSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

type FaqItem = {
  question: string;
  answer: string;
};

type OfficialLink = {
  label: string;
  href: string;
};

type Guide = {
  eyebrow: string;
  title: string;
  intro: string;
  updated?: string;
  sections: GuideSection[];
  faqs: FaqItem[];
  links?: OfficialLink[];
  note?: string;
};

const GUIDES: Record<string, Guide> = {
  "/salary": {
    eyebrow: "2026 SALARY GUIDE",
    title: "연봉 실수령액, 어떻게 계산될까요?",
    intro:
      "연봉 실수령액은 계약서에 적힌 연봉을 12개월로 나눈 금액에서 국민연금, 건강보험, 장기요양보험, 고용보험, 소득세, 지방소득세 등 근로자가 부담하는 금액을 제외한 예상 수령액입니다.",
    updated: "2026년 기준",
    sections: [
      {
        title: "2026년 실수령액 계산 기준",
        bullets: [
          "국민연금은 2026년 사업장가입자 기준 보험료율 9.5%이며 근로자와 회사가 각각 4.75%를 부담합니다.",
          "건강보험료율은 7.19%이며 직장가입자의 근로자 부담분은 절반입니다. 장기요양보험료는 건강보험료에 별도로 연동됩니다.",
          "고용보험 실업급여 보험료의 근로자 부담률은 보수월액의 0.9%입니다.",
          "근로소득세는 월 급여와 부양가족 수, 자녀 수 등에 따라 근로소득 간이세액표를 적용하므로 같은 연봉이라도 달라질 수 있습니다.",
        ],
      },
      {
        title: "연봉이 같아도 실수령액이 다른 이유",
        paragraphs: [
          "비과세 식대, 차량유지비, 보육수당처럼 비과세로 인정되는 항목이 있으면 과세 대상 급여가 달라질 수 있습니다. 상여금이나 성과급의 지급 방식, 보험료 정산, 부양가족 수도 실제 공제액에 영향을 줍니다.",
          "따라서 계산기의 결과는 일반적인 월 급여를 기준으로 한 예상값이고, 실제 지급액은 회사 급여명세서와 차이가 날 수 있습니다.",
        ],
      },
      {
        title: "예를 들어 연봉 4,200만원이라면",
        paragraphs: [
          "연봉을 단순히 12개월로 나누면 월 급여는 350만원입니다. 여기에서 4대보험 근로자 부담분과 소득세·지방소득세를 공제한 금액이 예상 월 실수령액이 됩니다.",
          "부양가족이나 자녀가 있다면 계산기에서 해당 인원을 함께 입력해야 소득세를 조금 더 실제에 가깝게 확인할 수 있습니다.",
        ],
      },
      {
        title: "계산 결과를 볼 때 체크할 것",
        bullets: [
          "연봉에 퇴직금이 포함된 계약인지 별도인지 확인하세요.",
          "식대 등 비과세 항목이 실제 급여에 포함되어 있는지 확인하세요.",
          "성과급·상여금이 매월 균등하게 지급되는 구조인지 확인하세요.",
          "실제 확정 금액은 회사의 급여명세서를 우선하세요.",
        ],
      },
    ],
    faqs: [
      {
        question: "계산 결과가 실제 급여명세서와 다른 이유는 무엇인가요?",
        answer:
          "비과세 항목, 상여금 지급 방식, 보험료 정산, 원천징수 방식 등 회사와 개인별 조건이 다르기 때문입니다.",
      },
      {
        question: "퇴직금도 연봉에 포함해서 계산하나요?",
        answer:
          "일반적으로 퇴직금은 별도로 계산하는 것이 이해하기 쉽습니다. 근로계약서의 연봉 구성과 퇴직금 포함 여부를 확인하고, 퇴직금 계산기를 따로 이용해보세요.",
      },
      {
        question: "실수령액은 매달 항상 같은가요?",
        answer:
          "아닙니다. 상여금, 성과급, 연말정산, 보험료 정산 등이 발생하는 달에는 실수령액이 달라질 수 있습니다.",
      },
      {
        question: "계산 결과를 세금 신고에 그대로 사용해도 되나요?",
        answer:
          "이 계산기는 예상 금액 확인용입니다. 세금 신고나 급여 분쟁처럼 중요한 판단에는 회사 급여자료와 국세청·관계기관의 공식 자료를 확인하세요.",
      },
    ],
    links: [
      {
        label: "국민연금공단 보험료 안내",
        href: "https://www.nps.or.kr/pnsinfo/ntpsklg/getOHAF0097M0.do",
      },
      {
        label: "국민건강보험공단",
        href: "https://www.nhis.or.kr",
      },
      {
        label: "국세청",
        href: "https://www.nts.go.kr",
      },
    ],
  },

  "/retirement": {
    eyebrow: "RETIREMENT GUIDE",
    title: "퇴직금은 어떤 기준으로 계산할까요?",
    intro:
      "법정 퇴직금은 원칙적으로 1일 평균임금을 기준으로 계속근로기간 1년에 대해 30일분 이상의 평균임금을 지급하는 구조입니다. 실제 계산에서는 퇴직 직전 3개월의 임금과 재직일수가 핵심이 됩니다.",
    updated: "고용노동부 공식 산정기준 반영",
    sections: [
      {
        title: "퇴직금 기본 산식",
        paragraphs: [
          "고용노동부가 안내하는 일반적인 산식은 ‘1일 평균임금 × 30일 × 총 재직일수 ÷ 365’입니다.",
          "여기서 1일 평균임금은 퇴직 사유가 발생하기 전 3개월 동안 지급된 임금총액을 그 3개월의 총 일수로 나눈 금액입니다. 단순히 실제 출근한 날만 세는 것이 아니라 휴일을 포함한 달력상의 일수를 사용합니다.",
        ],
      },
      {
        title: "어떤 근로자가 법정 퇴직금 대상일까요?",
        bullets: [
          "일반적으로 계속근로기간이 1년 이상이어야 합니다.",
          "4주간 평균하여 1주 소정근로시간이 15시간 이상인 기간이 퇴직금 판단에 중요합니다.",
          "계약직이나 일용근로자라도 실제 근로관계가 계속되고 요건을 충족하면 대상이 될 수 있습니다.",
        ],
      },
      {
        title: "상여금과 연차수당도 영향을 줄 수 있어요",
        paragraphs: [
          "평균임금에 포함되는 임금의 범위는 지급 성격에 따라 달라질 수 있습니다. 정기적인 상여금이나 연차 미사용수당 등이 평균임금 산정에 반영되는 경우가 있어 단순 월급만 입력했을 때와 실제 퇴직금이 달라질 수 있습니다.",
          "몇이지? 퇴직금 계산기는 최근 3개월 임금뿐 아니라 연간 정기상여금과 연차수당을 별도로 입력할 수 있도록 구성되어 있습니다.",
        ],
      },
      {
        title: "퇴직일 입력에서 자주 헷갈리는 부분",
        paragraphs: [
          "평균임금 산정의 3개월은 퇴직 사유 발생일 전날부터 소급하여 계산하기 때문에 89일, 90일, 91일, 92일처럼 달마다 달라질 수 있습니다.",
          "회사에서 사용하는 퇴직일의 정의와 마지막 근무일이 다른 경우가 있으므로 실제 정산에서는 회사 담당자나 고용노동부 안내를 함께 확인하는 것이 좋습니다.",
        ],
      },
    ],
    faqs: [
      {
        question: "딱 1년을 근무하면 퇴직금이 발생하나요?",
        answer:
          "주 소정근로시간 등 다른 요건을 충족하면서 법적으로 1년 이상의 계속근로기간이 인정된다면 퇴직금 대상이 될 수 있습니다.",
      },
      {
        question: "퇴직 전 3개월의 총 일수는 실제 일한 날인가요?",
        answer:
          "아닙니다. 일반적으로 휴일과 휴무일을 포함한 달력상의 총 일수를 사용합니다.",
      },
      {
        question: "평균임금보다 통상임금이 더 높으면 어떻게 되나요?",
        answer:
          "근로기준법상 산출된 평균임금이 통상임금보다 낮은 경우 통상임금을 평균임금으로 보는 규정이 있어 실제 정산액이 달라질 수 있습니다.",
      },
      {
        question: "계산 결과가 회사가 제시한 금액과 다르면 어떻게 해야 하나요?",
        answer:
          "최근 3개월 임금에 포함된 항목과 재직일수, 상여금·연차수당 반영 여부부터 비교해보세요. 분쟁이 있다면 고용노동부 1350 등 공식 상담을 이용하는 것이 좋습니다.",
      },
    ],
    links: [
      {
        label: "고용노동부 퇴직금·평균임금 산정공식",
        href: "https://www.moel.go.kr/faq/faqView.do?seqRepeat=89",
      },
      {
        label: "고용노동부",
        href: "https://www.moel.go.kr",
      },
    ],
  },

  "/unemployment": {
    eyebrow: "2026 UNEMPLOYMENT GUIDE",
    title: "2026년 실업급여, 얼마를 받을 수 있을까요?",
    intro:
      "구직급여는 단순히 이전 월급을 그대로 지급하는 제도가 아닙니다. 평균임금을 바탕으로 1일 구직급여액을 계산하고, 퇴직 당시 연령과 고용보험 가입기간에 따라 정해지는 소정급여일수를 곱해 예상 총액을 확인합니다.",
    updated: "2026년 1월 1일 이후 이직자 기준",
    sections: [
      {
        title: "2026년 구직급여 1일액",
        bullets: [
          "기본적으로 기초일액의 60%를 기준으로 계산합니다.",
          "2026년 1월 1일 이후 이직자의 1일 상한액은 68,100원입니다.",
          "2026년 최저임금 10,320원을 반영한 8시간 근로자의 하한액은 66,048원입니다.",
          "단시간 근로자는 최종 사업장의 1일 소정근로시간에 따라 하한액이 달라질 수 있습니다.",
        ],
      },
      {
        title: "얼마나 오래 받을 수 있나요?",
        paragraphs: [
          "소정급여일수는 퇴직 당시 연령과 고용보험 가입기간에 따라 달라집니다. 만 50세 미만은 일반적으로 120~240일, 만 50세 이상 또는 장애인은 최대 270일까지 구간이 나뉩니다.",
          "예를 들어 50세 미만이면서 고용보험 가입기간이 3년 이상 5년 미만인 경우 소정급여일수는 180일 구간입니다.",
        ],
      },
      {
        title: "금액 계산과 수급자격은 별개예요",
        paragraphs: [
          "계산기에서 예상금액이 나오더라도 실제로 실업급여를 받을 수 있다는 뜻은 아닙니다. 비자발적 이직 여부, 피보험단위기간, 재취업 활동 등 별도의 법정 수급요건을 충족해야 합니다.",
          "자발적 퇴사라도 일정한 정당한 사유가 인정되는 사례가 있을 수 있으므로 실제 수급 가능 여부는 고용센터의 판단을 확인해야 합니다.",
        ],
      },
      {
        title: "입력할 3개월 임금은 무엇인가요?",
        paragraphs: [
          "구직급여 계산에 사용되는 평균임금은 퇴직 전 임금자료를 기초로 합니다. 상여금이나 각종 수당처럼 개인별로 산정 방식이 달라질 수 있는 항목이 있으므로 계산기 결과는 예상값으로 활용하는 것이 좋습니다.",
        ],
      },
    ],
    faqs: [
      {
        question: "월급이 높으면 실업급여도 계속 높아지나요?",
        answer:
          "아닙니다. 2026년 이직자는 1일 상한액 68,100원이 있기 때문에 일정 수준 이상에서는 더 이상 증가하지 않습니다.",
      },
      {
        question: "하루 4시간 근무자도 66,048원을 받나요?",
        answer:
          "아닙니다. 하한액은 1일 소정근로시간에 따라 달라집니다. 66,048원은 8시간 기준입니다.",
      },
      {
        question: "고용보험 가입기간이 길면 하루 지급액도 올라가나요?",
        answer:
          "가입기간은 주로 소정급여일수에 영향을 줍니다. 1일 구직급여액은 평균임금과 상·하한 기준을 중심으로 계산합니다.",
      },
      {
        question: "계산기에 금액이 나오면 실업급여 신청이 가능한가요?",
        answer:
          "아닙니다. 이 계산기는 금액 추정용이며 실제 수급자격은 고용센터에서 별도로 판단합니다.",
      },
    ],
    links: [
      {
        label: "고용노동부 2026 구직급여 기준",
        href: "https://www.moel.go.kr/news/enews/report/enewsView.do?news_seq=18440",
      },
      {
        label: "고용보험",
        href: "https://www.ei.go.kr",
      },
    ],
  },

  "/loan": {
    eyebrow: "LOAN GUIDE",
    title: "대출이자는 상환방식에 따라 얼마나 달라질까요?",
    intro:
      "같은 금액을 같은 금리로 빌려도 원리금균등, 원금균등, 만기일시상환 중 어떤 방식을 선택하느냐에 따라 매달 내는 금액과 전체 이자가 달라집니다.",
    sections: [
      {
        title: "원리금균등상환",
        paragraphs: [
          "원금과 이자를 합친 월 상환액이 대체로 일정하도록 계산하는 방식입니다. 매달 내는 금액을 예측하기 쉬워 장기 주택담보대출 등에서 많이 비교하는 방식입니다.",
          "초기에는 월 납입액 중 이자 비중이 상대적으로 크고 시간이 지날수록 원금 상환 비중이 커지는 구조입니다.",
        ],
      },
      {
        title: "원금균등상환",
        paragraphs: [
          "매달 갚는 원금은 같고 남은 원금에 대한 이자가 줄어들기 때문에 첫 달 상환액이 가장 크고 시간이 지날수록 월 상환액이 감소합니다.",
          "원금을 더 빠르게 줄여가는 구조이므로 동일 조건에서는 원리금균등보다 총 이자가 낮아질 수 있지만 초기 부담은 더 클 수 있습니다.",
        ],
      },
      {
        title: "만기일시상환",
        paragraphs: [
          "대출기간 동안에는 주로 이자를 납부하고 만기 시 원금을 한 번에 갚는 방식입니다. 매월 부담은 상대적으로 작아 보이지만 원금이 줄지 않기 때문에 전체 기간 동안 이자가 계속 발생합니다.",
        ],
      },
      {
        title: "계산기 결과와 실제 은행 납입액이 다른 이유",
        bullets: [
          "실제 금융기관은 상환일을 기준으로 일할 계산을 할 수 있습니다.",
          "변동금리 상품은 향후 금리가 달라질 수 있습니다.",
          "거치기간, 중도상환, 중도상환수수료가 있으면 전체 비용이 달라집니다.",
          "대출 취급수수료나 보증료 등 이자 외 비용은 별도로 발생할 수 있습니다.",
        ],
      },
    ],
    faqs: [
      {
        question: "총 이자가 가장 적은 방식은 무엇인가요?",
        answer:
          "조건이 완전히 같다면 원금을 빠르게 줄이는 원금균등 방식이 총 이자를 낮추는 경우가 많습니다. 다만 초기 월 납입액이 더 크다는 점도 함께 비교해야 합니다.",
      },
      {
        question: "금리가 0%여도 계산이 되나요?",
        answer:
          "네. 금리가 0%라면 원리금균등의 경우 원금을 대출 개월 수로 나눈 금액을 기준으로 계산할 수 있습니다.",
      },
      {
        question: "대출기간은 왜 개월로 입력하나요?",
        answer:
          "실제 대출은 월 단위 상환이 일반적이므로 월 금리와 전체 납입 횟수를 계산하기 위해 개월 수를 사용합니다. 30년 대출이라면 360개월입니다.",
      },
      {
        question: "변동금리 대출도 정확히 계산할 수 있나요?",
        answer:
          "현재 입력한 금리가 끝까지 유지된다는 가정의 예상값입니다. 실제 금리가 변경되면 남은 기간의 이자와 월 상환액도 달라질 수 있습니다.",
      },
    ],
    note:
      "대출 계산 결과는 비교를 위한 예상값입니다. 실제 대출 계약 전에는 금융회사가 제공하는 상환예정표와 금리·수수료 조건을 확인하세요.",
  },

  "/annual-leave": {
    eyebrow: "ANNUAL LEAVE GUIDE",
    title: "입사하면 연차는 언제, 몇 일 생길까요?",
    intro:
      "연차 유급휴가는 단순히 ‘매년 15일’만 발생하는 것이 아닙니다. 1년 미만 근로자의 월 개근 연차와 1년 이상 근로자의 출근율 기준 연차, 장기근속 가산연차가 서로 다르게 적용됩니다.",
    updated: "근로기준법 제60조 기준",
    sections: [
      {
        title: "입사 후 1년 미만",
        paragraphs: [
          "계속근로기간이 1년 미만인 근로자는 1개월을 개근하면 그 다음 날 1일의 유급휴가가 발생합니다. 첫 1년 동안 최대 11일까지 발생할 수 있습니다.",
        ],
      },
      {
        title: "1년간 80% 이상 출근했다면",
        paragraphs: [
          "1년간 출근율이 80% 이상이면 1년의 근로를 마친 다음 날 15일의 연차 유급휴가가 발생하는 것이 기본 구조입니다.",
          "반대로 1년 이상 근무했더라도 출근율이 80% 미만인 경우에는 1개월 개근 시 1일씩 발생하는 방식이 적용될 수 있어 실제 개근 기록이 필요합니다.",
        ],
      },
      {
        title: "3년 이상 근무하면 가산연차가 생겨요",
        paragraphs: [
          "3년 이상 계속 근로한 근로자에게는 최초 1년을 초과하는 계속근로연수 매 2년마다 1일이 추가됩니다. 법정 연차일수는 가산분을 포함해 최대 25일까지입니다.",
          "예를 들어 근속 1년과 2년은 15일, 3년과 4년은 16일, 5년과 6년은 17일처럼 늘어나는 구조입니다.",
        ],
      },
      {
        title: "회사 연차일수와 계산기가 다를 수도 있어요",
        bullets: [
          "법정 기준은 입사일 기준이 기본이지만 회사가 회계연도 기준으로 관리하는 경우가 있습니다.",
          "연차 사용촉진제도나 이미 사용한 연차, 소멸한 연차는 단순 발생일수와 다릅니다.",
          "상시근로자 수와 주 소정근로시간 등에 따라 근로기준법상 적용 여부가 달라질 수 있습니다.",
        ],
      },
    ],
    faqs: [
      {
        question: "입사 첫해에도 연차를 쓸 수 있나요?",
        answer:
          "네. 1개월 개근 시 다음 날 1일씩 발생하는 구조이므로 요건을 충족하면 첫해에도 연차가 생길 수 있습니다.",
      },
      {
        question: "1년이 되면 첫해 11일이 15일로 바뀌나요?",
        answer:
          "첫해 월 개근으로 발생한 연차와 1년간 80% 이상 출근 후 발생하는 15일은 발생 근거가 다릅니다. 사용·소멸 시점은 각각 확인해야 합니다.",
      },
      {
        question: "5년 근무하면 몇 일이 발생하나요?",
        answer:
          "일반적인 입사일 기준과 80% 이상 출근 조건을 충족했다면 해당 연차 부여 구간은 17일이 될 수 있습니다.",
      },
      {
        question: "회사가 알려준 연차와 계산 결과가 달라요.",
        answer:
          "회계연도 기준 운영, 실제 출근율, 이미 사용한 연차, 휴직·휴가 기간 처리 등 때문일 수 있습니다. 회사의 연차 관리 기준과 근태기록을 함께 확인하세요.",
      },
    ],
    links: [
      {
        label: "고용노동부 1350 연차유급휴가 안내",
        href: "https://1350.moel.go.kr/rtmview.do?id=1000266243",
      },
      {
        label: "고용노동부",
        href: "https://www.moel.go.kr",
      },
    ],
  },

  "/median-income": {
    eyebrow: "2026 WELFARE GUIDE",
    title: "내 소득은 기준 중위소득의 몇 %일까요?",
    intro:
      "기준 중위소득은 여러 복지사업의 선정기준으로 활용되는 지표입니다. 몇이지? 계산기는 가구원 수에 따른 2026년 기준 중위소득과 사용자가 입력한 월 소득인정액을 비교해 몇 % 수준인지 보여줍니다.",
    updated: "2026년 보건복지부 기준",
    sections: [
      {
        title: "2026년 기준 중위소득",
        paragraphs: [
          "2026년 기준 중위소득 100%는 1인 가구 2,564,238원, 2인 가구 4,199,292원, 3인 가구 5,359,036원, 4인 가구 6,494,738원, 5인 가구 7,556,719원, 6인 가구 8,555,952원입니다.",
          "가구원 수가 달라지면 기준금액 자체가 달라지므로 같은 월 소득이라도 중위소득 퍼센트는 달라질 수 있습니다.",
        ],
      },
      {
        title: "중위소득 50%라는 의미",
        paragraphs: [
          "예를 들어 4인 가구 기준 중위소득 100%가 6,494,738원이라면 50% 기준금액은 그 절반 수준입니다. 계산기는 입력한 소득인정액을 100% 기준금액으로 나누어 현재 몇 %인지 표시합니다.",
        ],
      },
      {
        title: "2026년 기초생활보장 주요 선정기준",
        bullets: [
          "생계급여 선정기준: 기준 중위소득 32%",
          "의료급여 선정기준: 기준 중위소득 40%",
          "주거급여 선정기준: 기준 중위소득 48%",
          "교육급여 선정기준: 기준 중위소득 50%",
        ],
      },
      {
        title: "월급과 소득인정액은 같은 말이 아니에요",
        paragraphs: [
          "복지사업에서 사용하는 소득인정액은 단순한 세전 월급이나 통장에 들어오는 세후 월급과 다를 수 있습니다. 실제 사업에서는 소득평가액과 재산의 소득환산액 등을 반영하는 방식이 사용될 수 있습니다.",
          "따라서 계산기에는 해당 복지사업에서 확인한 ‘소득인정액’을 입력하는 것이 가장 정확합니다.",
        ],
      },
    ],
    faqs: [
      {
        question: "중위소득 100%보다 높으면 복지지원을 전혀 못 받나요?",
        answer:
          "아닙니다. 복지사업마다 기준이 서로 다르고 중위소득 100%, 120%, 150%, 180% 등 다양한 구간을 사용하는 사업이 있습니다.",
      },
      {
        question: "세전 월급을 그대로 입력하면 되나요?",
        answer:
          "단순 비교는 가능하지만 실제 지원자격 확인에는 각 제도에서 산정한 소득인정액을 사용하는 것이 정확합니다.",
      },
      {
        question: "4인 가구인데 가족 모두의 소득을 합쳐야 하나요?",
        answer:
          "실제 복지제도의 소득인정액은 가구 단위로 산정되는 경우가 많습니다. 어떤 구성원이 가구원에 포함되는지는 신청하려는 사업의 기준을 확인해야 합니다.",
      },
      {
        question: "계산 결과가 48% 이하이면 주거급여를 받을 수 있나요?",
        answer:
          "48%는 2026년 주거급여의 소득인정액 선정기준이지만 다른 자격요건과 가구 기준도 함께 적용될 수 있으므로 계산 결과만으로 수급 여부를 확정할 수 없습니다.",
      },
    ],
    links: [
      {
        label: "보건복지부 2026 수급자 선정기준",
        href: "https://www.mohw.go.kr/menu.es?mid=a10708010300",
      },
      {
        label: "보건복지부",
        href: "https://www.mohw.go.kr",
      },
    ],
  },
};

export default function CalculatorSeoContent() {
  const pathname = usePathname();
  const guide = GUIDES[pathname];

  if (!guide) return null;

  return (
    <section
      id="calculator-guide"
      className="border-t border-gray-100 bg-[#f7f8fa] px-5 py-12 sm:py-16"
    >
      <article className="mx-auto max-w-4xl">
        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-9">
          <div className="border-b border-gray-100 pb-8">
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-xs font-black tracking-wider text-blue-600">
                {guide.eyebrow}
              </p>
              {guide.updated && (
                <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-bold text-gray-500">
                  {guide.updated}
                </span>
              )}
            </div>

            <h2 className="mt-3 text-2xl font-black tracking-tight text-gray-900 sm:text-3xl">
              {guide.title}
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
              {guide.intro}
            </p>
          </div>

          <div className="mt-8 space-y-9">
            {guide.sections.map((section) => (
              <section key={section.title}>
                <h3 className="text-lg font-black text-gray-900">
                  {section.title}
                </h3>

                {section.paragraphs && (
                  <div className="mt-3 space-y-3">
                    {section.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-sm leading-7 text-gray-600"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}

                {section.bullets && (
                  <ul className="mt-3 space-y-2 pl-5 text-sm leading-7 text-gray-600">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="list-disc">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <section className="mt-10 border-t border-gray-100 pt-8">
            <div>
              <p className="text-xs font-black tracking-wider text-blue-600">
                FAQ
              </p>
              <h3 className="mt-2 text-xl font-black text-gray-900">
                자주 묻는 질문
              </h3>
            </div>

            <div className="mt-5 divide-y divide-gray-100 rounded-2xl border border-gray-200 px-5">
              {guide.faqs.map((faq) => (
                <div key={faq.question} className="py-5">
                  <h4 className="text-sm font-black leading-6 text-gray-900">
                    Q. {faq.question}
                  </h4>
                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {guide.links && guide.links.length > 0 && (
            <section className="mt-8 rounded-2xl bg-gray-50 p-5">
              <p className="text-sm font-black text-gray-900">
                공식 자료에서 다시 확인하기
              </p>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                {guide.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-bold text-blue-600 hover:text-blue-700"
                  >
                    {link.label} →
                  </a>
                ))}
              </div>
            </section>
          )}

          <div className="mt-7 text-xs leading-6 text-gray-400">
            {guide.note ??
              "몇이지?의 계산 결과와 안내 내용은 이해를 돕기 위한 참고용입니다. 법령·요율·개인별 조건에 따라 실제 결과가 달라질 수 있으므로 중요한 의사결정에는 관계기관의 최신 공식자료를 함께 확인하세요."}
          </div>
        </div>
      </article>
    </section>
  );
}

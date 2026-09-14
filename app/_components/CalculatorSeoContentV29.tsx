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

type GuideTable = {
  title: string;
  description?: string;
  headers: string[];
  rows: string[][];
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
  "/lunar": {
    eyebrow: "LUNAR CALENDAR GUIDE",
    title: "음력·양력 변환, 무엇을 확인해야 할까요?",
    intro:
      "한국에서 일상적으로 말하는 음력은 달의 주기를 기본으로 하면서 계절과의 차이를 윤달로 조정하는 태음태양력입니다. 음력 생일, 제사·기념일처럼 매년 양력 날짜가 달라지는 일정을 확인할 때는 평달과 윤달을 함께 구분해야 합니다.",
    updated: "한국천문연구원 음양력 자료 참고",
    sections: [
      {
        title: "양력과 음력은 기준이 달라요",
        paragraphs: [
          "현재 일상 달력의 기본은 태양의 운행을 기준으로 한 양력(그레고리력)입니다. 반면 전통 음력은 달의 차고 기우는 주기를 바탕으로 달을 정하고, 계절과의 차이가 커지지 않도록 윤달을 넣어 보정합니다.",
          "그래서 ‘음력 7월 12일’처럼 같은 음력 생일도 해마다 대응하는 양력 날짜가 달라질 수 있습니다. 음력 날짜를 매년 챙겨야 한다면 해당 연도의 양력 날짜로 다시 변환하는 과정이 필요합니다.",
        ],
      },
      {
        title: "윤달은 왜 생기나요?",
        paragraphs: [
          "음력 12개월은 양력 1년보다 짧기 때문에 그대로 두면 계절과 달의 위치가 점점 어긋납니다. 이 차이를 맞추기 위해 일정한 규칙에 따라 한 달을 추가하는데, 이를 윤달이라고 합니다.",
          "같은 연도에 같은 숫자의 음력 월이 평달과 윤달로 각각 존재할 수 있으므로 ‘음력 → 양력’ 변환에서는 평달인지 윤달인지 정확히 선택해야 합니다.",
        ],
      },
      {
        title: "음력 생일·기념일을 확인할 때",
        bullets: [
          "가족에게 받은 날짜가 ‘음력’인지 ‘양력’인지 먼저 확인하세요.",
          "음력 날짜라면 평달인지 윤달인지 함께 확인하세요.",
          "매년 챙기는 음력 생일은 그해의 양력 날짜로 다시 변환해야 합니다.",
          "혼인·제사·행정서류처럼 중요한 날짜는 한국천문연구원 등 공식 역법 자료와 한 번 더 대조하는 것이 좋습니다.",
        ],
      },
      {
        title: "몇이지? 음력 계산기의 범위와 한계",
        paragraphs: [
          "현재 계산기는 양력 1000년 2월 13일부터 2050년 12월 31일, 음력 1000년 1월 1일부터 2050년 11월 18일까지의 변환을 지원합니다. 입력한 음력 날짜가 해당 연도에 존재하지 않는 윤달이면 변환할 수 없다는 안내가 표시됩니다.",
          "달력 표기와 역사적 역법은 시대·자료에 따라 다르게 다뤄질 수 있으므로, 법적·행정적 효력이 필요한 날짜 확인에는 관계기관의 공식 자료를 우선하세요.",
        ],
      },
    ],
    faqs: [
      {
        question: "음력 생일은 왜 양력 날짜가 매년 달라지나요?",
        answer:
          "음력의 한 달과 한 해 길이가 양력과 다르고 윤달로 계절 차이를 조정하기 때문입니다. 같은 음력 월·일이라도 해마다 대응하는 양력 날짜가 달라질 수 있습니다.",
      },
      {
        question: "평달과 윤달을 잘못 선택하면 어떻게 되나요?",
        answer:
          "같은 숫자의 음력 월이라도 평달과 윤달은 서로 다른 달입니다. 윤달이 있는 해에는 선택에 따라 전혀 다른 양력 날짜가 나오므로 원래 기록을 확인해야 합니다.",
      },
      {
        question: "양력 생일을 음력으로도 바꿀 수 있나요?",
        answer:
          "가능합니다. ‘양력 → 음력’을 선택하고 양력 날짜를 입력하면 대응하는 음력 날짜와 윤달 여부를 확인할 수 있습니다.",
      },
      {
        question: "제사 날짜를 계산할 때도 사용할 수 있나요?",
        answer:
          "날짜 변환 참고용으로 사용할 수 있습니다. 다만 가족의 제사일 계산 방식이나 자정 기준 관습은 서로 다를 수 있으므로 날짜 관습은 가족 기준을 함께 확인하세요.",
      },
    ],
    links: [
      {
        label: "공공데이터포털 한국천문연구원 음양력 정보",
        href: "https://www.data.go.kr/data/15012679/openapi.do",
      },
      {
        label: "한국천문연구원",
        href: "https://www.kasi.re.kr",
      },
    ],
    note:
      "몇이지?의 음력·양력 변환은 일상적인 날짜 확인을 돕기 위한 참고용입니다. 법적·행정적 효력이 필요한 날짜나 중요한 의례 일정은 한국천문연구원 등 공식 역법 자료를 함께 확인하세요.",
  },

  "/age": {
    eyebrow: "AGE GUIDE",
    title: "만 나이 계산법, 생일 전후에 왜 1살 차이가 날까요?",
    intro:
      "만 나이는 출생일을 기준으로 실제로 몇 년을 살았는지를 연수로 표시하는 방식입니다. 같은 출생연도라도 올해 생일이 지났는지에 따라 만나이가 1살 달라집니다.",
    updated: "법제처 만 나이 기준 참고",
    sections: [
      {
        title: "만 나이 기본 계산식",
        bullets: [
          "올해 생일이 지났다면: 현재 연도 − 출생 연도",
          "올해 생일이 아직이라면: 현재 연도 − 출생 연도 − 1",
          "1세가 되기 전에는 법령이나 행정표시에서 개월 수로 표시할 수 있습니다.",
        ],
      },
      {
        title: "같은 1990년생도 만나이가 다른 이유",
        paragraphs: [
          "예를 들어 기준일이 2026년 9월 14일이라면 1990년 9월 2일생은 이미 생일이 지나 만 36세입니다. 반면 1990년 12월 2일생은 아직 생일 전이므로 만 35세입니다.",
          "몇이지?는 오늘 날짜와 생년월일의 월·일을 비교해 생일이 지났는지 판단하고 만나이를 계산합니다.",
        ],
      },
      {
        title: "만 나이·연 나이·과거의 세는나이는 달라요",
        paragraphs: [
          "만 나이는 생일을 기준으로 나이가 올라갑니다. 연 나이는 ‘현재 연도 − 출생 연도’처럼 해당 연도만을 비교해 계산하는 방식이라 생일 전후를 구분하지 않습니다.",
          "법제처는 민법과 행정기본법에 만 나이 계산·표시 원칙을 명문화해 법적·사회적 기준을 만 나이로 통일했습니다. 다만 개별 법령에서 별도의 연령 산정기준을 두는 경우에는 그 규정을 따라야 합니다.",
        ],
      },
      {
        title: "다음 생일까지 남은 날짜는 참고용이에요",
        paragraphs: [
          "계산기는 만나이와 함께 다음 생일까지 남은 달력 일수를 보여줍니다. 2월 29일생처럼 평년에는 같은 날짜가 존재하지 않는 경우에는 화면상 다음 생일 표시가 일반 날짜와 다르게 보일 수 있습니다.",
          "연령 제한이 중요한 계약·행정·법률 판단은 단순 생일 알림이 아니라 해당 법령의 기준일과 계산 규정을 우선 확인하세요.",
        ],
      },
    ],
    faqs: [
      {
        question: "한국에서는 이제 무조건 만 나이만 쓰나요?",
        answer:
          "민법과 행정기본법에는 만 나이 계산·표시 원칙이 명문화되어 있습니다. 다만 청소년보호법 등 개별 법령이 별도 기준을 정한 경우에는 해당 규정을 따라야 합니다.",
      },
      {
        question: "생일 당일에는 나이가 올라가나요?",
        answer:
          "만 나이는 출생일을 기준으로 계산하므로 일반적으로 생일이 도래하면 한 살이 올라간 것으로 계산합니다.",
      },
      {
        question: "연 나이는 어떻게 계산하나요?",
        answer:
          "보통 현재 연도에서 출생 연도를 빼는 방식입니다. 생일이 지났는지는 따지지 않아 만나이와 0~1살 차이가 날 수 있습니다.",
      },
      {
        question: "계약이나 지원사업의 나이 기준에도 이 계산 결과를 쓰면 되나요?",
        answer:
          "참고용으로는 사용할 수 있지만 사업·법령마다 기준일과 예외가 있을 수 있습니다. 중요한 자격 판단은 해당 공고나 법령의 연령 기준을 확인하세요.",
      },
    ],
    links: [
      {
        label: "법제처 만 나이 통일 안내",
        href: "https://www.moleg.go.kr/menu.es?mid=a10111060000",
      },
    ],
  },

  "/fee": {
    eyebrow: "FEE CALCULATOR GUIDE",
    title: "수수료 계산, 실제 정산액과 역산 금액은 어떻게 다를까요?",
    intro:
      "수수료율만 알고 있을 때는 거래금액에 수수료율을 곱해 수수료를 구할 수 있습니다. 반대로 ‘수수료를 떼고 얼마를 받아야 하는지’가 목표라면 단순 덧셈이 아니라 역산이 필요합니다.",
    sections: [
      {
        title: "기본 수수료 계산식",
        bullets: [
          "수수료 = 거래금액 × 수수료율",
          "정산액 = 거래금액 − 수수료",
          "예: 100,000원 × 3% = 수수료 3,000원, 정산액 97,000원",
        ],
      },
      {
        title: "원하는 정산액에서 판매금액을 역산하려면",
        paragraphs: [
          "수수료 10%를 제외하고 정확히 100,000원을 받아야 한다면 판매금액을 110,000원으로 잡는 것이 아니라 ‘100,000 ÷ (1 − 0.10)’으로 역산해야 합니다. 결과는 약 111,111원입니다.",
          "수수료가 판매금액 자체를 기준으로 계산되기 때문에 목표 정산액에 수수료율을 단순히 더하면 필요한 금액보다 부족해질 수 있습니다.",
        ],
      },
      {
        title: "플랫폼 정산에서는 수수료가 한 종류가 아닐 수 있어요",
        bullets: [
          "판매수수료와 결제대행(PG) 수수료가 별도로 부과될 수 있습니다.",
          "수수료에 부가가치세가 별도인지 포함인지에 따라 최종 공제액이 달라질 수 있습니다.",
          "쿠폰·배송비·광고비·정산보류금처럼 별도 공제항목이 있을 수 있습니다.",
          "플랫폼마다 수수료의 기준금액이 상품가, 결제금액, 공급가액 등으로 다를 수 있습니다.",
        ],
      },
      {
        title: "작은 수수료 차이도 거래액이 커지면 커져요",
        paragraphs: [
          "100만원 거래에서 수수료율 1%p 차이는 1만원이지만, 월 거래액이 5,000만원이라면 같은 1%p 차이가 50만원이 됩니다. 여러 판매채널을 비교할 때는 표시 수수료율뿐 아니라 실제 정산명세서의 전체 공제항목을 함께 보는 것이 좋습니다.",
        ],
      },
    ],
    faqs: [
      {
        question: "수수료 3.3%는 세금 3.3%와 같은 뜻인가요?",
        answer:
          "아닙니다. 플랫폼 이용수수료와 원천징수 등 세금은 성격과 계산근거가 다릅니다. 화면에 표시된 항목이 어떤 비용인지 먼저 확인하세요.",
      },
      {
        question: "수수료를 포함해 가격을 올릴 때는 어떻게 계산하나요?",
        answer:
          "목표 정산액을 ‘1 − 수수료율’로 나누는 역산이 일반적입니다. 예를 들어 10% 수수료 후 10만원을 받으려면 약 111,111원이 필요합니다.",
      },
      {
        question: "수수료에 부가세가 별도라면 어떻게 하나요?",
        answer:
          "수수료율에 부가세가 포함인지 별도인지에 따라 공제금액이 달라집니다. 실제 플랫폼 약관과 정산명세서 기준을 우선하세요.",
      },
      {
        question: "계산 결과가 실제 정산액과 다른 이유는 무엇인가요?",
        answer:
          "결제수수료, 할인분담금, 배송비, 광고비, 부가세 등 추가 공제항목이 있거나 수수료를 적용하는 기준금액이 다를 수 있기 때문입니다.",
      },
    ],
  },

  "/stock-average": {
    eyebrow: "STOCK AVERAGE GUIDE",
    title: "주식 평단, 물타기·불타기에서 실제로 달라지는 것",
    intro:
      "평균 매입단가는 각 매수에 들어간 금액을 총 보유수량으로 나눈 가중평균입니다. 낮은 가격에 추가 매수하면 평단이 내려가고, 높은 가격에 추가 매수하면 평단이 올라가지만 투자위험 자체가 자동으로 줄어드는 것은 아닙니다.",
    sections: [
      {
        title: "새 평균단가의 기본 계산식",
        paragraphs: [
          "기존 투자금은 ‘현재 평단 × 보유수량’, 추가 투자금은 ‘추가 매수가 × 추가수량’입니다. 두 투자금을 합한 뒤 전체 수량으로 나누면 추가매수 후 새 평단을 구할 수 있습니다.",
          "예를 들어 50,000원에 100주를 보유한 상태에서 40,000원에 100주를 추가 매수하면 총 투자금은 900만원, 총 수량은 200주가 되어 새 평단은 45,000원이 됩니다.",
        ],
      },
      {
        title: "물타기와 불타기",
        bullets: [
          "물타기: 현재 평단보다 낮은 가격에 추가 매수해 평균단가를 낮추는 경우",
          "불타기: 현재 평단보다 높은 가격에 추가 매수해 평균단가를 높이는 경우",
          "추가 매수가가 현재 평단과 같으면 추가 수량과 관계없이 평균단가는 그대로입니다.",
        ],
      },
      {
        title: "목표 평단 역산에는 가능한 범위가 있어요",
        paragraphs: [
          "물타기로 목표 평단을 만들려면 목표값이 추가 매수가보다 높고 현재 평단보다 낮아야 합니다. 반대로 불타기라면 목표 평단은 현재 평단보다 높고 추가 매수가보다 낮아야 합니다.",
          "목표 평단을 추가 매수가와 같게 만들려면 이론적으로 무한히 많은 수량이 필요하므로 현실적인 유한 수량으로는 정확히 도달할 수 없습니다.",
        ],
      },
      {
        title: "평단이 낮아졌다고 투자위험이 낮아진 것은 아니에요",
        paragraphs: [
          "물타기를 하면 본전가격은 낮아지지만 동시에 투자금과 특정 종목에 대한 노출금액이 커집니다. 기업가치나 손실 가능성이 그대로라면 평균단가만 보고 추가 매수를 결정하는 것은 위험할 수 있습니다.",
          "몇이지? 계산 결과에는 증권사 수수료, 세금, 환율, 배당, 소수점 처리 방식 등이 포함되지 않습니다. 실제 손익은 거래내역과 현재가를 기준으로 따로 확인하세요.",
        ],
      },
    ],
    faqs: [
      {
        question: "평단을 절반으로 낮추려면 같은 수량만 더 사면 되나요?",
        answer:
          "항상 그렇지는 않습니다. 기존 평단, 추가 매수가, 현재 수량에 따라 필요한 추가수량이 달라집니다. 목표 평단 역산 기능으로 조건을 직접 비교해보세요.",
      },
      {
        question: "주가가 평단까지 오면 무조건 본전인가요?",
        answer:
          "단순 매입금액 기준으로는 비슷하지만 실제 거래에서는 매매수수료, 세금, 환율 등 비용이 있어 정확한 손익분기 가격이 달라질 수 있습니다.",
      },
      {
        question: "소수점 주식도 계산할 수 있나요?",
        answer:
          "현재 보유수량과 추가수량 입력은 소수점 값을 사용할 수 있어 해외주식 등 소수점 보유도 참고 계산할 수 있습니다.",
      },
      {
        question: "물타기를 하면 손실 위험이 줄어드나요?",
        answer:
          "평단은 낮아지지만 투자금과 종목 노출액은 커집니다. 평단 변화와 투자위험은 같은 개념이 아니므로 종목의 가치와 자금계획을 별도로 판단해야 합니다.",
      },
    ],
    note:
      "이 계산기는 평균 매입단가를 이해하기 위한 참고 도구이며 특정 종목의 매수·매도 또는 추가투자를 권유하지 않습니다. 실제 투자판단에는 수수료·세금·환율과 손실 가능성을 함께 고려하세요.",
  },

  "/discount": {
    eyebrow: "DISCOUNT GUIDE",
    title: "추가 할인은 왜 할인율을 단순히 더하면 안 될까요?",
    intro:
      "할인이 여러 번 적용되면 두 번째 할인은 원래 정가가 아니라 이미 할인된 가격에 적용되는 경우가 많습니다. 그래서 20% 할인 뒤 10%를 추가로 할인해도 실제 총 할인율은 30%가 아니라 28%입니다.",
    sections: [
      {
        title: "기본 할인 계산식",
        bullets: [
          "할인금액 = 정가 × 할인율",
          "최종가격 = 정가 − 할인금액",
          "실제 할인율 = (정가 − 최종가격) ÷ 정가 × 100",
        ],
      },
      {
        title: "20% + 10% 추가 할인은 실제 28%",
        paragraphs: [
          "정가 100,000원에서 먼저 20%를 할인하면 80,000원입니다. 여기에서 다시 10%를 할인하면 8,000원이 추가로 빠져 최종가격은 72,000원이 됩니다.",
          "정가 100,000원에서 28,000원이 줄었으므로 실제 총 할인율은 28%입니다. 연속 할인은 각 단계의 남은 가격에 적용되므로 할인율을 단순 합산하면 안 됩니다.",
        ],
      },
      {
        title: "정액 쿠폰은 적용 순서가 중요할 수 있어요",
        paragraphs: [
          "예를 들어 10만원 상품에 20% 할인과 1만원 쿠폰을 함께 쓸 때, 퍼센트 할인 후 쿠폰을 적용하면 70,000원입니다. 반대로 쿠폰을 먼저 뺀 90,000원에 20%를 적용하면 72,000원이 됩니다.",
          "실제 쇼핑몰에서는 쿠폰 적용 순서, 최소구매금액, 최대할인금액, 일부 상품 제외 같은 조건이 있으므로 결제화면의 최종금액을 함께 확인하세요.",
        ],
      },
      {
        title: "표시 할인율보다 최종 결제금액을 비교하세요",
        paragraphs: [
          "서로 다른 쇼핑몰의 할인조건을 비교할 때는 ‘몇 % 할인’ 문구만 보지 말고 배송비와 쿠폰 조건까지 적용한 최종 결제금액을 보는 것이 정확합니다.",
          "몇이지?의 추가 할인 계산은 1차 할인, 2차 할인, 정액 쿠폰을 순서대로 적용해 정가 대비 실제 총 할인율을 보여주는 데 사용할 수 있습니다.",
        ],
      },
    ],
    faqs: [
      {
        question: "20% 할인 후 10% 추가 할인은 총 30% 아닌가요?",
        answer:
          "아닙니다. 두 번째 10%가 할인된 가격에 적용되면 최종가격은 정가의 72%가 되어 실제 할인율은 28%입니다.",
      },
      {
        question: "쿠폰을 먼저 적용하는 것과 나중에 적용하는 것은 같은가요?",
        answer:
          "퍼센트 할인과 정액 쿠폰을 함께 쓰면 적용 순서에 따라 결과가 달라질 수 있습니다. 실제 쇼핑몰의 쿠폰 적용 규칙을 확인하세요.",
      },
      {
        question: "판매가만 알고 있을 때 실제 할인율도 계산할 수 있나요?",
        answer:
          "가능합니다. 정가와 실제 판매가를 입력하면 정가에서 얼마나 낮아졌는지를 기준으로 실제 할인율을 역산할 수 있습니다.",
      },
      {
        question: "최대 할인 한도도 자동 반영되나요?",
        answer:
          "현재 계산기에 입력한 할인율과 쿠폰 금액을 기준으로 계산합니다. 쇼핑몰의 최소구매금액·최대할인한도 같은 별도 조건은 결제조건을 확인해 직접 반영하세요.",
      },
    ],
  },

  "/due-date": {
    eyebrow: "PREGNANCY DATE GUIDE",
    title: "출산예정일 계산, 왜 마지막 생리 시작일에서 40주일까요?",
    intro:
      "일반적인 출산예정일은 마지막 생리 시작일(LMP)의 첫날에서 280일, 즉 40주 뒤를 기준으로 추정합니다. 하지만 생리주기와 배란시점, 초음파 결과, 보조생식 여부에 따라 의료진이 예정일을 다르게 정할 수 있습니다.",
    updated: "ACOG 산과 기준 참고",
    sections: [
      {
        title: "일반적인 계산은 마지막 생리 시작일 + 280일",
        paragraphs: [
          "산과에서는 전통적으로 마지막 생리 시작일의 첫날을 임신 0주 0일로 보고 280일(40주)을 더해 예상 출산일을 계산합니다. 이는 28일의 규칙적인 생리주기와 대략 14일째 배란을 가정한 방식입니다.",
          "따라서 실제 수정일에서 정확히 280일을 세는 개념과는 다릅니다. 마지막 생리일 기억이 부정확하거나 주기가 불규칙하면 오차가 커질 수 있습니다.",
        ],
      },
      {
        title: "초기 초음파로 예정일이 조정될 수 있어요",
        paragraphs: [
          "미국산부인과학회(ACOG)는 임신 13주 6일까지의 첫 삼분기 초음파가 임신주수를 확정하거나 확인하는 가장 정확한 방법이라고 안내합니다.",
          "마지막 생리일로 계산한 주수와 초기 초음파 측정값에 의미 있는 차이가 있으면 의료진이 최종 예정일을 조정할 수 있습니다.",
        ],
      },
      {
        title: "시험관·배아이식 등 보조생식은 계산 기준이 달라요",
        paragraphs: [
          "보조생식술(ART)로 임신한 경우에는 마지막 생리일보다 배아의 나이와 이식일 등 시술정보를 사용해 출산예정일을 정하는 것이 권고됩니다.",
          "따라서 IVF·배아이식·인공수정 등 시술을 받은 경우에는 이 계산기보다 담당 의료진이 정한 임신주수와 예정일을 우선하세요.",
        ],
      },
      {
        title: "예정일은 ‘예상 날짜’이지 확정된 출산일이 아니에요",
        paragraphs: [
          "출산예정일은 임신 경과를 관리하기 위한 기준점입니다. 실제 분만일이 예정일과 정확히 일치하지 않는 경우가 흔하므로 계산 결과만으로 진료시기나 의학적 판단을 결정해서는 안 됩니다.",
        ],
      },
    ],
    faqs: [
      {
        question: "출산예정일은 마지막 생리 시작일부터 몇 일 뒤인가요?",
        answer:
          "일반적으로 마지막 생리 시작일의 첫날에서 280일, 즉 40주 뒤를 출산예정일로 추정합니다.",
      },
      {
        question: "생리주기가 28일이 아니어도 이 계산을 써도 되나요?",
        answer:
          "대략적인 확인에는 쓸 수 있지만 주기가 불규칙하거나 28일과 차이가 크면 오차가 생길 수 있습니다. 초기 초음파와 의료진의 판단을 우선하세요.",
      },
      {
        question: "초음파 예정일과 계산기 예정일이 다르면 무엇을 따라야 하나요?",
        answer:
          "임신 초기 초음파는 임신주수 확인에 매우 중요한 기준입니다. 담당 의료진이 의무기록에 확정한 예정일을 우선하는 것이 좋습니다.",
      },
      {
        question: "시험관 아기에도 마지막 생리일 기준을 쓰나요?",
        answer:
          "보조생식술로 임신한 경우에는 배아 나이와 이식일 등 시술정보를 이용해 예정일을 정하는 방식이 권고됩니다. 병원의 안내를 따르세요.",
      },
    ],
    links: [
      {
        label: "ACOG 출산예정일 산정 기준",
        href: "https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2017/05/methods-for-estimating-the-due-date",
      },
    ],
    note:
      "이 계산기는 임신주수와 출산예정일을 대략 확인하기 위한 정보 도구이며 진단·진료를 대신하지 않습니다. 통증, 출혈, 태동 변화 등 건강상 우려가 있거나 예정일이 의료진의 안내와 다르면 산부인과에 확인하세요.",
  },

  "/calorie-burn": {
    eyebrow: "CALORIE ESTIMATE GUIDE",
    title: "운동 칼로리 소모량, 왜 사람마다 다를까요?",
    intro:
      "운동 칼로리는 활동의 강도를 나타내는 MET 값과 체중, 운동시간을 이용해 추정할 수 있습니다. 다만 MET는 평균적인 활동강도를 나타내는 기준이므로 개인의 실제 에너지 소비량과 정확히 일치하는 값은 아닙니다.",
    updated: "2024 Compendium of Physical Activities 참고",
    sections: [
      {
        title: "MET는 활동강도를 비교하는 단위예요",
        paragraphs: [
          "1 MET는 안정적으로 앉아 있을 때의 에너지 소비량을 기준으로 한 단위이며, Compendium of Physical Activities에서는 1 MET를 약 1 kcal/kg/hour 또는 산소소비량 3.5 mL/kg/min에 대응하는 기준으로 설명합니다.",
          "예를 들어 6 MET 활동은 휴식상태보다 대략 6배 수준의 에너지 요구량을 가진 활동으로 이해할 수 있습니다.",
        ],
      },
      {
        title: "체중과 시간이 늘면 추정 소모량도 커져요",
        paragraphs: [
          "대표적인 환산식은 ‘kcal/분 = MET × 3.5 × 체중(kg) ÷ 200’입니다. 여기에 실제 운동시간(분)을 곱하면 전체 소모 칼로리를 추정할 수 있습니다.",
          "같은 걷기라도 체중이 다르거나 30분과 60분처럼 운동시간이 달라지면 계산 결과도 달라집니다.",
        ],
      },
      {
        title: "같은 운동 이름이라도 실제 강도는 달라요",
        bullets: [
          "걷기 속도와 경사도",
          "자전거 속도와 저항",
          "수영 영법과 휴식시간",
          "근력운동의 중량·세트·휴식시간",
          "개인의 체력과 운동 효율",
        ],
      },
      {
        title: "칼로리 숫자는 비교용으로 보는 게 좋아요",
        paragraphs: [
          "Compendium의 MET 값은 활동별 에너지 소비를 표준화해 비교하기 위한 값이며 개인의 정확한 에너지 소비를 직접 측정하는 도구는 아닙니다. 스마트워치나 운동기구의 칼로리 값 역시 센서와 알고리즘에 따라 차이가 날 수 있습니다.",
          "운동량을 꾸준히 관리할 때는 하루 한 번의 절대 숫자보다 같은 기준으로 기록한 시간·강도·빈도의 추세를 함께 보는 것이 유용합니다.",
        ],
      },
    ],
    faqs: [
      {
        question: "MET가 높으면 무조건 더 좋은 운동인가요?",
        answer:
          "MET가 높다는 것은 일반적으로 활동강도가 높다는 뜻이지 모든 사람에게 더 적합하다는 뜻은 아닙니다. 운동목적과 건강상태에 맞는 강도가 중요합니다.",
      },
      {
        question: "스마트워치와 계산기 칼로리가 왜 다른가요?",
        answer:
          "웨어러블은 심박수·움직임 등의 센서정보와 자체 알고리즘을 사용하고, 이 계산기는 표준 MET와 체중·시간을 이용한 추정식에 기반하기 때문에 차이가 날 수 있습니다.",
      },
      {
        question: "체중이 무거우면 같은 운동에서 더 많은 칼로리를 쓰나요?",
        answer:
          "표준 MET 환산식에서는 같은 MET와 시간이라면 체중이 클수록 추정 칼로리 소모량도 커집니다. 실제 값은 개인차가 있습니다.",
      },
      {
        question: "이 숫자를 식단 칼로리에서 그대로 빼도 되나요?",
        answer:
          "운동 칼로리는 추정값이라 정확한 에너지수지와 일치하지 않을 수 있습니다. 체중관리나 치료 목적이라면 장기적인 섭취·활동 추세와 전문가의 안내를 함께 참고하세요.",
      },
    ],
    links: [
      {
        label: "Compendium of Physical Activities",
        href: "https://pacompendium.com/",
      },
      {
        label: "Compendium MET 단위 환산",
        href: "https://pacompendium.com/unite-conversions/",
      },
    ],
    note:
      "칼로리 소모량은 표준 활동강도와 체중·시간으로 계산한 추정값입니다. 개인의 건강상태나 운동처방이 필요한 경우 의료진 또는 운동전문가의 안내를 우선하세요.",
  },

  "/dog-age": {
    eyebrow: "DOG LIFE STAGE GUIDE",
    title: "강아지 나이를 사람 나이로 단순히 ×7 하면 안 되는 이유",
    intro:
      "강아지는 사람과 같은 속도로 나이를 먹지 않고, 특히 생애 초기에는 훨씬 빠르게 성장합니다. 이후의 노화 속도도 체구·품종·건강상태에 따라 달라서 ‘강아지 1살 = 사람 7살’처럼 한 가지 비율만 적용하면 실제 생애단계를 제대로 설명하기 어렵습니다.",
    updated: "AAHA canine life stage 기준 참고",
    sections: [
      {
        title: "사람 나이 환산보다 생애단계가 더 중요해요",
        paragraphs: [
          "미국동물병원협회(AAHA)는 사람 나이로 정확히 몇 살인지 환산하기보다 강아지의 나이와 특징에 따라 생애단계를 보는 접근을 권합니다. 예방관리와 건강상태를 판단할 때는 나이뿐 아니라 체구, 생활환경, 품종, 기존 질환 등을 함께 고려해야 하기 때문입니다.",
        ],
      },
      {
        title: "생애 초반에는 빠르게 성숙해요",
        paragraphs: [
          "AAHA의 생애단계 기준에서 Puppy는 출생부터 빠른 성장이 끝나는 약 6~9개월까지이며, 이후 Young adult 단계는 대부분의 개가 신체적·사회적으로 성숙하는 약 3~4세까지 이어집니다.",
          "이처럼 첫 1~2년의 변화가 매우 크기 때문에 매년 사람 나이 7살씩 더하는 단순 공식은 성장과정을 잘 반영하지 못합니다.",
        ],
      },
      {
        title: "소형견과 대형견의 노화 속도도 달라요",
        paragraphs: [
          "일반적으로 소형견은 대형견보다 오래 사는 경향이 있어 노령기로 들어가는 시점도 다를 수 있습니다. AAHA는 소형견이 약 12세까지도 시니어로 보지 않을 수 있는 반면, 대형견은 7~8세부터 시니어 단계에 들어갈 수 있다고 설명합니다.",
          "따라서 사람 나이 환산 결과는 재미와 대략적인 비교에 활용하고, 실제 건강관리는 체구와 품종에 맞는 생애단계로 보는 것이 좋습니다.",
        ],
      },
      {
        title: "나이보다 정기검진과 변화 관찰이 중요해요",
        bullets: [
          "체중과 식욕의 갑작스러운 변화",
          "걷기·점프 등 활동성 감소",
          "물 섭취량이나 배뇨 습관 변화",
          "치아·피부·눈·귀 상태 변화",
          "수면이나 행동패턴의 뚜렷한 변화",
        ],
      },
    ],
    faqs: [
      {
        question: "강아지 1살은 사람 7살인가요?",
        answer:
          "정확한 공식으로 보기 어렵습니다. 강아지는 첫해에 빠르게 성장하고 이후에는 체구와 품종에 따라 노화속도가 달라집니다.",
      },
      {
        question: "몇 살부터 노령견인가요?",
        answer:
          "고정된 한 나이로 정하기 어렵습니다. 소형견은 상대적으로 늦고 대형견은 더 일찍 노령기에 들어갈 수 있으며, AAHA는 예상수명의 마지막 약 25%를 Senior 단계로 정의합니다.",
      },
      {
        question: "같은 나이인데 대형견이 더 나이 들어 보이는 이유는 무엇인가요?",
        answer:
          "개의 노화속도와 예상수명은 체구·품종에 따라 차이가 있습니다. 일반적으로 대형견은 소형견보다 더 이른 시점에 시니어 단계에 들어갈 수 있습니다.",
      },
      {
        question: "사람 나이 환산값으로 건강검진 시기를 정해도 되나요?",
        answer:
          "환산값은 참고용입니다. 예방접종과 건강검진 주기는 반려견의 실제 나이, 품종, 체구, 건강상태와 수의사의 권고를 기준으로 정하세요.",
      },
    ],
    links: [
      {
        label: "AAHA Canine Life Stage Definitions",
        href: "https://www.aaha.org/resources/life-stage-canine-2019/canine-life-stage-definitions/",
      },
      {
        label: "AAHA Senior Pet Life Stage 안내",
        href: "https://www.aaha.org/resources/senior-status-understanding-your-senior-pets-life-stage/",
      },
    ],
    note:
      "사람 나이 환산값은 반려견의 생애단계를 이해하기 위한 대략적인 비교값입니다. 식욕·활동성·체중·행동 등에 변화가 있으면 환산나이와 관계없이 수의사에게 상담하세요.",
  },

};

const GUIDE_TABLES: Record<string, GuideTable[]> = {

  "/lunar": [
    {
      title: "음력·양력 핵심 개념",
      headers: ["구분", "뜻", "변환할 때 확인할 점"],
      rows: [
        ["양력", "태양을 기준으로 한 현재의 일반 달력", "연·월·일 입력"],
        ["음력", "달의 주기를 바탕으로 윤달로 계절을 조정", "평달·윤달 여부 확인"],
        ["평달", "일반적으로 들어가는 음력 월", "기본 음력 날짜에 사용"],
        ["윤달", "역일과 계절 차이를 맞추기 위해 추가되는 달", "해당 연도에 실제 윤달이 있는지 확인"],
      ],
    },
  ],
  "/age": [
    {
      title: "만 나이 계산 예시",
      description: "기준일이 2026년 9월 14일이라고 가정한 예시입니다.",
      headers: ["생년월일", "생일 여부", "만 나이"],
      rows: [
        ["1990.09.02", "생일 지남", "만 36세"],
        ["1990.12.02", "생일 전", "만 35세"],
        ["2000.01.01", "생일 지남", "만 26세"],
        ["2000.12.31", "생일 전", "만 25세"],
      ],
    },
  ],
  "/fee": [
    {
      title: "거래금액별 수수료 예시",
      description: "부가세나 별도 플랫폼 공제 없이 단순 수수료율만 적용한 예시입니다.",
      headers: ["거래금액", "3% 수수료", "5% 수수료", "10% 수수료"],
      rows: [
        ["100,000원", "3,000원", "5,000원", "10,000원"],
        ["500,000원", "15,000원", "25,000원", "50,000원"],
        ["1,000,000원", "30,000원", "50,000원", "100,000원"],
        ["5,000,000원", "150,000원", "250,000원", "500,000원"],
      ],
    },
  ],
  "/stock-average": [
    {
      title: "추가매수에 따른 평단 변화 예시",
      description: "현재 50,000원에 100주를 보유하고 추가 100주를 매수하는 단순 예시입니다.",
      headers: ["추가 매수가", "추가 수량", "새 평단", "구분"],
      rows: [
        ["40,000원", "100주", "45,000원", "물타기"],
        ["45,000원", "100주", "47,500원", "물타기"],
        ["50,000원", "100주", "50,000원", "평단 유지"],
        ["60,000원", "100주", "55,000원", "불타기"],
      ],
    },
  ],
  "/discount": [
    {
      title: "10만원 상품의 할인 예시",
      headers: ["할인 조건", "최종 가격", "실제 할인율"],
      rows: [
        ["10% 할인", "90,000원", "10%"],
        ["20% 할인", "80,000원", "20%"],
        ["20% 후 추가 10%", "72,000원", "28%"],
        ["20% 후 1만원 쿠폰", "70,000원", "30%"],
        ["50% 할인", "50,000원", "50%"],
      ],
    },
  ],
  "/due-date": [
    {
      title: "마지막 생리 시작일 기준 임신주수 참고",
      description: "일반적인 40주 임신을 단순 달력 일수로 표시한 예시입니다. 실제 임신주수는 의료진이 조정할 수 있습니다.",
      headers: ["임신주수", "LMP 첫날부터", "의미"],
      rows: [
        ["0주", "0일", "마지막 생리 시작일"],
        ["12주", "84일", "임신 12주 시점"],
        ["20주", "140일", "임신 20주 시점"],
        ["40주", "280일", "일반적인 예상 출산일"],
      ],
    },
  ],
  "/calorie-burn": [
    {
      title: "MET 공식으로 본 30분 운동 예시",
      description: "kcal/분 = MET × 3.5 × 체중(kg) ÷ 200 공식을 사용한 단순 추정값입니다.",
      headers: ["체중", "활동강도", "시간", "추정 소모량"],
      rows: [
        ["60kg", "3 MET", "30분", "약 95kcal"],
        ["70kg", "5 MET", "30분", "약 184kcal"],
        ["80kg", "8 MET", "30분", "약 336kcal"],
      ],
    },
  ],
  "/dog-age": [
    {
      title: "AAHA가 제시하는 강아지 생애단계",
      description: "품종과 체구에 따라 경계가 달라질 수 있어 사람 나이 환산보다 생애단계로 이해하는 편이 유용합니다.",
      headers: ["단계", "대략적인 범위", "특징"],
      rows: [
        ["Puppy", "출생~약 6~9개월", "빠른 성장이 끝날 때까지"],
        ["Young adult", "성장 종료~약 3~4세", "신체·사회적 성숙 단계"],
        ["Mature adult", "성숙 후~예상수명 마지막 25% 전", "품종·체구별 차이가 큼"],
        ["Senior", "예상수명의 마지막 약 25%", "나이보다 건강상태를 함께 확인"],
      ],
    },
  ],

};

export default function CalculatorSeoContentV29({ pathname }: { pathname: string }) {
  const guide = GUIDES[pathname];
  const tables = GUIDE_TABLES[pathname] ?? [];

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
                <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-bold text-gray-500">
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


          {tables.length > 0 && (
            <section className="mt-10 border-t border-gray-100 pt-8">
              <div>
                <p className="text-xs font-black tracking-wider text-blue-600">
                  QUICK TABLE
                </p>
                <h3 className="mt-2 text-xl font-black text-gray-900">
                  계산 예시와 기준표
                </h3>
              </div>

              <div className="mt-5 space-y-6">
                {tables.map((table) => (
                  <div
                    key={table.title}
                    className="overflow-hidden rounded-2xl border border-gray-200"
                  >
                    <div className="bg-gray-50 px-5 py-4">
                      <h4 className="text-sm font-black text-gray-900">
                        {table.title}
                      </h4>
                      {table.description && (
                        <p className="mt-1 text-xs leading-5 text-gray-500">
                          {table.description}
                        </p>
                      )}
                    </div>

                    <p className="border-t border-gray-200 bg-white px-4 pt-3 text-xs font-semibold text-gray-500 sm:hidden">
                      ← 표는 좌우로 밀어서 볼 수 있어요 →
                    </p>
                    <div className="overflow-x-auto overscroll-x-contain">
                      <table className="w-full min-w-max border-collapse text-left text-sm">
                        <caption className="sr-only">{table.title}</caption>
                        <thead>
                          <tr className="border-t border-gray-200 bg-white">
                            {table.headers.map((header) => (
                              <th
                                key={header}
                                className="whitespace-nowrap border-b border-gray-200 px-4 py-3 text-xs font-black text-gray-500"
                              >
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {table.rows.map((row, rowIndex) => (
                            <tr
                              key={`${table.title}-${rowIndex}`}
                              className="border-b border-gray-100 last:border-b-0"
                            >
                              {row.map((cell, cellIndex) => (
                                <td
                                  key={`${rowIndex}-${cellIndex}`}
                                  className={`whitespace-nowrap px-4 py-3 ${
                                    cellIndex === 0
                                      ? "font-bold text-gray-900"
                                      : "text-gray-600"
                                  }`}
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

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
                    {link.label} ↗<span className="sr-only"> (새 창)</span>
                  </a>
                ))}
              </div>
            </section>
          )}

          <div className="mt-7 text-xs leading-6 text-gray-500">
            {guide.note ??
              "몇이지?의 계산 결과와 안내 내용은 이해를 돕기 위한 참고용입니다. 법령·요율·개인별 조건에 따라 실제 결과가 달라질 수 있으므로 중요한 의사결정에는 관계기관의 최신 공식자료를 함께 확인하세요."}
          </div>
        </div>
      </article>
    </section>
  );
}

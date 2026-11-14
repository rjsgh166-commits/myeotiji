// Localized copy for globally usable calculators.
// Text remains distinct across languages; formulas live in one shared component.
import { EXPANSION } from "./intl-expansion";
export const LOCALES = ["en", "ja", "zh-hans", "es", "pt-br", "id", "hi", "fr", "ar", "bn", "ur", "vi"] as const;
export const TOOLS = ["fee", "discount", "days", "stock-average", "compound", "unit-converter", "age"] as const;
export type IntlLocale = (typeof LOCALES)[number];
export type IntlTool = (typeof TOOLS)[number];
export function isIntlLocale(value: string): value is IntlLocale { return LOCALES.includes(value as IntlLocale); }
export function isIntlTool(value: string): value is IntlTool { return TOOLS.includes(value as IntlTool); }
const BASE_COPY = {
  "en": {
    "label": "English",
    "tag": "en",
    "home": "International calculators",
    "subtitle": "Practical calculations for dates, money and everyday decisions. Choose a calculator and see the formula behind the answer.",
    "choose": "Choose a calculator",
    "calculate": "Calculate",
    "results": "Results",
    "inputs": "Your inputs",
    "how": "How it works",
    "example": "Worked example",
    "note": "Important to know",
    "related": "Explore other calculators",
    "lang": "Language",
    "currency": "Currency",
    "start": "Start date",
    "end": "End date",
    "included": "Include the start date",
    "invalid": "Enter valid values to see a result.",
    "back": "All calculators",
    "disclaimer": "Illustrative estimates. Check official or provider-specific terms before making financial decisions.",
    "today": "Today",
    "source": "Original Korean calculators",
    "indexIntro": "These tools work across countries. Select your currency and check whether your provider applies extra taxes or fees.",
    "categories": {
      "length": "Length",
      "weight": "Weight",
      "area": "Area",
      "volume": "Volume",
      "temperature": "Temperature",
      "data": "Data storage"
    },
    "tools": {
      "fee": {
        "title": "Fee & Take-Home Calculator",
        "description": "Find the fee, net payout and price needed to receive your target amount after percentage and fixed fees.",
        "intro": "Compare how much a payment platform takes from a sale and calculate the charge required to reach your desired take-home amount.",
        "formula": "Net payout = charge × (1 − fee rate) − fixed fee. Required charge = (target net + fixed fee) ÷ (1 − fee rate).",
        "example": "On a $100 charge with a 3% percentage fee and $0.30 fixed fee, the net payout is $96.70. To receive $100 net, charge about $103.40.",
        "note": "Payment processors may apply additional taxes, cross-border fees, refunds and rounding rules.",
        "fields": [
          "Charge or target net amount",
          "Percentage fee (%)",
          "Fixed fee"
        ],
        "modes": [
          "Deduct fees",
          "Reverse: target net"
        ],
        "out": [
          "Fee total",
          "Net payout",
          "Required charge"
        ]
      },
      "discount": {
        "title": "Stacked Discount Calculator",
        "description": "Find the final price and effective discount after two sequential offers or coupons.",
        "intro": "A 20% discount followed by another 10% is not a 30% discount. See the real savings after both offers.",
        "formula": "Final price = original price × (1 − first discount) × (1 − second discount).",
        "example": "A $100 item discounted by 20% and then 10% costs $72. That is a 28% total discount.",
        "note": "Taxes, shipping, exclusions and order-of-operations can change the checkout price.",
        "fields": [
          "Original price",
          "First discount (%)",
          "Second discount (%)"
        ],
        "out": [
          "Final price",
          "Total savings",
          "Effective discount"
        ]
      },
      "days": {
        "title": "Days Between Dates & Milestones",
        "description": "Count the days between two dates, with a choice to include the first day.",
        "intro": "Calculate elapsed calendar days for birthdays, anniversaries, deadlines or project milestones.",
        "formula": "Subtract the two calendar dates in UTC to avoid daylight-saving transitions. Including the first day adds one day for an ascending range.",
        "example": "From January 1 to January 11 is 10 elapsed days. If January 1 counts as day 1, the count is 11.",
        "note": "This is a calendar-day count, not a business-day or national-holiday calculation.",
        "fields": [
          "Start date",
          "End date"
        ],
        "out": [
          "Elapsed days",
          "Weeks and days"
        ]
      },
      "stock-average": {
        "title": "Stock Average Cost Calculator",
        "description": "Calculate your new weighted-average share cost after buying more shares.",
        "intro": "See how adding shares at a different purchase price changes the average cost per share.",
        "formula": "New average = (current shares × current average + new shares × buy price) ÷ total shares.",
        "example": "100 shares at $50 plus 100 shares at $40 gives a $45 average across 200 shares.",
        "note": "Trading fees, taxes, FX rates and realized sales are not included. This is not investment advice.",
        "fields": [
          "Current shares",
          "Current average price",
          "Additional shares",
          "New purchase price"
        ],
        "out": [
          "New average share cost",
          "Total shares",
          "Total cost basis"
        ]
      },
      "compound": {
        "title": "Compound Growth Calculator",
        "description": "Estimate long-term growth with an initial deposit, monthly additions and annual returns.",
        "intro": "Project how savings or investments might grow when returns compound and contributions are added monthly.",
        "formula": "Monthly effective rate = (1 + annual return)^(1/12) − 1. Apply growth, then add each monthly contribution.",
        "example": "Start with $1,000, add $100 monthly, and assume a 5% annual rate for 10 years to explore the estimated balance.",
        "note": "Constant returns are hypothetical. Real investment returns, taxes and fees vary; monthly contributions are made at month-end.",
        "fields": [
          "Starting balance",
          "Monthly contribution",
          "Annual return (%)",
          "Years"
        ],
        "out": [
          "Estimated balance",
          "Total contributions",
          "Estimated growth"
        ]
      },
      "unit-converter": {
        "title": "Unit Converter",
        "description": "Convert length, mass, area, volume, temperature and digital storage units.",
        "intro": "Switch between metric and imperial measurements without changing pages.",
        "formula": "For standard units, convert to a common base unit before converting to the destination. Temperature uses an offset as well as a scale.",
        "example": "1 mile equals 1.609344 kilometers, and 100°F equals approximately 37.78°C.",
        "note": "US liquid gallons and US cups are used; storage units include decimal kB/MB/GB and binary KiB/MiB/GiB.",
        "fields": [
          "Value",
          "From",
          "To"
        ],
        "out": [
          "Converted value"
        ]
      },
      "age": {
        "title": "Age Calculator",
        "description": "Calculate exact age in full years and days since birth using a date of birth.",
        "intro": "Find completed years of age as of today, plus the elapsed number of calendar days since birth.",
        "formula": "Completed years = reference year − birth year, minus one when this year's birthday has not yet occurred.",
        "example": "Someone born December 31, 2000 is still 25 on December 30, 2026, and turns 26 the next day.",
        "note": "The reference date is your local calendar date. Legal age definitions can differ by country and purpose.",
        "fields": [
          "Date of birth"
        ],
        "out": [
          "Age in full years",
          "Days since birth"
        ]
      }
    }
  },
  "ja": {
    "label": "日本語",
    "tag": "ja",
    "home": "世界で使える計算ツール",
    "subtitle": "日付・手数料・割引・資産形成などをわかりやすく計算。計算式と具体例も確認できます。",
    "choose": "計算ツールを選ぶ",
    "calculate": "計算する",
    "results": "計算結果",
    "inputs": "入力項目",
    "how": "計算方法",
    "example": "計算例",
    "note": "ご利用上の注意",
    "related": "その他の計算ツール",
    "lang": "言語",
    "currency": "通貨",
    "start": "開始日",
    "end": "終了日",
    "included": "開始日を含める",
    "invalid": "有効な数値を入力してください。",
    "back": "計算ツール一覧",
    "disclaimer": "計算結果は参考値です。契約条件や税制などは各サービスの公式情報をご確認ください。",
    "today": "今日",
    "source": "韓国語版の計算ツール",
    "indexIntro": "海外でも使える計算に絞っています。通貨を選択し、追加の税金・手数料についてはサービスごとにご確認ください。",
    "categories": {
      "length": "長さ",
      "weight": "重さ",
      "area": "面積",
      "volume": "体積",
      "temperature": "温度",
      "data": "データ容量"
    },
    "tools": {
      "fee": {
        "title": "手数料・受取額の逆算ツール",
        "description": "手数料率と固定手数料から受取額を計算。希望受取額から必要な請求金額も逆算できます。",
        "intro": "販売額から差し引かれる手数料を求め、希望する手取り額を確保するために必要な金額を逆算します。",
        "formula": "受取額 = 請求額 × (1 − 手数料率) − 固定手数料。必要請求額 = (希望受取額 + 固定手数料) ÷ (1 − 手数料率)。",
        "example": "100円の決済に手数料3%と固定手数料0.30円がかかる場合、受取額は96.70円です。",
        "note": "税金、海外取引手数料、返金時の処理や端数計算は決済サービスによって異なります。",
        "fields": [
          "請求額または希望受取額",
          "手数料率 (%)",
          "固定手数料"
        ],
        "modes": [
          "手数料を差し引く",
          "希望受取額から逆算"
        ],
        "out": [
          "手数料合計",
          "実際の受取額",
          "必要な請求額"
        ]
      },
      "discount": {
        "title": "重複割引・クーポン計算",
        "description": "割引を2回適用したときの最終価格・割引額・実質割引率を計算します。",
        "intro": "20%割引の後に10%割引しても、合計30%引きにはなりません。実際の割引額を確認しましょう。",
        "formula": "最終価格 = 元の価格 × (1 − 1回目の割引率) × (1 − 2回目の割引率)。",
        "example": "100円の商品を20%引き、さらに10%引きにすると72円。実質28%引きです。",
        "note": "送料・税金・クーポン対象外商品などは計算に含みません。",
        "fields": [
          "元の価格",
          "1回目の割引率 (%)",
          "2回目の割引率 (%)"
        ],
        "out": [
          "最終価格",
          "割引額",
          "実質割引率"
        ]
      },
      "days": {
        "title": "日数・記念日計算",
        "description": "2つの日付の差を計算。開始日を数に含めるか選べます。",
        "intro": "誕生日、記念日、締切日、プロジェクトの経過日数を簡単に確認できます。",
        "formula": "日付をUTC基準の暦日として比較します。開始日を1日目と数える場合は1日を加えます。",
        "example": "1月1日から1月11日までは経過10日。開始日を含めれば11日目です。",
        "note": "営業日や祝日を除外した日数ではありません。",
        "fields": [
          "開始日",
          "終了日"
        ],
        "out": [
          "日数",
          "週と日"
        ]
      },
      "stock-average": {
        "title": "株式の平均取得単価計算",
        "description": "買い増し後の株数と加重平均取得単価を計算します。",
        "intro": "保有株式を異なる価格で買い増した場合の平均取得単価を確認できます。",
        "formula": "新しい平均単価 = (既存株数 × 既存平均単価 + 追加株数 × 購入単価) ÷ 合計株数。",
        "example": "50円で100株保有し、40円で100株追加購入すると平均45円、計200株です。",
        "note": "売買手数料・税金・為替・売却取引は含みません。投資判断の助言ではありません。",
        "fields": [
          "保有株数",
          "現在の平均単価",
          "追加株数",
          "追加購入単価"
        ],
        "out": [
          "新しい平均取得単価",
          "合計株数",
          "取得総額"
        ]
      },
      "compound": {
        "title": "複利・積立シミュレーター",
        "description": "初期資金・毎月の積立額・想定利回りから将来の資産額を試算します。",
        "intro": "毎月積み立てる場合の複利運用を、想定年間利回りと運用年数で計算します。",
        "formula": "月間実効利率 = (1 + 年間利回り)^(1/12) − 1。毎月の運用益を反映後に積立額を加えます。",
        "example": "初期資金1,000円、毎月100円、年利5%、10年間という条件で将来の資産を試算できます。",
        "note": "一定利回りの仮定による参考値です。実際の運用益・手数料・税金は異なります。毎月末積立を仮定します。",
        "fields": [
          "初期資金",
          "毎月の積立額",
          "想定年利 (%)",
          "運用年数"
        ],
        "out": [
          "将来の推定資産",
          "拠出総額",
          "推定運用益"
        ]
      },
      "unit-converter": {
        "title": "単位換算ツール",
        "description": "長さ・重さ・面積・体積・温度・データ容量を換算します。",
        "intro": "メートル法とヤード・ポンド法など、様々な単位を素早く変換できます。",
        "formula": "基本単位を経由して換算します。温度は倍率に加えて基準値の差を考慮します。",
        "example": "1マイルは約1.609344キロメートル、100°Fは約37.78°Cです。",
        "note": "液量ガロン・カップは米国基準。データ容量は10進単位と2進単位を区別します。",
        "fields": [
          "数値",
          "換算元",
          "換算先"
        ],
        "out": [
          "換算結果"
        ]
      },
      "age": {
        "title": "満年齢・生後日数計算",
        "description": "生年月日から満年齢と生まれてからの日数を計算します。",
        "intro": "現在の満年齢と、生まれてから経過した暦日数を確認できます。",
        "formula": "満年齢 = 現在の年 − 生まれた年。まだ今年の誕生日を迎えていなければ1を引きます。",
        "example": "2000年12月31日生まれは2026年12月30日時点で25歳、翌日に26歳になります。",
        "note": "現地の日付を使用します。法律上の年齢の定義は国や目的によって異なります。",
        "fields": [
          "生年月日"
        ],
        "out": [
          "満年齢",
          "生後日数"
        ]
      }
    }
  },
  "zh-hans": {
    "label": "简体中文",
    "tag": "zh-Hans",
    "home": "实用国际计算工具",
    "subtitle": "轻松计算日期、手续费、折扣和投资数据，并了解计算公式与示例。",
    "choose": "选择计算器",
    "calculate": "开始计算",
    "results": "计算结果",
    "inputs": "输入信息",
    "how": "计算方法",
    "example": "计算示例",
    "note": "注意事项",
    "related": "更多计算器",
    "lang": "语言",
    "currency": "货币",
    "start": "开始日期",
    "end": "结束日期",
    "included": "包含开始日期",
    "invalid": "请输入有效数据。",
    "back": "全部计算器",
    "disclaimer": "结果仅供参考。财务决策前请核对平台规定、税务信息和官方来源。",
    "today": "今天",
    "source": "韩文原版计算器",
    "indexIntro": "这里提供跨国通用的计算工具。请选择货币，并留意不同平台的税费规则。",
    "categories": {
      "length": "长度",
      "weight": "重量",
      "area": "面积",
      "volume": "体积",
      "temperature": "温度",
      "data": "数据容量"
    },
    "tools": {
      "fee": {
        "title": "手续费与实收金额计算器",
        "description": "计算手续费、实际到账金额，以及为了达到目标到账金额所需的收款金额。",
        "intro": "根据交易金额、手续费率和固定费用，计算实际到账金额；也能反向计算目标收款金额。",
        "formula": "实收 = 收款金额 × (1 − 手续费率) − 固定费用。所需收款 = (目标实收 + 固定费用) ÷ (1 − 手续费率)。",
        "example": "收款100元，手续费3%加固定手续费0.30元，实际到账96.70元。",
        "note": "不同支付平台可能有额外税费、跨境费用和舍入规则。",
        "fields": [
          "收款金额或目标到账金额",
          "手续费率 (%)",
          "固定手续费"
        ],
        "modes": [
          "扣除手续费",
          "根据目标实收倒推"
        ],
        "out": [
          "手续费总额",
          "实际到账",
          "所需收款"
        ]
      },
      "discount": {
        "title": "叠加折扣计算器",
        "description": "计算两次折扣后的最终价格、节省金额和实际折扣率。",
        "intro": "先打八折再打九折，并不等于直接打七折。计算叠加优惠后的实际价格。",
        "formula": "最终价格 = 原价 × (1 − 第一次折扣率) × (1 − 第二次折扣率)。",
        "example": "原价100元，先减20%，再减10%，最终72元，实际优惠28%。",
        "note": "未包含运费、税费或特定商品的优惠限制。",
        "fields": [
          "商品原价",
          "第一次折扣 (%)",
          "第二次折扣 (%)"
        ],
        "out": [
          "最终价格",
          "节省金额",
          "实际折扣率"
        ]
      },
      "days": {
        "title": "日期间隔与纪念日计算器",
        "description": "计算两个日期之间的天数，可选择是否包含起始日。",
        "intro": "计算生日、纪念日、截止日期或项目持续时间所跨越的自然日。",
        "formula": "按照UTC的日历日期计算相差天数；选择包含起始日时，在正向区间的天数上加1。",
        "example": "1月1日到1月11日经过10天。如果1月1日算第1天，则是第11天。",
        "note": "这里计算自然日，不会自动排除周末或各国法定节假日。",
        "fields": [
          "开始日期",
          "结束日期"
        ],
        "out": [
          "相差天数",
          "周数与剩余天数"
        ]
      },
      "stock-average": {
        "title": "股票平均成本计算器",
        "description": "计算补仓后的股票总数量和加权平均持仓成本。",
        "intro": "在不同价格买入更多股票时，快速计算新的每股平均成本。",
        "formula": "新均价 = (原持仓数量 × 原均价 + 新买数量 × 新价格) ÷ 总数量。",
        "example": "原有100股，每股50元；再以40元买100股，新均价为45元，共200股。",
        "note": "不包含交易手续费、税费、汇率或已卖出的股票，不构成投资建议。",
        "fields": [
          "原持仓股数",
          "原平均成本",
          "追加买入股数",
          "追加买入价格"
        ],
        "out": [
          "新的平均成本",
          "总持仓股数",
          "总成本"
        ]
      },
      "compound": {
        "title": "复利与定投计算器",
        "description": "用初始本金、每月追加金额、预期收益率估算未来的资金规模。",
        "intro": "查看假设收益率不变时，定期投入资金产生的复利增长效果。",
        "formula": "月实际收益率 = (1 + 年收益率)^(1/12) − 1。每月先计算收益，再加入当月投入。",
        "example": "初始1,000元、每月投入100元、假设年收益率5%、投资10年，可以查看预计余额。",
        "note": "收益率保持不变仅为模拟。实际收益、税费可能不同，默认每月月末投入。",
        "fields": [
          "初始本金",
          "每月投入",
          "预期年收益率 (%)",
          "投资年数"
        ],
        "out": [
          "预计余额",
          "投入本金总额",
          "预计收益"
        ]
      },
      "unit-converter": {
        "title": "国际单位换算器",
        "description": "换算长度、重量、面积、体积、温度和存储容量。",
        "intro": "快速转换公制、英制和常见数据容量单位。",
        "formula": "先转换为统一的基准单位，再转换成目标单位；温度换算还需要处理温标零点。",
        "example": "1英里约等于1.609344千米，100华氏度约等于37.78摄氏度。",
        "note": "美制加仑与美制杯按美国标准计算；存储单位区分十进制与二进制。",
        "fields": [
          "数值",
          "原单位",
          "目标单位"
        ],
        "out": [
          "换算结果"
        ]
      },
      "age": {
        "title": "周岁与出生天数计算器",
        "description": "根据出生日期计算实际周岁和出生至今的自然日数。",
        "intro": "通过生日计算现在的周岁，以及从出生至今经过多少天。",
        "formula": "周岁 = 当前年份 − 出生年份。如果今年生日尚未到来，再减1岁。",
        "example": "2000年12月31日出生的人，在2026年12月30日是25周岁，次日满26周岁。",
        "note": "按当地日历日期计算；不同国家和用途的法律年龄标准可能不同。",
        "fields": [
          "出生日期"
        ],
        "out": [
          "周岁",
          "出生天数"
        ]
      }
    }
  }
} as const;
export const COPY = { ...BASE_COPY, es: EXPANSION.es.copy, "pt-br": EXPANSION["pt-br"].copy, id: EXPANSION.id.copy, hi: EXPANSION.hi.copy, fr: EXPANSION.fr.copy, ar: EXPANSION.ar.copy, bn: EXPANSION.bn.copy, ur: EXPANSION.ur.copy, vi: EXPANSION.vi.copy };
export const OG_LOCALES: Record<IntlLocale, string> = { en: "en_US", ja: "ja_JP", "zh-hans": "zh_CN", es: "es_ES", "pt-br": "pt_BR", id: "id_ID", hi: "hi_IN", fr: "fr_FR", ar: "ar_EG", bn: "bn_BD", ur: "ur_PK", vi: "vi_VN" };
export const DEFAULT_CURRENCY: Record<IntlLocale, string> = { en: "USD", ja: "JPY", "zh-hans": "CNY", es: "USD", "pt-br": "BRL", id: "IDR", hi: "INR", fr: "EUR", ar: "EGP", bn: "BDT", ur: "PKR", vi: "VND" };
export function localizedAlternates(tool?: IntlTool) {
 const suffix = tool ? `/${tool}` : "";
 return Object.fromEntries([...LOCALES.map(locale => [COPY[locale].tag, `https://myeotiji.kr/${locale}${suffix}`]), ["x-default", `https://myeotiji.kr/en${suffix}`]]);
}

export const isRtl = (locale: IntlLocale) => locale === "ar" || locale === "ur";

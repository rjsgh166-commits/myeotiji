// Nine country-specific calculator definitions; law/date/region-scoped source notes.
export const COUNTRY_TOOLS = [
  {
    "locale": "en",
    "region": "us",
    "id": "401k-match",
    "title": "401(k) Employer Match Calculator (2026–2027)",
    "description": "Calculate annual employee 401(k) contributions and employer matching dollars under your plan’s matching formula.",
    "intro": "Your employer's matching formula can make a big difference to retirement savings. Enter your annual salary, your contribution percentage and how much your employer matches. Compare the 2026 and 2027 contribution limits.",
    "formula": "Employee contribution = min(salary × contribution %, annual employee limit). Employer match = min(actual employee contribution, salary × eligible match %) × matching %. Additional plan limits may apply.",
    "example": "At $80,000 salary, contributing 6%, with 50% employer match on the first 6% of pay produces $4,800 employee contributions and $2,400 employer match.",
    "scope": "Applies to the US: standard under-age-50 employee deferral limit is $24,500 for 2026 or $25,500 for 2027. Excludes catch-up contributions, plan compensation caps, vesting, true-ups and overall employer+employee limits. Verify your plan document.",
    "updated": "2026-11-13",
    "source": [
      {
        "label": "IRS: 2027 plan limits (Nov 12, 2026)",
        "url": "https://www.irs.gov/newsroom/401k-limit-increases-to-25500-for-2027-ira-limit-remains-7500"
      },
      {
        "label": "IRS: 401(k) contribution rules",
        "url": "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-401k-and-profit-sharing-plan-contribution-limits"
      }
    ]
  },
  {
    "locale": "en",
    "region": "us",
    "id": "overtime-pay",
    "title": "US Overtime Pay Calculator (FLSA)",
    "description": "Estimate weekly overtime pay at 1.5× the regular hourly rate after 40 hours under federal FLSA rules.",
    "intro": "Calculate regular pay, overtime hours and gross weekly pay for a US nonexempt employee under the basic federal 40-hour workweek rule.",
    "formula": "Regular pay = min(hours, 40) × regular hourly rate. Overtime pay = max(0, hours − 40) × hourly rate × 1.5.",
    "example": "45 hours at $20/hour = $800 regular pay plus $150 overtime pay, for $950 gross weekly pay.",
    "scope": "Federal FLSA baseline only: for covered nonexempt workers, over 40 hours per 168-hour workweek. Certain state laws require daily overtime or different rates. Does not model bonuses affecting the regular rate, exemptions, shift premiums or special occupations.",
    "updated": "2026-11-13",
    "source": [
      {
        "label": "US Department of Labor: Overtime Pay",
        "url": "https://www.dol.gov/agencies/whd/overtime"
      }
    ]
  },
  {
    "locale": "en",
    "region": "us",
    "id": "take-home-pay",
    "title": "US Take-Home Pay Calculator — 2026 Federal Estimate",
    "description": "Estimate annual and monthly take-home salary using 2026 US federal brackets, standard deduction, FICA and an editable state-tax allowance.",
    "intro": "Get an illustrative after-tax pay estimate for 2026 using your salary, filing status, traditional 401(k) contribution and an optional flat estimated state/local tax rate.",
    "formula": "Estimated annual net = salary − traditional 401(k) employee contribution − 2026 federal income tax after standard deduction − employee FICA − estimated state/local tax.",
    "example": "For an $80,000 salary, filing single, with 5% traditional 401(k), calculate an approximate annual and monthly net. Federal income tax is calculated using 2026 marginal brackets.",
    "scope": "Simplified 2026 annual model, not a paystub or W‑4 withholding calculation. Excludes credits, children, itemized deductions, other income, overtime/tip deductions, benefits, many state/local differences and employer contributions. Medicare add-on uses employer withholding above $200,000; actual tax liability can differ.",
    "updated": "2026-11-13",
    "source": [
      {
        "label": "IRS: 2026 tax brackets and deductions",
        "url": "https://www.irs.gov/irb/2025-45_IRB"
      },
      {
        "label": "IRS: Social Security and Medicare withholding",
        "url": "https://www.irs.gov/taxtopics/tc751"
      },
      {
        "label": "SSA: 2026 Social Security taxable maximum",
        "url": "https://www.ssa.gov/OACT/cola/cbb.html"
      }
    ]
  },
  {
    "locale": "ja",
    "region": "jp",
    "id": "income-wall",
    "title": "年収の壁・社会保険加入目安計算（2026年10月以降）",
    "description": "週20時間・会社規模・学生区分と収入から、社会保険加入の目安と概算控除後収入を確認できます。",
    "intro": "パート・アルバイトの勤務時間と年収から、2026年10月以降の短時間労働者の社会保険適用と、いわゆる130万円の扶養基準を確認します。",
    "formula": "年収 = 月額給与 × 12。一般的な短時間労働者の加入目安：51人以上の事業所・週20時間以上・学生ではないなど。加入時の社会保険料概算 = 年収 × 入力した本人負担率。",
    "example": "月額12万円なら年収144万円です。51人以上の会社で週20時間以上働く非学生の場合は、社会保険の対象となる可能性が高くなります。",
    "scope": "2026年10月以降の一般的な目安です。月額8.8万円の賃金要件は撤廃。勤務期間・雇用見込み、学生特例、被扶養者の130万円要件の例外、健康保険組合の認定基準などは別途確認が必要。所得税・住民税・国保等は試算していません。",
    "updated": "2026-11-13",
    "source": [
      {
        "label": "厚生労働省：「年収の壁」への対応",
        "url": "https://www.mhlw.go.jp/stf/taiou_001_00002.html"
      },
      {
        "label": "日本年金機構：2026年10月の賃金要件撤廃と加入条件",
        "url": "https://www.nenkin.go.jp/oshirase/taisetu/jigyosho/2026/202610/100104.html"
      }
    ]
  },
  {
    "locale": "ja",
    "region": "jp",
    "id": "furusato-tax",
    "title": "ふるさと納税 控除上限額・自己負担シミュレーター",
    "description": "住民税所得割額と所得税率から、ふるさと納税の自己負担2,000円目安となる寄附上限を概算。",
    "intro": "年収だけで決めるのではなく、住民税所得割額と課税所得に対応する税率を入力して概算上限を計算します。寄附後の推定自己負担額も確認できます。",
    "formula": "寄附上限目安 = 2,000円 + (住民税所得割額 × 20%) ÷ (90% − 所得税限界税率 × 1.021)。寄附金控除の基本分・特例分を合計して試算します。",
    "example": "住民税所得割額15万円、所得税率10%なら、自己負担2,000円で済む目安は約39,600円です（税控除や所得状況により変動）。",
    "scope": "一般的な所得税・住民税の計算構造による概算です。所得控除、住宅ローン控除、他の寄附、所得上限、ワンストップ特例・確定申告の違い、住民税の上限・端数計算は正確に反映していません。限度額を保証するものではありません。",
    "updated": "2026-11-13",
    "source": [
      {
        "label": "国税庁 No.1155：ふるさと納税",
        "url": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1155.htm"
      }
    ]
  },
  {
    "locale": "ja",
    "region": "jp",
    "id": "commuter-pass",
    "title": "通勤定期券は何日で元が取れる？損益分岐計算",
    "description": "片道運賃・1か月定期代・月間出勤日数から、定期券と都度払いの費用を比較。",
    "intro": "出社日数が少ないとき、通勤定期券と往復切符・IC運賃のどちらが安いかを入力だけで比較します。",
    "formula": "都度払い月額 = 片道運賃 × 2 × 月間往復回数。定期券の損益分岐日数は1か月定期代 ÷ 往復運賃より多く利用する最初の日数。",
    "example": "片道250円、定期券10,000円、月20日出社なら都度払いも10,000円で同額。21日目から定期券が有利です。",
    "scope": "鉄道・バス会社の実際の運賃と定期券料金を入力してください。経路・区間・割引・交通費支給・定期券の有効期間・休日利用・途中下車などは自動判定しません。",
    "updated": "2026-11-13",
    "source": [
      {
        "label": "JR東日本：運賃・料金案内",
        "url": "https://jreastfaq.jreast.co.jp/faq/show/1125?site_domain=default"
      }
    ]
  },
  {
    "locale": "zh-hans",
    "region": "cn",
    "id": "2027-holidays",
    "title": "2027年中国放假调休与拼假计算器",
    "description": "根据国务院2027年法定节假日及调休上班安排，计算使用年假后最长连续休息天数。",
    "intro": "2027年元旦、春节、清明、劳动节、端午、中秋和国庆假期已公布。选择节日与可用年假天数，计算包含该假期的最长连续休息区间，同时识别周末调休补班日。",
    "formula": "以国务院公布的节假日日期、调休上班日为准；周末通常休息，但标记为调休上班的日期视为工作日。以不超过可用年假的工作日数量寻找最长连续休息区间。",
    "example": "2027年春节放假时间为2月5日至13日，共9天。1月31日、2月14日需调休上班，不可直接当作休息日。",
    "scope": "仅适用于中国大陆国务院2027年公布的统一节假日安排。连续休假区间限定在2027年内，不跨年计算。部分单位轮班、地方特殊安排、公司自行调休和年假审批不包含在内。年假建议不等于审批通过。",
    "updated": "2026-11-13",
    "source": [
      {
        "label": "中国政府网：国务院办公厅2027年部分节假日安排",
        "url": "https://www.gov.cn/zhengce/content/202611/content_7085101.htm"
      }
    ]
  },
  {
    "locale": "zh-hans",
    "region": "cn",
    "id": "five-insurances-fund",
    "title": "北京2026五险一金工资扣除计算器",
    "description": "按照2026年7月起北京社保缴费基数上下限及可调整公积金比例，估算员工每月五险一金扣款。",
    "intro": "填写税前月工资、社保缴费工资、公积金缴费工资以及单位采用的公积金比例，分别计算养老、医疗、失业和公积金的个人缴纳金额。",
    "formula": "养老 = 社保缴费基数×8%；医疗 = 社保缴费基数×2%+3元；失业 = 社保缴费基数×0.5%；住房公积金 = 公积金缴费基数×单位确定的个人比例。基数按北京公布的上下限处理。",
    "example": "工资15,000元，社保与公积金缴费基数均为15,000元、公积金12%时，个人五险一金概算为3,378元/月（含医疗固定3元）。",
    "scope": "仅适用于北京企业参保员工的2026年度基数（2026年7月起），不适用于灵活就业人员或其他城市。员工工伤、生育险通常不另行个人缴纳。不同单位申报基数可能不同，精确金额以实际单位申报和社保记录为准。未计算个人所得税。",
    "updated": "2026-11-13",
    "source": [
      {
        "label": "北京人社：2026年社会保险缴费基数",
        "url": "https://rsj.beijing.gov.cn/xxgk/2024zcwj/202608/t20260821_4831461.html"
      },
      {
        "label": "北京住房公积金中心：2026年度缴存通知",
        "url": "https://gjj.beijing.gov.cn/web/zwgk61/2024zcwj/436433461/744103382/"
      },
      {
        "label": "北京：城镇职工社保缴费比例",
        "url": "https://www.bjfsh.gov.cn/zsk/zcwd/202608/t20260818_40116625.shtml"
      },
      {
        "label": "北京师范大学：2026年社保缴费标准及医疗保险2%+3元",
        "url": "https://hr.bnu.edu.cn/fwzn/skbx/56326.htm"
      }
    ]
  },
  {
    "locale": "zh-hans",
    "region": "cn",
    "id": "income-tax",
    "title": "2026年中国个人所得税累计预扣计算器",
    "description": "按居民工资薪金累计预扣法估算本月个税、累计个税以及扣税后的月工资。",
    "intro": "适用于中国大陆居民个人工资薪金，按全年每月工资及扣除保持不变的简化情形，计算第N个月的累计预扣税款差额。",
    "formula": "累计预扣应纳税所得额 = 当月累计税前收入 − 每月5,000元×月份数 − 累计三险一金等专项扣除 − 累计专项附加扣除。累计税额=适用税率×累计应纳税所得额−速算扣除数。本月税额=本月累计税额−上月累计税额。",
    "example": "每月工资15,000元，三险一金2,000元，专项附加扣除1,000元，则每月累计计税额增加7,000元，并随月份可能进入更高预扣税率档位。",
    "scope": "仅适用于工资、薪金居民纳税人、从1月起在同一单位且月工资与扣除相同的简化模拟。奖金、换工作、减免税、累计已预扣税、首次就业特殊规则、其他综合所得及年终汇算均可能改变结果。",
    "updated": "2026-11-13",
    "source": [
      {
        "label": "国家税务总局：累计预扣预缴方法",
        "url": "https://fgk.chinatax.gov.cn/zcfgk/c100015/c5200946/content.html"
      },
      {
        "label": "税务总局：综合所得税率及速算扣除数",
        "url": "https://12366.chinatax.gov.cn/bzds/079/079.html"
      }
    ]
  }
] as const;
export type CountryTool = (typeof COUNTRY_TOOLS)[number];
export type CountryToolId = CountryTool["id"];
export type CountryRegion = CountryTool["region"];
export type CountryLocale = CountryTool["locale"];
export function countryTool(locale: string, region: string, tool: string): CountryTool | undefined {
  return COUNTRY_TOOLS.find(entry => entry.locale === locale && entry.region === region && entry.id === tool);
}

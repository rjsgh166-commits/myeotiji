import type { GuideCopy } from "./types";
import type { IntlLocale } from "../international";

export type CountryGuideCopy = GuideCopy & { locale: IntlLocale; slug: string; tool: string };
export const COUNTRY_GUIDE_COPY: CountryGuideCopy[] = [
  {
    locale: "en", slug: "us-401k-match", tool: "401k-match",
    title: "How a 401(k) Employer Match Works: 50% of the First 6% Explained",
    description: "Calculate a 401(k) employer match with a salary example, compare 2026 and 2027 employee limits, and understand vesting and plan limitations.",
    answer: "A 50% match on the first 6% of pay means the employer contributes 50 cents for each eligible dollar you defer, up to that slice of pay. On $80,000, contributing 6% produces $4,800 of employee contributions and $2,400 of matching contributions.",
    sections: [
      { heading: "Read the two percentages separately", paragraphs: [
        "The salary percentage tells you how much of your pay can attract a match. The match percentage tells you how much the employer adds per eligible dollar. These are not the same input: a 50% match on 6% of pay does not mean an employer contributes half your annual salary.",
        "For a simple single-tier formula, estimate employer match as min(actual employee deferral, salary × eligible salary percentage) × matching percentage. A tiered plan, such as a different rate on a second slice of salary, cannot be fully represented by one tier in this calculator.",
      ] },
      { heading: "Compare 3%, 6% and 10% deferrals", paragraphs: [
        "Use an $80,000 eligible annual salary and a 50% match on the first 6%. Deferring 3% means $2,400 from you and $1,200 from the employer. At 6%, those figures become $4,800 and $2,400. At 10%, your deferral rises to $8,000 while the simple matching formula still gives $2,400.",
        "The table isolates the matching rule. It is not a recommendation about how much to contribute: cash-flow needs, the plan's rules and other savings decisions remain separate. Select the calculator's tax year before trying a high contribution percentage.",
      ], table: { headers: ["Employee rate", "Employee amount", "Employer match"], rows: [["3%", "$2,400", "$1,200"], ["6%", "$4,800", "$2,400"], ["10%", "$8,000", "$2,400"]] } },
      { heading: "Employee limits are not the total plan limit", paragraphs: [
        "The ordinary under-age-50 employee deferral limit used here is $24,500 for 2026 and $25,500 for 2027. The calculator caps the modeled employee amount at the selected year's limit. Employer matching is a separate amount; an employee limit is not a complete test of every limit that can apply to the combined account additions.",
        "Catch-up contributions, compensation limits, participation in other plans, plan-specific restrictions and overall employee-plus-employer limits are not modeled. An annual salary model also cannot establish whether matching is calculated each pay period or whether the plan makes a year-end true-up.",
      ] },
      { heading: "Check ownership and timing in the plan document", paragraphs: [
        "The displayed match is a contribution estimate, not a vested balance or an investment return. A vesting schedule can affect which employer amounts you retain after leaving. Use the plan's summary documents or ask the administrator to confirm what compensation is eligible and when matching is paid.",
        "To use the calculator, enter eligible annual pay, your deferral percentage, the salary slice eligible for matching and the employer's match percentage. If a result differs from a pay statement, compare the pay-period calculation and the plan definition before assuming either number is wrong.",
      ] },
    ],
    faqs: [
      { question: "Does contributing above the matched percentage increase the match?", answer: "Not under the single-tier example above. A 50% match capped at 6% of salary stops increasing once enough eligible employee contributions cover that slice. Your actual plan may have a different formula." },
      { question: "Does this tool calculate catch-up contributions or vesting?", answer: "No. It models the ordinary under-age-50 employee limit and one matching tier. Confirm catch-up eligibility, vesting and the combined plan limits separately." },
    ],
  },
  {
    locale: "en", slug: "us-overtime-pay", tool: "overtime-pay",
    title: "US Overtime Pay Calculation: 40-Hour Rule and Time-and-a-Half Examples",
    description: "Work out weekly regular pay and overtime pay under the federal FLSA baseline, and learn why weekends, exemptions and state rules matter.",
    answer: "For a covered nonexempt worker under the basic federal rule, hours above 40 in one workweek are paid at least 1.5 times the regular rate. At $20 per hour for 45 hours, the illustration is $800 regular pay plus $150 overtime pay, or $950 gross.",
    sections: [
      { heading: "Start with one workweek, not a monthly average", paragraphs: [
        "The federal FLSA overtime framework uses a fixed recurring 168-hour workweek. A workweek need not start on Monday. Do not combine two weeks into an average to decide whether one week's hours exceed 40; first identify the employer's defined workweek.",
        "The basic calculation is regular pay = min(hours, 40) × regular hourly rate; overtime pay = max(hours − 40, 0) × rate × 1.5. The calculator is an illustration of that baseline for workers to whom it applies, not a determination that every salaried or hourly worker is covered and nonexempt.",
      ] },
      { heading: "A 45-hour example at $20 per hour", paragraphs: [
        "Forty hours at $20 gives $800. The remaining five hours use a $30 overtime rate, producing $150. Add the two parts to get $950 gross weekly pay. At 40.5 hours, the half overtime hour is $15 and the total becomes $815.",
        "A common mistake is adding only half-time pay for the extra hours without also accounting for their straight-time pay. This tool's overtime row includes the full 1.5 multiplier for those hours. Do not add their straight-time pay again to the displayed total.",
      ], table: { headers: ["Hours at $20", "Overtime pay", "Gross weekly pay"], rows: [["38", "$0", "$760"], ["40", "$0", "$800"], ["45", "$150", "$950"]] } },
      { heading: "The regular rate may differ from the base wage", paragraphs: [
        "Some compensation, including certain bonuses or differentials, can affect the regular rate. A base hourly wage alone is not sufficient for every payroll situation. Multiple rates in one week and special occupational rules require additional treatment that this simple form does not perform.",
        "The calculator also does not decide exempt status, account for daily overtime required by some states, or evaluate contractual benefits. Verify the rule applicable to the worker and location before using any figure for payroll settlement or a wage claim.",
      ] },
      { heading: "Gross overtime is not after-tax overtime", paragraphs: [
        "The result is gross pay before tax, benefits and other deductions. The federal baseline does not by itself require premium pay solely because hours fall on Saturday, Sunday or a holiday; exceeding the applicable workweek threshold is a separate question.",
        "If you want a pay-budget illustration, use the US take-home-pay tool separately and read its exclusions. It is an annual simplified estimate and does not implement every current deduction or replace a paycheck withholding calculation.",
      ] },
    ],
    faqs: [
      { question: "Is working on Sunday automatically overtime?", answer: "Not under the basic federal FLSA rule solely because it is Sunday. Weekly hours, coverage, state law and employment terms can all matter." },
      { question: "Can I enter half an hour of overtime?", answer: "Yes. Hours can be decimal values, such as 40.5. Timekeeping and rounding policies applicable to an actual payroll must be checked separately." },
    ],
  },
  {
    locale: "en", slug: "us-take-home-pay-2026", tool: "take-home-pay",
    title: "2026 US Take-Home Pay: From Gross Salary to a Federal Tax Estimate",
    description: "Follow an $80,000 salary example through traditional 401(k), federal tax, Social Security, Medicare and an editable state-tax allowance.",
    answer: "In the stated example, an $80,000 salary, single filing status, 5% traditional 401(k) and a 5% flat state/local allowance produce an estimated $57,990 annual net, or $4,832.50 per month. This is a simplified annual model, not a paycheck quote.",
    sections: [
      { heading: "Separate gross pay, taxable income and cash deductions", paragraphs: [
        "Start with annual gross W-2 wages. The modeled traditional 401(k) deferral reduces federal taxable income after the ordinary employee contribution cap is applied. Then subtract the standard deduction associated with the filing status before applying the progressive federal brackets.",
        "For 2026, the standard deductions represented here are $16,100 for single, $32,200 for married filing jointly and $24,150 for head of household. A deduction reduces the taxable amount; it is not the same as a tax credit or extra cash paid out.",
      ] },
      { heading: "Work through the $80,000 single-filer example", paragraphs: [
        "A 5% traditional deferral is $4,000. Federal taxable income becomes $80,000 − $4,000 − $16,100 = $59,900. Apply 10% to the first $12,400, 12% to the next $38,000 and 22% to the remaining $9,500: total federal income tax in this model is $7,890.",
        "Employee FICA on these wages is $6,120, and the illustrative 5% state/local allowance is $4,000. Subtract those amounts and the $4,000 retirement deferral from gross pay to get $57,990. Dividing by twelve gives an average month, not the payment for a particular pay period.",
      ], table: { headers: ["Annual item", "Illustration"], rows: [["Gross wages", "$80,000"], ["Traditional 401(k)", "−$4,000"], ["Federal income tax", "−$7,890"], ["Employee FICA", "−$6,120"], ["Flat state/local allowance", "−$4,000"], ["Estimated net", "$57,990"]] } },
      { heading: "Social Security and Medicare use a different base", paragraphs: [
        "This model applies the employee Social Security rate of 6.2% up to the 2026 wage base of $184,500 and Medicare at 1.45% without that wage cap. The modeled traditional 401(k) deferral does not reduce those wages.",
        "The additional Medicare component follows the employer withholding convention of 0.9% above $200,000, regardless of filing status. Actual additional Medicare liability has filing-status-specific thresholds, so a joint-return tax result can differ from this withholding convention. The tool labels its combined result as an estimate for that reason.",
      ] },
      { heading: "Use the editable state rate as an allowance, not a state tax engine", paragraphs: [
        "The state/local field is a flat percentage of gross wages chosen by you. It does not contain all state brackets, local taxes, deductions or reciprocal arrangements. Set it to zero only when zero is an appropriate assumption for your illustration, not because the tool has identified an exemption.",
        "Credits, children, itemized deductions, other income, benefits, overtime or tip deductions and many payroll details are excluded. The result does not complete a W-4, calculate an exact refund or support a tax filing on its own. Match actual payroll records and applicable rules before making a financial commitment.",
      ] },
    ],
    faqs: [
      { question: "Is monthly net equal to my paycheck multiplied by two?", answer: "Not necessarily. The tool divides an annual estimate by twelve. Pay frequency, withholding elections, benefits and variable pay can produce a different monthly or per-paycheck amount." },
      { question: "Does changing filing status calculate my spouse's income too?", answer: "No. It changes the modeled federal brackets and standard deduction. It does not independently collect or combine another person's income, wages or deductions." },
    ],
  },
  {
    locale: "ja", slug: "income-wall-2026", tool: "income-wall",
    title: "2026年10月以降の年収の壁｜106万円・130万円と社会保険の目安",
    description: "月額8.8万円の賃金要件撤廃後に確認する勤務時間・企業規模・学生区分と、130万円の扶養基準との違いを説明します。",
    answer: "2026年10月に月額8.8万円の賃金要件が撤廃されても、すべての人が同じ条件で加入するわけではありません。短時間労働者は週20時間、企業規模、学生区分などを確認し、130万円の扶養の目安とは分けて考えます。",
    sections: [
      { heading: "106万円の目安と130万円の目安は別の話", paragraphs: [
        "従来のいわゆる106万円の壁は、月額8.8万円という短時間労働者の賃金要件から説明されてきたものです。2026年10月の撤廃後は、その金額だけを見て会社の健康保険・厚生年金への加入を判断するのは適切ではありません。",
        "一方、130万円は被扶養者の認定で使われる一般的な目安です。年収が130万円未満でも、勤務先での加入条件に該当することがあります。逆に、この計算機の簡易条件で会社加入の対象外でも、別の保険料負担がないとは限りません。",
      ] },
      { heading: "このツールが確認する三つの入力条件", paragraphs: [
        "簡易判定では、週の所定労働時間が20時間以上、厚生年金の被保険者数による企業規模が51人以上、原則として学生ではない、という条件を見ます。企業規模は店舗の在籍人数をそのまま入れるのではなく、適用の判定に使う人数を確認してください。",
        "実際には2か月を超える雇用見込み、通常の労働者との勤務時間等の比較、任意の適用、学生の例外、最低賃金の減額特例なども確認が必要です。三つの入力だけで加入・非加入を確定するツールではありません。",
      ] },
      { heading: "月12万円の具体例と計算しない費用", paragraphs: [
        "月額給与120,000円なら年額は1,440,000円です。週20時間、企業規模51人、学生ではないという例では加入の可能性ありと表示します。仮に本人負担率を15%と置くと、保険料概算は216,000円、差引き後は1,224,000円です。",
        "15%は説明用に入力した概算率で、全国共通の確定料率ではありません。また1,224,000円は税引き前です。所得税・住民税・国民健康保険・国民年金などを全て引いた手取り額を示しているわけではありません。",
      ], table: { headers: ["入力・結果", "例"], rows: [["月額給与", "120,000円"], ["概算年収", "1,440,000円"], ["本人負担率の仮定", "15%"], ["会社保険料差引き後・税引前", "1,224,000円"]] } },
      { heading: "働き方を変える前に確認する資料", paragraphs: [
        "勤務先に所定労働時間、被保険者数、雇用見込みと加入の扱いを確認し、扶養については加入先の健康保険の認定基準を確認してください。一時的な収入増加などの例外を含め、年間給与だけでは分からない条件があります。",
        "2027年以降の企業規模要件の変更も、この2026年10月以降を対象とした簡易判定に自動で混ぜていません。適用時点を確認してから、勤務時間を変えた複数のパターンを比較してください。",
      ] },
    ],
    faqs: [
      { question: "130万円未満なら会社の社会保険には入りませんか？", answer: "そうとは限りません。勤務先での社会保険加入要件と、被扶養者の認定基準は別です。年収だけで判断せず、勤務条件と適用先を確認してください。" },
      { question: "対象外と表示されたら保険料は0円ですか？", answer: "0円と確定した意味ではありません。ほかの会社加入の条件や、扶養を外れた場合の国民年金・国民健康保険などは、この簡易計算では算定していません。" },
    ],
  },
  {
    locale: "ja", slug: "furusato-tax-limit", tool: "furusato-tax",
    title: "ふるさと納税の控除上限額の計算方法｜住民税所得割額から概算",
    description: "年収だけでなく住民税所得割額と所得税率を使う上限計算、自己負担2,000円の目安、ほかの控除による違いを説明します。",
    answer: "概算の上限は「2,000円＋住民税所得割額×20%÷（90%−所得税の限界税率×1.021）」。年収ではなく課税所得に対応する税率を使い、別の控除や上限条件も確認します。",
    sections: [
      { heading: "必要なのは年収だけではない", paragraphs: [
        "同じ給与年収でも、家族構成や所得控除、ほかの税額控除によって寄附の上限は変わります。このツールは年収から全てを推定する方式ではなく、住民税所得割額と所得税の限界税率が分かる人向けの簡易計算です。",
        "住民税の通知書には所得割額以外の項目もあるため、住民税の年税額全体をそのまま入力しないよう注意してください。また、所得税率は給与の総額に対して一律で選ぶものではありません。課税所得に対応する限界税率を確認する必要があります。",
      ] },
      { heading: "所得割15万円・所得税率10%の計算例", paragraphs: [
        "住民税所得割額を150,000円、限界税率を10%と仮定します。特例分の目安は150,000×20%＝30,000円、分母は0.9−0.10×1.021＝0.7979です。2,000＋30,000÷0.7979＝約39,599円となります。",
        "同じ前提で20,000円を寄附する例では、2,000円を除いた18,000円について所得税と住民税の軽減を概算し、自己負担の目安は2,000円です。上限ぎりぎりの寄附が必ずその自己負担に収まると保証するものではありません。",
      ], table: { headers: ["条件", "概算"], rows: [["住民税所得割額", "150,000円"], ["所得税の限界税率", "10%"], ["寄附上限の目安", "約39,599円"], ["寄附額20,000円の自己負担目安", "2,000円"]] } },
      { heading: "2,000円を超える部分がすべて無条件に戻るわけではない", paragraphs: [
        "所得税の寄附金控除、住民税の基本分、住民税の特例分にはそれぞれ計算の仕組みと限度があります。この画面では特例分の所得割額20%という目安を使っていますが、すべての所得・控除・端数処理を再現するわけではありません。",
        "住宅ローン控除、ほかの寄附、所得の変化などによって実際の控除と自己負担が変わることがあります。寄附をするとその場で全額が現金還付される、という意味でもありません。",
      ] },
      { heading: "手続きと対象年を合わせる", paragraphs: [
        "寄附の金額だけでなく、必要な申告やワンストップ特例の条件も確認してください。確定申告をする場合は、すでにワンストップ特例を申請した寄附も申告に含める必要があります。",
        "今年の収入や控除が前年と違う場合、過去の通知書の数字をそのまま今年の確定額とは考えないでください。大きい寄附を行う前は最新の国税庁・自治体情報や専門窓口で確認し、この計算は条件を理解するための目安として使ってください。",
      ] },
    ],
    faqs: [
      { question: "住民税の年額をそのまま入れてよいですか？", answer: "所得割額を確認してください。均等割などを含む年税額全体と同じとは限りません。入力する欄が不明な場合は通知書の発行元に確認してください。" },
      { question: "上限を超えた寄附は全額無駄になりますか？", answer: "一律に全額無駄という意味ではありませんが、自己負担が増える可能性があります。どの控除が使えるかは実際の所得・上限・申告条件によって異なります。" },
    ],
  },
  {
    locale: "ja", slug: "commuter-pass-break-even", tool: "commuter-pass",
    title: "通勤定期は何日で元が取れる？月20日・21日の損益分岐例",
    description: "片道運賃と1か月定期代から、同額になる日数と定期券が安くなる最初の日数を区別して計算します。",
    answer: "都度払い月額は片道運賃×2×往復日数です。片道250円・1か月定期10,000円なら20日で同額、21日目から定期券の方が安くなります。",
    sections: [
      { heading: "比較する期間と経路を揃える", paragraphs: [
        "まず同じ区間の実際の片道運賃と1か月定期代を確認します。IC運賃ときっぷ運賃が違う場合は、普段利用する方を入力してください。往路と復路が違う経路なら、単純な片道運賃の2倍だけでは再現できません。",
        "次に、その定期の有効期間内で同じ区間を往復する日数を数えます。暦の月と定期券の1か月有効期間は一致しないこともあります。在宅勤務や休暇、出張の日は、実際の利用回数に合わせて除いてください。",
      ] },
      { heading: "19日・20日・21日で比べる", paragraphs: [
        "片道250円なら往復500円です。19日利用では9,500円、20日では10,000円、21日では10,500円です。定期代が10,000円なら、19日は都度払い、20日は同額、21日は定期券が500円安くなります。",
        "定期券が厳密に安くなる最初の日数は、定期代÷往復運賃を切り捨てて1を足します。『同額で元が取れる』と『定期券の方が安い』を分けると、境界で1日ずれる理由が分かります。",
      ], table: { headers: ["往復日数", "都度払い", "定期10,000円との比較"], rows: [["19日", "9,500円", "都度払いが500円安い"], ["20日", "10,000円", "同額"], ["21日", "10,500円", "定期が500円安い"]] } },
      { heading: "休日利用と会社の支給条件も確認する", paragraphs: [
        "休日も同じ区間を往復するなら、対象となる利用回数に加えると定期の価値が変わることがあります。ただし途中下車、別区間、乗り継ぎ、割引や交通費支給は自動判定しません。",
        "この画面は1か月定期と往復利用の単純比較です。3か月・6か月定期、回数券、時間帯限定商品などは、それぞれの有効期間と料金を別に確認してください。1か月定期の結果だけで長期商品の損得は決まりません。",
      ] },
      { heading: "運賃は公式サービスで確認する", paragraphs: [
        "ツールは鉄道会社の運賃を自動取得しません。利用する経路・開始日・商品に対応した実際の価格を公式サービスで確認してから入力してください。運賃改定前後では定期代や片道運賃の前提が変わることがあります。",
        "会社から支給される通勤費と自分の支払額が同じとは限りません。支給方法や出社日数の申告ルールも合わせて確認すると、個人負担を比較しやすくなります。",
      ] },
    ],
    faqs: [
      { question: "20日で元が取れるのに、なぜ21日と表示されますか？", answer: "この例の20日は同額です。計算機の『厳密に安くなる最小往復日数』は、定期券が都度払いを下回る最初の日である21日を示します。" },
      { question: "片道しか使わない日も1日として入力できますか？", answer: "日数欄は往復日数です。片道だけの日をそのまま1往復として数えると費用を多く見積もります。複雑な利用は実際の片道回数と費用を別に集計してください。" },
    ],
  },
  {
    locale: "zh-hans", slug: "2027-holiday-leave-planning", tool: "2027-holidays",
    title: "2027年怎么拼假？春节、国庆与调休补班计算指南",
    description: "按国务院2027年放假调休安排计算连休，区分官方假期与请年假，查看春节请7天连休18天的分步示例。",
    answer: "拼假必须把官方假期、普通周末和调休补班分开。按本工具的2027年日历，春节官方放假2月5日至13日；使用7天年假，可在所示条件下把2月4日至21日连成18天休息。",
    sections: [
      { heading: "先标记补班，再考虑前后请假", paragraphs: [
        "2027年春节官方假期为2月5日至13日，共9天。1月31日和2月14日为调休上班日，不能因为它们是周日就自动当成休息日。国庆的9月26日、10月9日，以及劳动节的5月8日，也应按官方补班安排处理。",
        "工具先按当年官方安排标记假期和补班，再将普通周末设为休息日。随后寻找包含所选官方假期完整区间的连续日期，只有其中的工作日才消耗你输入的年假。企业轮班、自行调休与审批规则需要另行确认。",
      ] },
      { heading: "春节请7天，18天连休如何组成", paragraphs: [
        "选择春节并输入7天年假，一个最长方案是2月4日至21日，共18天。其中2月5日至13日为9天官方假期；2月4日、2月14日补班日、2月15日至19日共消耗7天年假；2月20日和21日是普通周末。",
        "少请几天并不一定按相同幅度缩短休假，因为能否接上周末会产生跳变。没有年假时仍需保留补班限制。结果是日历条件下的规划方案，不表示公司已经批准这些日期。",
      ], table: { headers: ["区间或日期", "性质", "使用年假"], rows: [["2月4日", "工作日", "1天"], ["2月5日—13日", "官方春节假期", "0天"], ["2月14日", "调休补班", "1天"], ["2月15日—19日", "工作日", "5天"], ["2月20日—21日", "普通周末", "0天"], ["2月4日—21日", "连续18天", "合计7天"]] } },
      { heading: "自然日、工作日与年假余额不要混用", paragraphs: [
        "自然日连续计算，不论上班或休息。年假用量只对应这个方案中需要请假的工作日。因此18天连休并不是申请18天年假，也不是官方春节假期已经延长到18天。",
        "当前表单接受0至7个整天年假，不计算半天安排。搜索范围限定在2027年内，不把相邻年份未加载的假期或补班推断进来。对于不同最长方案，工具优先保留使用年假较少的结果；不按机票或酒店价格排序。",
      ] },
      { heading: "和单位日历核对后再订行程", paragraphs: [
        "先核对单位是否采用这一普通工作日历，再确认年假余额和申请流程。轮班、零售、医疗等工作安排可能与全国统一的常规日历不同，不能只按页面就判断自己当天是否上班。",
        "如果只想知道两个日期之间有多少自然日，可以使用普通日期计算器；如果想知道能否把一个假期延长，应使用包含补班数据的拼假工具。两类结果回答的是不同问题。",
      ] },
    ],
    faqs: [
      { question: "调休补班是周末，为什么也扣年假？", answer: "因为在所用官方日历中，该日期被标为工作日。想把它连成休息区间，就需要按工作日占用年假，除非你的单位另有安排。" },
      { question: "显示18天，意味着春节法定假期有18天吗？", answer: "不是。该方案是9天官方假期、7天自行申请的年假和2天普通周末组合出的连续区间。审批与实际安排仍由单位确认。" },
    ],
  },
  {
    locale: "zh-hans", slug: "beijing-five-insurances-2026", tool: "five-insurances-fund",
    title: "北京2026五险一金怎么算？缴费基数、个人比例与到手前扣款",
    description: "了解北京2026年7月起社保与公积金基数的不同下限，按15,000元基数计算个人扣款，并区分税前扣款和税后到手工资。",
    answer: "北京普通企业职工示例中，社保和公积金基数均为15,000元、公积金个人比例12%时，个人扣款估算为3,378元。工资扣完这部分后还没有扣个人所得税。",
    sections: [
      { heading: "当前工资不一定等于申报缴费基数", paragraphs: [
        "分别确认税前月工资、单位申报的社保缴费工资和公积金缴费工资。缴费基数可能依据此前的工资口径申报，并受到当地年度上下限约束，因此工资增加后，社保基数不一定在同一个月同步变化。",
        "本页采用北京2026年7月起的普通企业职工口径：社保月基数在7,270元至36,348元之间；公积金普通下限为2,540元、上限为36,348元。领取基本生活费等特殊情形及经批准降低比例、缓缴等安排不在该普通模型内。其他城市不能直接套用。",
      ] },
      { heading: "15,000元基数的个人扣款分解", paragraphs: [
        "养老按8%估算为1,200元，医疗按2%加3元为303元，失业按0.5%为75元。公积金个人比例若为12%，则为1,800元。四项相加为3,378元。假设工资也是15,000元，扣后为11,622元，尚未扣个税。",
        "五险一金中的工伤、生育在这一普通职工模型中不另列个人扣款，所以不能因为名称里有五种保险，就把单位的所有缴费也从个人工资中减掉。单位成本与个人承担是两套数。",
      ], table: { headers: ["个人项目", "示例计算", "金额"], rows: [["养老", "15,000×8%", "1,200元"], ["医疗", "15,000×2%＋3", "303元"], ["失业", "15,000×0.5%", "75元"], ["公积金", "15,000×12%", "1,800元"], ["个人合计", "四项相加", "3,378元"]] } },
      { heading: "基数上下限与比例分别生效", paragraphs: [
        "如果输入社保申报基数低于7,270元，普通模型按下限7,270元计算；高于36,348元则按上限计算。公积金使用自己的下限，不能把社保下限直接套到公积金上。",
        "公积金表单提供普通5%至12%比例。正式缴存还涉及单位申报、取整及政策规定的限额，本工具给出的是未复现全部结算规则的参考值。实际缴存额请核对公积金记录，而不是只把屏幕小数当成单位应扣款。",
      ] },
      { heading: "再计算个税时要使用同一月份的扣除", paragraphs: [
        "五险一金个人扣款不等于最终税后工资。需要继续估算个税时，使用对应的专项扣除金额和其他扣除条件。中国大陆工资薪金一般还涉及累计预扣，不能只用一项固定税率乘剩余工资。",
        "本模型不是灵活就业人员缴费计算器，也不自动处理补缴、跨地区参保、基数调整差额或单位全部用工成本。先核对城市、适用年度和人员类型，再比较工资单。",
      ] },
    ],
    faqs: [
      { question: "可以直接用于上海、广州或深圳吗？", answer: "不可以。这里明确采用北京2026年度的基数和普通职工比例。不同地区的缴费规则和上下限可能不同。" },
      { question: "11,622元就是最终到手吗？", answer: "不是。15,000元工资扣除示例中的3,378元后得到11,622元，但尚未计算个人所得税和其他实际扣款。" },
    ],
  },
  {
    locale: "zh-hans", slug: "cumulative-income-tax", tool: "income-tax",
    title: "工资个税累计预扣怎么算？为什么下半年扣税可能变多",
    description: "按固定月薪示例分解累计应纳税所得额、预扣率、速算扣除数与本月税额，并说明换工作、奖金和汇算的影响。",
    answer: "累计预扣先算截至本月的累计应纳税所得额和累计税额，再减去此前已经预扣的税额。本工具假设从1月起在同一单位任职、每月收入和扣除不变，模拟其中一个月份。",
    sections: [
      { heading: "先算累计，再算本月差额", paragraphs: [
        "基本结构是：累计应纳税所得额＝累计收入−累计减除费用−累计专项扣除−累计专项附加扣除等。对应到该简化模型，基本减除费用按每月5,000元乘月份数；收入和其他输入也按相同月份累计。",
        "使用累计预扣率和速算扣除数得到累计税额后，还要减去此前已预扣金额。正式计算可能涉及累计减免税等项目，不能把累计税额直接当成本月又要扣一次的税。本工具用固定输入推演上月累计税额，不提供任意历史已扣税额输入。",
      ] },
      { heading: "月薪15,000元：第1月与第6月为何不同", paragraphs: [
        "假设每月工资15,000元，三险一金等专项扣除2,000元，专项附加扣除1,000元，则每月增加的计税金额为15,000−5,000−2,000−1,000＝7,000元。第1月累计7,000元，按3%为210元。",
        "第5月累计35,000元，累计税额1,050元；第6月累计42,000元，适用10%和速算扣除数2,520元，累计税额为1,680元。所以第6月需预扣1,680−1,050＝630元。月薪未变而扣税提高，可能是累计金额跨档，并不代表整年所有收入都按最高一档重算。",
      ], table: { headers: ["月份", "累计计税金额", "累计税额", "本月税额"], rows: [["1月", "7,000元", "210元", "210元"], ["5月", "35,000元", "1,050元", "210元"], ["6月", "42,000元", "1,680元", "630元"], ["12月", "84,000元", "5,880元", "700元"]] } },
      { heading: "专项附加扣除不是再次从到手工资中扣钱", paragraphs: [
        "专项附加扣除用于减少应纳税所得额，不是单位又从工资里收走的一项金额。上述第6月到手的简化估计为15,000−2,000−630＝12,370元，不再把1,000元专项附加扣除从现金中减一次。",
        "而三险一金等个人专项扣款本身通常是工资的现金扣款，所以在估算到手时会扣除。区分减少计税金额的项目和真实的现金支出，才能看懂结果。",
      ] },
      { heading: "什么情形不能直接使用固定月薪模型", paragraphs: [
        "中途入职、换单位、工资浮动、奖金、首次就业特殊规则、减免税、已有不同预扣税额或其他综合所得，都可能使实际工资单不同。本工具明确假定从1月起连续任职且每月输入不变，不能作为所有工资情形的结算表。",
        "全年预估税额也不等于年度汇算最终应缴金额，更不等于一定可退或应补的金额。核对工资单、扣除申报和个人所得税记录后，再按实际情况使用税务机关提供的申报服务。",
      ] },
    ],
    faqs: [
      { question: "同样工资，为什么后几个月到手变少？", answer: "累计应纳税所得额可能进入更高的预扣档位。还应检查奖金、扣除变更和其他工资项目，不能仅凭这一原因推断所有差异。" },
      { question: "可以计算年中跳槽后的精确个税吗？", answer: "不能直接计算。该模型不收集实际入职月份、历史预扣金额和所有特殊规则，跳槽后的结算应按实际记录核对。" },
    ],
  },
];

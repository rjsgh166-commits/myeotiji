"use client";

import Link from "next/link";
import { useState } from "react";
import { COUNTRY_TOOLS, type CountryTool } from "../_lib/countryTools";

type Output = { label: string; value: string };
const inputClass = "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100";
const boxClass = "rounded-2xl border border-slate-200 bg-white p-5 sm:p-6";
const HOLIDAYS = [
  { id: "new-year", name: "元旦", start: "2027-01-01", end: "2027-01-03", days: 3 },
  { id: "spring-festival", name: "春节", start: "2027-02-05", end: "2027-02-13", days: 9 },
  { id: "qingming", name: "清明节", start: "2027-04-03", end: "2027-04-05", days: 3 },
  { id: "labor", name: "劳动节", start: "2027-05-01", end: "2027-05-05", days: 5 },
  { id: "dragon-boat", name: "端午节", start: "2027-06-09", end: "2027-06-09", days: 1 },
  { id: "mid-autumn", name: "中秋节", start: "2027-09-15", end: "2027-09-15", days: 1 },
  { id: "national", name: "国庆节", start: "2027-10-01", end: "2027-10-07", days: 7 },
] as const;
const MAKEUP_WORKDAYS = ["2027-01-31", "2027-02-14", "2027-05-08", "2027-09-26", "2027-10-09"];
const toDay = (s: string) => Math.round(Date.parse(s + "T00:00:00Z") / 86400000);
const fromDay = (n: number) => new Date(n * 86400000).toISOString().slice(0, 10);
const HOLIDAY_DAYS = new Set<number>();
for (const h of HOLIDAYS) for (let d = toDay(h.start); d <= toDay(h.end); d += 1) HOLIDAY_DAYS.add(d);
const WORK_DAYS = new Set(MAKEUP_WORKDAYS.map(toDay));
function isWorkingDay(day: number): boolean {
  if (WORK_DAYS.has(day)) return true;
  if (HOLIDAY_DAYS.has(day)) return false;
  const weekday = new Date(day * 86400000).getUTCDay();
  return weekday !== 0 && weekday !== 6;
}
function holidayPlan(id: string, allowed: number) {
  const h = HOLIDAYS.find(item => item.id === id) ?? HOLIDAYS[1];
  const hs = toDay(h.start), he = toDay(h.end);
  let best: { start: number; end: number; leave: number; days: number } = { start: hs, end: he, leave: 0, days: h.days };
  if (!Number.isInteger(allowed) || allowed < 0 || allowed > 7) return { h, ...best };
  // Stop only once the leave budget is exceeded, not after seven calendar days.
  // Restrict to 2027: adjacent years' official makeup days are not modeled.
  let first = hs, last = he, usedBefore = 0, usedAfter = 0;
  while (first > toDay("2027-01-01")) {
    if (isWorkingDay(first - 1)) usedBefore += 1;
    if (usedBefore > allowed) break;
    first -= 1;
  }
  while (last < toDay("2027-12-31")) {
    if (isWorkingDay(last + 1)) usedAfter += 1;
    if (usedAfter > allowed) break;
    last += 1;
  }
  for (let start = first; start <= hs; start += 1) {
    for (let end = he; end <= last; end += 1) {
      let used = 0;
      for (let day = start; day <= end; day += 1) if (isWorkingDay(day)) used += 1;
      const days = end - start + 1;
      if (used <= allowed && (days > best.days || (days === best.days && used < best.leave))) {
        best = { start, end, leave: used, days };
      }
    }
  }
  return { h, ...best };
}
function taxProgressive(amount: number, thresholds: readonly number[], rates: readonly number[]): number {
  let total = 0, previous = 0;
  for (let i = 0; i < thresholds.length; i += 1) {
    const end = Math.min(amount, thresholds[i]);
    total += Math.max(0, end - previous) * rates[i];
    previous = thresholds[i];
    if (amount <= thresholds[i]) break;
  }
  return total;
}
const US_TAX: Record<string, { limits: number[]; deduction: number }> = {
  single: { limits: [12400, 50400, 105700, 201775, 256225, 640600, Infinity], deduction: 16100 },
  joint: { limits: [24800, 100800, 211400, 403550, 512450, 768700, Infinity], deduction: 32200 },
  household: { limits: [17700, 67450, 105700, 201750, 256200, 640600, Infinity], deduction: 24150 },
};
const US_RATES = [0.1, 0.12, 0.22, 0.24, 0.32, 0.35, 0.37];
function chinaTax(taxable: number): number {
  const limits = [36000, 144000, 300000, 420000, 660000, 960000, Infinity];
  const rate = [0.03, 0.10, 0.20, 0.25, 0.30, 0.35, 0.45];
  const quick = [0, 2520, 16920, 31920, 52920, 85920, 181920];
  const idx = limits.findIndex(limit => taxable <= limit);
  return Math.max(0, taxable * rate[idx] - quick[idx]);
}
function NumInput({ label, value, set, min = 0, max, integer = false }: {
  label: string; value: string; set: (value: string) => void; min?: number; max?: number; integer?: boolean;
}) {
  return <label className="block">
    <span className="mb-2 block text-sm font-semibold text-slate-700">{label}</span>
    <input className={inputClass} type="number" inputMode={integer ? "numeric" : "decimal"} step={integer ? 1 : "any"} min={min} max={max}
      value={value} onChange={e => set(e.target.value)}/>
  </label>;
}
function SelectInput({ label, value, set, options }: {
  label: string; value: string; set: (value: string) => void;
  options: Array<{ value: string; label: string }>;
}) {
  return <label className="block">
    <span className="mb-2 block text-sm font-semibold text-slate-700">{label}</span>
    <select className={inputClass} value={value} onChange={e => set(e.target.value)}>
      {options.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
    </select>
  </label>;
}
function ResultRow({ item }: { item: Output }) {
  return <div className="flex items-center justify-between gap-3 border-b border-slate-100 py-3 last:border-0">
    <span className="text-sm text-slate-600">{item.label}</span>
    <strong className="text-right text-base font-black text-slate-900">{item.value}</strong>
  </div>;
}
const defaults: Record<string, string> = {
  salary: "80000", contrib: "6", matchCap: "6", matchRate: "50", taxYear: "2027",
  hours: "45", rate: "20", filing: "single", traditional: "5", stateRate: "5",
  monthlyJapan: "120000", weeklyHours: "20", employees: "51", isStudent: "no", premiumRate: "15",
  residentTax: "150000", incomeTaxRate: "10", donation: "20000",
  oneWayFare: "250", passPrice: "10000", commuteDays: "20",
  holiday: "spring-festival", leave: "2",
  monthSalary: "15000", socialBase: "15000", houseBase: "15000", fundRate: "12",
  monthlySocial: "2000", additional: "1000", monthNumber: "6",
};
export default function CountryCalculator({ entry }: { entry: CountryTool }) {
  const [values, setValues] = useState<Record<string, string>>(defaults);
  const change = (key: string) => (value: string) => setValues(previous => ({ ...previous, [key]: value }));
  const N = (key: string) => values[key]?.trim() === "" ? NaN : Number(values[key]);
  const numeric: Record<string, { min: number; max: number; integer: boolean }> = {};
  const readNumber = (key: string, min = 0, max = 100000000, integer = false) => {
    numeric[key] = { min, max, integer }; return N(key);
  };
  const intl = entry.locale === "ja" ? "ja-JP" : entry.locale === "zh-hans" ? "zh-CN" : "en-US";
  const money = (number: number, currency: "USD" | "JPY" | "CNY") =>
    new Intl.NumberFormat(intl, { style: "currency", currency, maximumFractionDigits: currency === "JPY" ? 0 : 2 }).format(number);
  const number = (value: number, digits = 2) =>
    Number.isFinite(value) ? new Intl.NumberFormat(intl, { maximumFractionDigits: digits }).format(value) : "—";
  const usd = (x: number) => money(x, "USD"), jpy = (x: number) => money(x, "JPY"), cny = (x: number) => money(x, "CNY");
  const inp = (key: string, label: string, min = 0, max = 100000000, integer = false) =>
    <NumInput key={key} label={label} value={values[key]} set={change(key)} min={min} max={max} integer={integer}/>;
  const sel = (key: string, label: string, options: Array<{ value: string; label: string }>) =>
    <SelectInput key={key} label={label} value={values[key]} set={change(key)} options={options}/>;
  const results: Output[] = [];
  let fields: React.ReactNode = null;
  let extra: React.ReactNode = null;
  const resultHeading = entry.locale === "en" ? "Estimated result" : entry.locale === "ja" ? "計算結果（概算）" : "计算结果（估算）";

  switch (entry.id) {
    case "401k-match": {
      const salary = readNumber("salary"), contribution = readNumber("contrib", 0, 100), cap = readNumber("matchCap", 0, 100), rate = readNumber("matchRate", 0, 1000);
      const limit = values.taxYear === "2027" ? 25500 : 24500;
      const employee = Math.min(salary * contribution / 100, limit);
      const employer = Math.min(employee, salary * cap / 100) * rate / 100;
      results.push({ label: "Employee annual contribution", value: usd(employee) },
        { label: "Estimated employer match", value: usd(employer) },
        { label: "Total annual additions", value: usd(employee + employer) },
        { label: "Employee deferral limit (under age 50)", value: usd(limit) });
      fields = <>{sel("taxYear", "Tax year", [{value:"2026",label:"2026"},{value:"2027",label:"2027"}])}
        {inp("salary", "Annual eligible salary ($)")}
        {inp("contrib", "Your deferral percentage (%)", 0, 100)}
        {inp("matchCap", "Salary percentage matched by plan (%)", 0, 100)}
        {inp("matchRate", "Employer match per employee dollar (%)", 0, 1000)}</>;
      break;
    }
    case "overtime-pay": {
      const hours = readNumber("hours", 0, 168), rate = readNumber("rate", 0, 100000);
      const regular = Math.min(hours, 40) * rate;
      const excess = Math.max(0, hours - 40);
      const overtimePay = excess * rate * 1.5;
      results.push({label:"Overtime hours",value:number(excess)+" h"},
        {label:"Regular weekly pay",value:usd(regular)},
        {label:"Overtime pay (1.5×)",value:usd(overtimePay)},
        {label:"Total weekly gross pay",value:usd(regular + overtimePay)});
      fields = <>{inp("hours", "Hours worked this workweek", 0, 168)}{inp("rate", "Regular hourly rate ($)", 0, 100000)}</>;
      break;
    }
    case "take-home-pay": {
      const salary = readNumber("salary"), contribPct = readNumber("traditional", 0, 100);
      const statePct = readNumber("stateRate", 0, 100);
      const filing = US_TAX[values.filing] ?? US_TAX.single;
      const preTax401k = Math.min(salary * contribPct / 100, 24500);
      const taxable = Math.max(0, salary - preTax401k - filing.deduction);
      const federal = taxProgressive(taxable, filing.limits, US_RATES);
      const fica = Math.min(salary, 184500) * 0.062 + salary * 0.0145 + Math.max(0, salary - 200000) * 0.009;
      const state = salary * statePct / 100;
      const net = salary - preTax401k - federal - fica - state;
      results.push({label:"Estimated annual net",value:usd(net)},
        {label:"Average monthly net",value:usd(net/12)},
        {label:"Estimated federal income tax",value:usd(federal)},
        {label:"Employee Social Security & Medicare",value:usd(fica)},
        {label:"State/local allowance (flat estimate)",value:usd(state)},
        {label:"Traditional 401(k) employee deferral",value:usd(preTax401k)});
      fields = <>{inp("salary", "Annual gross W-2 wages ($)")}
        {sel("filing", "Federal filing status",[{value:"single",label:"Single"},{value:"joint",label:"Married filing jointly"},{value:"household",label:"Head of household"}])}
        {inp("traditional", "Traditional 401(k) contribution (%)", 0, 100)}
        {inp("stateRate", "Optional estimated state/local tax (% of gross pay)", 0, 100)}</>;
      break;
    }
    case "income-wall": {
      const monthly = readNumber("monthlyJapan"), hours = readNumber("weeklyHours", 0, 168);
      const employees = readNumber("employees", 1, 10000000, true), premiumRate = readNumber("premiumRate", 0, 100);
      const annual = monthly * 12;
      const eligible = hours >= 20 && employees >= 51 && values.isStudent === "no";
      const premium = eligible ? annual * premiumRate / 100 : 0;
      results.push({label:"概算年収",value:jpy(annual)},
        {label:"短時間労働者の社会保険加入目安",value:eligible?"対象となる可能性あり":"この簡易条件では対象外"},
        {label:"被扶養者の130万円基準との比較",value:annual >= 1300000?"130万円以上":"130万円未満"},
        {label:"会社の社会保険・本人負担概算",value:eligible?jpy(premium):"会社加入なしとして計算"},
        {label:"社会保険料を差引いた概算年収（税引前）",value:jpy(annual-premium)});
      fields = <>{inp("monthlyJapan","月額給与（円）")}{inp("weeklyHours","週の所定労働時間",0,168)}
        {inp("employees","適用対象となる企業規模（厚生年金の被保険者数）",1,10000000,true)}
        {sel("isStudent","学生区分",[{value:"no",label:"学生ではない"},{value:"yes",label:"学生（原則として適用外）"}])}
        {inp("premiumRate","本人負担の社会保険料率（概算・%）",0,100)}</>;
      extra = <p className="rounded-xl bg-amber-50 p-3 text-sm leading-6 text-amber-900">
        社会保険加入の有無は勤務見込みや雇用形態などにも左右されます。会社の社会保険に入らず年収130万円以上になる場合、国民年金・国民健康保険等の負担が別に発生する可能性があり、その額は本ツールでは計算していません。
      </p>;
      break;
    }
    case "furusato-tax": {
      const levy = readNumber("residentTax"), donation = readNumber("donation");
      const rate = Number(values.incomeTaxRate)/100;
      const effective = rate * 1.021;
      const ceiling = 2000 + levy * 0.2 / (0.9-effective);
      const base = Math.max(0, donation - 2000);
      const incomeBenefit = base * effective;
      const localBase = base * 0.1;
      const localSpecial = Math.min(base * (0.9 - effective), levy * 0.2);
      const own = Math.max(0, donation - incomeBenefit - localBase - localSpecial);
      results.push({label:"自己負担2,000円の寄附上限目安",value:jpy(ceiling)},
        {label:"指定した寄附額",value:jpy(donation)},
        {label:"推定控除額（所得税と住民税）",value:jpy(incomeBenefit+localBase+localSpecial)},
        {label:"推定自己負担額",value:jpy(own)});
      fields = <>{inp("residentTax","住民税所得割額（円／年）")}
        {sel("incomeTaxRate","所得税の限界税率（課税所得に応じて選択）",
          [0,5,10,20,23,33,40,45].map(v=>({value:String(v),label:String(v)+"%"})))}
        {inp("donation","寄附予定額（円）")}</>;
      extra=<p className="rounded-xl bg-amber-50 p-3 text-sm leading-6 text-amber-900">
        これは住民税所得割額がわかる方向けの概算です。上限の前提となる所得税率は給与年収ではなく課税所得で判断してください。住宅ローン控除や所得制限などによって自己負担が増えることがあります。
      </p>;
      break;
    }
    case "commuter-pass": {
      const fare = readNumber("oneWayFare"), pass = readNumber("passPrice"), days = readNumber("commuteDays",0,31,true);
      const single = fare * 2 * days;
      const gap = single - pass;
      const breakEven = fare > 0 ? Math.floor(pass/(fare*2))+1 : NaN;
      results.push({label:"都度払いの月額（往復）",value:jpy(single)},
        {label:"1か月定期券",value:jpy(pass)},
        {label:"安い方",value:gap > 0?"定期券が有利":gap < 0?"都度払いが有利":"同額"},
        {label:"定期券が厳密に安くなる最小往復日数",value:Number.isFinite(breakEven)?number(breakEven,0)+"日":"比較不可"},
        {label:"定期券を選んだ場合の差額",value:jpy(gap)});
      fields = <>{inp("oneWayFare","片道のIC運賃・切符運賃（円）")}
        {inp("passPrice","1か月通勤定期券の価格（円）")}
        {inp("commuteDays","月の往復出社日数",0,31,true)}</>;
      break;
    }
    case "2027-holidays": {
      const allowed = readNumber("leave",0,7,true);
      const plan = holidayPlan(values.holiday, Math.floor(allowed));
      results.push({label:"所选节日",value:plan.h.name},
        {label:"官方放假区间",value:plan.h.start+"～"+plan.h.end},
        {label:"官方放假天数",value:plan.h.days+"天"},
        {label:"最长连续休息时间（含年假）",value:plan.days+"天"},
        {label:"需要请假的工作日",value:plan.leave+"天"},
        {label:"连续休假日期",value:fromDay(plan.start)+" ～ "+fromDay(plan.end)});
      fields = <>{sel("holiday","选择2027年节日",HOLIDAYS.map(h=>({value:h.id,label:h.name+" ("+h.start+" ～ "+h.end+")"})))}
        {inp("leave","可使用的年假天数（0–7）",0,7,true)}</>;
      extra = <div className="rounded-xl bg-amber-50 p-4 text-sm leading-7 text-amber-950">
        <strong className="block">2027年全国调休上班日（周末也要上班）</strong>
        <span>1月31日（日）、2月14日（日）、5月8日（六）、9月26日（日）、10月9日（六）</span>
        <p className="mt-2">算法在2027年内寻找包含所选节日完整假期、年假用量不超过输入值的最长连续休息区间，不跨年计算。不同单位应以实际上班安排为准。</p>
      </div>;
      break;
    }
    case "five-insurances-fund": {
      const salary = readNumber("monthSalary"), requestedSocial = readNumber("socialBase");
      const requestedHouse = readNumber("houseBase"), housingRate = readNumber("fundRate",5,12);
      const social = Math.min(36348,Math.max(7270,requestedSocial));
      const house = Math.min(36348,Math.max(2540,requestedHouse));
      const pension = social*0.08, health = social*0.02 + 3, unemployed = social*0.005, housing = house*housingRate/100;
      const total = pension + health + unemployed + housing;
      results.push({label:"养老保险个人缴费（8%）",value:cny(pension)},
        {label:"医疗保险个人缴费（2% + 3元）",value:cny(health)},
        {label:"失业保险个人缴费（0.5%）",value:cny(unemployed)},
        {label:"住房公积金个人缴费",value:cny(housing)},
        {label:"五险一金个人扣款合计（估算）",value:cny(total)},
        {label:"税前工资扣除五险一金后（未扣个税）",value:cny(salary-total)});
      fields = <>{inp("monthSalary","税前月工资（元）")}
        {inp("socialBase","社保申报缴费工资基数（元）")}
        {inp("houseBase","住房公积金申报缴费基数（元）")}
        {sel("fundRate","公积金个人缴存比例（北京2026：5%–12%）",
          [5,6,7,8,9,10,11,12].map(v=>({value:String(v),label:String(v)+"%"})))}</>;
      extra=<p className="rounded-xl bg-amber-50 p-3 text-sm leading-7 text-amber-900">
        按照北京市2026年7月起基数上限36,348元、下限社保7,270元／公积金2,540元进行约束。用户应填写单位实际申报基数，不一定等于当前工资。其他城市的基数和比例不同，不应直接套用本页面数据。
      </p>;
      break;
    }
    case "income-tax": {
      const salary = readNumber("monthSalary"), social = readNumber("monthlySocial"), add = readNumber("additional");
      const month = readNumber("monthNumber",1,12);
      const perMonthTaxable = salary - social - add - 5000;
      const cumulative = (m:number) => chinaTax(Math.max(0,perMonthTaxable*m));
      const currentTax = cumulative(Math.floor(month)) - cumulative(Math.floor(month)-1);
      results.push({label:"本月应预扣个税（模拟）",value:cny(currentTax)},
        {label:"本月税后工资（减专项扣除和个税）",value:cny(salary-social-currentTax)},
        {label:"本月累计应纳税所得额",value:cny(Math.max(0,perMonthTaxable*Math.floor(month)))},
        {label:"截至本月累计预扣个税",value:cny(cumulative(Math.floor(month)))},
        {label:"全年预估工资薪金预扣税额",value:cny(cumulative(12))});
      fields = <>{inp("monthSalary","每月税前工资（元）")}
        {inp("monthlySocial","每月三险一金等专项扣除（元）")}
        {inp("additional","每月专项附加扣除等（元）")}
        {sel("monthNumber","当前月份（同一单位1月起工作）",Array.from({length:12},(_,i)=>({value:String(i+1),label:String(i+1)+"月"})))}</>;
      extra=<p className="rounded-xl bg-amber-50 p-3 text-sm leading-7 text-amber-900">
        累计预扣法简化模型：从1月开始连续任职、每月收入与各项扣除完全相同，且无其他已预扣税额与减免。实际个税计算还需要已预扣税额、其他收入与优惠政策等资料。
      </p>;
      break;
    }
  }

  const valid = Object.entries(numeric).every(([key, rule]) => {
    const v = N(key);
    return Number.isFinite(v) && v >= rule.min && v <= rule.max && (!rule.integer || Number.isInteger(v));
  });
  const regionName = entry.region === "us" ? "United States · 2026/2027" :
    entry.region === "jp" ? "日本 · 2026年版" : "中国大陆 · 2026/2027";
  const resultsLabel = resultHeading;
  const other = COUNTRY_TOOLS.filter(item => item.region === entry.region && item.id !== entry.id);
  return <main lang={entry.locale === "zh-hans" ? "zh-Hans" : entry.locale} className="min-h-screen bg-[#f7f8fa] px-5 py-10 text-slate-950">
    <div className="mx-auto max-w-5xl">
      <nav className="flex flex-wrap items-center justify-between gap-3">
        <Link href={"/"+entry.locale} className="text-sm font-bold text-blue-700">← Myeotiji</Link>
        <Link href={"/"+entry.locale} className="rounded-lg bg-white px-3 py-2 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
          {entry.region === "us" ? "All English calculators" : entry.region === "jp" ? "日本語の計算ツール一覧" : "全部中文计算器"}
        </Link>
      </nav>
      <header className="mt-10 max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-600">{regionName} · Myeotiji</p>
        <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">{entry.title}</h1>
        <p className="mt-4 text-base leading-8 text-slate-600">{entry.intro}</p>
      </header>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <section className={boxClass}>
          <h2 className="mb-5 text-lg font-black">{entry.locale==="en"?"Enter your details":entry.locale==="ja"?"計算条件を入力":"请输入计算条件"}</h2>
          <div className="space-y-5">{fields}</div>
        </section>
        <section className={boxClass} aria-live="polite" aria-atomic="true">
          <h2 className="mb-4 text-lg font-black">{resultsLabel}</h2>
          {valid ? results.map((row,i)=><ResultRow key={i} item={row}/>) :
            <p role="alert" className="rounded-xl bg-amber-50 p-4 text-sm text-amber-900">
              {entry.locale==="en"?"Check that all inputs are within their allowed ranges.":entry.locale==="ja"?"入力した数値・条件を確認してください。":"请检查输入的金额和范围。"}
            </p>}
          <p className="mt-5 text-xs leading-6 text-slate-500">
            {entry.locale==="en"?"Informational estimate only; not tax, payroll or legal advice.":
              entry.locale==="ja"?"参考用の概算です。税務・労務上の判断は専門家や公的機関へご確認ください。":
              "仅供估算参考；不属于税务、法律或薪资结算意见。"}
          </p>
        </section>
      </div>
      {extra && <div className="mt-4">{extra}</div>}
      <section className="mt-5 grid gap-4 md:grid-cols-2">
        <article className={boxClass}><h2 className="text-lg font-black">{entry.locale==="en"?"Formula":entry.locale==="ja"?"計算方法":"计算方法"}</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700">{entry.formula}</p></article>
        <article className={boxClass}><h2 className="text-lg font-black">{entry.locale==="en"?"Example":entry.locale==="ja"?"計算例":"计算示例"}</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700">{entry.example}</p></article>
      </section>
      <section className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <h2 className="font-black">{entry.locale==="en"?"Scope & limitations":entry.locale==="ja"?"適用範囲・注意事項":"适用范围与限制"}</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700">{entry.scope}</p>
        <p className="mt-3 text-xs text-slate-600">Last reviewed / 最終確認 / 更新日期: {entry.updated}</p>
      </section>
      <section className={boxClass+" mt-4"}>
        <h2 className="text-lg font-black">{entry.locale==="en"?"Official references":entry.locale==="ja"?"公式の参考資料":"官方依据"}</h2>
        <ul className="mt-3 space-y-2 text-sm">
          {entry.source.map(ref=><li key={ref.url}><a href={ref.url} target="_blank" rel="noopener noreferrer"
            className="font-semibold text-blue-700 underline-offset-2 hover:underline">{ref.label} ↗</a></li>)}
        </ul>
      </section>
      <section className="mt-10">
        <h2 className="text-lg font-black">{entry.locale==="en"?"Other US calculators":entry.locale==="ja"?"その他の日本向け計算ツール":"其他中国大陆计算器"}</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {other.map(item=><Link key={item.id} href={"/"+item.locale+"/"+item.region+"/"+item.id}
            className="rounded-xl border border-slate-200 bg-white p-4 hover:border-blue-300 hover:shadow-sm">
            <strong className="block text-sm">{item.title}</strong>
            <span className="mt-2 block text-xs leading-6 text-slate-600">{item.description}</span>
          </Link>)}
        </div>
      </section>
      <footer className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">
        <Link href={"/"+entry.locale} className="font-semibold text-blue-700">Myeotiji</Link>
        <span className="mx-3">·</span>
        <Link href="/" hrefLang="ko">한국어</Link>
        <p className="mt-2 text-xs">© 2026 Myeotiji</p>
      </footer>
    </div>
  </main>;
}

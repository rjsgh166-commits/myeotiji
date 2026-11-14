"use client";

import { useState } from "react";
import { COPY, type IntlLocale, type IntlTool } from "../_lib/international";
import { enhancedCopy } from "../_lib/intl-enhancements/copy";
import { couponScenario, feeScenario, PRICE_UNITS, unitPrice, savingsGoal, type PriceUnit } from "../_lib/intl-enhancements/math";

const INPUT = "w-full min-w-0 rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100";
function Field({ label, value, set }: { label: string; value: string; set: (value: string) => void }) {
  return <label className="block"><span className="mb-2 block text-sm font-semibold">{label}</span>
    <input type="number" inputMode="decimal" step="any" min="0" className={INPUT} value={value} onChange={e => set(e.target.value)} /></label>;
}
function Output({ label, value }: { label: string; value: string }) {
  return <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-b border-slate-200 py-3 last:border-0">
    <span className="text-sm text-slate-700">{label}</span><strong className="break-words text-end" dir="auto">{value}</strong></div>;
}
const number = (value: string) => value.trim() ? Number(value) : NaN;
type Props = { locale: IntlLocale; tool: IntlTool; currency: string; currencySelector: React.ReactNode;
  amount: string; first: string; second: string; rate: string; fixed: string; reverse: boolean; monthly: string; years: string };

export default function InternationalScenarios(props: Props) {
  const c = enhancedCopy(props.locale);
  if (!c || !["discount", "fee", "unit-converter", "compound"].includes(props.tool)) return null;
  return <Scenarios {...props} />;
}
function Scenarios({ locale, tool, currency, currencySelector, amount, first, second, rate, fixed, reverse, monthly, years }: Props) {
  const c = enhancedCopy(locale)!;
  const t = COPY[locale];
  const [cap, setCap] = useState("0"), [minimum, setMinimum] = useState("0");
  const [shipping, setShipping] = useState("0"), [cashback, setCashback] = useState("0");
  const [cashbackCap, setCashbackCap] = useState("0"), [coupon, setCoupon] = useState("0");
  const [fixedMode, setFixedMode] = useState(false);
  const [rateB, setRateB] = useState("2"), [fixedB, setFixedB] = useState("1");
  const [priceA, setPriceA] = useState(locale === "vi" ? "60000" : locale === "id" ? "6000" : ["hi", "bn", "ar"].includes(locale) ? "60" : locale === "ur" ? "600" : "6"), [quantityA, setQuantityA] = useState("750");
  const [priceB, setPriceB] = useState(locale === "vi" ? "75000" : locale === "id" ? "7500" : ["hi", "bn", "ar"].includes(locale) ? "75" : locale === "ur" ? "750" : "7.5"), [quantityB, setQuantityB] = useState("1");
  const [unitA, setUnitA] = useState<PriceUnit>("g"), [unitB, setUnitB] = useState<PriceUnit>("kg");
  const [goal, setGoal] = useState("10000");
  const money = (value: number) => new Intl.NumberFormat(t.tag, { style: "currency", currency }).format(value);
  const fmt = (value: number, digits = 2) => new Intl.NumberFormat(t.tag, { maximumFractionDigits: digits }).format(value);
  const currencyDigits = new Intl.NumberFormat(t.tag, { style: "currency", currency }).resolvedOptions().maximumFractionDigits ?? 2;
  const rows: { label: string; value: string }[] = [];
  let valid = true, message = "", inputs: React.ReactNode;
  const title = tool === "discount" ? c.couponTitle : tool === "fee" ? c.feeTitle : tool === "unit-converter" ? c.unitTitle : c.goalTitle;
  const note = tool === "discount" ? c.couponNote : tool === "fee" ? c.feeNote : tool === "unit-converter" ? c.unitNote : c.goalNote;

  if (tool === "discount") {
    const result = couponScenario(number(amount), number(first), fixedMode ? 0 : number(second), fixedMode ? number(coupon) : 0,
      number(cap), number(minimum), number(shipping), number(cashback), number(cashbackCap), fixedMode);
    valid = result !== null;
    if (result) {
      message = result.eligible ? c.eligible : c.ineligible;
      rows.push({ label: c.coupon, value: money(result.coupon) }, { label: c.pay, value: money(result.pay) },
        { label: c.reward, value: money(result.reward) }, { label: c.effective, value: money(result.effective) });
    }
    inputs = <><p className="text-sm leading-7 text-slate-600">{c.useAbove}</p>
      <label className="block"><span className="mb-2 block text-sm font-semibold">{c.fixedMode}</span>
        <select className={INPUT} value={fixedMode ? "fixed" : "percent"} onChange={e => setFixedMode(e.target.value === "fixed")}>
          <option value="percent">{c.percentCoupon}</option><option value="fixed">{c.fixedCoupon}</option></select></label>
      {fixedMode && <Field label={c.fixedCoupon} value={coupon} set={setCoupon} />}
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={c.cap} value={cap} set={setCap} /><Field label={c.minimum} value={minimum} set={setMinimum} />
        <Field label={c.shipping} value={shipping} set={setShipping} /><Field label={c.cashback} value={cashback} set={setCashback} />
        <Field label={c.cashbackCap} value={cashbackCap} set={setCashbackCap} />
      </div></>;
  } else if (tool === "fee") {
    const a = feeScenario(number(amount), number(rate), number(fixed), reverse, currencyDigits);
    const b = feeScenario(number(amount), number(rateB), number(fixedB), reverse, currencyDigits);
    valid = !!a && !!b;
    if (a && b) for (const [label, result] of [[c.optionA, a], [c.optionB, b]] as const) {
      rows.push({ label: `${label} · ${c.gross}`, value: money(result.gross) },
        { label: `${label} · ${c.fee}`, value: money(result.fee) }, { label: `${label} · ${c.net}`, value: money(result.net) });
    }
    inputs = <><h3 className="font-bold">{c.optionB}</h3><div className="grid gap-4 sm:grid-cols-2">
      <Field label={`${c.optionB} · ${c.rate}`} value={rateB} set={setRateB} />
      <Field label={`${c.optionB} · ${c.fixed}`} value={fixedB} set={setFixedB} /></div></>;
  } else if (tool === "unit-converter") {
    const a = unitPrice(number(priceA), number(quantityA), unitA), b = unitPrice(number(priceB), number(quantityB), unitB);
    valid = !!a && !!b && a.family === b.family;
    if (a && b && a.family !== b.family) message = c.incompatible;
    if (valid && a && b) {
      const unit = a.unit === "item" ? c.item : a.unit;
      rows.push({ label: `${c.optionA} · ${c.unitPrice}`, value: `${new Intl.NumberFormat(t.tag, { style: "currency", currency, maximumFractionDigits: 6 }).format(a.per)} / ${unit}` },
        { label: `${c.optionB} · ${c.unitPrice}`, value: `${new Intl.NumberFormat(t.tag, { style: "currency", currency, maximumFractionDigits: 6 }).format(b.per)} / ${unit}` });
      const equal = Math.abs(a.per - b.per) <= Number.EPSILON * 8 * Math.max(1, a.per, b.per);
      rows.push({ label: c.cheaper, value: equal ? c.equal : a.per < b.per ? c.optionA : c.optionB },
        { label: c.saving, value: `${fmt(Math.max(a.per, b.per) > 0 ? Math.abs(a.per - b.per) / Math.max(a.per, b.per) * 100 : 0)}%` });
    }
    inputs = <>{currencySelector}<div className="grid gap-5 sm:grid-cols-2">
      {([
        [c.optionA, c.priceA, priceA, setPriceA, c.quantityA, quantityA, setQuantityA, c.unitA, unitA, setUnitA],
        [c.optionB, c.priceB, priceB, setPriceB, c.quantityB, quantityB, setQuantityB, c.unitB, unitB, setUnitB],
      ] as const).map(([label, pl, pv, ps, ql, qv, qs, ul, uv, us]) => <fieldset key={label} className="min-w-0 space-y-4 rounded-xl border border-slate-200 p-4">
        <legend className="px-1 font-bold">{label}</legend><Field label={pl} value={pv} set={ps} /><Field label={ql} value={qv} set={qs} />
        <label className="block"><span className="mb-2 block text-sm font-semibold">{ul}</span>
          <select className={INPUT} value={uv} onChange={e => us(e.target.value as PriceUnit)}>
            {Object.keys(PRICE_UNITS).map(unit => <option key={unit} value={unit}>{unit === "item" ? c.item : unit}</option>)}
          </select></label></fieldset>)}
    </div></>;
  } else {
    const result = savingsGoal(number(amount), number(rate), number(years), number(goal));
    const contribution = number(monthly);
    valid = !!result && Number.isFinite(contribution) && contribution >= 0;
    if (result && valid) {
      const needed = Math.ceil(result.monthly * 10 ** currencyDigits) / 10 ** currencyDigits;
      rows.push({ label: c.monthly, value: money(Math.max(0, needed)) }, { label: c.months, value: fmt(result.months, 0) },
        { label: c.current, value: money(result.grown + result.factor * contribution) },
        { label: c.less, value: money(result.grown + result.factor * contribution * .8) },
        { label: c.more, value: money(result.grown + result.factor * contribution * 1.2) });
      if (result.monthly === 0) message = c.already;
      valid = [needed, result.grown + result.factor * contribution * 1.2].every(Number.isFinite);
    }
    inputs = <Field label={c.goal} value={goal} set={setGoal} />;
  }
  return <section data-enhancement={tool} className="mt-6 rounded-2xl border border-blue-200 bg-white p-5 sm:p-6">
    <h2 className="text-xl font-black">{title}</h2>
    <p className="mt-3 text-sm leading-7 text-slate-600">{note}</p>
    <div className="mt-5 grid gap-6 md:grid-cols-2"><div className="min-w-0 space-y-4">{inputs}</div>
      <div className="min-w-0 rounded-xl bg-blue-50 p-4" role="status" aria-live="polite" aria-atomic="true">
        {valid ? <>{message && <p className="mb-3 text-sm font-semibold">{message}</p>}
          {rows.map(row => <Output key={row.label} {...row} />)}</>
          : <p role="alert" className="font-semibold text-amber-900">{message || t.invalid}</p>}
      </div></div>
    <p className="mt-4 text-xs leading-6 text-slate-600">{c.currencyNote}</p>
  </section>;
}

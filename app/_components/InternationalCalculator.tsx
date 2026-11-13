"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import { COPY, LOCALES, TOOLS, type IntlLocale, type IntlTool } from "../_lib/international";
import CalculatorGuideTeaser, { type GuideTeaser } from "./CalculatorGuideTeaser";

const CURRENCIES = ["USD", "EUR", "GBP", "JPY", "CNY", "KRW", "CAD", "AUD", "TWD", "SGD"] as const;
const UNIT_SETS = {
  length: [["m", 1], ["km", 1000], ["cm", 0.01], ["mm", 0.001], ["mi", 1609.344], ["ft", 0.3048], ["in", 0.0254]] ,
  weight: [["kg", 1], ["g", 0.001], ["lb", 0.45359237], ["oz", 0.028349523125], ["t", 1000]],
  area: [["m²", 1], ["km²", 1000000], ["ft²", 0.09290304], ["acre", 4046.8564224], ["ha", 10000]],
  volume: [["L", 1], ["mL", 0.001], ["US gal", 3.785411784], ["US cup", 0.2365882365], ["m³", 1000]],
  temperature: [["°C", 1], ["°F", 1], ["K", 1]],
  data: [["B", 1], ["kB", 1000], ["MB", 1000000], ["GB", 1000000000], ["KiB", 1024], ["MiB", 1048576], ["GiB", 1073741824]]
} as const;
type UnitCategory = keyof typeof UNIT_SETS;
// Keep static HTML date-neutral, then read the visitor's local date after hydration.
const subscribeToLocalDate = () => () => {};
const serverLocalDate = () => "";
function clientLocalDate() {
  const now = new Date();
  return [now.getFullYear(), String(now.getMonth() + 1).padStart(2, "0"), String(now.getDate()).padStart(2, "0")].join("-");
}
const NUMBER = "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100";
const CARD = "rounded-2xl border border-slate-200 bg-white p-5 sm:p-6";

function epochDay(value: string): number {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return NaN;
  const [y, m, d] = value.split("-").map(Number);
  const date = new Date(Date.UTC(y, m - 1, d));
  if (date.getUTCFullYear() !== y || date.getUTCMonth() !== m - 1 || date.getUTCDate() !== d) return NaN;
  return Math.round(date.getTime() / 86400000);
}
function temperatureC(value: number, unit: string): number {
  if (unit === "°F") return (value - 32) * 5 / 9;
  if (unit === "K") return value - 273.15;
  return value;
}
function fromCelsius(value: number, unit: string): number {
  if (unit === "°F") return value * 9 / 5 + 32;
  if (unit === "K") return value + 273.15;
  return value;
}
function Field({ label, value, onChange, kind = "number", step = "any" }: {
  label: string; value: string; onChange: (value: string) => void; kind?: "number" | "date"; step?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-800">{label}</span>
      <input className={NUMBER} type={kind} step={kind === "number" ? step : undefined} value={value}
        onChange={event => onChange(event.target.value)} />
    </label>
  );
}
function Result({ label, value }: { label: string; value: string }) {
  return <div className="flex items-center justify-between gap-4 border-b border-slate-100 py-3 last:border-0">
    <span className="text-sm text-slate-600">{label}</span>
    <strong className="text-right text-base text-slate-950">{value}</strong>
  </div>;
}

export default function InternationalCalculator({ locale, tool, guide }: { locale: IntlLocale; tool: IntlTool; guide?: GuideTeaser }) {
  const t = COPY[locale];
  const toolCopy = t.tools[tool];
  const langTag = t.tag;
  const [currency, setCurrency] = useState<string>(locale === "ja" ? "JPY" : locale === "zh-hans" ? "CNY" : "USD");
  const [amount, setAmount] = useState("100");
  const [rate, setRate] = useState("3");
  const [fixed, setFixed] = useState("0.3");
  const [reverse, setReverse] = useState(false);
  const [first, setFirst] = useState("20");
  const [second, setSecond] = useState("10");
  const [shares, setShares] = useState("100");
  const [newShares, setNewShares] = useState("100");
  const [newPrice, setNewPrice] = useState("40");
  const [monthly, setMonthly] = useState("100");
  const [years, setYears] = useState("10");
  const [start, setStart] = useState("2026-01-01");
  const [end, setEnd] = useState("2026-12-31");
  const [inclusive, setInclusive] = useState(false);
  const [birth, setBirth] = useState("2000-01-01");
  const today = useSyncExternalStore(subscribeToLocalDate, clientLocalDate, serverLocalDate);
  const [unitCategory, setUnitCategory] = useState<UnitCategory>("length");
  const [fromUnit, setFromUnit] = useState<string>("m");
  const [toUnit, setToUnit] = useState<string>("km");

  const num = (value: string) => Number(value);
  const formatted = (value: number, digits = 2) =>
    Number.isFinite(value) ? new Intl.NumberFormat(langTag, { maximumFractionDigits: digits }).format(value) : "—";
  const money = (value: number) =>
    Number.isFinite(value) ? new Intl.NumberFormat(langTag, { style: "currency", currency, maximumFractionDigits: 2 }).format(value) : "—";
  const percent = (value: number) => `${formatted(value, 2)}%`;
  let valid = true;
  const rows: { label: string; value: string }[] = [];
  let form: React.ReactNode = null;

  const currencySelector = (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-800">{t.currency}</span>
      <select className={NUMBER} value={currency} onChange={event => setCurrency(event.target.value)}>
        {CURRENCIES.map(code => <option key={code} value={code}>{code}</option>)}
      </select>
    </label>
  );

  if (tool === "fee") {
    const rateNumber = num(rate), base = num(amount), fixedNumber = num(fixed);
    valid = [rateNumber, base, fixedNumber].every(Number.isFinite) && rateNumber >= 0 && rateNumber < 100 && base >= 0 && fixedNumber >= 0;
    const charged = reverse ? (base + fixedNumber) / (1 - rateNumber / 100) : base;
    const fee = charged * rateNumber / 100 + fixedNumber;
    const received = charged - fee;
    rows.push({ label: t.tools.fee.out[0], value: money(fee) }, { label: t.tools.fee.out[1], value: money(received) });
    if (reverse) rows.push({ label: t.tools.fee.out[2], value: money(charged) });
    form = <>
      <div className="grid gap-2 sm:grid-cols-2">{t.tools.fee.modes.map((label, index) =>
        <button type="button" key={label} aria-pressed={reverse === (index === 1)}
          onClick={() => setReverse(index === 1)}
          className={`rounded-xl border px-3 py-3 text-sm font-bold ${reverse === (index === 1) ? "border-blue-600 bg-blue-50 text-blue-700" : "border-slate-200 text-slate-700"}`}>{label}</button>)}</div>
      <Field label={t.tools.fee.fields[0]} value={amount} onChange={setAmount} />
      <div className="grid gap-4 sm:grid-cols-2"><Field label={t.tools.fee.fields[1]} value={rate} onChange={setRate} />
      <Field label={t.tools.fee.fields[2]} value={fixed} onChange={setFixed} /></div>
      {currencySelector}
    </>;
  } else if (tool === "discount") {
    const base = num(amount), a = num(first), b = num(second);
    valid = [base, a, b].every(Number.isFinite) && base >= 0 && a >= 0 && a <= 100 && b >= 0 && b <= 100;
    const final = base * (1 - a / 100) * (1 - b / 100);
    rows.push({ label: t.tools.discount.out[0], value: money(final) }, { label: t.tools.discount.out[1], value: money(base - final) },
      { label: t.tools.discount.out[2], value: percent(base > 0 ? (1 - final / base) * 100 : 0) });
    form = <>
      <Field label={t.tools.discount.fields[0]} value={amount} onChange={setAmount} />
      <div className="grid gap-4 sm:grid-cols-2"><Field label={t.tools.discount.fields[1]} value={first} onChange={setFirst} />
        <Field label={t.tools.discount.fields[2]} value={second} onChange={setSecond} /></div>
      {currencySelector}
    </>;
  } else if (tool === "days") {
    const a = epochDay(start), b = epochDay(end);
    valid = Number.isFinite(a) && Number.isFinite(b);
    const diff = b - a;
    const total = diff + (inclusive ? (diff < 0 ? -1 : 1) : 0);
    const abs = Math.abs(total);
    rows.push({ label: t.tools.days.out[0], value: formatted(total, 0) },
      { label: t.tools.days.out[1], value: `${formatted(Math.floor(abs / 7), 0)} + ${formatted(abs % 7, 0)}` });
    form = <>
      <Field kind="date" label={t.tools.days.fields[0]} value={start} onChange={setStart} />
      <Field kind="date" label={t.tools.days.fields[1]} value={end} onChange={setEnd} />
      <label className="flex items-center gap-3 text-sm font-medium text-slate-700">
        <input type="checkbox" className="size-5 accent-blue-600" checked={inclusive} onChange={event => setInclusive(event.target.checked)} />{t.included}
      </label>
    </>;
  } else if (tool === "stock-average") {
    const currentShares = num(shares), currentPrice = num(amount), addedShares = num(newShares), addedPrice = num(newPrice);
    valid = [currentShares, currentPrice, addedShares, addedPrice].every(Number.isFinite) && currentShares >= 0 && currentPrice >= 0 && addedShares >= 0 && addedPrice >= 0 && currentShares + addedShares > 0;
    const count = currentShares + addedShares;
    const basis = currentShares * currentPrice + addedShares * addedPrice;
    rows.push({ label: t.tools["stock-average"].out[0], value: money(basis / count) },
      { label: t.tools["stock-average"].out[1], value: formatted(count, 6) },
      { label: t.tools["stock-average"].out[2], value: money(basis) });
    form = <>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={t.tools["stock-average"].fields[0]} value={shares} onChange={setShares} />
        <Field label={t.tools["stock-average"].fields[1]} value={amount} onChange={setAmount} />
        <Field label={t.tools["stock-average"].fields[2]} value={newShares} onChange={setNewShares} />
        <Field label={t.tools["stock-average"].fields[3]} value={newPrice} onChange={setNewPrice} />
      </div>
      {currencySelector}
    </>;
  } else if (tool === "compound") {
    const startBalance = num(amount), contribution = num(monthly), annual = num(rate) / 100, duration = num(years);
    valid = [startBalance, contribution, annual, duration].every(Number.isFinite) && startBalance >= 0 && contribution >= 0 && annual >= -0.99 && annual <= 1 && duration > 0 && duration <= 100;
    const months = Math.round(duration * 12);
    const monthlyRate = Math.pow(1 + annual, 1 / 12) - 1;
    let balance = startBalance;
    if (valid) for (let i = 0; i < months; i++) balance = balance * (1 + monthlyRate) + contribution;
    const paid = startBalance + months * contribution;
    rows.push({ label: t.tools.compound.out[0], value: money(balance) }, { label: t.tools.compound.out[1], value: money(paid) },
      { label: t.tools.compound.out[2], value: money(balance - paid) });
    form = <>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={t.tools.compound.fields[0]} value={amount} onChange={setAmount} />
        <Field label={t.tools.compound.fields[1]} value={monthly} onChange={setMonthly} />
        <Field label={t.tools.compound.fields[2]} value={rate} onChange={setRate} />
        <Field label={t.tools.compound.fields[3]} value={years} onChange={setYears} />
      </div>
      {currencySelector}
    </>;
  } else if (tool === "unit-converter") {
    const options: ReadonlyArray<readonly [string, number]> = UNIT_SETS[unitCategory];
    const fromFactor = options.find(option => option[0] === fromUnit)?.[1];
    const toFactor = options.find(option => option[0] === toUnit)?.[1];
    const value = num(amount);
    valid = Number.isFinite(value) && fromFactor != null && toFactor != null;
    const converted = unitCategory === "temperature"
      ? fromCelsius(temperatureC(value, fromUnit), toUnit)
      : value * (fromFactor ?? 1) / (toFactor ?? 1);
    if (unitCategory === "temperature" && toUnit === "K" && converted < 0) valid = false;
    rows.push({ label: t.tools["unit-converter"].out[0], value: `${formatted(converted, 8)} ${toUnit}` });
    form = <>
      <label className="block"><span className="mb-2 block text-sm font-semibold text-slate-800">{t.choose}</span>
        <select className={NUMBER} value={unitCategory} onChange={event => {
          const cat = event.target.value as UnitCategory;
          setUnitCategory(cat); setFromUnit(UNIT_SETS[cat][0][0]); setToUnit(UNIT_SETS[cat][1][0]);
        }}>
          {Object.keys(UNIT_SETS).map(key => <option key={key} value={key}>{t.categories[key as UnitCategory]}</option>)}
        </select>
      </label>
      <Field label={t.tools["unit-converter"].fields[0]} value={amount} onChange={setAmount} />
      <div className="grid gap-4 sm:grid-cols-2">
        {([
          [t.tools["unit-converter"].fields[1], fromUnit, setFromUnit],
          [t.tools["unit-converter"].fields[2], toUnit, setToUnit],
        ] as const).map(([label, value, setter]) =>
          <label className="block" key={label}><span className="mb-2 block text-sm font-semibold text-slate-800">{label}</span>
            <select className={NUMBER} value={value} onChange={event => setter(event.target.value)}>
              {options.map(([unit]) => <option key={unit} value={unit}>{unit}</option>)}
            </select>
          </label>)}
      </div>
    </>;
  } else {
    const date = epochDay(birth), current = epochDay(today);
    valid = Number.isFinite(date) && (today === "" || (Number.isFinite(current) && date <= current));
    const [by, bm, bd] = birth.split("-").map(Number);
    const [cy, cm, cd] = today.split("-").map(Number);
    const yearsOld = cy - by - (cm < bm || (cm === bm && cd < bd) ? 1 : 0);
    rows.push({ label: t.tools.age.out[0], value: today ? formatted(yearsOld, 0) : "—" },
      { label: t.tools.age.out[1], value: today ? formatted(current - date, 0) : "—" });
    form = <Field kind="date" label={t.tools.age.fields[0]} value={birth} onChange={setBirth} />;
  }

  return (
    <div lang={langTag} className="min-h-screen bg-[#f7f8fa] text-slate-950">
      <div className="mx-auto max-w-5xl px-5 pb-16 pt-8 sm:px-8">
        <header className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <Link href={`/${locale}`} className="text-lg font-black text-blue-700">Myeotiji · {t.home}</Link>
          <nav aria-label={t.lang} className="flex flex-wrap gap-2">
            {LOCALES.map(code => <Link key={code} href={`/${code}/${tool}`} hrefLang={COPY[code].tag}
              aria-current={code === locale ? "page" : undefined}
              className={`rounded-lg px-3 py-2 text-sm font-semibold ${code === locale ? "bg-blue-600 text-white" : "bg-white text-slate-700 ring-1 ring-slate-200"}`}>{COPY[code].label}</Link>)}
          </nav>
        </header>

        <Link href={`/${locale}`} className="text-sm font-semibold text-slate-600 hover:text-blue-700">← {t.back}</Link>
        <div className="mt-7 max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-600">Myeotiji tools</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">{toolCopy.title}</h1>
          <p className="mt-4 text-base leading-7 text-slate-600">{toolCopy.intro}</p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <section className={CARD}>
            <h2 className="mb-5 text-lg font-black">{t.inputs}</h2>
            <div className="space-y-5">{form}</div>
          </section>
          <section className={CARD} aria-live="polite" aria-atomic="true">
            <h2 className="mb-5 text-lg font-black">{t.results}</h2>
            {valid ? <div>{rows.map(row => <Result key={row.label} label={row.label} value={row.value} />)}</div>
              : <p role="alert" className="rounded-xl bg-amber-50 p-4 text-sm font-semibold text-amber-900">{t.invalid}</p>}
            <p className="mt-5 text-sm leading-7 text-slate-700">{t.disclaimer}</p>
          </section>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <section className={CARD}><h2 className="text-lg font-black">{t.how}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{toolCopy.formula}</p></section>
          <section className={CARD}><h2 className="text-lg font-black">{t.example}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{toolCopy.example}</p></section>
        </div>
        <section className="mt-4 rounded-2xl border border-amber-100 bg-amber-50 px-6 py-5">
          <h2 className="font-bold text-slate-900">{t.note}</h2>
          <p className="mt-2 text-sm leading-7 text-slate-700">{toolCopy.note}</p>
        </section>

        <CalculatorGuideTeaser guide={guide} />
        <section className="mt-10"><h2 className="text-xl font-black">{t.related}</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {TOOLS.filter(item => item !== tool).map(item =>
              <Link key={item} href={`/${locale}/${item}`}
                className="rounded-xl border border-slate-200 bg-white p-4 transition hover:border-blue-300 hover:shadow-sm">
                <span className="block font-bold text-slate-900">{t.tools[item].title}</span>
                <span className="mt-1 block text-xs leading-5 text-slate-600">{t.tools[item].description}</span>
              </Link>)}
          </div>
        </section>
        <footer className="mt-12 border-t border-slate-200 pt-6 text-sm leading-7 text-slate-700">
          <Link href="/" hrefLang="ko" className="font-semibold text-blue-700">{t.source}</Link>
          <p className="mt-1">© 2026 Myeotiji · {t.disclaimer}</p>
        </footer>
      </div>
    </div>
  );
}

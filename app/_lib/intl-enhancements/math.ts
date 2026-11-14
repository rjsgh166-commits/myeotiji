// Pure arithmetic shared by the localized scenario tools. No provider rates or tax rules.
export function couponScenario(base: number, first: number, second: number, fixed: number,
  cap: number, minimum: number, shipping: number, cashbackRate: number, cashbackCap: number, fixedMode: boolean) {
  const values = [base, first, second, fixed, cap, minimum, shipping, cashbackRate, cashbackCap];
  if (!values.every(Number.isFinite) || values.some(n => n < 0) || first > 100 || second > 100 || cashbackRate > 100) return null;
  const subtotal = base * (1 - first / 100);
  const eligible = subtotal >= minimum;
  const rawCoupon = fixedMode ? fixed : subtotal * second / 100;
  const coupon = eligible ? Math.min(subtotal, rawCoupon, cap > 0 ? cap : Infinity) : 0;
  const goods = subtotal - coupon;
  const reward = Math.min(goods * cashbackRate / 100, cashbackCap > 0 ? cashbackCap : Infinity);
  const pay = goods + shipping;
  if (![subtotal, coupon, goods, reward, pay].every(Number.isFinite)) return null;
  return { subtotal, eligible, coupon, pay, reward, effective: pay - reward };
}
export function feeScenario(base: number, rate: number, fixed: number, reverse: boolean, digits: number) {
  if (![base, rate, fixed].every(Number.isFinite) || base < 0 || rate < 0 || rate >= 100 || fixed < 0) return null;
  const scale = 10 ** digits;
  const exact = reverse ? (base + fixed) / (1 - rate / 100) : base;
  // Round the requested charge upwards to the currency's smallest unit in reverse mode.
  const gross = reverse ? Math.ceil(exact * scale) / scale : exact;
  const fee = gross * rate / 100 + fixed;
  const net = gross - fee;
  return [gross, fee, net].every(Number.isFinite) ? { gross, fee, net } : null;
}
export const PRICE_UNITS = { kg: ["mass", 1], g: ["mass", .001], L: ["volume", 1], mL: ["volume", .001], item: ["item", 1] } as const;
export type PriceUnit = keyof typeof PRICE_UNITS;
export function unitPrice(price: number, quantity: number, unit: PriceUnit) {
  if (![price, quantity].every(Number.isFinite) || price < 0 || quantity <= 0) return null;
  const [family, factor] = PRICE_UNITS[unit];
  const per = price / (quantity * factor);
  return Number.isFinite(per) ? { family, per, unit: family === "mass" ? "kg" : family === "volume" ? "L" : "item" } : null;
}
export function savingsGoal(initial: number, annualPercent: number, years: number, target: number) {
  if (![initial, annualPercent, years, target].every(Number.isFinite) || initial < 0 || target < 0 || annualPercent < -99 || annualPercent > 100 || years <= 0 || years > 100) return null;
  const months = Math.round(years * 12);
  if (months < 1) return null;
  const rate = Math.expm1(Math.log1p(annualPercent / 100) / 12);
  // Month-end deposits. Iteration avoids cancellation near zero and handles negative returns.
  let grown = initial, factor = 0;
  for (let i = 0; i < months; i++) { grown *= 1 + rate; factor = factor * (1 + rate) + 1; }
  const monthly = Math.max(0, (target - grown) / factor);
  return [grown, factor, monthly].every(Number.isFinite) ? { months, monthly, grown, factor } : null;
}

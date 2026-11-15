// Only catalog identifiers may leave the browser. Never pass form values here.
const locales = new Set(['en', 'ja', 'zh-hans', 'es', 'pt-br', 'id', 'hi', 'fr', 'ar', 'bn', 'ur', 'vi']);
const globalTools = new Set(['fee', 'discount', 'days', 'stock-average', 'compound', 'unit-converter', 'age']);
const koreanTools = new Set(['job-change', 'salary', 'retirement', 'weekly-pay', 'unemployment', 'hourly-monthly', 'annual-leave', 'loan', 'compound', 'savings-interest', 'goal-savings', 'stock-average', 'fee', 'rent-conversion', 'median-income', 'days', 'age', 'lunar', 'holiday-tracker', 'due-date', 'discount', 'unit-converter', 'calorie-burn', 'dog-age']);
const countryTools: Record<string, readonly string[]> = { 'en/us': ['401k-match', 'overtime-pay', 'take-home-pay'], 'ja/jp': ['income-wall', 'furusato-tax', 'commuter-pass'] };
const guides = new Set(['fee-calculation', 'stacked-discounts', 'days-between-dates', 'stock-average-cost', 'compound-interest', 'unit-conversions', 'age-calculation']);
const countryGuides: Record<string, readonly string[]> = { en: ['us-401k-match', 'us-overtime-pay', 'us-take-home-pay-2026'], ja: ['income-wall-2026', 'furusato-tax-limit', 'commuter-pass-break-even'] };
const koreanGuides = new Set(['fee-calculation', '2027-holidays', 'age', 'lunar-birthday', 'stacked-discount', 'stock-average', 'editorial-policy']);
const scenarios: Record<string, string> = { discount: 'coupon', fee: 'fee_comparison', 'unit-converter': 'unit_price', compound: 'savings_goal' };
type Context = { language: string; calculator?: string; tool_family?: string; guide_id?: string };
export function usageContext(path: string): Context | null {
  const parts = path.split('/').filter(Boolean);
  const foreign = locales.has(parts[0]);
  const language = foreign ? parts.shift()! : 'ko';
  if (language === 'zh-hans') return null;
  if (!parts.length || (parts.length === 1 && ['privacy', 'terms', 'about', 'contact', 'editorial-policy'].includes(parts[0]))) return { language };
  if (!foreign && parts[0] === 'holiday-tracker' && parts[1] === '2027' && (parts.length === 2 || (parts.length === 3 && ['chuseok', 'seollal', 'pto-1', 'pto-2', 'may', 'october'].includes(parts[2])))) return { language, calculator: 'holiday-tracker', tool_family: 'korean' };
  if (parts[0] === 'guides' && parts.length <= 2) {
    const slug = parts[1] || 'index';
    if (slug === 'index' || (foreign ? guides.has(slug) || countryGuides[language]?.includes(slug) : koreanGuides.has(slug))) return { language, guide_id: slug };
    return null;
  }
  if (parts.length === 1 && (foreign ? globalTools : koreanTools).has(parts[0])) return { language, calculator: parts[0], tool_family: foreign ? 'global' : 'korean' };
  if (foreign && parts.length === 2 && countryTools[`${language}/${parts[0]}`]?.includes(parts[1])) return { language, calculator: parts[1], tool_family: 'country' };
  return null;
}
export function usageSender() {
  if (typeof window === 'undefined' || window.myeotijiAnalyticsAllowed !== true || (window as unknown as Record<string, unknown>)['ga-disable-G-6FC374VXMH'] === true || typeof window.gtag !== 'function') return null;
  return window.gtag;
}
export function startUsageVisit(path: string) {
  const context = usageContext(path);
  const seen = new Set<string>();
  // Lives only for this route visit; no cookie, localStorage, user or session ID.
  return (event: 'calculator_use' | 'comparison_use' | 'guide_open' | 'language_change', detail?: string, hrefLang?: string) => {
    const send = usageSender();
    if (!context || !send || window.location.pathname !== path) return;
    const payload: Record<string, string> = { site_language: context.language };
    if (event === 'calculator_use' || event === 'comparison_use') {
      if (!context.calculator || !context.tool_family) return;
      payload.calculator = context.calculator; payload.tool_family = context.tool_family;
      if (event === 'comparison_use') {
        if (context.tool_family === 'korean' && ['salary', 'loan', 'job-change'].includes(context.calculator) && detail === 'side_by_side') payload.comparison_type = 'side_by_side';
        else if (context.tool_family === 'global' && detail === context.calculator && scenarios[detail]) payload.comparison_type = scenarios[detail];
        else return;
      }
    } else {
      let url: URL;
      try { url = new URL(detail || '', window.location.origin); } catch { return; }
      if (url.origin !== window.location.origin) return;
      const target = usageContext(url.pathname);
      if (!target) return;
      if (event === 'guide_open') {
        if (!target.guide_id) return;
        payload.guide_id = target.guide_id; payload.target_language = target.language;
      } else {
        if (!hrefLang || target.language === context.language) return;
        // An explicit language link is required, not any cross-language reference.
        const tag = hrefLang.toLowerCase();
        if (tag !== target.language && !(target.language === 'ko' && tag === 'ko-kr') && !(target.language === 'en' && tag === 'en-us') && !(target.language === 'ja' && tag === 'ja-jp')) return;
        payload.target_language = target.language;
      }
    }
    const key = event + JSON.stringify(payload);
    if (seen.has(key)) return;
    send('event', event, payload);
    seen.add(key);
  };
}

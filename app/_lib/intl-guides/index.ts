import { COUNTRY_TOOLS } from "../countryTools";
import { LOCALES, type IntlLocale, type IntlTool } from "../international";
import { SITE_URL } from "../site";
import { COUNTRY_GUIDE_COPY } from "./country";
import { GLOBAL_EN } from "./global-en";
import { GLOBAL_JA } from "./global-ja";
import { GLOBAL_ZH } from "./global-zh";
import { GUIDE_LABELS } from "./labels";
import type { CalculationGuide, Reference } from "./types";

const TOPICS: { tool: IntlTool; slug: string; sources: Reference[] }[] = [
  { tool: "fee", slug: "fee-calculation", sources: [{ label: "Stripe — published pricing and fee terms (provider example)", url: "https://stripe.com/pricing" }] },
  { tool: "discount", slug: "stacked-discounts", sources: [] },
  { tool: "days", slug: "days-between-dates", sources: [{ label: "MDN — Date.UTC: date arithmetic reference", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/UTC" }] },
  { tool: "stock-average", slug: "stock-average-cost", sources: [] },
  { tool: "compound", slug: "compound-interest", sources: [{ label: "US SEC Investor.gov — compound interest calculator", url: "https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator" }] },
  { tool: "unit-converter", slug: "unit-conversions", sources: [{ label: "NIST — SI conversion factors", url: "https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors" }] },
  { tool: "age", slug: "age-calculation", sources: [{ label: "MDN — Date.UTC: calendar-date implementation reference", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/UTC" }] },
];
const COPIES = { en: GLOBAL_EN, ja: GLOBAL_JA, "zh-hans": GLOBAL_ZH };
const PUBLISHED = "2026-11-13";

export const INTERNATIONAL_GUIDES: CalculationGuide[] = [
  ...LOCALES.flatMap(locale => TOPICS.map(topic => ({
    ...COPIES[locale][topic.tool], locale, slug: topic.slug, tool: topic.tool,
    kind: "global" as const, calculatorPath: `/${locale}/${topic.tool}`,
    sources: topic.sources, published: PUBLISHED, updated: PUBLISHED,
  }))),
  ...COUNTRY_GUIDE_COPY.map(copy => {
    const tool = COUNTRY_TOOLS.find(entry => entry.locale === copy.locale && entry.id === copy.tool);
    if (!tool) throw new Error(`Missing country calculator for ${copy.locale}/${copy.tool}`);
    return { ...copy, kind: "country" as const,
      calculatorPath: `/${tool.locale}/${tool.region}/${tool.id}`,
      sources: [
        ...tool.source.map(source => ({ ...source })),
        ...(copy.tool === "income-wall" ? [{ label: "厚生労働省：適用拡大Q&A（雇用見込み・企業規模）", url: "https://www.mhlw.go.jp/tekiyoukakudai/qa/" }] : []),
      ], published: PUBLISHED, updated: PUBLISHED };
  }),
];
export const GUIDE_PUBLISHED = PUBLISHED;
export const guidesForLocale = (locale: string) => INTERNATIONAL_GUIDES.filter(guide => guide.locale === locale);
export const findGuide = (locale: string, slug: string) => INTERNATIONAL_GUIDES.find(guide => guide.locale === locale && guide.slug === slug);
export const guidePath = (guide: Pick<CalculationGuide, "locale" | "slug">) => `/${guide.locale}/guides/${guide.slug}`;
export const countryLanguageTag = (locale: IntlLocale) => locale === "en" ? "en-US" : locale === "ja" ? "ja-JP" : "zh-Hans-CN";

export function guideAlternates(guide: CalculationGuide): Record<string, string> {
  if (guide.kind === "country") return { [countryLanguageTag(guide.locale)]: SITE_URL + guidePath(guide) };
  return Object.fromEntries([
    ...LOCALES.map(locale => [locale === "zh-hans" ? "zh-Hans" : locale, `${SITE_URL}/${locale}/guides/${guide.slug}`]),
    ["x-default", `${SITE_URL}/en/guides/${guide.slug}`],
  ]);
}
export function guideHubAlternates(suffix = ""): Record<string, string> {
  return Object.fromEntries([
    ...LOCALES.map(locale => [locale === "zh-hans" ? "zh-Hans" : locale, `${SITE_URL}/${locale}/guides${suffix}`]),
    ["x-default", `${SITE_URL}/en/guides${suffix}`],
  ]);
}
export function guideTeaserForCalculator(locale: IntlLocale, tool: string) {
  const guide = INTERNATIONAL_GUIDES.find(item => item.locale === locale && item.tool === tool);
  return guide ? { href: guidePath(guide), title: guide.title, cta: GUIDE_LABELS[locale].calculatorLink } : undefined;
}
export function relatedGuides(guide: CalculationGuide): CalculationGuide[] {
  const priorities: Partial<Record<IntlTool, string[]>> = {
    fee: ["discount", "compound"], discount: ["fee", "unit-converter"],
    days: ["age", "2027-holidays"], age: ["days"],
    compound: ["stock-average", "fee"], "stock-average": ["compound", "fee"],
    "unit-converter": ["days", "discount"],
  };
  const candidates = guidesForLocale(guide.locale).filter(item => item.slug !== guide.slug);
  if (guide.kind === "country") return candidates.filter(item => item.kind === "country");
  const selected = priorities[guide.tool as IntlTool] ?? [];
  return candidates.filter(item => selected.includes(item.tool));
}

import { enhancedTitle } from "../../_lib/intl-enhancements/guides";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InternationalCalculator from "../../_components/InternationalCalculator";
import { OG_LOCALES, COPY, LOCALES, TOOLS, isIntlLocale, isIntlTool, localizedAlternates } from "../../_lib/international";
import { guideTeaserForCalculator } from "../../_lib/intl-guides";
import InternationalCalculatorSchema from "../../_components/InternationalStructuredData";

type Props = { params: Promise<{ locale: string; tool: string }> };
export function generateStaticParams() {
  return LOCALES.flatMap(locale => TOOLS.map(tool => ({ locale, tool })));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, tool } = await params;
  if (!isIntlLocale(locale) || !isIntlTool(tool)) notFound();
  const copy = COPY[locale].tools[tool];
  const extra = enhancedTitle(locale, tool);
  const description = copy.description + (extra ? ` ${extra}.` : "");
  const pathname = `/${locale}/${tool}`;
  return {
    title: { absolute: `${copy.title} | Myeotiji` },
    description,
    alternates: { canonical: pathname, languages: localizedAlternates(tool) },
    openGraph: { type: "website", title: copy.title, description, url: pathname, locale: OG_LOCALES[locale], images: ["/opengraph-image.png"] },
    twitter: { card: "summary", title: `${copy.title} | Myeotiji`, description, images: ["/twitter-image.png"] },
  };
}
export default async function IntlToolPage({ params }: Props) {
  const { locale, tool } = await params;
  if (!isIntlLocale(locale) || !isIntlTool(tool)) notFound();
  const copy = COPY[locale].tools[tool];
  return <>
    <InternationalCalculatorSchema locale={locale} path={`/${locale}/${tool}`} title={copy.title} description={copy.description + (enhancedTitle(locale, tool) ? ` ${enhancedTitle(locale, tool)}.` : "")} />
    <InternationalCalculator locale={locale} tool={tool} guide={guideTeaserForCalculator(locale, tool)} />
  </>;
}

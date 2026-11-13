import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InternationalCalculator from "../../_components/InternationalCalculator";
import { COPY, LOCALES, TOOLS, isIntlLocale, isIntlTool, localizedAlternates } from "../../_lib/international";

type Props = { params: Promise<{ locale: string; tool: string }> };
export function generateStaticParams() {
  return LOCALES.flatMap(locale => TOOLS.map(tool => ({ locale, tool })));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, tool } = await params;
  if (!isIntlLocale(locale) || !isIntlTool(tool)) notFound();
  const copy = COPY[locale].tools[tool];
  const pathname = `/${locale}/${tool}`;
  return {
    title: `${copy.title} | Myeotiji`,
    description: copy.description,
    alternates: { canonical: pathname, languages: localizedAlternates(tool) },
    openGraph: { type: "website", title: copy.title, description: copy.description, url: pathname, locale: COPY[locale].tag },
  };
}
export default async function IntlToolPage({ params }: Props) {
  const { locale, tool } = await params;
  if (!isIntlLocale(locale) || !isIntlTool(tool)) notFound();
  return <InternationalCalculator locale={locale} tool={tool} />;
}

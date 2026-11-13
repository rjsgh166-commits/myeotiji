import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { COUNTRY_TOOLS, countryTool } from "../../../_lib/countryTools";
import CountryCalculator from "../../../_components/CountryCalculator";
import { countryLanguageTag, guideTeaserForCalculator } from "../../../_lib/intl-guides";
import InternationalCalculatorSchema from "../../../_components/InternationalStructuredData";

type Props = { params: Promise<{ locale: string; region: string; tool: string }> };
export const dynamicParams = false;

export function generateStaticParams() {
  return COUNTRY_TOOLS.map(item => ({ locale: item.locale, region: item.region, tool: item.id }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, region, tool } = await params;
  const entry = countryTool(locale, region, tool);
  if (!entry) notFound();
  const url = "https://myeotiji.kr/" + locale + "/" + region + "/" + tool;
  return {
    title: { absolute: entry.title + " | Myeotiji" },
    description: entry.description,
    alternates: { canonical: url, languages: { [countryLanguageTag(entry.locale)]: url } },
    twitter: { card: "summary", title: entry.title + " | Myeotiji", description: entry.description, images: ["/twitter-image.png"] },
    openGraph: {
      type: "website", title: entry.title, description: entry.description, url,
      images: ["/opengraph-image.png"],
      locale: locale === "zh-hans" ? "zh_CN" : locale === "ja" ? "ja_JP" : "en_US",
    },
  };
}
export default async function CountryToolPage({ params }: Props) {
  const { locale, region, tool } = await params;
  const entry = countryTool(locale, region, tool);
  if (!entry) notFound();
  return <>
    <InternationalCalculatorSchema locale={entry.locale} path={`/${entry.locale}/${entry.region}/${entry.id}`} title={entry.title} description={entry.description} />
    <CountryCalculator entry={entry} guide={guideTeaserForCalculator(entry.locale, tool)} />
  </>;
}

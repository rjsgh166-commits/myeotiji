import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { COUNTRY_TOOLS, countryTool } from "../../../_lib/countryTools";
import CountryCalculator from "../../../_components/CountryCalculator";

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
    title: { absolute: entry.title + " | Myeotiji" }
    description: entry.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website", title: entry.title, description: entry.description, url,
      locale: locale === "zh-hans" ? "zh_CN" : locale === "ja" ? "ja_JP" : "en_US",
    },
  };
}
export default async function CountryToolPage({ params }: Props) {
  const { locale, region, tool } = await params;
  const entry = countryTool(locale, region, tool);
  if (!entry) notFound();
  return <CountryCalculator entry={entry}/>;
}

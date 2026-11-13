import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isIntlLocale } from "../_lib/international";
import { LEGAL_LABELS, LEGAL_SECTIONS, LEGAL_UPDATED, type LegalPage } from "../_lib/intl-legal";
import { SITE_URL } from "../_lib/site";
import InternationalGuideShell from "./InternationalGuideShell";
export type LegalProps = { params: Promise<{ locale: string }> };
export async function legalMetadata({ params }: LegalProps, page: LegalPage): Promise<Metadata> {
  const { locale } = await params;
  if (!isIntlLocale(locale)) notFound();
  const title = LEGAL_LABELS[locale][page] + " | Myeotiji";
  const description = LEGAL_SECTIONS[locale][page][0][1], url = `${SITE_URL}/${locale}/${page}`;
  return { title: { absolute: title }, description,
    alternates: { canonical: url, languages: { en: `${SITE_URL}/en/${page}`, ja: `${SITE_URL}/ja/${page}`, "zh-Hans": `${SITE_URL}/zh-hans/${page}`, "x-default": `${SITE_URL}/en/${page}` } },
    openGraph: { title, description, url, locale: locale === "en" ? "en_US" : locale === "ja" ? "ja_JP" : "zh_CN" },
    twitter: { card: "summary", title, description } };
}
export async function LegalContent({ params, page }: LegalProps & { page: LegalPage }) {
  const { locale } = await params;
  if (!isIntlLocale(locale)) notFound();
  return <InternationalGuideShell locale={locale} languagePaths={{ en: `/en/${page}`, ja: `/ja/${page}`, "zh-hans": `/zh-hans/${page}` }}>
    <h1 className="text-3xl font-black">{LEGAL_LABELS[locale][page]}</h1>
    <p className="mt-3 text-sm text-slate-600">{locale === "ja" ? "更新日" : locale === "zh-hans" ? "更新日期" : "Updated"}: <time dateTime={LEGAL_UPDATED}>{LEGAL_UPDATED}</time></p>
    <div className="mt-8 space-y-8">{LEGAL_SECTIONS[locale][page].map(([heading, body]) => <section key={heading}>
      <h2 className="text-xl font-bold">{heading}</h2><p className="mt-3 max-w-4xl leading-8 text-slate-700">{body}</p>
    </section>)}</div>
    <a href="mailto:contact@myeotiji.kr" className="mt-8 inline-block font-semibold text-blue-700 underline">contact@myeotiji.kr</a>
    {page === "privacy" && <div className="mt-6 flex flex-wrap gap-5 text-sm text-blue-700"><a href="https://vercel.com/legal/privacy-policy" rel="noopener noreferrer" target="_blank">Vercel · Privacy</a><Link href="/privacy" hrefLang="ko">한국어 · 개인정보처리방침</Link></div>}
  </InternationalGuideShell>;
}

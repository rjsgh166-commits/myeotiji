import type { Metadata } from "next";
import Link from "next/link";
import { GUIDE_LABELS } from "../_lib/intl-guides/labels";
import { notFound } from "next/navigation";
import { OG_LOCALES, LOCALES, COPY, isIntlLocale } from "../_lib/international";
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
    alternates: { canonical: url, languages: Object.fromEntries([...LOCALES.map(code => [COPY[code].tag, `${SITE_URL}/${code}/${page}`]), ["x-default", `${SITE_URL}/en/${page}`]]) },
    openGraph: { title, description, url, locale: OG_LOCALES[locale] },
    twitter: { card: "summary", title, description } };
}
export async function LegalContent({ params, page }: LegalProps & { page: LegalPage }) {
  const { locale } = await params;
  if (!isIntlLocale(locale)) notFound();
  return <InternationalGuideShell locale={locale} languagePaths={Object.fromEntries(LOCALES.map(code => [code, `/${code}/${page}`]))}>
    <h1 className="text-3xl font-black">{LEGAL_LABELS[locale][page]}</h1>
    <p className="mt-3 text-sm text-slate-600">{GUIDE_LABELS[locale].updated}: <time dateTime={LEGAL_UPDATED}>{LEGAL_UPDATED}</time></p>
    <div className="mt-8 space-y-8">{LEGAL_SECTIONS[locale][page].map(([heading, body]) => <section key={heading}>
      <h2 className="text-xl font-bold">{heading}</h2><p className="mt-3 max-w-4xl leading-8 text-slate-700">{body}</p>
    </section>)}</div>
    <a href="mailto:contact@myeotiji.kr" className="mt-8 inline-block font-semibold text-blue-700 underline">contact@myeotiji.kr</a>
    {page === "privacy" && <div className="mt-6 flex flex-wrap gap-5 text-sm text-blue-700"><a href="https://vercel.com/legal/privacy-policy" rel="noopener noreferrer" target="_blank">Vercel · Privacy</a><a href="https://policies.google.com/technologies/partner-sites" rel="noopener noreferrer" target="_blank">Google · Data use</a><a href="https://tools.google.com/dlpage/gaoptout" rel="noopener noreferrer" target="_blank">Google Analytics · Opt-out</a><Link href="/privacy" hrefLang="ko">한국어 · 개인정보처리방침</Link></div>}
  </InternationalGuideShell>;
}

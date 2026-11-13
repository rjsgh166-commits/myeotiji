import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { COPY, LOCALES, isIntlLocale, type IntlLocale } from "../../../_lib/international";
import { findGuide, guideAlternates, guidePath, guidesForLocale, relatedGuides } from "../../../_lib/intl-guides";
import { GUIDE_LABELS } from "../../../_lib/intl-guides/labels";
import { SITE_URL } from "../../../_lib/site";
import InternationalGuideShell from "../../../_components/InternationalGuideShell";
import { JsonLd, breadcrumbs } from "../../../_components/InternationalStructuredData";

type Props = { params: Promise<{ locale: string; slug: string }> };
export const dynamicParams = false;
export function generateStaticParams({ params }: { params: { locale: string } }) {
  return guidesForLocale(params.locale).map(guide => ({ slug: guide.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const guide = findGuide(locale, slug);
  if (!guide) notFound();
  return { title: { absolute: guide.title + " | Myeotiji" }, description: guide.description,
    alternates: { canonical: guidePath(guide), languages: guideAlternates(guide) },
    openGraph: { type: "article", title: guide.title, description: guide.description,
      url: guidePath(guide), publishedTime: guide.published, modifiedTime: guide.updated,
      locale: locale === "en" ? "en_US" : locale === "ja" ? "ja_JP" : "zh_CN", images: ["/opengraph-image.png"] },
    twitter: { card: "summary", title: guide.title + " | Myeotiji", description: guide.description, images: ["/twitter-image.png"] },
  };
}
export default async function GuideArticle({ params }: Props) {
  const { locale, slug } = await params;
  if (!isIntlLocale(locale)) notFound();
  const guide = findGuide(locale, slug);
  if (!guide) notFound();
  const text = GUIDE_LABELS[locale], url = SITE_URL + guidePath(guide), related = relatedGuides(guide);
  const languagePaths = guide.kind === "global" ? Object.fromEntries(
    LOCALES.map(code => [code, `/${code}/guides/${slug}`]),
  ) as Record<IntlLocale, string> : undefined;
  return <InternationalGuideShell locale={locale} languagePaths={languagePaths}>
    <JsonLd data={{ "@context": "https://schema.org", "@graph": [
      { "@type": "Article", "@id": url + "#article", mainEntityOfPage: url, url,
        headline: guide.title, description: guide.description, inLanguage: COPY[locale].tag,
        datePublished: guide.published, dateModified: guide.updated,
        author: { "@type": "Organization", name: "Myeotiji", url: `${SITE_URL}/${locale}/guides/editorial-policy` },
        publisher: { "@type": "Organization", name: "Myeotiji", url: SITE_URL },
        ...(guide.sources.length ? { citation: guide.sources.map(source => source.url) } : {}),
      },
      breadcrumbs([{ name: text.home, path: `/${locale}` }, { name: text.guides, path: `/${locale}/guides` },
        { name: guide.title, path: guidePath(guide) }]),
    ] }} />
    <nav aria-label={text.guides} className="text-sm leading-7 text-blue-700">
      <Link href={`/${locale}`}>{text.home}</Link><span className="mx-2" aria-hidden="true">/</span>
      <Link href={`/${locale}/guides`}>{text.guides}</Link>
    </nav>
    <article>
      <header className="mt-6 max-w-4xl">
        <h1 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl">{guide.title}</h1>
        <p className="mt-5 text-base leading-8 text-slate-600">{guide.description}</p>
        <p className="mt-4 text-xs leading-6 text-slate-500">
          <Link href={`/${locale}/guides/editorial-policy`} className="underline underline-offset-4">{text.author}</Link>
          <span className="mx-2" aria-hidden="true">·</span>{text.updated}: <time dateTime={guide.updated}>{guide.updated}</time>
        </p>
      </header>
      <section className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-6 sm:p-8">
        <h2 className="font-black text-blue-900">{text.quick}</h2>
        <p className="mt-3 text-base leading-8 text-slate-800">{guide.answer}</p>
        <Link href={guide.calculatorPath} className="mt-5 inline-flex min-h-11 items-center rounded-xl bg-blue-700 px-5 py-3 text-sm font-bold text-white hover:bg-blue-800">{text.try} →</Link>
      </section>
      <nav aria-label={text.contents} className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
        <p className="font-bold">{text.contents}</p>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-blue-700">
          {guide.sections.map((section, index) => <li key={section.heading}><a href={`#section-${index + 1}`} className="hover:underline">{section.heading}</a></li>)}
        </ol>
      </nav>
      <div className="mt-8 space-y-10">
        {guide.sections.map((section, index) => <section key={section.heading} id={`section-${index + 1}`} className="scroll-mt-8">
          <h2 className="text-2xl font-black leading-9">{section.heading}</h2>
          {section.paragraphs.map(paragraph => <p key={paragraph} className="mt-4 text-base leading-8 text-slate-700">{paragraph}</p>)}
          {section.table && <div className="mt-5 overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full border-collapse bg-white text-left text-sm leading-7">
              <caption className="sr-only">{section.heading}</caption>
              <thead className="bg-slate-100 text-slate-900"><tr>{section.table.headers.map(header => <th key={header} scope="col" className="px-4 py-3 font-bold">{header}</th>)}</tr></thead>
              <tbody>{section.table.rows.map((row, rowIndex) => <tr key={rowIndex} className="border-t border-slate-100">{row.map((cell, cellIndex) => cellIndex === 0
                ? <th key={cellIndex} scope="row" className="px-4 py-3 font-medium text-slate-900">{cell}</th>
                : <td key={cellIndex} className="px-4 py-3 text-slate-700">{cell}</td>)}</tr>)}</tbody>
            </table>
          </div>}
        </section>)}
      </div>
      <section className="mt-12">
        <h2 className="text-2xl font-black">{text.questions}</h2>
        <div className="mt-5 space-y-3">{guide.faqs.map(faq => <details key={faq.question} className="rounded-xl border border-slate-200 bg-white p-5">
          <summary className="cursor-pointer font-bold leading-7">{faq.question}</summary>
          <p className="mt-3 text-sm leading-7 text-slate-700">{faq.answer}</p>
        </details>)}</div>
      </section>
      {guide.sources.length > 0 && <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-black">{text.references}</h2>
        <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-blue-700">
          {guide.sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">{source.label} ↗</a></li>)}
        </ul>
      </section>}
      <aside className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-sm leading-7 text-slate-700">{text.exampleNote}</aside>
      <Link href={guide.calculatorPath} className="mt-8 inline-flex min-h-11 items-center rounded-xl bg-blue-700 px-5 py-3 text-sm font-bold text-white hover:bg-blue-800">{text.try} →</Link>
    </article>
    {related.length > 0 && <section className="mt-12 border-t border-slate-200 pt-8">
      <h2 className="text-xl font-black">{text.related}</h2>
      <ul className="mt-4 space-y-3 text-sm leading-7 text-blue-700">{related.map(item => <li key={item.slug}>
        <Link href={guidePath(item)} className="font-semibold hover:underline">{item.title} →</Link>
      </li>)}</ul>
    </section>}
  </InternationalGuideShell>;
}

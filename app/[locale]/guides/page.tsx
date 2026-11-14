import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { OG_LOCALES, COPY, isIntlLocale } from "../../_lib/international";
import { GUIDE_LABELS } from "../../_lib/intl-guides/labels";
import { guideHubAlternates, guidePath, guidesForLocale } from "../../_lib/intl-guides";
import InternationalGuideShell from "../../_components/InternationalGuideShell";
import { JsonLd, breadcrumbs } from "../../_components/InternationalStructuredData";
import { SITE_URL } from "../../_lib/site";

type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isIntlLocale(locale)) notFound();
  const text = GUIDE_LABELS[locale], url = `/${locale}/guides`;
  return { title: { absolute: text.title + " | Myeotiji" }, description: text.description,
    alternates: { canonical: url, languages: guideHubAlternates() },
    openGraph: { type: "website", title: text.title, description: text.description, url,
      locale: OG_LOCALES[locale], images: ["/opengraph-image.png"] },
    twitter: { card: "summary", title: text.title + " | Myeotiji", description: text.description, images: ["/twitter-image.png"] },
  };
}
export default async function GuideIndex({ params }: Props) {
  const { locale } = await params;
  if (!isIntlLocale(locale)) notFound();
  const text = GUIDE_LABELS[locale], guides = guidesForLocale(locale), url = `/${locale}/guides`;
  return <InternationalGuideShell locale={locale}>
    <JsonLd data={{ "@context": "https://schema.org", "@graph": [
      { "@type": "CollectionPage", "@id": SITE_URL + url, url: SITE_URL + url,
        name: text.title, description: text.description, inLanguage: COPY[locale].tag,
        mainEntity: { "@type": "ItemList", itemListElement: guides.map((guide, index) => ({
          "@type": "ListItem", position: index + 1, name: guide.title, url: SITE_URL + guidePath(guide),
        })) } },
      breadcrumbs([{ name: text.home, path: `/${locale}` }, { name: text.guides, path: url }]),
    ] }} />
    <Link href={`/${locale}`} className="text-sm font-semibold text-blue-700">← {text.home}</Link>
    <h1 className="mt-6 max-w-4xl text-3xl font-black leading-tight tracking-tight sm:text-4xl">{text.title}</h1>
    <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">{text.intro}</p>
    {(["country", "global"] as const).filter(kind => guides.some(guide => guide.kind === kind)).map(kind => <section key={kind} className="mt-12">
      <h2 className="text-xl font-black">{kind === "country" ? text.country : text.global}</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {guides.filter(guide => guide.kind === kind).map(guide => <article key={guide.slug} className="rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className="text-lg font-bold leading-7"><Link href={guidePath(guide)} className="text-blue-800 hover:underline">{guide.title}</Link></h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">{guide.description}</p>
          <Link href={guide.calculatorPath} className="mt-4 inline-block text-sm font-semibold text-blue-700 hover:underline">{text.try} →</Link>
        </article>)}
      </div>
    </section>)}
  </InternationalGuideShell>;
}

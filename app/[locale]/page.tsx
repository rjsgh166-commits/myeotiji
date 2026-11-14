import type { Metadata } from "next";
import { COUNTRY_TOOLS } from "../_lib/countryTools";
import Link from "next/link";
import { notFound } from "next/navigation";
import { COPY, LOCALES, TOOLS, isIntlLocale, localizedAlternates } from "../_lib/international";
import { guidePath, guidesForLocale } from "../_lib/intl-guides";
import { GUIDE_LABELS } from "../_lib/intl-guides/labels";

type Props = { params: Promise<{ locale: string }> };
export function generateStaticParams() { return LOCALES.map(locale => ({ locale })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isIntlLocale(locale)) notFound();
  const search = GUIDE_LABELS[locale];
  return {
    title: { absolute: search.homeTitle },
    description: search.homeDescription,
    alternates: { canonical: `/${locale}`, languages: localizedAlternates() },
    openGraph: { title: search.homeHeading, description: search.homeDescription, url: `/${locale}`, type: "website", locale: locale === "en" ? "en_US" : locale === "ja" ? "ja_JP" : "zh_CN", images: ["/opengraph-image.png"] },
    twitter: { card: "summary", title: search.homeTitle, description: search.homeDescription, images: ["/twitter-image.png"] },
  };
}
export default async function InternationalHome({ params }: Props) {
  const { locale } = await params;
  if (!isIntlLocale(locale)) notFound();
  const text = COPY[locale];
  const search = GUIDE_LABELS[locale];
  const featuredGuides = guidesForLocale(locale).filter(guide => guide.kind === "country" || guide.tool === "compound");
  return (
    <main lang={text.tag} className="min-h-screen bg-[#f7f8fa] text-slate-950">
      <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <Link href={`/${locale}`} className="text-xl font-black text-blue-700">Myeotiji</Link>
          <nav aria-label={text.lang} className="flex flex-wrap gap-2">
            {LOCALES.map(code => <a href={`/${code}`} hrefLang={COPY[code].tag} key={code}
              aria-current={locale === code ? "page" : undefined}
              className={`rounded-xl px-3 py-2 text-sm font-semibold ${locale === code ? "bg-blue-600 text-white" : "bg-white text-slate-700 ring-1 ring-slate-200"}`}>{COPY[code].label}</a>)}
          </nav>
        </header>
        <section className="py-12 sm:py-16">
          <p className="text-sm font-black uppercase tracking-widest text-blue-600">Myeotiji calculators</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-5xl">{search.homeHeading}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{search.homeDescription}</p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-500">{text.indexIntro}</p>
          <Link href={`/${locale}/guides`} className="mt-5 inline-block text-sm font-bold text-blue-700 underline underline-offset-4">{search.guides} →</Link>
        </section>
        <section>
          <h2 className="mb-5 text-xl font-black">{text.choose}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {TOOLS.map(tool => <Link href={`/${locale}/${tool}`} key={tool}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-blue-300 hover:shadow-sm">
              <h3 className="text-lg font-bold group-hover:text-blue-700">{text.tools[tool].title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{text.tools[tool].description}</p>
            </Link>)}
          </div>
        </section>
        <section className="mt-12 border-t border-slate-200 pt-10">
          <p className="text-xs font-black uppercase tracking-widest text-blue-600">
            {locale === "en" ? "Country-specific calculators · United States" :
              locale === "ja" ? "日本の制度に特化した計算ツール" : "中国大陆专项计算器"}
          </p>
          <h2 className="mt-3 text-2xl font-black">
            {locale === "en" ? "US salary, taxes & retirement" :
              locale === "ja" ? "年収・寄附・通勤をもっと簡単に" : "调休、五险一金与个人所得税"}
          </h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            {locale === "en" ? "Choose a calculator that uses US rules and clearly states which tax year applies." :
              locale === "ja" ? "日本の制度や運賃を前提とする計算です。各ページの適用条件と公式情報も確認できます。" :
                "根据中国大陆及北京实际制度提供计算，并在每个页面标明适用年份和地区。"}
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {COUNTRY_TOOLS.filter(entry => entry.locale === locale).map(entry =>
              <Link key={entry.id} href={`/${entry.locale}/${entry.region}/${entry.id}`}
                className="rounded-2xl border border-blue-100 bg-white p-6 transition hover:border-blue-300 hover:shadow-sm">
                <h3 className="text-lg font-bold text-slate-900">{entry.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{entry.description}</p>
                <p className="mt-3 text-xs font-bold text-blue-700">
                  {locale === "en" ? "Open calculator →" : locale === "ja" ? "計算する →" : "开始计算 →"}
                </p>
              </Link>)}
          </div>
        </section>
        <section className="mt-12 border-t border-slate-200 pt-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-2xl font-black">{search.guides}</h2>
            <Link href={`/${locale}/guides`} className="text-sm font-semibold text-blue-700 hover:underline">{search.title} →</Link>
          </div>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">{search.intro}</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {featuredGuides.map(guide => <article key={guide.slug} className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-bold leading-7"><Link href={guidePath(guide)} className="text-blue-800 hover:underline">{guide.title}</Link></h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{guide.description}</p>
            </article>)}
          </div>
        </section>
        <footer className="mt-14 border-t border-slate-200 pt-6 text-sm text-slate-500">
          <nav className="mb-4 flex flex-wrap gap-x-5 gap-y-2">
            <Link href={`/${locale}/guides`} className="font-semibold text-blue-700 hover:underline">{search.guides}</Link>
            <Link href={`/${locale}/guides/editorial-policy`} className="hover:underline">{search.policy}</Link>
          </nav>
          <Link href="/" hrefLang="ko" className="font-semibold text-blue-700">{text.source}</Link>
          <p className="mt-2 text-xs">{text.disclaimer}</p>
          <p className="mt-2 text-xs">© 2026 Myeotiji</p>
        </footer>
      </div>
    </main>
  );
}

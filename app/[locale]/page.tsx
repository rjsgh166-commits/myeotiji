import type { Metadata } from "next";
import { COUNTRY_TOOLS } from "../_lib/countryTools";
import Link from "next/link";
import { notFound } from "next/navigation";
import { COPY, LOCALES, TOOLS, isIntlLocale, localizedAlternates } from "../_lib/international";

type Props = { params: Promise<{ locale: string }> };
export function generateStaticParams() { return LOCALES.map(locale => ({ locale })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isIntlLocale(locale)) notFound();
  const text = COPY[locale];
  return {
    title: `${text.home} | Myeotiji`,
    description: text.subtitle,
    alternates: { canonical: `/${locale}`, languages: localizedAlternates() },
    openGraph: { title: text.home, description: text.subtitle, url: `/${locale}`, type: "website", locale: text.tag },
  };
}
export default async function InternationalHome({ params }: Props) {
  const { locale } = await params;
  if (!isIntlLocale(locale)) notFound();
  const text = COPY[locale];
  return (
    <main lang={text.tag} className="min-h-screen bg-[#f7f8fa] text-slate-950">
      <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <Link href={`/${locale}`} className="text-xl font-black text-blue-700">Myeotiji</Link>
          <nav aria-label={text.lang} className="flex flex-wrap gap-2">
            {LOCALES.map(code => <Link href={`/${code}`} hrefLang={COPY[code].tag} key={code}
              aria-current={locale === code ? "page" : undefined}
              className={`rounded-xl px-3 py-2 text-sm font-semibold ${locale === code ? "bg-blue-600 text-white" : "bg-white text-slate-700 ring-1 ring-slate-200"}`}>{COPY[code].label}</Link>)}
          </nav>
        </header>
        <section className="py-12 sm:py-16">
          <p className="text-sm font-black uppercase tracking-widest text-blue-600">Myeotiji calculators</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-5xl">{text.home}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{text.subtitle}</p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-500">{text.indexIntro}</p>
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
        <footer className="mt-14 border-t border-slate-200 pt-6 text-sm text-slate-500">
          <Link href="/" hrefLang="ko" className="font-semibold text-blue-700">{text.source}</Link>
          <p className="mt-2 text-xs">{text.disclaimer}</p>
          <p className="mt-2 text-xs">© 2026 Myeotiji</p>
        </footer>
      </div>
    </main>
  );
}

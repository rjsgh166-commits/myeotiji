import type { Metadata } from "next";
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
        <footer className="mt-14 border-t border-slate-200 pt-6 text-sm text-slate-500">
          <Link href="/" hrefLang="ko" className="font-semibold text-blue-700">{text.source}</Link>
          <p className="mt-2 text-xs">{text.disclaimer}</p>
          <p className="mt-2 text-xs">© 2026 Myeotiji</p>
        </footer>
      </div>
    </main>
  );
}

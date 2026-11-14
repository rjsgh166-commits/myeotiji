import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { COPY, LOCALES, isIntlLocale } from "../_lib/international";
import { SITE_URL } from "../_lib/site";
import InternationalAnalytics from "../_components/InternationalAnalytics";
import InternationalSafety from "../_components/InternationalSafety";
import "../globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// Separate roots set the language in static HTML and preserve Korean metadata.
export const dynamicParams = false;
export function generateStaticParams() { return LOCALES.map(locale => ({ locale })); }
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Myeotiji", template: "%s | Myeotiji" },
  applicationName: "Myeotiji",
  authors: [{ name: "Myeotiji" }], creator: "Myeotiji", publisher: "Myeotiji",
  robots: { index: true, follow: true },
  verification: { other: { "naver-site-verification": "70f439fd215b467889eec6f3c6065a96d366873f" } },
};

export default async function IntlLayout({ children, params }: {
  children: ReactNode; params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isIntlLocale(locale)) notFound();
  return (
    <html lang={COPY[locale].tag} className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-gray-50">
        {children}
        <InternationalSafety locale={locale} />
        {(locale === "en" || locale === "ja") && <InternationalAnalytics locale={locale} />}
      </body>
    </html>
  );
}

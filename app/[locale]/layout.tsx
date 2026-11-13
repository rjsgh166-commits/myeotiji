import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { COPY, LOCALES, isIntlLocale } from "../_lib/international";
import { SITE_URL } from "../_lib/site";
import AnalyticsTracker from "../_components/AnalyticsTracker";
import "../globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const GA_ID = "G-6FC374VXMH";

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
  other: { "google-adsense-account": "ca-pub-3837140065995769" },
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
        <AnalyticsTracker />
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}</Script>
      </body>
    </html>
  );
}

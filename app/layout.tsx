import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";

import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { SITE_NAME, SITE_URL } from "./_lib/site";
import AnalyticsTracker from "./_components/AnalyticsTracker";
import CalculatorSeoContent from "./_components/CalculatorSeoContent";
import SiteFooter from "./_components/SiteFooter";
import CalculatorQuickNav from "./_components/CalculatorQuickNav";

const GA_ID = "G-6FC374VXMH";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "몇이지? | 생활 계산기 모음",
    template: "%s | 몇이지?",
  },

  description:
    "연봉 실수령액, 퇴직금, 실업급여, 대출이자, 연차, 복리, 날짜, 중위소득 등 일상에서 필요한 계산을 쉽고 빠르게 확인하세요.",

  keywords: [
    "몇이지",
    "생활 계산기",
    "연봉 실수령액 계산기",
    "퇴직금 계산기",
    "주휴수당 계산기",
    "실업급여 계산기",
    "대출이자 계산기",
    "연차 계산기",
    "복리 계산기",
    "적금 이자 계산기",
    "기준 중위소득 계산기",
    "할인율 계산기",
    "만나이 계산기",
    "D-Day 계산기",
    "단위변환 계산기",
    "주식 평단 계산기",
  ],

  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  applicationName: SITE_NAME,
  category: "생활 계산기",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    other: {
      "naver-site-verification":
        "70f439fd215b467889eec6f3c6065a96d366873f",
    },
  },

  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: SITE_NAME,
    url: "/",
    title: "몇이지? | 생활 계산기 모음",
    description:
      "일상에서 궁금한 숫자, 몇이지? 급여·금융·날짜·복지·생활 계산을 쉽고 빠르게 확인하세요.",
  },

  twitter: {
    card: "summary",
    title: "몇이지? | 생활 계산기 모음",
    description:
      "급여, 금융, 날짜, 복지, 생활까지 필요한 계산을 쉽고 빠르게 확인하세요.",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-gray-50">
        <CalculatorQuickNav />
        {children}

        <CalculatorSeoContent />
        <SiteFooter />
        <AnalyticsTracker />

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}

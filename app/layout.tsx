import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";

import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { SITE_NAME, SITE_URL } from "./_lib/site";

const GA_ID = "G-6FC374YXMH";

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
    "연봉 실수령액, 퇴직금, 주휴수당, 할인율, 만나이, 음력, 꿀연휴, 주식 평단까지 일상에서 필요한 계산을 쉽고 빠르게 확인하세요.",

  keywords: [
    "몇이지",
    "생활 계산기",
    "연봉 실수령액 계산기",
    "퇴직금 계산기",
    "주휴수당 계산기",
    "할인율 계산기",
    "만나이 계산기",
    "음력 계산기",
    "꿀연휴",
    "물타기 계산기",
    "불타기 계산기",
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

  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: SITE_NAME,
    url: "/",
    title: "몇이지? | 생활 계산기 모음",
    description:
      "일상에서 궁금한 숫자, 몇이지? 연봉부터 날짜·투자 계산까지 필요한 계산을 쉽고 빠르게 확인하세요.",
  },

  twitter: {
    card: "summary",
    title: "몇이지? | 생활 계산기 모음",
    description:
      "연봉, 퇴직금, 할인율, 만나이, 음력, 꿀연휴, 주식 평단까지 필요한 계산을 쉽고 빠르게 확인하세요.",
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
      <body className="min-h-full flex flex-col">
        {children}

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}

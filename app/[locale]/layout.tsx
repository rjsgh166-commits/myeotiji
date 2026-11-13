import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { COPY, isIntlLocale } from "../_lib/international";
import InternationalLanguage from "../_components/InternationalLanguage";

export default async function IntlLayout({ children, params }: {
  children: ReactNode; params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isIntlLocale(locale)) notFound();
  return <div lang={COPY[locale].tag}><InternationalLanguage lang={COPY[locale].tag} />{children}</div>;
}

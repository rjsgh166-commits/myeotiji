import type { IntlLocale, IntlTool } from "../international";

export type GuideSection = {
  heading: string;
  paragraphs: string[];
  table?: { headers: string[]; rows: string[][] };
};
export type GuideCopy = {
  title: string;
  description: string;
  answer: string;
  sections: GuideSection[];
  faqs: { question: string; answer: string }[];
};
export type Reference = { label: string; url: string };
export type CalculationGuide = GuideCopy & {
  locale: IntlLocale;
  slug: string;
  kind: "global" | "country";
  tool: string;
  calculatorPath: string;
  sources: Reference[];
  published: string;
  updated: string;
};
export type GlobalGuideTopic = {
  slug: string;
  tool: IntlTool;
  sources: Reference[];
  copy: Record<IntlLocale, GuideCopy>;
};

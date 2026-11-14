import { ENHANCEMENT_EXAMPLES } from "./guide-examples";
import { enhancedCopy, type EnhancedLocale } from "./copy";
import type { IntlLocale, IntlTool } from "../international";
import type { GuideCopy, Reference } from "../intl-guides/types";

export function enhancedTitle(locale: IntlLocale, tool: IntlTool) {
  const c = enhancedCopy(locale);
  if (!c) return undefined;
  return ({ discount: c.couponTitle, fee: c.feeTitle, "unit-converter": c.unitTitle, compound: c.goalTitle } as Partial<Record<IntlTool, string>>)[tool];
}
// Server-side guide content only: do not import this module from interactive components.
export function enhanceGuide(locale: IntlLocale, tool: IntlTool, original: GuideCopy): GuideCopy {
  const c = enhancedCopy(locale), title = enhancedTitle(locale, tool);
  if (!c || !title) return original;
  const e = ENHANCEMENT_EXAMPLES[locale as EnhancedLocale];
  const section = tool === "discount" ? {
    heading: title, paragraphs: [c.couponNote, e.couponExample],
    table: { headers: [c.coupon, c.pay, c.reward, c.effective], rows: [["50", "780", "37.50", "742.50"]] },
  } : tool === "fee" ? {
    heading: title, paragraphs: [c.feeNote, e.feeExample],
    table: { headers: [c.option, c.gross, c.fee, c.net], rows: [[c.optionA, "100", "3.30", "96.70"], [c.optionB, "100", "3", "97"]] },
  } : tool === "unit-converter" ? {
    heading: title, paragraphs: [c.unitNote, e.unitExample],
    table: { headers: [c.option, c.price, c.quantity, c.unitPrice], rows: [[c.optionA, "6", "750 g", "8/kg"], [c.optionB, "7.50", "1 kg", "7.50/kg"]] },
  } : {
    heading: title, paragraphs: [c.goalNote, e.goalExample],
    table: { headers: [c.goal, c.monthly, c.months], rows: [["2200", "100", "12"]] },
  };
  return { ...original, title, description: `${title}. ${original.description}`,
    sections: [section, ...original.sections] };
}
export function enhancementSources(locale: IntlLocale, tool: IntlTool): Reference[] {
  if (!enhancedCopy(locale)) return [];
  if (tool === "discount" && locale === "id") return [{ label: "Shopee Indonesia — Voucher",
    url: "https://help.shopee.co.id/portal/9/article/72586-%5BVoucher%5D-Bagaimana-cara-menghitung-promo-Voucher-saat-checkout" }];
  if (tool === "fee" && locale === "pt-br") return [{ label: "Mercado Pago — Simulador de custos",
    url: "https://www.mercadopago.com.br/blog/simulador-de-custos-mercado-pago" }];
  if (tool === "unit-converter" && locale === "fr") return [{ label: "DGCCRF — L’information sur les prix",
    url: "https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/linformation-sur-les-prix" }];
  return [];
}

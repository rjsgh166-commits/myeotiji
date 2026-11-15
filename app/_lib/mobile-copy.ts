import type { IntlLocale } from './international';
export const MORE_CALCULATIONS: Record<IntlLocale, string> = {
  en: 'More calculations', ja: '追加の計算', 'zh-hans': '更多计算', es: 'Más cálculos',
  'pt-br': 'Mais cálculos', id: 'Hitungan tambahan', hi: 'अतिरिक्त गणना', fr: 'Autres calculs',
  ar: 'حسابات إضافية', bn: 'আরও হিসাব', ur: 'مزید حسابات', vi: 'Tính thêm',
};
export const HAS_SCENARIOS = new Set(['es', 'pt-br', 'id', 'hi', 'fr', 'ar', 'bn', 'ur', 'vi']);
export const SCENARIO_TOOLS = new Set(['fee', 'discount', 'unit-converter', 'compound']);

'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { startUsageVisit, usageContext, usageSender } from '../_lib/usage-analytics';

export default function UsageAnalyticsTracker() {
  const pathname = usePathname();
  useEffect(() => {
    if (!pathname || !usageContext(pathname)) return;
    const record = startUsageVisit(pathname);
    const timers = new Map<string, ReturnType<typeof setTimeout>>();
    const input = (event: Event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement) || !target.closest('main,[data-usage-calculator]') || target.closest('header,nav,footer,[role="dialog"],[data-analytics-settings]')) return;
      if (event.type === 'click' ? !target.closest('[data-calculation-control="true"],button[aria-pressed]') : !target.matches('input:not([type="hidden"]):not([type="search"]),select,textarea')) return;
      const sender = usageSender();
      if (!sender) return;
      const scenario = target.closest<HTMLElement>('[data-enhancement]')?.dataset.enhancement;
      const schedule = (key: string, eventName: 'calculator_use' | 'comparison_use', detail?: string) => {
        clearTimeout(timers.get(key));
        timers.set(key, setTimeout(() => {
          timers.delete(key);
          // Withdrawal/regrant must never replay an earlier interaction.
          if (usageSender() === sender) record(eventName, detail);
        }, 1000));
      };
      schedule('calculator', 'calculator_use');
      if (scenario) schedule(scenario, 'comparison_use', scenario);
    };
    const click = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const calculatorTarget = event.target.closest<HTMLElement>('[data-usage-calculator-target]')?.dataset.usageCalculatorTarget;
      if (calculatorTarget) record('guide_calculator_click', calculatorTarget);
      const link = event.target.closest<HTMLAnchorElement>('a[href]');
      if (!link) return;
      record('guide_open', link.href);
      record('guide_calculator_click', link.href);
      record('language_change', link.href, link.hreflang);
    };
    const comparison = () => record('comparison_use', 'side_by_side');
    document.addEventListener('myeotiji:comparison', comparison);
    document.addEventListener('input', input, true);
    document.addEventListener('change', input, true);
    document.addEventListener('click', input, true);
    document.addEventListener('click', click, true);
    return () => {
      for (const timer of timers.values()) clearTimeout(timer);
      document.removeEventListener('myeotiji:comparison', comparison);
      document.removeEventListener('input', input, true);
      document.removeEventListener('change', input, true);
      document.removeEventListener('click', input, true);
      document.removeEventListener('click', click, true);
    };
  }, [pathname]);
  return null;
}

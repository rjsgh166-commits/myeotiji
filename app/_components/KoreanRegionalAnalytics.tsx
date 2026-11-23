"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { safeSearchReferrer } from "../_lib/analytics-referrer";
import useRegionalConsent from "./useRegionalConsent";
import { clearAnalyticsCookies } from "../_lib/regional-consent";

export default function KoreanRegionalAnalytics({ measurementId }: { measurementId: string }) {
  const { permitted, cmp } = useRegionalConsent();
  const pathname = usePathname();
  useEffect(() => { if (cmp === "denied") clearAnalyticsCookies("_ga"); }, [cmp]);
  useEffect(() => {
    const target = window as unknown as Record<string, unknown>;
    window.myeotijiAnalyticsAllowed = permitted;
    target[`ga-disable-${measurementId}`] = !permitted;
    if (!permitted) return;
    window.dataLayer = window.dataLayer || [];
    // eslint-disable-next-line prefer-rest-params -- Google tag's command queue uses arguments.
    window.gtag = function () { window.dataLayer?.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", measurementId, { page_location: window.location.origin + pathname, page_referrer: safeSearchReferrer(document.referrer),
      allow_google_signals: false, allow_ad_personalization_signals: false });
    const script = document.createElement("script");
    script.async = true; script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script.dataset.koreanRegionalAnalytics = "true"; document.head.appendChild(script);
    return () => { target[`ga-disable-${measurementId}`] = true; window.myeotijiAnalyticsAllowed = false; script.remove(); };
    // Existing AnalyticsTracker handles route changes without reconfiguring the tag.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [permitted, measurementId]);
  return null;
}

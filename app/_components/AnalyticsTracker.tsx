"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { trackEvent } from "../_lib/analytics";

export default function AnalyticsTracker() {
  const pathname = usePathname();
  const firstRoute = useRef(true);

  useEffect(() => {
    // The initial page_view is already sent by the GA4 config script.
    // Send manual page_view events only for client-side route changes.
    if (firstRoute.current) {
      firstRoute.current = false;
      return;
    }

    trackEvent("page_view", {
      page_path: `${pathname}${window.location.search}`,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const element = target?.closest<HTMLElement>("[data-ga-event]");
      if (!element) return;

      const eventName = element.dataset.gaEvent;
      if (!eventName) return;

      const params: Record<string, string> = {};
      for (const [key, value] of Object.entries(element.dataset)) {
        if (!key.startsWith("ga") || key === "gaEvent" || value === undefined) continue;
        const paramName = key
          .slice(2)
          .replace(/^[A-Z]/, (letter) => letter.toLowerCase())
          .replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
        params[paramName] = value;
      }

      trackEvent(eventName, params);
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}

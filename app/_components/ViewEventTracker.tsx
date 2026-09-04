"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "../_lib/analytics";
import type { AnalyticsParams } from "../_lib/analytics";

type Props = {
  targetId: string;
  eventName: string;
  params?: AnalyticsParams;
};

export default function ViewEventTracker({ targetId, eventName, params = {} }: Props) {
  const paramsRef = useRef(params);

  useEffect(() => {
    const target = document.getElementById(targetId);
    if (!target) return;

    let tracked = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!tracked && entry?.isIntersecting && entry.intersectionRatio >= 0.35) {
          tracked = true;
          trackEvent(eventName, paramsRef.current);
          observer.disconnect();
        }
      },
      { threshold: [0.35] },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [targetId, eventName]);

  return null;
}

"use client";

import { useEffect, useState } from "react";
import { analyticsPermitted, readCmpAnalytics, type CmpPermission, type GoogleFundingChoices } from "../_lib/regional-consent";

type TcfApi = (command: string, version: number, callback: (data: { listenerId?: number }, success: boolean) => void, parameter?: number) => void;
export default function useRegionalConsent() {
  const [required, setRequired] = useState<boolean | null>(null);
  const [cmp, setCmp] = useState<CmpPermission>("waiting");
  useEffect(() => {
    let active = true, listenerId: number | undefined, timer: ReturnType<typeof setTimeout> | undefined;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);
    fetch("/api/privacy-region", { cache: "no-store", credentials: "omit", referrerPolicy: "no-referrer", signal: controller.signal })
      .then(response => { if (!response.ok) throw new Error("Region unavailable"); return response.json(); })
      .then(data => { if (active && typeof data.consentRequired === "boolean") setRequired(data.consentRequired); })
      .catch(() => { /* Keep consent-required behavior when the region cannot be determined. */ })
      .finally(() => clearTimeout(timeout));
    window.googlefc = window.googlefc || { callbackQueue: [] } as unknown as GoogleFundingChoices;
    window.googlefc.callbackQueue = window.googlefc.callbackQueue || [];
    const sync = () => { if (active && window.googlefc) { try { setCmp(readCmpAnalytics(window.googlefc)); } catch { setCmp("waiting"); } } };
    const fc = window.googlefc;
    fc.callbackQueue.push({ CONSENT_MODE_DATA_READY: sync });
    const tcf = () => (window as unknown as { __tcfapi?: TcfApi }).__tcfapi;
    fc.callbackQueue.push({ CONSENT_API_READY: () => {
      if (!active) return;
      tcf()?.("addEventListener", 2, (data, success) => {
        if (!active || !success) return;
        listenerId = data.listenerId;
        // Re-read after CMP has processed the same consent-change event.
        clearTimeout(timer);
        timer = setTimeout(() => fc.callbackQueue.push({ CONSENT_MODE_DATA_READY: sync }), 0);
      });
    } });
    return () => {
      active = false; controller.abort(); clearTimeout(timeout); clearTimeout(timer);
      if (listenerId !== undefined) tcf()?.("removeEventListener", 2, () => {}, listenerId);
    };
  }, []);
  const review = () => {
    setCmp("waiting");
    window.googlefc?.callbackQueue.push({ CONSENT_DATA_READY: () => window.googlefc?.showRevocationMessage?.() });
  };
  return { review, permitted: analyticsPermitted(required, cmp), required, cmp };
}

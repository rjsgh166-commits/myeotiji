"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const ID = "G-6FC374VXMH";
const KEY = "myeotiji-international-analytics-v1";
const DISABLE = `ga-disable-${ID}`;
const text = {
  en: { title: "Optional visit analytics", body: "Allow Google Analytics cookies to measure visits and improve this site? Calculator inputs are not sent. Advertising features are disabled. You can change this choice here at any time.", allow: "Allow analytics", reject: "Reject analytics", active: "Visit analytics: allowed", off: "Visit analytics: off", privacy: "Privacy details" },
  ja: { title: "任意のアクセス解析", body: "サイト改善のため、Google AnalyticsのCookieによる訪問解析を許可しますか？計算の入力値は送信せず、広告向け機能は無効です。ここでいつでも選択を変更できます。", allow: "解析を許可", reject: "解析を拒否", active: "訪問解析：許可", off: "訪問解析：停止中", privacy: "プライバシーの詳細" },
};

type Choice = "allowed" | "denied" | null;
export default function InternationalAnalytics({ locale }: { locale: "en" | "ja" }) {
  const [choice, setChoice] = useState<Choice>(null);
  const pathname = usePathname();
  const t = text[locale];

  useEffect(() => {
    let saved: Choice = null;
    try { const value = localStorage.getItem(KEY); if (value === "allowed" || value === "denied") saved = value; } catch { /* Memory-only choice when storage is unavailable. */ }
    // eslint-disable-next-line react-hooks/set-state-in-effect -- Restore browser-only consent after static hydration.
    setChoice(saved); // Restore an explicit visitor preference after hydration.
  }, []);

  useEffect(() => {
    const target = window as unknown as Record<string, unknown>;
    target[DISABLE] = choice !== "allowed";
    if (choice !== "allowed") return;
    window.dataLayer = window.dataLayer || [];
    // eslint-disable-next-line prefer-rest-params -- Preserve the Google tag command-queue format.
    window.gtag = function () { window.dataLayer?.push(arguments); };
    window.gtag("consent", "default", { analytics_storage: "granted", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });
    window.gtag("js", new Date());
    window.gtag("set", { page_location: `${window.location.origin}${pathname}`, page_referrer: "" });
    window.gtag("config", ID, {
      send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false,
      cookie_prefix: "myeotiji_intl", cookie_expires: 60 * 60 * 24 * 30,
      ignore_referrer: true, page_referrer: "", page_location: `${window.location.origin}${pathname}`,
    });
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${ID}`;
    script.async = true; script.dataset.internationalAnalytics = "true";
    document.head.appendChild(script);
    return () => { target[DISABLE] = true; script.remove(); };
    // Configure once per permission change. Page views below handle route changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [choice]);

  useEffect(() => {
    if (choice !== "allowed") return;
    window.gtag?.("set", { page_location: `${window.location.origin}${pathname}`, page_referrer: "" });
    window.gtag?.("event", "page_view", {
      send_to: ID, page_location: `${window.location.origin}${pathname}`, page_path: pathname,
      page_referrer: "", page_title: document.title,
    });
  }, [choice, pathname]);

  function choose(next: Exclude<Choice, null>) {
    (window as unknown as Record<string, unknown>)[DISABLE] = next !== "allowed";
    try { localStorage.setItem(KEY, next); } catch { /* The choice still applies for this page session. */ }
    if (next === "denied") {
      // Delete only cookies created by this overseas integration; preserve Korean preferences.
      for (const cookie of document.cookie.split(";")) {
        const name = cookie.split("=")[0].trim();
        if (!name.startsWith("myeotiji_intl")) continue;
        for (const domain of ["", `;domain=${window.location.hostname}`, ";domain=.myeotiji.kr"]) {
          document.cookie = `${name}=;max-age=0;path=/${domain};SameSite=Lax`;
        }
      }
    }
    setChoice(next);
  }

  return <aside data-analytics-settings className="border-t border-slate-200 bg-slate-50 px-5 py-5 text-sm leading-7 text-slate-700">
    <div className="mx-auto max-w-5xl">
      <h2 className="font-bold">{t.title}</h2><p className="mt-1">{t.body}</p>
      <p role="status" className="mt-2">{choice === "allowed" ? t.active : t.off}</p>
      <div className="mt-3 flex flex-wrap gap-3">
        <button type="button" onClick={() => choose("allowed")} disabled={choice === "allowed"} className="rounded-lg border border-slate-400 bg-white px-4 py-2 font-semibold disabled:opacity-50">{t.allow}</button>
        <button type="button" onClick={() => choose("denied")} disabled={choice === "denied"} className="rounded-lg border border-slate-400 bg-white px-4 py-2 font-semibold disabled:opacity-50">{t.reject}</button>
        <a href={`/${locale}/privacy`} className="self-center text-blue-700 underline">{t.privacy}</a>
      </div>
    </div>
  </aside>;
}

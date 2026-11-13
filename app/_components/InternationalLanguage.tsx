"use client";
import { useEffect } from "react";
export default function InternationalLanguage({ lang }: { lang: string }) {
  useEffect(() => {
    const original = document.documentElement.lang;
    document.documentElement.lang = lang;
    return () => { document.documentElement.lang = original || "ko"; };
  }, [lang]);
  return null;
}

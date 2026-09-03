"use client";

import { useState } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

async function copyText(text: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

export default function ResultShareButton({
  title,
  text,
  calculatorPath,
  compact = false,
}: {
  title: string;
  text: string;
  calculatorPath: string;
  compact?: boolean;
}) {
  const [status, setStatus] = useState("");

  const fullText =
    typeof window === "undefined"
      ? text
      : `${text}\n${window.location.origin}${calculatorPath}`;

  const track = (action: "copy" | "share") => {
    window.gtag?.("event", "result_share", {
      calculator_path: calculatorPath,
      share_action: action,
    });
  };

  const handleCopy = async () => {
    try {
      await copyText(fullText);
      setStatus("결과를 복사했어요.");
      track("copy");
    } catch {
      setStatus("복사하지 못했어요.");
    }
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title,
          text,
          url: `${window.location.origin}${calculatorPath}`,
        });
        setStatus("공유했어요.");
        track("share");
        return;
      }

      await copyText(fullText);
      setStatus("공유 대신 결과를 복사했어요.");
      track("copy");
    } catch {
      setStatus("공유를 취소했거나 완료하지 못했어요.");
    }
  };

  return (
    <div className={compact ? "mt-3" : "mt-5"}>
      <div className="grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={handleCopy}
          className={`rounded-xl border border-gray-200 bg-white font-bold text-gray-700 transition hover:bg-gray-50 ${
            compact ? "px-3 py-2 text-xs" : "px-4 py-3 text-sm"
          }`}
        >
          📋 결과 복사
        </button>
        <button
          type="button"
          onClick={handleShare}
          className={`rounded-xl bg-gray-900 font-bold text-white transition hover:bg-gray-800 ${
            compact ? "px-3 py-2 text-xs" : "px-4 py-3 text-sm"
          }`}
        >
          ↗ 공유하기
        </button>
      </div>
      {status && (
        <p className="mt-2 text-center text-xs font-semibold text-gray-400">
          {status}
        </p>
      )}
    </div>
  );
}

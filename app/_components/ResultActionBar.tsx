"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { calculatorFromHref, trackEvent } from "../_lib/analytics";

export type ActionImageLine = {
  label: string;
  value: string;
  strong?: boolean;
};

type Tone = "blue" | "violet" | "amber";

const TONES: Record<Tone, { primary: string; soft: string }> = {
  blue: { primary: "#2563eb", soft: "#eff6ff" },
  violet: { primary: "#7c3aed", soft: "#f5f3ff" },
  amber: { primary: "#b45309", soft: "#fffbeb" },
};

function roundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + width, y, x + width, y + height, r);
  ctx.arcTo(x + width, y + height, x, y + height, r);
  ctx.arcTo(x, y + height, x, y, r);
  ctx.arcTo(x, y, x + width, y, r);
  ctx.closePath();
}

export default function ResultActionBar({
  calculatorPath,
  shareTitle,
  shareText,
  image,
  children,
}: {
  calculatorPath: string;
  shareTitle: string;
  shareText: string;
  image?: {
    eyebrow?: string;
    title: string;
    lines: ActionImageLine[];
    caption?: string;
    filename?: string;
    tone?: Tone;
  };
  children?: ReactNode;
}) {
  const [copied, setCopied] = useState(false);
  const calculator = calculatorFromHref(calculatorPath);

  const share = async () => {
    const url = `${window.location.origin}${calculatorPath}`;
    const text = `${shareText}\n${url}`;
    try {
      if (navigator.share) {
        await navigator.share({ title: shareTitle, text: shareText, url });
        trackEvent("result_share", { calculator, method: "native" });
        return;
      }
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
      trackEvent("result_share", { calculator, method: "clipboard" });
    } catch {
      try {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        textarea.remove();
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1600);
        trackEvent("result_share", { calculator, method: "fallback" });
      } catch {
        // 공유가 지원되지 않는 브라우저에서는 조용히 종료합니다.
      }
    }
  };

  const saveImage = () => {
    if (!image) return;
    const canvas = document.createElement("canvas");
    canvas.width = 1080;
    canvas.height = 1080;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const palette = TONES[image.tone ?? "blue"];
    ctx.fillStyle = "#f8fafc";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = palette.soft;
    roundedRect(ctx, 58, 58, 964, 964, 52);
    ctx.fill();
    ctx.fillStyle = "#ffffff";
    roundedRect(ctx, 94, 94, 892, 892, 42);
    ctx.fill();

    ctx.fillStyle = palette.primary;
    ctx.font = '800 30px system-ui, -apple-system, "Apple SD Gothic Neo", "Noto Sans KR", sans-serif';
    ctx.fillText(image.eyebrow ?? "몇이지?", 150, 180);
    ctx.fillStyle = "#0f172a";
    ctx.font = '900 58px system-ui, -apple-system, "Apple SD Gothic Neo", "Noto Sans KR", sans-serif';
    ctx.fillText(image.title, 150, 270);

    let y = 340;
    image.lines.slice(0, 6).forEach((line) => {
      ctx.fillStyle = "#64748b";
      ctx.font = '700 27px system-ui, -apple-system, "Apple SD Gothic Neo", "Noto Sans KR", sans-serif';
      ctx.fillText(line.label, 150, y);
      ctx.fillStyle = line.strong ? palette.primary : "#0f172a";
      ctx.font = `${line.strong ? "900" : "800"} ${line.strong ? 42 : 34}px system-ui, -apple-system, "Apple SD Gothic Neo", "Noto Sans KR", sans-serif`;
      ctx.textAlign = "right";
      ctx.fillText(line.value, 930, y);
      ctx.textAlign = "left";
      ctx.strokeStyle = "#e2e8f0";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(150, y + 28);
      ctx.lineTo(930, y + 28);
      ctx.stroke();
      y += 82;
    });

    if (image.caption) {
      ctx.fillStyle = "#64748b";
      ctx.font = '600 23px system-ui, -apple-system, "Apple SD Gothic Neo", "Noto Sans KR", sans-serif';
      const words = image.caption.split(" ");
      const textLines: string[] = [];
      let line = "";
      for (const word of words) {
        const test = line ? `${line} ${word}` : word;
        if (ctx.measureText(test).width > 780 && line) {
          textLines.push(line);
          line = word;
        } else {
          line = test;
        }
      }
      if (line) textLines.push(line);
      textLines.slice(0, 2).forEach((text, index) => ctx.fillText(text, 150, 890 + index * 34));
    }

    ctx.fillStyle = "#0f172a";
    ctx.font = '900 28px system-ui, -apple-system, "Apple SD Gothic Neo", "Noto Sans KR", sans-serif';
    ctx.fillText("몇이지?", 150, 955);
    ctx.fillStyle = "#94a3b8";
    ctx.font = '700 22px system-ui, -apple-system, "Apple SD Gothic Neo", "Noto Sans KR", sans-serif';
    ctx.textAlign = "right";
    ctx.fillText("myeotiji.kr", 930, 955);
    ctx.textAlign = "left";

    const link = document.createElement("a");
    link.download = image.filename ?? "myeotiji-result.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
    trackEvent("result_image_save", { calculator });
  };

  const buttonClass =
    "inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-100";

  return (
    <div className="mt-4 flex flex-wrap items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50/70 p-2.5">
      <button type="button" onClick={share} className={buttonClass} aria-live="polite">
        {copied ? "✓ 복사됨" : "↗ 공유"}
      </button>
      {image ? (
        <button type="button" onClick={saveImage} className={buttonClass}>
          ▣ 이미지
        </button>
      ) : null}
      {children}
    </div>
  );
}

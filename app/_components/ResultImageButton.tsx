"use client";

export type ResultImageLine = {
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

export default function ResultImageButton({
  eyebrow = "몇이지?",
  title,
  lines,
  caption,
  filename = "myeotiji-result.png",
  tone = "blue",
}: {
  eyebrow?: string;
  title: string;
  lines: ResultImageLine[];
  caption?: string;
  filename?: string;
  tone?: Tone;
}) {
  const saveImage = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 1080;
    canvas.height = 1080;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const palette = TONES[tone];
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
    ctx.fillText(eyebrow, 150, 180);

    ctx.fillStyle = "#0f172a";
    ctx.font = '900 58px system-ui, -apple-system, "Apple SD Gothic Neo", "Noto Sans KR", sans-serif';
    ctx.fillText(title, 150, 270);

    let y = 340;
    lines.slice(0, 6).forEach((line) => {
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

    if (caption) {
      ctx.fillStyle = "#64748b";
      ctx.font = '600 23px system-ui, -apple-system, "Apple SD Gothic Neo", "Noto Sans KR", sans-serif';
      const maxWidth = 780;
      const words = caption.split(" ");
      let line = "";
      const textLines: string[] = [];
      for (const word of words) {
        const test = line ? `${line} ${word}` : word;
        if (ctx.measureText(test).width > maxWidth && line) {
          textLines.push(line);
          line = word;
        } else {
          line = test;
        }
      }
      if (line) textLines.push(line);
      textLines.slice(0, 2).forEach((text, index) => {
        ctx.fillText(text, 150, 890 + index * 34);
      });
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
    link.download = filename;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <button
      type="button"
      onClick={saveImage}
      className="mt-3 inline-flex w-full items-center justify-center rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-black text-gray-700 transition hover:bg-gray-50"
    >
      🖼️ 결과 이미지 저장
    </button>
  );
}

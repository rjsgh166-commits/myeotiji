import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "몇이지? | 생활 계산기 모음",
    short_name: "몇이지?",
    description:
      "연봉, 퇴직금, 대출, 날짜, 꿀연휴, 할인율 등 일상에서 필요한 계산을 쉽고 빠르게 확인하세요.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f8fa",
    theme_color: "#2563eb",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // Keep Google and visitors on the same canonical host.
        // Next.js preserves the original query string on redirects.
        source: "/:path*",
        has: [{ type: "host", value: "www.myeotiji.kr" }],
        destination: "https://myeotiji.kr/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

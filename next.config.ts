import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // 👈 Required for static export
  trailingSlash: true, // 👈 ensures relative path routing works on GitHub Pages
  images: {
    unoptimized: true, // 👈 Avoid using Next.js Image optimization (not supported in static export)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

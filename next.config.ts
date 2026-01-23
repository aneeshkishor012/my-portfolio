import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  // output: "export", // 👈 Required for static export
  // trailingSlash: true, // 👈 ensures relative path routing works on GitHub Pages
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
  // basePath: isProd ? "/my-portfolio" : "", // 👈 your repo name here
  // assetPrefix: isProd ? "/my-portfolio/" : "",
};

export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "export",
  basePath: "/portfolio",
  assetPrefix: "/portfolio",
  typescript: {
    // Allow the build to succeed even if there are type-checking errors
    ignoreBuildErrors: true
  },
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;

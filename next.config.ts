import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "export",
  basePath: "/portfolio",
  assetPrefix: "/portfolio",
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;

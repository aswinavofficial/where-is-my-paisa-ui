import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/where-is-my-paisa-ui",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

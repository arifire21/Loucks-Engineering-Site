import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  transpilePackages: [
    "rc-util",
    "rc-picker",
    "rc-pagination",
    "rc-tree",
    "rc-table"
    ]
};

export default nextConfig;

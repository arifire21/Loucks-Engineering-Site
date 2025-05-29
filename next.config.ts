import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  transpilePackages: [
    "rc-util",
    "rc-picker",
    "rc-pagination"
    ]
};

export default nextConfig;

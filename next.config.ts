import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // "/" is Turkish, "/en/" is English; trailing slashes export en/index.html.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

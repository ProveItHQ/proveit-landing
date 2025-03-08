/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/proveit-landing",
  assetPrefix: "/proveit-landing",
};

export default nextConfig;

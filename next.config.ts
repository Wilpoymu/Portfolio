/** @type {import('next').NextConfig} */
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  basePath: '/Portfolio',
  assetPrefix: '/Portfolio',
  images: {
    unoptimized: true
  }
}

export default nextConfig;
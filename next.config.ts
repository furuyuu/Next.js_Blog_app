import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'picsum.photos',         // ← ここを追加
      // 他に使う予定のホストがあれば列挙
      'source.unsplash.com',
      'loremflickr.com',
      'placekitten.com',
      'placebear.com',
    ],
  },
};

export default nextConfig;

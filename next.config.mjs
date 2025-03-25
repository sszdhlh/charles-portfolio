/** @type {import('next').NextConfig} */
const nextConfig = {
  // 支持静态导出
  output: 'export',
  distDir: 'out',

  // 图像配置
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'same-assets.com',
        pathname: '/api/v1/unsplash/**',
      },
      {
        protocol: 'https',
        hostname: 'ext.same-assets.com',
      },
      {
        protocol: 'https',
        hostname: 'ugc.same-assets.com',
      },
    ],
  },

  // 严格模式
  reactStrictMode: true,

  // 支持SVGR
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;

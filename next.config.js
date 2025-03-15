/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['dashboard-assets.dappradar.com'],
    // If you want to optimize performance, you can also add a specific pattern
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dashboard-assets.dappradar.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;

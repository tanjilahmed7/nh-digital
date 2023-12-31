/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'staging.notionhive.com', 'digital.notionhive.com'],
    loader: 'default',
  },
  // experimental: {
  //   serverActions: true,
  // },
  // async redirects() {
  //   return [
  //     {
  //       source: '/about-us',
  //       destination: 'https://notionhive.com/about-us/',
  //       permanent: true,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'staging.notionhive.com', 'digital.notionhive.com'],
  },

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

module.exports = nextConfig

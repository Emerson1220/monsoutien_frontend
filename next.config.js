/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

const securityHeaders = [];

// module.exports = nextConfig

module.exports = {
  reactStrictMode: true,

  //Problème Stripe securriity
  // async headers() {
  //   return [
  //     {
  //       // Apply these headers to all routes in your application.
  //       source: '/:path*',
  //       headers: securityHeaders,
  //     },
  //   ];
  // },

  //Essai Stripe
  env: {
    STRIPE_PUBLISHABLE_API_KEY:
      process.env.STRIPE_PUBLISHABLE_API_KEY,
  },
  images: {
    loader: 'default',
    domains: ['localhost'],
  },
};

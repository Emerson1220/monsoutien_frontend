/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// };
// module.exports = nextConfig

//SCSS
// const path = require('path');

module.exports = {
  reactStrictMode: true,

  //Essai Stripe
  env: {
    STRIPE_PUBLISHABLE_API_KEY:
      process.env.STRIPE_PUBLISHABLE_API_KEY,
  },
  images: {
    loader: 'default',
    domains: ['localhost'],
  },
  // sassOptions: {
  //   includePaths: [path.join(__dirname, 'app/styles')],
  // },
};

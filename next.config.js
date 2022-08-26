/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

const ContentSecurityPolicy = `
script-src 'self' https://js.stripe.com/
`;

// module.exports = nextConfig

module.exports = {
  reactStrictMode: true,

  //Problème Stripe securriity
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: ContentSecurityPolicy.replace(
              /\s{2,}/g,
              ' '
            ).trim(),
          },
        ],
      },
    ];
  },

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

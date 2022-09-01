/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// };
// module.exports = nextConfig

//SCSS
// const path = require('path');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

module.exports = withMDX({
  reactStrictMode: true,
  //Mardown
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],

  options: {
    providerImportSource: '@mdx-js/react',
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
  // sassOptions: {
  //   includePaths: [path.join(__dirname, 'app/styles')],
  // },
});

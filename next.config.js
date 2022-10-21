/** @type {import('next').NextConfig} */

//SCSS
const path = require('path');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

module.exports = withMDX({
  //Options
  swcMinify: true,
  reactStrictMode: true,

  //Mardown
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],

  //Problème de compilation
  // options: {
  //   providerImportSource: '@mdx-js/react',
  // },

  //Essai Stripe
  env: {
    STRIPE_PUBLISHABLE_API_KEY:
      process.env.STRIPE_PUBLISHABLE_API_KEY,
  },

  //images
  images: {
    loader: 'default',
    domains: ['localhost'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'app/styles')],
  },
});

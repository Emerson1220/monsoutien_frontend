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

  'users-permissions': {
    config: {
      jwt: {
        expiresIn: '7d',
      },
    },
  },

  env: {
    //Stripe config
    STRIPE_PUBLISHABLE_API_KEY:
      'pk_test_51KLlGnFUDaw3u6e6KNbzcwc0PQd7Qd9X72ev5Rz2ZaHmzexXBxfzIxeeMG8S4nuWQRJ9Yw8eV4crxMzUukAHovmm00j842LTEG',
    STRIPE_SECRET_KEY:
      'sk_test_51KLlGnFUDaw3u6e6QEA3oOk8IMAwtW2vlfPykoUh6ew0kNFtQg74T1mcHW8w3AaEu4lRLxMncmPHCM9pFIKInjjo00NxBE2AIB',

    //Next config
    NEXTAUTH_SECRET: '<SECRET>',
    NEXTAUTH_URL: 'http://localhost:3000 ',
    NEXT_PUBLIC_API_URL: 'http://localhost:1337',
    NEXT_PUBLIC_DATABASE_URL=postgres://strapi:strapi@localhost:5432/strapi?synchronize=true,

    //Strapi config
    API_LOCAL_REGISTER:
      'http://localhost:1337/api/auth/local/register',
    NEXT_PUBLIC_STRAPI_API_URL: '',
    STRAPI_TOKEN:
      'ce2fe293aeb09904f388a133f91db22291446320487e187cf3a2d0b86d929c47b7e194821c979141ac943fe77ff461c85b70dae1b4e4c5edd49709f3e3f6dadc45a1bd47d4889e3f1364aadb40c6601c0be051b9e09689362a60b0729d097c58b04d1bc263df9a71796e99b26b74b1e9141b92272c005aa596b425bdb3017dce',
    STRAPI_URL: 'http://localhost:1337',
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

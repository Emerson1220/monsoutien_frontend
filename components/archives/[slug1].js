import React from 'react';
import { useRouter } from 'next/router';
import { getProducts, getProductsSlug } from '../../utils/api';
import ImageNext from '../ImageNext';

export default function product({ _product }) {
  console.log(_product);
  return (
    <div>
      <h1>Page produit</h1>
      {/* <h4>{_product.title}</h4> */}

      {/* <h1>Page produit</h1>
      <h4>{product.attributes.title}</h4>
      <h4>{product.attributes.price}</h4>
      <h4>{product.attributes.description}</h4>
      <ImageNext
        width={product.attributes.media.data.attributes.width}
        height={product.attributes.media.data.attributes.height}
        alternativeText={
          product.attributes.media.data.attributes.alternativeText
        }
        url={product.attributes.image.data.attributes.url}
      /> */}
    </div>
  );
}
////TEST 3

export async function getStaticProps({ params }) {
  const products = await getProducts('products', `${params.slug}`);
  return {
    props: {
      products,
    },
  };
}

export async function getStaticPaths() {
  const products = await getProducts();
  const paths = products.data.map((product) => {
    return {
      params: { slug: String(product.attributes.slug) },
    };
  });
  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

////TEST 2

// export async function getStaticProps(context) {
//   const listeSlug = context.params.slug;
//   const data = await getProducts();

//   const TablisteEnCours = data.attributes.find(
//     (slug) => slug === listeSlug
//   );
//   console.log(TablisteEnCours);

//   return {
//     props: {
//       TablisteEnCours: TablisteEnCours,
//     },
//   };
// }

// export async function getStaticPaths() {
//   const data = await getProducts();

//   const paths = data.data.map((item) => ({
//     params: { slug: item.attributes.slug },
//   }));

//   return {
//     paths: [{ params: { slug: 'soutien-scolaire' } }],
//     // paths,
//     fallback: false,
//   };
// }

////TEST 1 problème link
// export async function getStaticProps({ params: { slug } }) {
//   const data = await getProductsSlug(slug);
//   console.log(data.data);

//   const TablisteEnCours = data.data.attributes.find(
//     (slug) => slug === listeSlug
//   );

//   return {
//     props: {
//       slug: data.data[0],
//     },
//   };
// }

// export async function getStaticPaths() {
//   const products = await getProducts();

//   return {
//     paths: products.data.map((product) => ({
//       params: { slug: product.attributes.slug },
//     })),
//     fallback: false,
//   };
// }

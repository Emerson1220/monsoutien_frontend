import React from 'react';
import { getProductsSlug, getProducts } from '../../utils/api';
import ImageNext from '../../components/ImageNext';

export default function product({ product }) {
  return (
    <div>
      <h1>{product.attributes.title}</h1>
      <p>{product.attributes.description}</p>
      <ImageNext
        width={product.attributes.image.data.attributes.width}
        height={product.attributes.image.data.attributes.height}
        alternativeText={
          product.attributes.image.data.attributes.alternativeText
        }
        url={product.attributes.image.data.attributes.url}
      />
    </div>
  );
}

export async function getStaticPaths() {
  const products = await getProducts();

  // Fetch without axios
  //   const res = await fetch(
  //     `http://localhost:1337/api/products?populate=*`
  //   );
  //   const products = await res.json();

  const paths = products.data.map((product) => ({
    params: { slug: product.attributes.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const data = await getProductsSlug(slug);

  // Fetch without axios
  //   const res = await fetch(
  //     // `http://localhost:1337/api/products?fields[0]=slug&fields[0]=slug`
  //     `http://localhost:1337/api/products?filters[slug][$eq]=${slug}`
  //   );
  //   const data = await res.json();

  const product = data;

  return {
    props: { product },
  };
}

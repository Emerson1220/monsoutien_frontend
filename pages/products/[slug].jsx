import React from 'react';
import { getProductsSlug, getProducts } from '../../utils/api';
import ImageNext from '../../components/ImageNext';

//STYLE
import styles from '../../styles/pages/Products.module.scss';

export default function product({ product }) {
  return (
    <div className={styles.products}>
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

  // Fetch Axios
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
  // const res = await fetch(
  //   `http://localhost:1337/api/products?populate[image][sort][0]=name&[filters][slug][$eq]=${slug}`
  // );
  // const data = await res.json();

  const product = data.data[0];

  return {
    props: { product },
  };
}

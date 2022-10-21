import React from 'react';
import { getProductsSlug, getProducts } from '../../utils/api';
import ImageNext from '../../components/Images/ImageNext';

//STYLE
import styles from './Product.module.scss';

export default function product({ product }) {
  return (
    <div className={styles.products}>
      <div className=''>
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
    </div>
  );
}

export async function getStaticPaths() {
  const products = await getProducts();

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

  const product = data.data[0];

  return {
    props: { product },
  };
}

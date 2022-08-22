import React from 'react';
import { useRouter } from 'next/router';
import { getProducts } from '../../utils/api';
import ImageNext from '../../components/ImageNext';

const Product = ({ product }) => {
  return (
    <div>
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
      />
    </div>
  );
};

export async function getStaticPaths({ params }) {
  const products = await getProducts(params);

  return {
    paths: products.data.map((_product) => ({
      params: {
        slug: _product.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const products = await getProducts(params, {
    filters: {
      slug: params.slug,
    },
    populate: ['title'],
  });

  return {
    props: {
      product: products.data[0],
    },
    revalidate: 1,
  };
}
export default Product;

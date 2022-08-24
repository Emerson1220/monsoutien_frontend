import React from 'react';
import { getProductsId } from '../../utils/api';
import ImageNext from '../../components/ImageNext';

export default function product({ product }) {
  console.log(product);
  return (
    <div>
      <h1>{product.data.attributes.title}</h1>
      <h4>{product.data.attributes.price}</h4>
      <h4>{product.data.attributes.description}</h4>
      <ImageNext
        width={product.data.attributes.media.data.attributes.width}
        height={product.data.attributes.media.data.attributes.height}
        alternativeText={
          product.data.attributes.media.data.attributes
            .alternativeText
        }
        url={product.data.attributes.image.data.attributes.url}
      />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  //   const data = await getProductsId({ id });
  //   console.log(data.data);

  //Fetch ID
  const resId = await fetch(
    `http://localhost:1337/api/products/${id}?populate=%2A`
  );
  const dataId = await resId.json();

  return {
    props: {
      product: dataId,
    },
  };
}

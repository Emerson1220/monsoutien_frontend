import React from 'react';
import ImageNext from './ImageNext';
import Link from 'next/link';

//style
import styles from '../styles/components/CardProduct.module.scss';

const CardProduct = ({ _product }) => {
  return (
    <div className={styles.cardProduct}>
      <ImageNext
        className={styles.cardImages}
        width={_product.attributes.media.data.attributes.width}
        height={_product.attributes.media.data.attributes.height}
        alternativeText={
          _product.attributes.media.data.attributes.alternativeText
        }
        url={_product.attributes.image.data.attributes.url}
      />
      <div className={styles.contentCard}>
        <Link
          href={{
            pathname: '/products/[slug]',
            query: { slug: _product.attributes.slug },
          }}
        >
          <a>{_product.attributes.slug}</a>
        </Link>

        <div>
          <h4>{_product.attributes.title}</h4>
          <h4>{_product.attributes.price}</h4>
          <h4>{_product.attributes.description}</h4>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;

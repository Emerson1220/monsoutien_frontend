//Libraries
import ImageNext from '../Images/ImageNext';
import Link from 'next/link';
import { MDXProvider } from '@mdx-js/react';

//Components
import BtnStandard from '../Btn/BtnStandard';

//Style
import { LikeOutlined } from '@ant-design/icons';
import styles from './CardProduct.module.scss';

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
      <div className={styles.cardLikes}>
        <LikeOutlined className={styles.icons} />
        <p>93% De retour positif</p>
      </div>
      <div className={styles.contentCard}>
        <Link
          href={{
            pathname: '/products/[slug]',
            query: { slug: _product.attributes.slug },
          }}
        >
          <a>{_product.attributes.slug}</a>
        </Link>
        <h4>{_product.attributes.title}</h4>
        <h4>Prix: {_product.attributes.price}€</h4>
        <MDXProvider>
          <p>{_product.attributes.description}</p>
        </MDXProvider>{' '}
        <div className={styles.button}>
          <BtnStandard btnText='En savoir +' />
        </div>
      </div>{' '}
    </div>
  );
};

export default CardProduct;

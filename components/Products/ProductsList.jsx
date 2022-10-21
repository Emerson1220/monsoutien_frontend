//style
import styles from './ProductsList.module.scss';

//Components
import CardProduct from './CardProduct';

const ProductsList = ({ products }) => {
  return (
    <div className={styles.productList}>
      <div className={styles.cardSection}>
        {products.data.map((_product) => (
          <CardProduct key={_product.id} _product={_product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;

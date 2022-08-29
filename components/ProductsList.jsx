//style
import styles from '../styles/components/ProductList.module.scss';
//Components
import CardProduct from '../components/CardProduct';

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

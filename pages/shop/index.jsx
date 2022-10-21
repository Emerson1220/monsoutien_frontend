//Libraries

//Components
import ProductsList from '../../components/Products/ProductsList';

//API
import { getProducts } from '../../utils/api';

export default function Shop({ images, products }) {
  return (
    <div>
      <h1>SHOP</h1>
      <ProductsList products={products} images={images} />
    </div>
  );
}

export async function getStaticProps({ params }) {
  const products = await getProducts(params);

  return {
    props: {
      products,
    },
  };
}

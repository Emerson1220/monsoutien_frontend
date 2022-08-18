//Utils
import { getProducts } from '../utils/api';

//Components
import ProductsList from '../components/ProductsList';

const Home = ({ products }) => {
  console.log(products);
  return (
    <div>
      <h1>Home Page</h1>
      <ProductsList products={products} />
    </div>
  );
};

export async function getStaticProps() {
  const products = await getProducts();
  return { props: { products } };
}
export default Home;

//Utils
import { getBookings, getProducts, getImages } from '../../utils/api';

//Components
import BookingListComponents from '../../components/BookingListComponents';
import PostInfo from '../../components/PostInfo';
import DataPickers from '../../components/DataPickers';
import ProductsList from '../../components/Products/ProductsList';
import CardSection from '../../components/CardSection';
import ProductCard from '../../components/ProductCard';
import CheckoutForm from '../../components/Stripe/CheckoutForm';

const EssaiPage = ({ bookings, images, products }) => {
  return (
    <div>
      <h1>Essai Page</h1>
      {/* <BookingListComponents bookings={bookings} /> */}
      {/* <PostInfo /> */}
      {/* <DataPickers /> */}
      {/* <ProductsList products={products} images={images} /> */}
      {/* <CardSection /> */}
      {/* <ProductCard /> */}
      <CheckoutForm />
    </div>
  );
};

export async function getStaticProps({ params }) {
  const bookings = await getBookings(params);
  const products = await getProducts(params);
  const images = await getImages(params);

  return {
    props: {
      bookings,
      products,
      images: JSON.parse(JSON.stringify(images)),
    },
  };
}

export default EssaiPage;

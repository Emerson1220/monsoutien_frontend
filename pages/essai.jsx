//Utils
import { getBookings } from '../utils/api';

//Components
import BookingListComponents from '../components/BookingListComponents';
import PostInfo from '../components/PostInfo';
import DataPickers from '../components/DataPickers';
import ProductsList from '../components/ProductsList';

const EssaiPage = ({ bookings }) => {
  return (
    <div>
      <h1>Essai Page</h1>
      <BookingListComponents bookings={bookings} />
      <PostInfo />
      <DataPickers />
      {/* <ProductsList /> */}
    </div>
  );
};

export async function getStaticProps({ params }) {
  const bookings = await getBookings(params);
  return { props: { bookings } };
}
export default EssaiPage;

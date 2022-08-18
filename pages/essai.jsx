import { getBookings } from '../utils/api';
import BookingListComponents from '../components/BookingListComponents';

const EssaiPage = ({ bookings }) => {
  return (
    <div>
      <BookingListComponents bookings={bookings} />
    </div>
  );
};

export async function getStaticProps({ params }) {
  const bookings = await getBookings(params);
  return { props: { bookings } };
}
export default EssaiPage;

import axios from 'axios';

const Home = ({ bookings, error }) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <ul>
      {bookings.map((booking) => (
        <li key={booking.id}>
          {booking.attributes.date}
          <br />
          {booking.id}
        </li>
      ))}
    </ul>
  );
};

Home.getInitialProps = async (ctx) => {
  try {
    const res = await axios.get('http://localhost:1337/api/bookings');
    const bookings = res.data.data;
    console.log(bookings);
    return { bookings };
  } catch (error) {
    return { error };
  }
};

export default Home;

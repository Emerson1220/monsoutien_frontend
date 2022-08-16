import React from 'react';
import axios from 'axios';

const BookingList = ({ bookings, error }) => {
  //   axios.get('http://localhost:1337/api/bookings').then((response) => {
  //     console.log(response.data);
  //   });

  console.log(bookings);

  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <div>
      {' '}
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>{booking.date}</li>
        ))}
      </ul>
    </div>
  );
};

BookingList.getInitialProps = async (ctx) => {
  try {
    const res = await axios.get('http://localhost:1337/api/bookings');
    const bookings = res.data;
    return { bookings };
  } catch (error) {
    return { error };
  }
};

export default BookingList;

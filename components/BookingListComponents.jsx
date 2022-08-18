import React from 'react';

const BookingListComponents = ({ bookings }) => {
  return (
    <>
      <h2>Bookings data</h2>
      <ul>
        {bookings.data.map((booking, id) => (
          <li key={id}>
            {booking.attributes.date}
            <br />
            {booking.id}
          </li>
        ))}
      </ul>
    </>
  );
};

export default BookingListComponents;

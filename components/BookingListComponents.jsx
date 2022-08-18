import React from 'react';

const BookingListComponents = ({ bookings }) => {
  console.log(bookings.data);
  return (
    <div className='container'>
      <h1>Bookings data</h1>
      <ul>
        {bookings.data.map((booking, id) => (
          <li key={id}>
            {booking.attributes.date}
            <br />
            {booking.id}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingListComponents;

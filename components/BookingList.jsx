import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookingList = ({ bookings, error }) => {
  //   axios.get('http://localhost:1337/api/bookings').then((response) => {
  //     console.log(response.data);
  //   });

  //   if (error) {
  //     return <div>An error occured: {error.message}</div>;
  //   }

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:1337/api/bookings')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <ul>
        {data.map((booking) => (
          <li key={booking.id}>{booking.attributes.date}</li>
        ))}
      </ul>
      {/* <ul>
        {data.map((booking) => (
          <li key={booking.id}>{booking.attributes.date}</li>
        ))}
      </ul> */}
    </div>
  );
};

// BookingList.getInitialProps = async (ctx) => {
//   try {
//     const res = await axios.get('http://localhost:1337/api/bookings');
//     const bookings = res.data.data;
//     return { bookings };
//   } catch (error) {
//     return { error };
//   }
// };

export default BookingList;

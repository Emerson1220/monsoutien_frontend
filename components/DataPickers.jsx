import React, { useRef, useState, useEffect } from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

const DataPickers = () => {
  const [date, setDate] = useState(new Date());
  //Error
  const [errorBooking, setErrorBooking] = useState(null);

  const onChange = (date) => {
    setDate(date);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    // alert(date);
    console.log(date);

    try {
      const response = await axios.post(
        'http://localhost:1337/api/bookings',
        {
          data: {
            date: date,
          },
        }
      );
      console.log(response);
    } catch (error) {
      setErrorBooking(error.message);
      alert(
        'Date et horaires non disponible - Veuillez rentrer une nouvelle date'
      );
    }
  };

  return (
    <div className='calendarApp mt-5'>
      <form onSubmit={onSubmit}>
        <div className='input-group mb-3'>
          <DatePicker
            // locale='enUS'
            className='form-control'
            selected={date}
            onChange={onChange}
            value={date}
            name='selectDate'
            showTimeSelect
            timeIntervals={60}
            timeFormat='HH:mm'
            timeCaption='time'
            dateFormat='MMMM d, yyyy h:mm aa'
          />
          <button
            className='btn btn-outline-primary'
            id='button-addon2'
          >
            Valider
          </button>
        </div>
      </form>
    </div>
  );
};

export default DataPickers;

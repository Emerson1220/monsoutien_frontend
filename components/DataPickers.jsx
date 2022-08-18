import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

const DataPickers = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    alert(date);
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
    <>
      <form onSubmit={onSubmit}>
        <div>
          <DatePicker
            // locale='enUS'
            className=''
            selected={date}
            onChange={onChange}
            value={date}
            name='selectDate'
            showTimeSelect
            timeIntervals={60}
            timeFormat='HH:mm'
            timeCaption='time'
            dateFormat='MMMM d, yyyy hh:mm Pp'

            //Time range à configurer
            //       minTime={setHours(setMinutes(new Date(), 0), 17)}
            // maxTime={setHours(setMinutes(new Date(), 30), 20)}
          />
          <button className='' id=''>
            Valider
          </button>
        </div>
      </form>
    </>
  );
};

export default DataPickers;

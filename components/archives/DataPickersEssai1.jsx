import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const DataPickersEssai1 = () => {
  //State Date Advance
  const [startDate, setStartDate] = useState(new Date());

  //Soumission formulaire
  const handleSubmit = (event) => {
    console.log(submit);
    event.preventDefault();
  };

  console.log(startDate);

  return (
    //State Date Advance
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <label htmlFor=''>
          {' '}
          <DatePicker
            showTimeSelect
            minDate={new Date()}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            isClearable
            placeholderText='I have been cleared!'
            dateFormat='MMMM d, yyyy h:mm aa'
          />
        </label>

        <button type='submit'>Submit</button>
      </form>
    </div>

    //State Date basics
    // <div className='container'>
    //   <DatePicker
    //     showTimeSelect
    //     minDate={new Date()}
    //     selected={startDate}
    //     onChange={(date) => setStartDate(date)}
    //     isClearable
    //     placeholderText='I have been cleared!'
    //     dateFormat='MMMM d, yyyy h:mm aa'
    //   />
    // </div>
  );
};

export default DataPickersEssai1;

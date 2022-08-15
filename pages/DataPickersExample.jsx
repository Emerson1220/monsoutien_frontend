import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useForm, Controller } from 'react-hook-form';
import ReactDatePicker from 'react-datepicker';
import axios from 'axios';

//Components
import ButtonsResult from '../components/ButtonsResult';

//Style
import 'react-datepicker/dist/react-datepicker.css';

let renderCount = 0;

export default function DataPickersExample(props) {
  //ETAT
  ////////////////////////////////////////////////////////////////////////
  const { handleSubmit, control } = useForm({});
  const [loading, setLoading] = useState();
  const [data, setData] = useState({
    date: '',
  });
  console.log(data.date);
  const [errorBookings, setErrorBookings] = useState(null);

  //FETCH
  ////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.post(
          'http://localhost:1337/api/booking'
        );
        setData(response);
      } catch (error) {
        console.log(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <form
      onSubmit={handleSubmit((data) => setData(data))}
      className='form'
    >
      <div className='container'>
        <section>
          <label>React Datepicker</label>
          <Controller
            control={control}
            name='date'
            defaultValue={null}
            render={({ field }) => (
              <ReactDatePicker
                onChange={(e) => field.onChange(e)}
                selected={field.value}
                name='ReactDatepicker'
                className='input'
                placeholderText='Select date'
              />
            )}
          />
        </section>
        {/* <button type='sunmit'>submit</button> */}
        <ButtonsResult {...{ data }} />
      </div>
    </form>
  );
}

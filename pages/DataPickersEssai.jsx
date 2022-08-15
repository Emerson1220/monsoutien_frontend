import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useForm, Controller } from 'react-hook-form';
import ReactDatePicker from 'react-datepicker';
import axios from 'axios';

//Style
import 'react-datepicker/dist/react-datepicker.css';

export default function DataPickersExample() {
  //ETAT
  ////////////////////////////////////////////////////////////////////////
  const { register, handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data.date);
  };

  const ref = React.createRef();

  //FETCH
  ////////////////////////////////////////////////////////////////////////

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='form'>
      <div className='container'>
        <section>
          <label>React Datepicker</label>
          <Controller
            control={control}
            name='date'
            defaultValue={null}
            {...register('date')}
            render={({ field }) => (
              <ReactDatePicker
                ref={ref}
                onChange={(e) => field.onChange(e)}
                selected={field.value}
                name='ReactDatepicker'
                className='input'
                placeholderText='Select date'
              />
            )}
          />
        </section>
        <button type='submit'>submit</button>
      </div>
    </form>
  );
}

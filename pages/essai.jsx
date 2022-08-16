import React, { useRef, useState, useEffect } from 'react';
import DataPickers from '../components/DataPickers';
import BookingList from '../components/BookingList';

export default function essai() {
  return (
    <div>
      <h1>DataPickers</h1>
      <DataPickers />
      <BookingList />
    </div>
  );
}

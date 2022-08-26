import React, { useMemo } from 'react';
import {
  useStripe,
  useElements,
  CardElement,
} from '@stripe/react-stripe-js';
import styled from 'styled-components';
///CSS
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  width: 50%;
  margin: auto;
`;

//COMPONENT
const CardForm = () => {
  <h1>stripe payement</h1>;
  const stripe = useStripe();
  const elements = useElements();
  //   const options = useOptions();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    console.log('[PaymentMethod]', payload);
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <label>
          Card details
          <CardElement
            // options={options}
            onReady={() => {
              console.log('CardElement [ready]');
            }}
            onChange={(event) => {
              console.log('CardElement [change]', event);
            }}
            onBlur={() => {
              console.log('CardElement [blur]');
            }}
            onFocus={() => {
              console.log('CardElement [focus]');
            }}
          />
        </label>
        <button type='submit' disabled={!stripe}>
          Pay
        </button>
      </form>
    </Wrapper>
  );
};

export default CardForm;

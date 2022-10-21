//Libraries
import ReactDOM from 'react-dom';
import { loadStripe } from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

//Styles
import style from './CheckoutForm.module.scss';

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod(
      {
        type: 'card',
        card: elements.getElement(CardElement),
      }
    );
  };

  return (
    <form className={style.checkout} onSubmit={handleSubmit}>
      <CardElement className={style.cardElement} />
      <button type='submit' disabled={!stripe || !elements}>
        Pay
      </button>
    </form>
  );
}

const stripePromise = loadStripe(`${process.env.STRIPE_SECRET_KEY}`);

const App = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default CheckoutForm;

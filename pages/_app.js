import '../styles/globals.css';

//StripeEssai
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  process.env.STRIPE_PUBLISHABLE_API_KEY
);
function MyApp({ Component, pageProps, Elements }) {
  return;

  <Elements stripe={stripePromise}>
    <Component {...pageProps} />
  </Elements>;
}

export default MyApp;

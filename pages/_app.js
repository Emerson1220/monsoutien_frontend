//Librairies
import { SessionProvider } from 'next-auth/react';

//Style
import '../styles/main.scss';
import 'antd/dist/antd.css';

//Auth
// import { SessionProvider } from 'next-auth/react';

//Stripe
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

//Components
import Container from '../components/Layout/Container';

// const stripePromise = loadStripe(
//   `${process.env.STRIPE_PUBLISHABLE_API_KEY}`
// );

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    // <SessionProvider session={session}>
    // <Elements stripe={stripePromise}>
    <SessionProvider session={session}>
      <Container>
        <Component {...pageProps} />
      </Container>
    </SessionProvider>
    // </Elements>
    // </SessionProvider>
  );
}

export default MyApp;

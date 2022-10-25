import '../styles/main.scss';
import 'antd/dist/antd.css';

//Auth
import { SessionProvider } from 'next-auth/react';

//Stripe
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

//Components
import Container from '../components/Layout/Container';

const stripePromise = loadStripe(`${process.env.STRIPE_SECRET_KEY}`);

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Elements stripe={stripePromise}>
        <Container>
          <Component {...pageProps} />
        </Container>
      </Elements>
    </SessionProvider>
  );
}

export default MyApp;

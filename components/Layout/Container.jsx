import Footer from './Footer';
import NavBar from './NavBar';

export default function Container({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}

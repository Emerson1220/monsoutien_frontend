import axios from 'axios';

const Home = ({ plats, error }) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <ul>
      {plats.map((plat) => (
        <li key={plat.id}>{plat.attributes.name}</li>
      ))}
    </ul>
  );
};

Home.getInitialProps = async (ctx) => {
  try {
    const res = await axios.get('http://localhost:1337/api/plats');
    const plats = res.data.data;
    console.log(plats);
    return { plats };
  } catch (error) {
    return { error };
  }
};

export default Home;

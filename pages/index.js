import axios from 'axios';

export default function index() {
  axios
    .post('http://localhost:1337/api/plats', {
      data: {
        name: 'Dolemon Sushi',
      },
    })
    .then((response) => {
      console.log(response);
    });
  return <div></div>;
}

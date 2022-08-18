import { useState } from 'react';
import axios from 'axios';

export default function Home({ allPlats, error }) {
  //HOOKS
  ////////////////////////////////////////////////////////////////////////

  //Data
  const [modifiedData, setModifiedData] = useState({
    name: '',
    description: '',
  });
  //Error
  const [errorPlats, setErrorPlats] = useState(null);

  //Ecouteur
  const handleChange = ({ target: { name, value } }) => {
    setModifiedData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //SUBMIT
  ////////////////////////////////////////////////////////////////////////
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('form submitted ✅');

    // Clear Form
    setModifiedData({ name: '', description: '' });
    console.log('form clear ✅');

    try {
      const response = await axios.post(
        'http://localhost:1337/api/plats',
        {
          data: {
            name: modifiedData.name,
            description: modifiedData.description,
          },
        }
      );
      console.log(response);
    } catch (error) {
      setErrorPlats(error);
    }
  };

  //Categorie Settings
  ////////////////////////////////////////////////////////////////////////
  // const renderCheckbox = (category) => {
  //   const { categories } = modifiedData;
  //   const isChecked = categories.includes(category.id);
  //   const handleCheckboxChange = () => {
  //     if (!categories.includes(category.id)) {
  //       handleChange({
  //         target: {
  //           name: 'categories',
  //           value: categories.concat(category.id),
  //         },
  //       });
  //     } else {
  //       handleChange({
  //         target: {
  //           name: 'categories',
  //           value: categories.filter((v) => v !== category.id),
  //         },
  //       });
  //     }
  //   };
  //   return (
  //     <div key={category.id}>
  //       <label htmlFor={category.id}>{category.name}</label>
  //       <input
  //         type='checkbox'
  //         checked={isChecked}
  //         onChange={handleCheckboxChange}
  //         name='categories'
  //         id={category.id}
  //       />
  //     </div>
  //   );
  // };
  // if (errorCategories) {
  //   return (
  //     <div>
  //       An error occured (categories): {errorCategories.message}
  //     </div>
  //   );
  // }
  // if (errorRestaurants) {
  //   return (
  //     <div>
  //       An error occured (restaurants): {errorRestaurants.message}
  //     </div>
  //   );
  // }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Plats</h3>
        <br />
        <label>
          Name:
          <input
            type='text'
            name='name'
            value={modifiedData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <input
            type='text'
            name='description'
            value={modifiedData.description}
            onChange={handleChange}
          />
        </label>
        {/* <div>
          <br />
          <b>Select categories</b>
          <br />
          {allCategories.map(renderCheckbox)}
        </div> */}
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

// Home.getInitialProps = async (ctx) => {
//   try {
//     const res = await axios.get('http://localhost:1337/api/plats');
//     const allPlats = res.data;
//     console.log(allPlats);
//     return { allPlats };
//   } catch (errorPlats) {
//     return { errorPlats };
//   }
// };

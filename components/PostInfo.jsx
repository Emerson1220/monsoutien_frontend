import { useState } from 'react';
import axios from 'axios';

const PostInfo = () => {
  //HOOKS
  ////////////////////////////////////////////////////////////////////////

  //Data
  const [modifiedData, setModifiedData] = useState({
    name: '',
    description: '',
  });
  //Error
  const [error, setError] = useState(null);

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
      setError(error);
    }
  };

  return (
    <>
      <h2>Post API</h2>
      <form onSubmit={handleSubmit}>
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
        <br />
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};

export default PostInfo;

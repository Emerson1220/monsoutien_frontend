import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

//Styles
import style from './Inscription.module.scss';

export default function Register() {
  //State
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:1337/api/auth/local/register', {
        username: `${userData.username}`,
        email: `${userData.email}`,
        password: `${userData.password}`,
      })
      .then((response) => {
        // Handle success.
        console.log('Well done!');
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
      })
      .catch((error) => {
        // Handle error.
        console.log('An error occurred:', error.response);
      });

    // try {
    //   const responseData = await fetch(
    //     `http://localhost:1337/api/auth/local/register`,
    //     {
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         email: userData.email,
    //         password: userData.password,
    //         username: userData.username,
    //       }),
    //       method: 'POST',
    //     }
    //   );
    //   console.log(responseData);
    //   setToken(responseData);
    //   router.redirect('/profile');
    // } catch (error) {
    //   console.error(error);
    // }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    console.log(userData.username);
  };

  return (
    <div className={style.signUp}>
      <h1>inscription</h1>
      {/* {error && <p>{error}</p>}
      {isRegistered && <p>Inscription réussie</p>} */}

      <form onSubmit={handleSubmitForm} className={style.form}>
        <div className={style.inputContainer}>
          <label className={style.label} htmlFor='username'>
            Username
          </label>
          <input
            className={style.input}
            type='text'
            name='username'
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label className={style.label} htmlFor='email'>
            Email
          </label>
          <input
            className={style.input}
            type='email'
            name='email'
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label className={style.label} htmlFor='password'>
            Password
          </label>
          <input
            className={style.input}
            type='password'
            name='password'
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <button className={style.btn} type='submit'>
          Register
        </button>
      </form>
    </div>
  );
}

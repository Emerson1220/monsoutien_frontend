import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Router from 'next/router';
import PulseLoader from 'react-spinners/PulseLoader';

//Styles
import style from './Inscription.module.scss';

export default function Register() {
  //State
  const [isLoading, setIsLoading] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [error, setError] = useState();

  //Variables
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    username: '',
    email: '',
    password: '',
  });

  //Méthode
  const onSubmit = async (data) => {
    //Si loading est true alors on change les etats
    if (!isLoading) {
      setIsLoading(true);
      setError(null);

      // Enoi le user avec l'API et on stock dans une variable -> reponse
      axios
        // .post('http://localhost:1337/api/auth/local/register', {

        .post(process.env.API_LOCAL_REGISTER, {
          username: data.username,
          email: data.email,
          password: data.password,
        })

        // En cas de réussite de la requête
        .then((response) => {
          //Informations
          console.log('Well done!');
          console.log(response.error);
          console.log(response.status);
          console.log(response.statusText);
          console.log('User profile', response.data.user);
          console.log('User token', response.data.jwt);

          //Gestion des Etats
          setIsRegistered(data.username);

          //Redirection après connexion après 3 sec.
          setTimeout(() => Router.push('/'), 3000);
        })

        // En cas d’échec de la requête
        .catch((error) => {
          //Informations
          console.log('An error occurred:', error.response);
          console.log(error.message);
          console.log(error.details);

          //Gestion des Etats
          setError('Une erreur est survenue. Veuillez recommencer !');
          setIsLoading(false);
        })

        // Dans tous les cas
        .then((response) => {
          setIsLoading(false);
        });
    }
  };

  return (
    <div className={style.signUp}>
      {error && <p>{error}</p>}{' '}
      {isRegistered && <p>Inscription réussie</p>}
      <h1>Inscription</h1>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={style.inputContainer}>
          <label className={style.label} htmlFor='username'>
            Username
          </label>
          <input
            className={style.input}
            type='text'
            {...register('username', {
              required: true,
            })}
          />
          {errors.username && errors.username.type === 'required' && (
            <span>Veuillez renseigner ce champ</span>
          )}
        </div>
        <div className={style.inputContainer}>
          <label className={style.label} htmlFor='email'>
            Email
          </label>
          <input
            className={style.input}
            type='email'
            {...register('email', {
              required: true,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
          {errors.email && errors.email.type === 'required' && (
            <span>Veuillez renseigner ce champ</span>
          )}
          {errors.email && errors.email.type === 'pattern' && (
            <span>Votre adresse email est incorrect</span>
          )}
        </div>
        <div className={style.inputContainer}>
          <label className={style.label} htmlFor='password'>
            Password
          </label>
          <input
            className={style.input}
            type='password'
            {...register('password', {
              required: true,
            })}
          />
          {errors.password && (
            <span>Veuillez renseigner ce champ</span>
          )}
        </div>

        <button className={style.btn} type='submit'>
          {isLoading ? <PulseLoader color='white' /> : "S'inscrire"}
        </button>
      </form>
    </div>
  );
}

//Librairie
import { useForm } from 'react-hook-form';
import { useState } from 'react';

//Styles
import style from './Inscription.module.scss';

export default function Inscription() {
  //Variables
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //State
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [isRegistered, setIsRegistered] = useState(false);

  //Méthode
  const onFormSubmitHandler = async (data) => {
    //Si loading est true alors on change les etats
    if (!isLoading) {
      setIsLoading(true);
      setError(null);
      // Enoi du projet avec l'API et on stock dans une variable -> reponse
      const reponse = fetch('api/inscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      console.log(data);

      //On attend et on stock la réponse dans une variable
      const fetchedData = await reponse.json();
      //Si il y a une erreur on change les états et on affiche l'erreur
      if (!reponse.ok) {
        setIsLoading(false);
        setError(fetchedData.message || 'Une erreur est survenue.');
        // Si pas d'erreur, on change les états
      } else {
        setIsLoading(false);
        //On stock l'utilisateur dans le state
        setIsRegistered(fetchedData.utilisateur);
      }
    }
  };

  return (
    <div className={style.signUp}>
      <h1>inscription</h1>
      {error && <p>{error}</p>}
      {isRegistered && <p>Inscription réussie</p>}
      <form
        className={style.form}
        onSubmit={handleSubmit(onFormSubmitHandler)}
      >
        <div className={style.inputContainer}>
          {' '}
          <input
            type='text'
            placeholder='Pseudo'
            className={style.input}
            {...register('username', {
              required: true,
            })}
          />
          {errors.email && errors.email.type === 'required' && (
            <span>Veuillez renseigner ce champ</span>
          )}
        </div>
        <div className={style.inputContainer}>
          {' '}
          <input
            type='email'
            placeholder='Adresse email'
            className={style.input}
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
          {' '}
          <input
            type='password'
            placeholder='Mot de passe'
            className={style.input}
            {...register('password', {
              required: true,
            })}
          />
          {errors.password && (
            <span>Veuillez renseigner ce champ</span>
          )}
        </div>

        {errors.exampleRequired && (
          <span>This field is required</span>
        )}
        <input type='submit' />
      </form>
    </div>
  );
}

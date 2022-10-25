//Librairie
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';

//Styles
import style from './Inscription.module.scss';

export default function Index() {
  //Etat
  const [modifiedData, setModifiedData] = useState({
    pseudo: '',
    email: '',
    passeword: '',
  });
  //   const [errorRestaurants, setErrorRestaurants] = useState(null);

  //Variables
  const onSubmit = (data) => console.log(data);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //Méthode
  const onFormSubmitHandler = (data) => {
    console.log(data);
  };

  return (
    <div className={style.signUp}>
      <h1>inscription</h1>
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
            {...register('pseudo', {
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
            <span>Votre adresse email n'est pas correct</span>
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

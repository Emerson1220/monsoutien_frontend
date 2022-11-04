//Librairie
import { useForm } from 'react-hook-form';
import { useSession, signIn, signOut } from 'next-auth/react';
//Styles
import style from './Connexion.module.scss';

export default function Index() {
  //Variables
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onFormSubmitHandler = async (data) => {
    const result = await signIn('credentials', {
      email: data.email,
      password: data.password,
    });
  };

  return (
    <div className={style.signIn}>
      <h1>connexion</h1>
      <form className={style.form} onSubmit={onFormSubmitHandler}>
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
          Se connecter
        </button>
      </form>
    </div>
  );
}

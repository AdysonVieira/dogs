import React from 'react';
import { UserContext } from '../../UserContext';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import Button from '../../components/Form/Button'
import Input from '../../components/Form/Input';
import Error from '../../components/Helper/Error';
import Loading from '../../components/Helper/Loading';
import styles from './LoginForm.module.css'
import stylesBtn from '../../components/Form/Button.module.css'
import Head from '../../components/Head';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { login, loading, error } = React.useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username.validate() && password.validate()) {
        login(username.value, password.value)
      }
    }
  

  return (
    <section className='fadeInLeft'>
      <Head title='Login'/>
      <h1 className='title' style={{marginBottom: '2.8rem'}}>Entrar</h1>
      <Error error={error} />
      <form onSubmit={handleSubmit}>
        <Input 
          label='Usuário'
          type='text'
          id='username'
          value={username.value}
          onChange={username.onChange}
          onBlur={username.onBlur}
          error={username.error} />
        
        <Input 
          label='Senha'
          type='password'
          id='password'
          value={password.value}
          onChange={password.onChange}
          onBlur={password.onBlur}
          error={password.error} />
        
        {loading ? 
          <Button disabled text='Carregando...' />
          :
          <Button text='Entrar' />
        }
      </form>

      <Link to='/login/perdeu' className={styles.lostPwd}>Esqueceu a Senha?</Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Clique e cadastre-se.</p>
        <Link to='/login/cadastrar' className={stylesBtn.button}>Cadastrar</Link>
      </div>
    </section>
  );
};

export default LoginForm;
import React from 'react';
import { UserContext } from '../../UserContext';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import Button from '../../components/Form/Button'
import Input from '../../components/Form/Input';
import Erro from '../../components/Helper/Erro';
import styles from './LoginForm.module.css'
import stylesBtn from '../../components/Form/Button.module.css'

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
      <h1 className='title'>Entrar</h1>
      <Erro error={error} />
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
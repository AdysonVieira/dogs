import React from 'react';
import useForm from '../../hooks/useForm';
import { UserContext } from '../../UserContext';
import { Link } from 'react-router-dom';
import Button from '../../components/Form/Button'
import Input from '../../components/Form/Input';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { login, loading, error } = React.useContext(UserContext)

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username.validate() && password.validate()) {
        login(username.value, password.value)
      }
    }
  

  return (
    <section>
      <h1>Entrar</h1>
      <form onSubmit={handleSubmit}>
        <Input label='Usuário'
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
        { error && <p>{error}</p>}
      </form>

      <Link to='/login/cadastrar'>Cadastrar</Link>
    </section>
  );
};

export default LoginForm;
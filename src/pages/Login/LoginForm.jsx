import React from 'react';
import useForm from '../../hooks/useForm';
import { Link } from 'react-router-dom';
import Button from '../../components/Form/Button'
import Input from '../../components/Form/Input';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const fetchLogin = () => {
    fetch(`https://dogsapi.origamid.dev/json/jwt-auth/v1/token`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        username: username.value,
        password: password.value,
      })
    }).then((response) => {
      console.log(response)
      return response.json()
    }).then((json) => {
      console.log(json)
      return json.token
    })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      fetchLogin()
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
        
        <Button text='Entrar' />
      </form>

      <Link to='/login/cadastrar'>Cadastrar</Link>
    </section>
  );
};

export default LoginForm;
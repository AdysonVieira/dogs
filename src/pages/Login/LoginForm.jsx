import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Form/Button'
import Input from '../../components/Form/Input';

const LoginForm = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const fetchLogin = () => {
    fetch(`https://dogsapi.origamid.dev/json/jwt-auth/v1/token`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password
      })
    }).then((response) => {
      console.log(response)
      return response.json()
    }).then((json) => {
      console.log(json)
      return json
    })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchLogin()
  }

  return (
    <section>
      <h1>Entrar</h1>
      <form onSubmit={handleSubmit}>
        <Input label='Usuário' type='text' id='username' value={username} setValue={setUsername} />
        
        <Input label='Senha' type='password' id='password' value={password} setValue={setPassword} error='Senha errada' />
        
        <Button text='Entrar' />
      </form>

      <Link to='/login/cadastrar'>Cadastrar</Link>
    </section>
  );
};

export default LoginForm;
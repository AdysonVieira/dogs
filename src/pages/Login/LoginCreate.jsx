import React from 'react';
import { UserContext } from '../../UserContext'
import { USER_POST } from '../../api';
import Input from '../../components/Form/Input';
import useForm from '../../hooks/useForm';
import useFetch from '../../hooks/useFetch';
import Error from '../../components/Helper/Error';
import Button from '../../components/Form/Button';


const LoginCreate = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm();
  const { login } = React.useContext(UserContext)
  const { loading, error, request} = useFetch();

  const setUser = async (username, email, password) => {
    const { url, options } = USER_POST({
      username,
      email,
      password,
    })
    const { response, json } = await request(url, options)
    console.log(response)
    if (response.ok) {
      login(username, password)
    }
  }
  
  
  const handleSubmit = (event) => {
    event.preventDefault()
    if (username.validate()
    && email.validate()
    && password.validate()) {
      setUser(username.value, email.value, password.value)
    }
  }

  return (
    <section className='fadeInLeft'>
      <h1 className='title'>Cadastrar</h1>
      <Error error={error} />
      <form onSubmit={handleSubmit}>
        <Input
          label='Usuário'
          type='text'
          id='username'
          value={username.value}
          onChange={username.onChange}
          onBlur={username.onBlur}
          error={username.error}
        />
        
        <Input
          label='Email'
          type='email'
          id='email'
          value={email.value}
          onChange={email.onChange}
          onBlur={email.onBlur}
          error={email.error}
        />
        
        <Input
          label='Senha'
          type='password'
          id='password'
          value={password.value}
          onChange={password.onChange}
          onBlur={password.onBlur}
          error={password.error}
        />
        {loading ? 
          <Button disabled text='Carregando...' />
          :
          <Button text='Cadastrar' />
        }
      </form>
    
    </section>
  );
};

export default LoginCreate;
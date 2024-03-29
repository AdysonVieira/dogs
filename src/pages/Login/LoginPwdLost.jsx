import React from 'react';
import useForm from '../../hooks/useForm';
import useFetch from '../../hooks/useFetch';
import Button from '../../components/Form/Button';
import Input from '../../components/Form/Input';
import { PASSWORD_LOST } from '../../api';
import Error from '../../components/Helper/Error';
import Head from '../../components/Head';

const LoginPwdLost = () => {
  const email = useForm()
  const { data, loading, error, request } = useFetch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (email.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: email.value,
        url: window.location.href.replace('perdeu', 'resetar')
      })
      const { json } = request(url, options)
    }
  }

  
  return (
    <section className='fadeInLeft'>
      <Head title='Recuperar senha'/>
      <h1 className='title' style={{marginBottom: '2.8rem'}} >Perdeu a senha?</h1>
      { data ? 
        <>
          <p style={{color: 'green'}}>{data}</p>
          <p style={{marginTop: '1.6rem'}}>Enviamos o link de recuperação para o seu email <strong>{email.value}</strong></p>
        </>
        : <form onSubmit={handleSubmit} >
            <Error error={error} />
            <Input 
              label='Email / Usuário'
              type="text"
              name='email'
              value={email.value}
              onChange={email.onChange}
              onBlur={email.onBlur}
              error={email.error}
            />

            { 
              loading ?
              <Button disabled text={'Enviando...'}/>
              : <Button text={'Recuperar Senha'}/>
            }
          </form>
      }
    </section>

  );
};

export default LoginPwdLost;
import React from 'react';
import useForm from '../../hooks/useForm';
import useFetch from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import { PASSWORD_RESET } from '../../api';
import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';

const LoginPwdReset = () => {
  const [login, setLogin] = React.useState('')
  const [key, setKey] = React.useState('');
  const { value, loading, error, request } = useFetch();
  const navigate = useNavigate()
  const password = useForm();
  const passwordRepeat = useForm();
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    if ( password.validate() && password.value === passwordRepeat.value) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      })
      const { response } = await request(url, options)
      if (response.ok) {
        navigate('/login')
      }
    }
  }

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');
    if (key) setKey(key);
    if (login) setLogin(login);
  }, [])

  return (
    <section className='fadeInLeft'>
      <h1 className='title' style={{marginBottom: '2.8rem'}}>Resetar senha</h1>
      {value ? 
        <p>{value}</p>
        : <form onSubmit={handleSubmit}>
            <Input 
              label='Nova senha'
              type='password'
              name='password'
              value={password.value}
              onChange={password.onChange}
              onBlur={password.onBlur}
              error={password.error}
              />
            
            <Input 
              label='Confirme a nova senha'
              type='password'
              name='passwordRepeat'
              value={passwordRepeat.value}
              onChange={passwordRepeat.onChange}
              onBlur={passwordRepeat.onBlur}
              error={passwordRepeat.error}
              />

            {loading ?
              <Button disabled text='Confirmando...' />
              : <Button text='Confirmar Senha' />
            }
        </form>
      }
    </section>
    );
};

export default LoginPwdReset;
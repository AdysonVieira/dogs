import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginCreate from './LoginCreate';
import LoginForm from './LoginForm';
import LoginPwdLost from './LoginPwdLost';
import LoginPwdReset from './LoginPwdReset';
import styles from './Login.module.css';
import NotFound from '../../components/Helper/NotFound';
import { useSelector } from 'react-redux';
import Loading from '../../components/Helper/Loading';

const Login = () => {
  const { isLogged, loading } = useSelector((state) => state.user)
  
  if (loading) return <Loading />
  if (isLogged) return <Navigate to='/conta' />
  
  return (
    <section className={styles.container}>
      <div className={styles.form}>
        <Routes>
          <Route path='/' end element={<LoginForm />} />
          <Route path='cadastrar' element={<LoginCreate />} />
          <Route path='resetar' element={<LoginPwdReset />} />
          <Route path='perdeu' element={<LoginPwdLost />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </section>
  )
}

export default Login
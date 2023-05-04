import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import LoginCreate from './LoginCreate';
import LoginForm from './LoginForm';
import LoginPwdLost from './LoginPwdLost';
import LoginPwdReset from './LoginPwdReset';
import styles from './Login.module.css';
import NotFound from '../../components/Helper/NotFound';

const Login = () => {
  const {logged} = React.useContext(UserContext)

  if (logged) return <Navigate to='/conta' />
  
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
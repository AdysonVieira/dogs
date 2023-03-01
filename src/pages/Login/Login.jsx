import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import LoginCreate from './LoginCreate';
import LoginForm from './LoginForm';
import LoginPwdLost from './LoginPwdLost';
import LoginPwdReset from './LoginPwdReset';
import styles from './Login.module.css';

const Login = () => {
  const {logged} = React.useContext(UserContext)

  if (logged) return <Navigate to='/conta' />
  
  return (
    <section className={styles.container}>
      <div className={styles.form}>
        <Routes>
          <Route path='/' end element={<LoginForm />} />
          <Route path='cadastrar' element={<LoginCreate />} />
          <Route path='reset' element={<LoginPwdReset />} />
          <Route path='perdeu' element={<LoginPwdLost />} />
        </Routes>
      </div>
    </section>
  )
}

export default Login
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import LoginCreate from './LoginCreate'
import LoginForm from './LoginForm'
import LoginPwdLost from './LoginPwdLost'
import LoginPwdReset from './LoginPwdReset'

const Login = () => {
  const {logged} = React.useContext(UserContext)

  if (logged) return <Navigate to='/conta' />
  
  return (
    <section>
      <Routes>
        <Route path='/' end element={<LoginForm />} />
        <Route path='cadastrar' element={<LoginCreate />} />
        <Route path='reset' element={<LoginPwdReset />} />
        <Route path='perdeu' element={<LoginPwdLost />} />
      </Routes>
    </section>
  )
}

export default Login
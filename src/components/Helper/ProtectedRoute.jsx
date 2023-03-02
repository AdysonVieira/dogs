import React from 'react'
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../UserContext'

const ProtectedRoute = ({ children }) => {
  const { logged } = React.useContext(UserContext);
  return logged ? children : <Navigate to='/login' />;
}

export default ProtectedRoute
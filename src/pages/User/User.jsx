import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { UserContext } from '../../UserContext'

import Feed from '../Feed/Feed'
import UserHeader from './UserHeader'
import UserPhotoPost from './UserPhotoPost'
import UserStats from './UserStats'
import NotFound from '../../components/Helper/NotFound'

const User = () => {
  const { user, logged } = React.useContext(UserContext)

  React.useEffect(() => {
    fetch('https://dogsapi.origamid.dev/json/api/photo')
      .then((response) => response.json())
  }, [])

  return (
    <div className='container'>
      <UserHeader />
      <Routes>
        <Route path='/' element={<Feed user={user.id} />} />
        <Route path='postar' element={<UserPhotoPost />} />
        <Route path='estatisticas' element={<UserStats />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default User
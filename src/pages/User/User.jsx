import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { UserContext } from '../../UserContext'

import Feed from '../Feed/Feed'
import UserHeader from './UserHeader'
import UserPhotoPost from './UserPhotoPost'
import UserStats from './UserStats'
import NotFound from '../../components/Helper/NotFound'
import { useSelector } from 'react-redux'

const User = () => {
  const { user } = useSelector((state) => state)

  return (
    <div className='container'>
      <UserHeader />
      <Routes>
        <Route path='/' element={<Feed user={user.data.id} />} />
        <Route path='postar' element={<UserPhotoPost />} />
        <Route path='estatisticas' element={<UserStats />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default User
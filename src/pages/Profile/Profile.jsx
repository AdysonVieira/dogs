import React from 'react'
import Feed from '../Feed/Feed'
import { useParams } from 'react-router-dom'

const Profile = () => {
  const { user } = useParams()
  return (
    <section 
      style={{marginTop: '3.2rem'}}
      className='container'>
      <h1 className='title'>{user}</h1>
      <Feed user={user}/>
    </section>

  )
}

export default Profile
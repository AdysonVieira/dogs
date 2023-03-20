import React from 'react';
import Loading from '../components/Helper/Loading';
import { UserContext } from '../UserContext';
import Feed from './Feed/Feed'

const Home = () => {
  const { loading } = React.useContext(UserContext)
  return (
    <section className={`fadeInLeft`}>
      {loading && <Loading />}
      <Feed />
    </section>
  )
}

export default Home;
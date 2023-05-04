import React from 'react';
import Loading from '../components/Helper/Loading';
import { UserContext } from '../UserContext';
import Feed from './Feed/Feed'
import Head from '../components/Head';

const Home = () => {
  const { loading } = React.useContext(UserContext)
  return (
    <section className={`fadeInLeft`}>
      <Head title='Fotos'/>
      {loading && <Loading />}
      <Feed user={0}/>
    </section>
  )
}

export default Home;
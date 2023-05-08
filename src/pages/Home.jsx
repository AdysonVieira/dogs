import React from 'react';
import Loading from '../components/Helper/Loading';
import Feed from './Feed/Feed'
import Head from '../components/Head';
import { useSelector } from 'react-redux';

const Home = () => {
  const { loading } = useSelector((state) => state.user)
  return (
    <section className={`fadeInLeft`}>
      <Head title='Fotos'/>
      {loading && <Loading />}
      <Feed user={0}/>
    </section>
  )
}

export default Home;
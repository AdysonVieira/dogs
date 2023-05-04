import React from 'react'
import Head from '../../components/Head'
import useFetch from '../../hooks/useFetch'
import { STATS_GET } from '../../api';
import Loading from '../../components/Helper/Loading';
const UserStatsGraph = React.lazy(() => import('./UserStatsGraph') )

const UserStats = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const getStats = async () => {
      const { url, options } = STATS_GET()
      await request(url, options)
    }
    getStats()
  }, [request])
  
  if (loading) return <Loading />
  if (error) return <Error error={error} />
  if (data) {
    return (
      <React.Suspense fallback={<Loading/>}>
        <Head title='Estatísticas' />
        <UserStatsGraph data={data}/>
      </React.Suspense>
    )
  }
}

export default UserStats
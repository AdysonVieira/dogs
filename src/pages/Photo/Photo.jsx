import React from 'react'
import PhotoContent from '../../components/Photo/PhotoContent'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { PHOTO_GET } from '../../api'
import Loading from '../../components/Helper/Loading'
import Head from '../../components/Head'

const Photo = () => {
  const { id } = useParams()
  const { data, error, loading, request} = useFetch();
  
  const fetchPhoto = async () => {
    const { url, options } = PHOTO_GET(id);
    await request(url, options);
  }

  React.useEffect(() => {
    fetchPhoto()
  }, [])
  
  if (loading) return <Loading />
  
  return (
    <>
      { data && <PhotoContent data={data} />}
    </>
  )
}

export default Photo
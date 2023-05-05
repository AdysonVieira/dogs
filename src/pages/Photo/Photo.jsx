import React from 'react'
import PhotoContent from '../../components/Photo/PhotoContent'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { PHOTO_GET } from '../../api'
import Loading from '../../components/Helper/Loading'
import Head from '../../components/Head'
import { fetchPhoto } from '../../store/reducers/photoReducer'
import { useDispatch, useSelector } from 'react-redux'

const Photo = () => {
  const { id } = useParams()
  const { data, loading, error } = useSelector((state) => state.photo)
  const dispatch = useDispatch()
  
  React.useEffect(() => {
    dispatch(fetchPhoto(id))
  }, [])
  
  if (loading) return <Loading />
  
  return (
    <>
      { data && <PhotoContent data={data} />}
    </>
  )
}

export default Photo
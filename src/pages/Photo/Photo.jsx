import React from 'react'
import PhotoContent from '../../components/Photo/PhotoContent'
import { useParams } from 'react-router-dom'
import Loading from '../../components/Helper/Loading'
import { fetchPhoto } from '../../store/reducers/photoGet'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '../../store/reducers/modal'

const Photo = () => {
  const { id } = useParams()
  const { data, loading, error } = useSelector((state) => state.photo)
  const dispatch = useDispatch()
  
  React.useEffect(() => {
    dispatch(fetchPhoto(id))
    dispatch(closeModal())
  }, [])
  
  if (loading) return <Loading />
  
  return (
    <>
      { data && <PhotoContent data={data} />}
    </>
  )
}

export default Photo;
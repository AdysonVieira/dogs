import React from 'react';
import { PHOTO_GET } from '../../api';
import useFetch from '../../hooks/useFetch';
import Error from '../../components/Helper/Error';
import PhotoContent from '../../components/Photo/PhotoContent';
import Loading from '../../components/Helper/Loading';
import styles from './FeedModal.module.css';
import { useDispatch, useSelector } from 'react-redux';

const FeedModal = ({ setModalOpened, modalOpened }) => {
  const { loading, data, error } = useSelector((state) => state.photo)
   
  const handleClick = (event) => {
    if (event.target === event.currentTarget) return setModalOpened(false)
  }

  React.useEffect(() => {
    const closeModalOnKey = (event) => {
      if (event.key === 'Escape') return setModalOpened(false)
    }
    window.addEventListener('keydown', closeModalOnKey);
    return () => {
      window.removeEventListener('keydown', closeModalOnKey);
    }
  }, [modalOpened])
  
  return (
    <div
    className={styles.modal}
    onClick={handleClick}>
      {loading && <Loading />}
      {error && <Error error={error} />}
      {data && <PhotoContent setModalOpened={setModalOpened} />}
    </div>
  )
}

export default FeedModal
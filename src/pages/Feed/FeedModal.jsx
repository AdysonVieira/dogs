import React from 'react';
import Error from '../../components/Helper/Error';
import PhotoContent from '../../components/Photo/PhotoContent';
import Loading from '../../components/Helper/Loading';
import styles from './FeedModal.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../store/reducers/modal';

const FeedModal = () => {
  const { modal, photo: { loading, data, error} } = useSelector((state) => state)
  const dispatch = useDispatch()
   
  const handleClick = (event) => {
    if (event.target === event.currentTarget) return dispatch(closeModal())
  }

  React.useEffect(() => {
    const closeModalOnKey = (event) => {
      if (event.key === 'Escape') return dispatch(closeModal())
    }
    window.addEventListener('keydown', closeModalOnKey);
    return () => {
      window.removeEventListener('keydown', closeModalOnKey);
    }
  }, [modal.isOpened])

  return (
    <div
    className={styles.modal}
    onClick={handleClick}>
      {loading && <Loading />}
      {error && <Error error={error} />}
      {data && <PhotoContent />}
    </div>
  )
}

export default FeedModal
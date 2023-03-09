import React from 'react';
import { PHOTO_GET } from '../../api';
import useFetch from '../../hooks/useFetch';
import styles from './FeedModal.module.css'

const FeedModal = ({idPhoto}) => {
  const { data, erro, loading, request} = useFetch();

  const fetchPhoto = async () => {
    const { url, options } = PHOTO_GET(idPhoto);
    await request(url, options);
  }
  
  React.useEffect(() => {
    fetchPhoto();
  }, [])
    
  return (
    <div className={styles.wrapper}>
      <div className={styles.modal}>
        <img
          src=''
          alt=''
        />
        <div className={styles.info}>
        </div>
      </div>
    </div>
  )
}

export default FeedModal
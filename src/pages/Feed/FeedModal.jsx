import React from 'react';
import { PHOTO_GET } from '../../api';
import useFetch from '../../hooks/useFetch';
import useForm from '../../hooks/useForm';
import Error from '../../components/Helper/Error';

import styles from './FeedModal.module.css';
import PhotoContent from '../../components/Photo/PhotoContent';
import Loading from '../../components/Helper/Loading';

const FeedModal = ({idPhoto, setModalOpened}) => {
  const { data, error, loading, request} = useFetch();
  const comment = useForm();

  const fetchPhoto = async () => {
    const { url, options } = PHOTO_GET(idPhoto);
    await request(url, options);
  }
  
  React.useEffect(() => {
    fetchPhoto();
  }, [idPhoto])

  return (
    <div className={styles.modal}>
      {loading && <Loading />}
      {error && <Error error={error} />}
      {data && <PhotoContent data={data} comment={comment} />}
    </div>
  )
}

export default FeedModal
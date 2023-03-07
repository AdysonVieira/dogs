import React from 'react';
import useFetch from '../../hooks/useFetch';
import { PHOTOS_GET } from '../../api';
import Error from '../../components/Helper/Error'
import Loading from '../../components/Helper/Loading';
import FeedPhotosItem from './FeedPhotosItem';
import styles from './FeedPhotos.module.css'

const FeedPhotos = () => {
  const { data, loading, error, request} = useFetch();
  
  React.useEffect(() => {
    const fetchPhotos = async () => {
      const { url, options } = PHOTOS_GET({page: 1, total: 6, user: 0})
      await request(url, options);
    }
    fetchPhotos();
  }, [request])
  
  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data) {
    return (
      <ul className={styles.feed}>
        {data.map((photo) => (
          <FeedPhotosItem key={photo.id} {...photo} />
        ))}
      </ul>
    )
  };

}


export default FeedPhotos
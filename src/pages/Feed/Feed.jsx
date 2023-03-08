import React from 'react';
import { PHOTOS_GET } from '../../api';
import useFetch from '../../hooks/useFetch';
import FeedModal from './FeedModal';
import FeedPhotosItem from './FeedPhotosItem';
import Loading from '../../components/Helper/Loading';
import Error from '../../components/Helper/Error';
import styles from './Feed.module.css';
const Feed = () => {
  const { data, loading, error, request} = useFetch();

  const fetchPhotosToFeed = async () => {
    const {url, options} = PHOTOS_GET({page: 1, total: 6, user: 0})
    await request(url, options)
  }

  React.useEffect(() => {
    fetchPhotosToFeed();
  }, [request])
  
  if (loading) return <Loading />
  if (error) return <Error error={error} />
  if (data) {
    return (
      <ul className={styles.feed}>
        {data.map((post) => (
          <FeedPhotosItem key={post.id} {...post} />
        ))}
      </ul>
    )
  }
}

export default Feed
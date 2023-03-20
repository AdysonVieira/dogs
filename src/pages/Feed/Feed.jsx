import React from 'react';
import { createPortal } from 'react-dom';
import { PHOTOS_GET } from '../../api';
import useFetch from '../../hooks/useFetch';
import FeedModal from './FeedModal';
import FeedPhotosItem from './FeedPhotosItem';
import Loading from '../../components/Helper/Loading';
import Error from '../../components/Helper/Error';
import styles from './Feed.module.css';

const Feed = ({user}) => {
  const { data, loading, error, request} = useFetch();
  const [modalOpened, setModalOpened] = React.useState(false);
  const [idPhoto, setIdPhoto] = React.useState(null);

  const fetchPhotosToFeed = async () => {
    const {url, options} = PHOTOS_GET({page: 1, total: 6, user});
    await request(url, options);
  };

  React.useEffect(() => {
    fetchPhotosToFeed();
  }, [request]);
  
  if (loading) return <Loading />
  if (error) return <Error error={error} />
  if (data) {
    return (
      <>
        {modalOpened &&
          createPortal(
            <FeedModal 
              idPhoto={idPhoto}
              modalOpened={modalOpened}
              setModalOpened={setModalOpened}
            />, 
            document.getElementById('root')
          )
        }
          
        <ul className={`${styles.feed} container`}>
          {data.map((post) => (
            <FeedPhotosItem
              key={post.id}
              {...post}
              setModalOpened={setModalOpened}
              setIdPhoto={setIdPhoto}
            />
          ))}
        </ul>
      </>
    );
  };
};

export default Feed;
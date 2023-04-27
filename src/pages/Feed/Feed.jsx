import React from 'react';
import { createPortal } from 'react-dom';
import { PHOTOS_GET } from '../../api';
import useFetch from '../../hooks/useFetch';
import FeedModal from './FeedModal';
import FeedPhotosItem from './FeedPhotosItem';
import Loading from '../../components/Helper/Loading';
import Error from '../../components/Helper/Error';
import styles from './Feed.module.css';
import Empty from '../../components/Helper/Empty';

const Feed = ({user}) => {
  const { data, loading, error, request } = useFetch();
  const [modalOpened, setModalOpened] = React.useState(false);
  const [idPhoto, setIdPhoto] = React.useState(null);
  const [total, setTotal] = React.useState(6)
  const [stopFetch, setStopFetch] = React.useState(true)

  const fetchPhotosToFeed = async () => {
    const {url, options} = PHOTOS_GET({page: 1, total, user});
    const {json} = await request(url, options);
    if (total > json.length) {
      setStopFetch(false)
    }
  };

  React.useEffect(() => {
    if (stopFetch){
      fetchPhotosToFeed();
    }
  }, [total]);

  React.useEffect(() => {
    let wait = false
    function scrollFetch() {
      const scroll = window.scrollY;
      const height = document.body.offsetHeight - window.innerHeight;
      if (scroll > height * 0.9 && !wait) {
        setTotal((prev) => prev + 6)
        wait = true
        setTimeout(() => {
          wait = false
        }, 500)
      }
    }

    window.addEventListener('scroll', scrollFetch)
    window.addEventListener('wheel', scrollFetch)
    
    return () => {
      window.removeEventListener('scroll', scrollFetch)
      window.removeEventListener('wheel', scrollFetch)
    }
  }, [])
  
  if (error) return <Error error={error} />
  if (data?.length === 0) return <Empty />
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
          {data?.map((post) => (
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
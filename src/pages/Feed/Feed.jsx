import React from 'react';
import { createPortal } from 'react-dom';
import FeedModal from './FeedModal';
import FeedPhotosItem from './FeedPhotosItem';
import Error from '../../components/Helper/Error';
import styles from './Feed.module.css';
import Empty from '../../components/Helper/Empty';
import { useDispatch, useSelector } from 'react-redux';
import { clearState, fetchFeed } from '../../store/reducers/feed';
import LoadOver from '../../components/Helper/LoadOver';

const Feed = ({user}) => {
  const { modal } = useSelector((state) => state)

  const dispatch = useDispatch();
  const { data, loading, error, stop } = useSelector((state) => state.feed) 

  React.useEffect(() => {
    dispatch(fetchFeed({total: 6, user}));
  }, []);
 
  React.useEffect(() => {
    dispatch(clearState());
    return () => {
      dispatch(clearState());
    }
  }, [user]);
  
  React.useEffect(() => {
    let wait = false
    function scrollFetch() {
      const scroll = window.scrollY;
      const height = document.body.offsetHeight - window.innerHeight;
      if (scroll > height * 0.7 && !wait) {
        dispatch(fetchFeed({total: 6, user}));
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
        {modal.isOpened &&
          createPortal(
            <FeedModal />, 
            document.getElementById('root')
          )
        }
        <ul className={`${styles.feed} container`}>
          {data?.map((post) => (
            <FeedPhotosItem
              key={post?.id}
              {...post}
            />
          ))}
        </ul>
        {stop && <LoadOver />}
      </>
    );
  };
};

export default Feed;
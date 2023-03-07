import React from 'react';
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';
import styles from './Feed.module.css';
const Feed = () => {
  return (
    <div>
      <FeedModal />
      <FeedPhotos />
    </div>
  )
}

export default Feed
import React from 'react';
import styles from './FeedPhotosItem.module.css';

const FeedPhotosItem = ({ id, src, title, acessos, setModalOpened, setIdPhoto }) => {
  
  const handleClick = () => {
    setModalOpened(true);
    setIdPhoto(id);
  };
  
  return (
    <li className={styles.photo} onClick={handleClick}>
      <img src={src} alt={title} loading="lazy" />
      <span className={styles.view}>{acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
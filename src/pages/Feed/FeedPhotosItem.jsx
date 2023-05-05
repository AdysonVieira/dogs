import React from 'react';
import Image from '../../components/Helper/Image';
import styles from './FeedPhotosItem.module.css';
import { useDispatch } from 'react-redux';
import { fetchPhoto } from '../../store/reducers/photoReducer';

const FeedPhotosItem = ({ id, src, title, acessos, setModalOpened }) => {
  const dispatch = useDispatch()
  
  const handleClick = () => {
    setModalOpened(true);
    dispatch(fetchPhoto(id));
  };
  
  return (
    <li className={styles.photo} onClick={handleClick}>
      <Image src={src} alt={title} loading="lazy" />
      <span className={styles.view}>{acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
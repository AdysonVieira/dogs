import React from 'react';
import Image from '../../components/Helper/Image';
import styles from './FeedPhotosItem.module.css';
import { useDispatch } from 'react-redux';
import { clearState, fetchPhoto } from '../../store/reducers/photoGet';
import { openModal } from '../../store/reducers/modal';

const FeedPhotosItem = ({ id, src, title, acessos }) => {
  const dispatch = useDispatch()
  
  const handleClick = () => {
    dispatch(clearState())
    dispatch(fetchPhoto(id));
    dispatch(openModal())
  };
  
  return (
    <li className={styles.photo} onClick={handleClick}>
      <Image src={src} alt={title} loading="lazy" />
      <span className={styles.view}>{acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
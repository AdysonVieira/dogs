import React from 'react';
import styles from './FeedPhotosItem.module.css'

const FeedPhotosItem = (props) => {
  return (
    <li className={styles.photo}>
      <img src={props.src} alt={props.title} />
      <span className={styles.view}>{props.acessos}</span>
    </li>
  )
}

export default FeedPhotosItem;
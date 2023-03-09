import React from 'react';
import styles from './FeedPhotosItem.module.css'

const FeedPhotosItem = (props) => {
  
  const handleClick = () => {
    props.toggle(!props.value)
  }
  
  return (
    <li className={styles.photo} onClick={handleClick}>
      <img src={props.src} alt={props.title} />
      <span className={styles.view}>{props.acessos}</span>
    </li>
  )
}

export default FeedPhotosItem;
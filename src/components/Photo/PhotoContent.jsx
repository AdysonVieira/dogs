import React from 'react';

import { Link } from 'react-router-dom';
import PhotoComment from './PhotoComment';
import styles from './PhotoContent.module.css';

const PhotoContent = (props) => {
  const { photo, comments } = props.data;
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.img}>
        <img
          src={photo.src}
          alt={photo.title}
        />
      </div>
      <div className={styles.details}>
        <div className={styles.info}>
          <h1 className='title'>
            <Link to={`/foto/${photo.id}`}> 
              {photo.title}
            </Link>
          </h1>
          <span>Peso: {photo.peso} </span>
          <span>Idade: {photo.idade} </span>
        </div>
      </div>
      <PhotoComment comments={comments} photo={photo} /> 
    </div>
  )
}

export default PhotoContent
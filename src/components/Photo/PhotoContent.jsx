import React from 'react';
import { Link } from 'react-router-dom';
import PhotoComment from './PhotoComment';
import PhotoDelete from './PhotoDelete';
import Image from '../Helper/Image';
import styles from './PhotoContent.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../store/reducers/modal';

const PhotoContent = () => {
  const { photo, comments } = useSelector((state) => state.photo.data)
  const { data } = useSelector((state) => state.user);
  const dispatch = useDispatch()
  
  return (
    <div className={styles.wrapper}>
      <button className={styles.close} onClick={() => dispatch(closeModal())}>X</button>
      <div className={styles.img}>
        <Image 
          src={photo.src}
          alt={photo.title}
        />
      </div>
      <div className={styles.details}>
        <div className={styles.info}>
          
          <h1 className='title'>
            {data?.username === photo.author ? <PhotoDelete id={photo.id} /> : ''}
            <Link to={`/foto/${photo.id}`}> 
              {photo.title}
            </Link>
          </h1>
          <span>Peso: {photo.peso}kg</span>
          <span>Idade: {photo.idade} </span>
        </div>
      </div>
      <PhotoComment comments={comments} photo={photo} /> 
    </div>
  )
}

export default PhotoContent
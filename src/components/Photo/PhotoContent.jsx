import React from 'react';
import { UserContext } from '../../UserContext'
import useForm from '../../hooks/useForm';
import Comment from './Comment';
import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';
import styles from './PhotoContent.module.css';
import { Link } from 'react-router-dom';

const PhotoContent = (props) => {
  const { logged } = React.useContext(UserContext);
  const { photo, comments } = props.data

  
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
        
      <ul className={styles.comments}>
        {comments.map((comment) => (
          <Comment key={comment.comment_ID} comment={comment}/>
        ))}
      </ul>
      {logged && (
        <form className={styles.inputComment}>
          <Input
            name='comment'
            id='comment'
            value={props.comment.value}
            onChange={props.comment.onChange}
            onBlur={props.comment.onBlur}
            placeholder='Digite seu comentário'
            />
          <Button text='' />
        </form>
      )}
    </div>
  )
}

export default PhotoContent
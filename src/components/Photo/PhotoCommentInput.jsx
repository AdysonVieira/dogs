import React from 'react';
import useFetch from '../../hooks/useFetch';
import { COMMENT_POST } from '../../api';
import Button from '../Form/Button';
import styles from './PhotoCommentInput.module.css';

const PhotoCommentInput = (props) => {
  const [comment, setComment] = React.useState('');
  const { request, error } = useFetch();

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { url, options } = COMMENT_POST(props.id, {comment})
    const { response, json } = await request(url, options)
    if (response.ok) {
      props.setComments((prev) => [...prev, json]);
      setComment('');
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <textarea
        id='comment'
        name='comment'
        rows={4}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Digite seu comentário..."
      />
      <Button className={styles.button}text="Publicar"/>
    </form>
  )
}

export default PhotoCommentInput;
import React from 'react';
import { PHOTO_DELETE } from '../../api';
import useFetch from '../../hooks/useFetch';
import styles from './PhotoDelete.module.css';

const PhotoDelete = (props) => {
  const { request, loading } = useFetch();
  
  const handleClick = async () => {
    const confirm = window.confirm('Deseja apagar a foto?')
    if (confirm) {
      const {url, options} = PHOTO_DELETE(props.id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    };
  };

  return (
    <>
    {loading ? 
      <button className={styles.delete} disabled>Deletando</button>
      : <button className={styles.delete} onClick={handleClick}>Deletar</button>}
    </>
  )
};

export default PhotoDelete;
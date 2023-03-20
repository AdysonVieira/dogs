import React from 'react';
import styles from './Image.module.css';

const Image = ({ src, alt, loading }) => {
  
  const [skeleton, setSkeleton] = React.useState(true)

  const handleLoad = (event) => {
    setSkeleton(false)
    event.target.style.opacity = '1';
  }

  return (
    <div className={styles.wrapper}>
      {skeleton && <div className={styles.skeleton}></div>}
      <img className={styles.img} onLoad={handleLoad} src={src} alt={alt} loading={loading} />
    </div>
  )
}

export default Image
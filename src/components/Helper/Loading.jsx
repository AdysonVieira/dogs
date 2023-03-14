import React from 'react';
import styles from './Loading.module.css';
import { createPortal } from 'react-dom';

const Loading = () => {
  return (
    <>
    { createPortal(
      <div className={styles.wrapper}>
        <div className={styles.loading}></div>
      </div>, 
      document.body
      )
    }
    </>
  )
}

export default Loading;
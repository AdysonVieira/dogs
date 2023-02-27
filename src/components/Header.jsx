import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to='/' aria-label='Dogs - Home' className={styles.logo}>
          Home
        </Link>
        <Link to='/login' className={styles.login}> Login / Criar</Link>
      </nav>
    </header>
  );
};

export default React.memo(Header);
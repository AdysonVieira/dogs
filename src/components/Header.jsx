import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { UserContext } from '../UserContext';
const Header = () => {
  const { user, logout } = useContext(UserContext)
  
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link 
          to='/'
          aria-label='Dogs - Home'
          className={styles.logo}
        >
          Home
        </Link>

        {user.username ? 
          <Link 
            to='/login'
            className={styles.login}
          >
            {user.username}
          </Link>
          : 
          <Link 
            to='/login'
            className={styles.login}
          >
            Login / Criar
          </Link>
        }
      </nav>
    </header>
  );
};

export default React.memo(Header);
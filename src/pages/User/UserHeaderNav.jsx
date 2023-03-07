import React from 'react';
import useMedia from '../../hooks/useMedia';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './UserHeaderNav.module.css';

const UserHeaderNav = () => {
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenuOpened, setMobileMenuOpened] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    setMobileMenuOpened(false);
  }, [location]);

  return (
    <>
      {mobile && ( 
        <button
          aria-label='Menu'
          className={`${styles.mobileButton} ${mobileMenuOpened && styles.mobileButtonActive}`}
          onClick={() => setMobileMenuOpened(!mobileMenuOpened)}>
        </button>
      )}
      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenuOpened && styles.navMobileActive}`}>
        <NavLink to='/conta' end>Feed</NavLink>
        <NavLink to='/conta/estatisticas'>Estatísticas</NavLink>
        <NavLink to='/conta/postar'>Adicionar Foto</NavLink>
      </nav>
    </>
  );
};

export default UserHeaderNav;
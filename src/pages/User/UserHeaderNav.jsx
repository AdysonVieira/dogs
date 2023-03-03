import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './UserHeaderNav.module.css'
const UserHeaderNav = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to='/conta' end>Feed</NavLink>
      <NavLink to='/conta/estatisticas'>Estatísticas</NavLink>
      <NavLink to='/conta/postar'>Adicionar Foto</NavLink>
    </nav>
  );
};

export default UserHeaderNav;
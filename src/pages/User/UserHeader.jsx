import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { UserContext } from '../../UserContext';
import UserHeaderNav from './UserHeaderNav'
import styles from './UserHeader.module.css'


const UserHeader = () => {
  const [title, setTitle] = React.useState('')
  const { logout } = React.useContext(UserContext);

  const location = useLocation();
  
  React.useEffect(() => {
    switch(location.pathname) {
      case '/conta/estatisticas':
        setTitle('Estatísticas')
        break
      case '/conta/postar':
        setTitle('Poste Sua Foto')
        break
      default:
        setTitle('Minha Conta')
        break
    }
  }, [location])
  return (
    <header className={styles.nav}>
      <div className={styles.top}>
        <h1 className={`${styles.h1} title`}>{title}</h1>
        <button onClick={logout} className={styles.button}>Sair</button>
      </div>
      <UserHeaderNav />
    </header>
  )
}

export default UserHeader
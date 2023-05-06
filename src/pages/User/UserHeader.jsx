import React from 'react'
import { useLocation } from 'react-router-dom'
import UserHeaderNav from './UserHeaderNav'
import styles from './UserHeader.module.css'
import { logout } from '../../store/reducers/user';
import { useDispatch } from 'react-redux';


const UserHeader = () => {
  const [title, setTitle] = React.useState('')

  const location = useLocation();
  const dispatch = useDispatch()
  
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
  }, [location]);

  return (
    <header className={styles.nav}>
      <div className={styles.top}>
        <h1 className={`${styles.h1} title`}>{title}</h1>
        <button onClick={() => dispatch(logout())} className={styles.button}>Sair</button>
      </div>
      <UserHeaderNav />
    </header>
  )
}

export default UserHeader
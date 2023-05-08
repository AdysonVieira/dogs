import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Empty.module.css'
import { useSelector } from 'react-redux'

const Empty = () => {
  const { isLogged } = useSelector((state) => state.user)
  return (
    <section className={styles.container}>
      <div>Ops... Nenhuma publicação.</div>
      {isLogged && <Link className={styles.btn} to='/conta/postar' >Fazer primeira Publicação</Link>}
    </ section>
  )
}

export default Empty
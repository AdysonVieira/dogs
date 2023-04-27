import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Empty.module.css'

const Empty = () => {
  return (
    <section className={styles.container}>
      <div>Ops... Nenhuma publicação.</div>
      <Link className={styles.btn} to='/conta/postar' >Fazer primeira Publicação</Link>
    </ section>
  )
}

export default Empty
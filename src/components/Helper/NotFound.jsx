import React from 'react'

const NotFound = () => {
  return (
    <div 
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '50vh',
        }}
      className='container'>
      <h1 className='title'>Erro: 404</h1>
      <p>página não encontrada</p>
    </div>
  )
}

export default NotFound
import React from 'react'

const Error = (props) => {
  return (
    <p style={{color: '#cc0606', margin: '1rem 0', fontSize: '1.2rem'}}>{props.error}</p>
  )
}

export default Error
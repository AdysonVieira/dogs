import React from 'react'
import styles from './Input.module.css'
const Input = (props) => {
  return (
    <>
      {props.label &&
        <label
        htmlFor={props.id}
        className={styles.label}
        >
          {props.label}
        </label>
      }
      
      <input
        id={props.id}
        name={props.id}
        className={styles.input}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        {...props}
      />
      <p className={styles.error}>{props.error}</p>
    </>
  )
}

export default Input
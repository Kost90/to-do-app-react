import React from 'react'
import styles from './Donetasks.module.css'


function Donetasks({text,id,onDelete}) {

    const handleDelete = () => onDelete(id)
    
  return (
    <>
    <li className={styles.container}>
        <p>{text}</p>
        <button type='button' onClick={handleDelete}>Delete</button>
    </li>
    </>
  )
}

export default Donetasks
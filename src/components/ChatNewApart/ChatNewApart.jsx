import React from 'react'
import styles from './ChatNewApart.module.css'

function ChatNewApart({ apart }) {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={apart.url[0]} alt="apart" />
      <div className={styles.text}>
        <h2 className={styles.title}>Пхукет новострой Вилла</h2>
        <p className={styles.price}>От ${apart.price}</p>
        <p className={styles.objectsCount}>42 объекта</p>
      </div>
    </div>
  )
}

export default ChatNewApart

import React from 'react'
import styles from "./SearchField.module.css"
import { micro, search } from '../resorces/resources'

function SearchField() {

  return (
    <div className={styles.container}>
      <img className={styles.icon_search} src={search} alt="icon search" />
      <input className={styles.input} type="text" placeholder='Найдите недвижимость одним запросом'/>
      <button className={styles.button}>
        <img src={micro} alt="icon microphone" />
      </button>
    </div>
  )
}

export default SearchField

import React from 'react'
import styles from './CardWork.module.css'
import data from '../workData.json'

function CardWork() {
  return (
    <div className={styles.container}>
      {data.map((work => {
        return (
          <div className={styles.card}>
            <img src={work.img}></img>
            <h1>{work.name}</h1>
            <p>{work.description}</p>
            <button>Ir a web</button>
            <button>Ir a GitHub</button>
            <button>Volver</button>
          </div>
        )
      }))}
    </div>
  )
}

export default CardWork
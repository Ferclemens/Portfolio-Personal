import React from 'react'
import styles from './Hero.module.css'

function Hero() {
  return (
    <div className={styles.container}>
        <h1>Tecnologías utilizadas</h1>
        <div className={styles.ImgContainer}>
            <img src='../img/Django.png' className={styles.img}/>
            <img src='../img/css-3.png' className={styles.img}/>
            <img src='../img/React.png' className={styles.img3}/>
            <img src='../img/js.png' className={styles.img}/>
            <img src='../img/html-5.png' className={styles.img}/>
            <img src='../img/java.png' className={styles.img}/>
            <img src='../img/python.png' className={styles.img}/>
            <img src='../img/Git.png' className={styles.img}/>
            <img src='../img/Godot.png' className={styles.img}/>
            <img src='../img/Mysql.png' className={styles.img}/>
        </div>
    </div>
    
  )
}

export default Hero
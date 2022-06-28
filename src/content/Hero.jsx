import React from 'react'
import styles from './Hero.module.css'

function Hero() {
  return (
    <div className={styles.container}>
        <h2>Tecnologías utilizadas</h2>
        <div className={styles.ImgContainer}>
            <img src='../img/Django.png' className={styles.img1}/>
            <img src='../img/css-3.png' className={styles.img2}/>
            <img src='../img/React.png' className={styles.img3}/>
            <img src='../img/js.png' className={styles.img4}/>
            <img src='../img/html-5.png' className={styles.img5}/>
            <img src='../img/java.png' className={styles.img6}/>
            <img src='../img/python.png' className={styles.img7}/>
            <img src='../img/Git.png' className={styles.img8}/>
            <img src='../img/Godot.png' className={styles.img9}/>
            <img src='../img/Mysql.png' className={styles.img10}/>
        </div>
    </div>
    
  )
}

export default Hero
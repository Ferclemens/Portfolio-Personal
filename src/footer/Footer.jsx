import React from 'react'
import styles from '../footer/Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
            <div>
            <a className={styles.logoLinkedin} href='#'><img className={styles.imgLinkedin} src="{facebook}"/></a>
            <a className={styles.logoTwitter} href='https://twitter.com/FerClemens'><img className={styles.imgTwitter} src="{twiter}"/></a>
            <a className={styles.logoInstagram} href='https://www.instagram.com/ferclemens/'><img className={styles.imgInstagram} src="{instagram}"/></a>
            <a className={styles.logoGithub} href='https://github.com/Ferclemens'><img className={styles.imgGithub} src="{github}"/></a>
            </div>
        </div>
  )
}

export default Footer
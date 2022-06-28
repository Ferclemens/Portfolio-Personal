import React from 'react'
import styles from '../content/About.module.css';

const About = () => {
  return (
      <section className={styles.container}>
        <div className={styles.aboutImg}>
            <h1>aca va la imagen</h1>
        </div>
        <div className={styles.about}>
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </section>
  )
}

export default About;
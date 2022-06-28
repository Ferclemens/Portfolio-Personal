import React from 'react'
import styles from '../content/Work.module.css'

function Work() {
  return (
    <section className={styles.sectionWork}>
        <h1>Work</h1>
        <div className={styles.workContainer}>
            <div className={styles.workCard}>Blog</div>
            <div className={styles.workCard}>Godot Game</div>
            <div className={styles.workCard}>Meme Generator</div>
            <div className={styles.workCard}>Movie Search</div>
        </div>
    </section>
  )
}

export default Work

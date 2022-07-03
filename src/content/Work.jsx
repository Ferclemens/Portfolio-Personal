import React from 'react'
import styles from '../content/Work.module.css'
import data from '../workData.json'


function Work() {
  return (
    <section className={styles.sectionWork}>
        <h1 className={styles.tittleWork}>Work</h1>
        <div className={styles.workContainer}>
          {data.map((work => {
            return (
              <div className={styles.workCard} key={work.id}>
                {/* atributo target (HTML) para abrir link en una ventana nueva y rel para seguridad*/ }
                <a href={work.link} target="_blank" rel="noopener noreferrer">
                  <img className={styles.img} src={work.img} />
                </a>
                <div className={styles.workTittle}>
                  <h3 className={styles.tittle}>{work.name}</h3>
                  <p className={styles.text}>{work.description}</p>
                </div>
              </div>
            )
          }))}
        </div>
    </section>
  )
}

export default Work

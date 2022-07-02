import React from 'react'
import styles from '../content/About.module.css';

const About = () => {
  return (
      <section className={styles.container}>
        <div className={styles.aboutImg}>
            <h1>aca va la imagen</h1>
        </div>
        <div className={styles.about}>
            <h1>Me presento</h1>
            <p>Estudiante de desarrollo web, apasionado por la tecnología, el diseño y los datos. En constante capacitación para lograr mi objetivo que es convertirme en desarrollador web Full Stack. 
            
            Actualmente aprendiendo a crear interfaces de usuario utilizando React (front), y manejo de Bases de datos con Java (back).
            En busca de mi primer trabajo como desarrollador y asi dar inicio a mi carrera profesional en el sector IT.
            
            Buen trato, amable, responsable y predispuesto a trabajar en equipo, a aprender y colaborar.    </p>
        </div>
      </section>
  )
}

export default About;
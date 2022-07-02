import React from 'react'
import { useState } from "react";
import styles from './Form.module.css'
import dataContact from '../contactData.json'


const Form = () => { 
  return (
    <div className={styles.container}>
      <h2>Contacto</h2>
      <form className={styles.form} action="https://formsubmit.co/foclemens@gmail.com" method="POST">
        <input type="text" className={styles.boxText} placeholder="Name" name="name" required/>
        <input type="email" className={styles.boxText} placeholder="Email" name="email" required/>
        <textarea type="message" className={`${styles.boxText} ${styles.textArea}`} placeholder="Message" name="textarea"/>
        <button type="submit" className={`${styles.boxText} ${styles.submit}`}>Send Message</button>
      </form>
      <h2>Redes</h2>
      <div className={styles.redes}>
      {dataContact.map((element => {
        return (<a 
          className={styles.logo} 
          href={element.link} 
          target="_blank" 
          rel="noopener noreferrer"
          key={element.id}
        >
          <img className={styles.imgLogo} src={element.logo}/>
        </a>
        )
      }))}
    </div>
    </div>
  );
}

export default Form
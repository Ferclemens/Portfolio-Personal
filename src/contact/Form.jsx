import React from 'react'
import styles from './Form.module.css'
import dataContact from '../contactData.json'
import { Link } from 'react-router-dom'


const Form = () => { 
  return (
    <div className={styles.container}>
      <h2 className={styles.tittle}>Contacto</h2>
      <form className={styles.form} action="https://formsubmit.co/foclemens@gmail.com" method="POST">
        <input type="text" className={styles.boxText} placeholder="Name" name="name" required/>
        <input type="email" className={styles.boxText} placeholder="Email" name="email" required/>
        <input type="hidden" name="_next" value={<Link to='/Thanks'/>}/>
        <textarea type="message" className={`${styles.boxText} ${styles.textArea}`} placeholder="Message" name="textarea"/>
        <button type="submit" className={`${styles.boxText} ${styles.submit}`}>Send Message</button>
      </form>
      <h2 className={styles.tittle}>Redes</h2>
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
    {/*<iframe src="https://giphy.com/embed/JIX9t2j0ZTN9S" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/JIX9t2j0ZTN9S">via GIPHY</a></p>
     */}
    </div>
  );
}

export default Form
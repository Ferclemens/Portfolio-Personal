import React from 'react'
import styles from './Form.module.css'
import dataContact from '../contactData.json'
import Swal from 'sweetalert2'

const Form = () => {
  const alert = () => { 
      Swal.fire({
        background: '#a4b007',
        color: '#f0ffff',
        position: 'center',
        icon: 'success',
        title: 'Enviado!! Te contesto a la brevedad.',
        text: 'Volviendo al inicio!',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        //vanillaJS para redirigir a LandingPage
        willClose: setTimeout(() => { window.location.replace('/')}, 5000)
        })
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.tittle}>Contacto</h2>
      <form className={styles.form} action="https://formsubmit.co/foclemens@gmail.com" method="POST" onSubmit={alert}>
        <input type="text" className={styles.boxText} placeholder="Name" name="name" required/>
        <input type="email" className={styles.boxText} placeholder="Email" name="email" required/>
        <input type="hidden" name="_next" value="https://ferclemens.vercel.app/Thanks"/>
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
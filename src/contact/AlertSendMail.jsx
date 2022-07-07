import React from 'react'
import Swal from 'sweetalert2'


function AlertSendMail() {
  return (
    <div>
        {Swal.fire({
          background: '#a4b007',
          color: '#f0ffff',
          position: 'center',
          icon: 'success',
          title: 'Enviado!! Te contesto a la brevedad.',
          text: 'Redirigiendo to landing page!', 
          showConfirmButton: false,
          timer: 5000,
          timerProgressBar: true,
          //vanillaJS para redirigir a LandingPage
          willClose: setTimeout(() => { window.location.replace('/')}, 5000)
          })
        }
    </div>
  )
}

export default AlertSendMail
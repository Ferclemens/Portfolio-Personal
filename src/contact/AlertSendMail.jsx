import React from 'react'
import Swal from 'sweetalert2'


function AlertSendMail() {
  return (
    <div>
        {Swal.fire({
            title: 'Gracias!! Te respondo el mail a la brevedad.',
            width: 600,
            padding: '3em',
            color: '#716add',
            background: '#fff url(/images/trees.png)',
            backdrop: `
                rgba(0,0,123,0.4)
                url("https://giphy.com/embed/JIX9t2j0ZTN9S")
                center
                no-repeat
            `
            })}
    </div>
  )
}

export default AlertSendMail
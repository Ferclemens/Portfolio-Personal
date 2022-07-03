import React from 'react'
import Header from '../header/Header'
import About from '../content/About'
import Hero from '../content/Hero'
import Work from '../content/Work'
import Form from '../contact/Form'
import Footer from '../footer/Footer'

/*430X1600 px tamaño pantalla Samsung A32 */
function Landing() {
  return (
    <div>
      <Header />
      <About />
      <Hero />
      <Work />
      <Form />
      <Footer/>
    </div>
  )
}

export default Landing
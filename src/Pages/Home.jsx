import React from 'react'
import About from './../Components/About/About';
import Hero from './../Components/Hero/Hero';
import Services from './../Components/Services/Services';
import Info from './../Components/Info/Info';
import WhatsAppIcon from './../Components/WhatsAppIcon';

const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Services/>
      <Info/>
      <WhatsAppIcon/>
    </div>
  )
}

export default Home

import React from 'react'
import styled from 'styled-components'
import Hero from '../components/Hero'
import About from '../components/About'
import Menu from '../components/Menu'
import Location from '../components/Location'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Menu/>
      <Location/>
      <Testimonials/>
      <Contact/>
      <Footer/>
     
    </div>
  )
}

export default Home

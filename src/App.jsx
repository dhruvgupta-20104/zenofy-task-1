import React from 'react'
import './output.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='scroll-smooth'>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
    </div>
  )
}

export default App

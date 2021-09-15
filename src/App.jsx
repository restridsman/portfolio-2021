import React from 'react'

import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import ProjectOne from './components/ProjectOne'
import ProjectThree from './components/ProjectThree'
import ProjectTwo from './components/ProjectTwo'
import Skills from './components/Skills'

function App() {
 

  return (
    <div className="App">
        <Navbar />
        <Header />
        <About />
        <ProjectOne />
        <ProjectTwo />
        <ProjectThree />
        <Skills />
        <Footer />
    </div>
  )
}

export default App

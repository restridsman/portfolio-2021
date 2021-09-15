import React from 'react'

import './App.css'
import About from './components/About'
import Header from './components/Header'
import Navbar from './components/Navbar'
import ProjectOne from './components/ProjectOne'
import ProjectThree from './components/ProjectThree'
import ProjectTwo from './components/ProjectTwo'

function App() {
 

  return (
    <div className="App">
        <Navbar />
        <Header />
        <About />
        <ProjectOne />
        <ProjectTwo />
        <ProjectThree />
    </div>
  )
}

export default App

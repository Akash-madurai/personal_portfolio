import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Resume from './components/Resume';
import PortFolio from './components/PortFolio';
import Contact from './components/Contact';



function App() {

  return (
      <> 
        <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<PortFolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
       
      </>
  )
}

export default App

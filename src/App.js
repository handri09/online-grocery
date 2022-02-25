import React, { useState, useEffect } from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages'
import About from './pages/about'
import Menu from './pages/menu'
import Dropdown from './components/Dropdown'
import { Routes, Route } from 'react-router'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(()=> {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
        console.log('i resizeeeddd')
      }
    }
    window.addEventListener('resize', hideMenu)

    return () => {
      window.removeEventListener('resize', hideMenu);
    }  
  })

  return (
    <>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/about' element={<About/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
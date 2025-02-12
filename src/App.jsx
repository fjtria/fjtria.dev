import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar.jsx'
import { Home } from './pages/Home/Home.jsx'
import { About } from './pages/About/About.jsx'
import { Projects } from './pages/Projects/Projects.jsx'
import { Footer } from './components/Footer/Footer.jsx'

function App() {  
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/projects' element={<Projects></Projects>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App

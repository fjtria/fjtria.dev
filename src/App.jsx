import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar.jsx'
import { Home } from './components/Home/Home.jsx'
import { About } from './components/About/About.jsx'
import { Projects } from './components/Projects/Projects.jsx'
import './index.css';
import './App.css';

function App() {  
  return (
    <div id='app'>
      <Navbar></Navbar>
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/projects' element={<Projects></Projects>}></Route>
      </Routes>
    </div>
  )
}

export default App

import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar.jsx'
import { Home } from './pages/Home/Home.jsx'
import { About } from './pages/About/About.jsx'
import { Projects } from './pages/Projects/Projects.jsx'
import './index.css';
import './App.css';

function App() {  
  return (
    <div id='app'>
      <Navbar></Navbar>
      <main>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/projects' element={<Projects></Projects>}></Route>
        </Routes>
      </main>
    </div>
  )
}

export default App

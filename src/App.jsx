import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar.jsx'
import { Home } from './pages/Home/Home.jsx'
import { About } from './pages/About/About.jsx'
import { Projects } from './pages/Projects/Projects.jsx'
import { Feed } from './pages/Feed/Feed.jsx'
import { Footer } from './components/Footer/Footer.jsx'
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
            <Route path='/feed' element={<Feed></Feed>}></Route>
        </Routes>
        <Footer></Footer>
      </main>
    </div>
  )
}

export default App

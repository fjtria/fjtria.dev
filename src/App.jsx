import { Route, Routes } from 'react-router'
import AnimatedCursor from 'react-animated-cursor'
import { Navbar } from './components/Navbar/Navbar.jsx'
import { Home } from './pages/Home/Home.jsx'
import { About } from './pages/About/About.jsx'
import { Projects } from './pages/Projects/Projects.jsx'
import { Footer } from './components/Footer/Footer.jsx'
import './index.css';
import './App.css';

function App() {  
  return (
    <div id='app'>
      <AnimatedCursor 
        innerSize={5}
        outerSize={25}
        innerScale={1}
        outerScale={1.5}
        outerAlpha={0.5}
        innerStyle={{ backgroundColor: 'var(--primary)' }}
        outerStyle={{ backgroundColor: 'var(--secondary)', mixBlendMode: 'exclusion' }}
      />
      <Navbar></Navbar>
      <main>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/projects' element={<Projects></Projects>}></Route>
        </Routes>
        <Footer></Footer>
      </main>
    </div>
  )
}

export default App

import { Route, Routes, useLocation } from 'react-router';
import { AnimatePresence } from 'motion/react';
import AnimatedCursor from 'react-animated-cursor';
import { Navbar } from './components/Navbar/Navbar.jsx';
import { Home } from './pages/Home/Home.jsx';
import { About } from './pages/About/About.jsx';
import { Projects } from './pages/Projects/Projects.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import './index.css';
import './App.css';

function App() {
  const location = useLocation();
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
      <Navbar />
      <main>
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </main>
    </div>
  );
}

export default App

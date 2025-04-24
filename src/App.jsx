import { Route, Routes, useLocation } from 'react-router';
import { AnimatePresence, motion } from 'motion/react';
import AnimatedCursor from 'react-animated-cursor';
import { Navbar } from './components/Navbar/Navbar.jsx';
import { Home } from './pages/Home/Home.jsx';
import { About } from './pages/About/About.jsx';
import { Projects } from './pages/Projects/Projects.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import './index.css';
import './App.css';

const PageWrapper = ({ children }) => {
  const isDesktop = window.matchMedia('(min-width: 768px)').matches;
  const variants = isDesktop
    ? {
        initial: { opacity: 0, x: 100 },
        animate: { opacity: [0, 1], x: [100, 0] },
        exit: { opacity: 0, x: 100 },
      }
    : {
        initial: { opacity: 0, y: 100 },
        animate: { opacity: [0, 1], y: [100, 0] },
        exit: { opacity: 0, y: 100 },
      };
  const transition = { type: 'linear' };

  return (
    <motion.section
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={transition}
      style={{ minHeight: '100vh' }}
    >
      {children}
    </motion.section>
  );
};

function App() {
  const location = useLocation();
  return (
    <div id='app'>
      <AnimatedCursor 
        innerSize={5}
        outerSize={30}
        innerScale={1}
        outerScale={1.5}
        outerAlpha={0.5}
        innerStyle={{ backgroundColor: 'var(--primary)' }}
        outerStyle={{ backgroundColor: 'var(--secondary)', mixBlendMode: 'exclusion' }}
      />
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<PageWrapper><Home /></PageWrapper>} />
            <Route path='/about' element={<PageWrapper><About /></PageWrapper>} />
            <Route path='/projects' element={<PageWrapper><Projects /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </main>
    </div>
  );
}

export default App

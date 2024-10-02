import { AnimatePresence, motion, MotionConfig } from 'framer-motion'

import '../styles/Skills.css'
import reactImg from '../assets/images/react.png'
import vueImg from '../assets/images/vue.png'
import threeImg from '../assets/images/three.png'
import nextImg from '../assets/images/next.png'
import jsImg from '../assets/images/javascript.png'
import tsImg from '../assets/images/typescript.png'
import pythonImg from '../assets/images/python.png'
import javaImg from '../assets/images/java.png'

function Skills() {
  return(
    <div id='skills'>
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0}}
        transition={{ duration: 0.9, ease:'easeInOut' }}
      >
        Some of my skills.
      </motion.h2>
      <motion.div className='skillList'
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0}}
        transition={{ duration: 1, ease:'easeInOut' }}
      >

      <MotionConfig
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{ duration: 1, ease:'easeInOut' }}
      >

        <motion.div className='skillCard'>
          <img src={reactImg} alt='React.js Logo'></img>
          <p>React</p>
        </motion.div>
        
        <motion.div className='skillCard'>
          <img src={vueImg} alt='Vue.js Logo'></img>
          <p>Vue.js</p>
        </motion.div>

        <motion.div className='skillCard'>
          <img src={threeImg} alt='Three.js Logo'></img>
          <p>Three.js</p>
        </motion.div>

        <motion.div className='skillCard'>
          <img src={nextImg} alt='Next.js Logo'></img>
          <p>Next.js</p>
        </motion.div>

        <motion.div className='skillCard'>
          <img src={jsImg} alt='JavaScript Logo'></img>
          <p>JavaScript</p>
        </motion.div>

        <motion.div className='skillCard'>
          <img src={tsImg} alt='TypeScript Logo'></img>
          <p>TypeScript</p>
        </motion.div>

        <motion.div className='skillCard'>
          <img src={pythonImg} alt='Python Logo'></img>
          <p>Python</p>
        </motion.div>

        <motion.div className='skillCard'>
          <img src={javaImg} alt='Java Logo'></img>
          <p>Java</p>
        </motion.div>
      </MotionConfig>
        
      </motion.div>
    </div>
  );
}

export default Skills;
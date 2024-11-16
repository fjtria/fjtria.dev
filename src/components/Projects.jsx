import { motion } from 'framer-motion'

import '../styles/Projects.css'
import defaultImg from '../assets/images/github.png'
import spacelabImg from '../assets/images/spacelab.svg'
import exoplanetariumImg from '../assets/images/exoplanetarium.svg'
import pantrypalImg from '../assets/images/pantrypal.png'

function Projects() {
  return(
   <div id='projects'>
    <motion.h2
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0}}
      transition={{ duration: 0.9, ease:'easeInOut' }}
    >
      Check out my projects.
    </motion.h2>
    <motion.div className='projectList'
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0}}
      transition={{ duration: 1, ease:'easeInOut' }}
    >
      
      <a href='https://github.com/fjstria/TakeTwo' target="_blank" rel="noopener noreferrer" className='projectCard'>
        <img src={defaultImg}></img>
        <h3>TakeTwo</h3>
        <p>A social media web application for discussing and reviewing motion pictures.</p>
      </a>

      <a href='https://spacelabdev.github.io/Exoplanetarium-3D/#/welcome' target="_blank" rel="noopener noreferrer" className='projectCard'>
        <img src={exoplanetariumImg} style={{width: "300px"}}></img>
        <h3>Exoplanetarium 3D</h3>
        <p>A web application for exploring exoplanets within our galaxy.</p>
      </a>

      <a href='https://spacelab.space/' target="_blank" rel="noopener noreferrer" className='projectCard'>
        <img src={spacelabImg} style={{width: "200px"}}></img>
        <h3>The Spacelab Nonprofit</h3>
        <p>A responsive website built using React, Node.js, and Sass.</p>
      </a>

      <a href='https://github.com/fjstria/PantryPal' target="_blank" rel="noopener noreferrer" className='projectCard'>
        <img src={pantrypalImg}></img>
        <h3>Pantry Pal</h3>
        <p>An Android/iOS mobile app for sharing and discovering recipes.</p>
      </a>
    
    </motion.div>
   </div>
  );
}

export default Projects;
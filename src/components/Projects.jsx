import { motion } from 'framer-motion'

import '../styles/Projects.css'
import defaultImg from '../assets/images/github.png'
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
      
      <a href="#projects" className='projectCard'>
        <img src={defaultImg}></img>
        <h3>Coming soon...</h3>
        <p>Check back later for more projects.</p>
      </a>

      <a href='#projects' className='projectCard'>
        <img src={defaultImg}></img>
        <h3>Coming soon...</h3>
        <p>Check back later for more projects.</p>
      </a>

      <a href='https://github.com/fjstria/PantryPal' className='projectCard'>
        <img src={pantrypalImg}></img>
        <h3>Pantry Pal</h3>
        <p>An Android/iOS mobile app for sharing and discovering recipes.</p>
      </a>
    
    </motion.div>
   </div>
  );
}

export default Projects;
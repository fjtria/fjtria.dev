import { motion } from 'framer-motion'

import '../styles/Experience.css'
import sproutlabs from '../assets/images/sproutlabs.png'
import spacelab from '../assets/images/spacelabIcon.png'


function Experience() {
  return(
    <div id='experience'>
      <motion.h2
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0}}
      transition={{ duration: 0.9, ease:'easeInOut' }}
      >
        My work experience.
      </motion.h2>
      
      <div className='experienceList'>

      <motion.div className='experienceCard'
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0}}
          transition={{ duration: 1, ease:'easeInOut' }}
        >
          <img src={spacelab}></img>
          <div className='experienceDescription'>
            <h3>The Spacelab Nonprofit</h3>
            <h3>Front-End Developer</h3>
            <p>Oct '24 - Present</p>
          </div>
        </motion.div>

        <motion.div className='experienceCard'
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0}}
          transition={{ duration: 1, ease:'easeInOut' }}
        >
          <img src={sproutlabs}></img>
          <div className='experienceDescription'>
            <h3>SproutLabs, LLC</h3>
            <h3>Software Engineer Intern</h3>
            <p>Jan '24 - Jun '24</p>
          </div>
        </motion.div>

        <motion.div className='experienceCard'
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0}}
          transition={{ duration: 1, ease:'easeInOut' }}
        >
          <img src={spacelab}></img>
          <div className='experienceDescription'>
            <h3>The Spacelab Nonprofit</h3>
            <h3>Front-End Developer Intern</h3>
            <p>Jun '23 - Sep '23</p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

export default Experience;
import { motion } from 'framer-motion'

import '../styles/About.css'
import aboutUpper from '../assets/images/aboutUpper.jpg'
import aboutLower from '../assets/images/aboutLower.jpg'


function About() {
  return(
    <div id='about'>
      
      <div className='aboutUpper'>

        <motion.div className='aboutUpperImage'
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0}}
          transition={{ duration: 1, ease:'easeInOut' }}
        >
          <img src={aboutUpper} alt='FJ Tria'></img>
        </motion.div>

        <motion.div className='aboutUpperDescription'
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0}}
          transition={{ duration: 0.9, ease:'easeInOut' }}
        >
          <h2>Hi, I'm FJ.</h2>
          <p>
            I'm a software engineer and front-end developer. I help design and develop aesthetic and user-centric software systems.
          </p>
          <button type='button'
            onClick={(e) => {
              e.preventDefault();
              window.location.href='#contact'
            }}
          >
            Contact me.
          </button>
        </motion.div>

      </div>
      
      <div className='aboutLower'>

        <motion.div className='aboutLowerDescription'
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0}}
          transition={{ duration: 0.9, ease:'easeInOut' }}
        >
          <h2>More about me.</h2>
          <p>
            I'm a recent grad from UC Santa Cruz and a current student in Software Engineering at Cal State Fullerton. I value  self-improvement and self-expression.
          </p>
        </motion.div>

        <motion.div className='aboutLowerImage'
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0}}
          transition={{ duration: 1, ease:'easeInOut' }}
        >
          <img src={aboutLower} alt='FJ Tria'></img>
        </motion.div>
      
      </div>
    </div>
  );
}

export default About;
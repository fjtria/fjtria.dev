import { motion } from 'framer-motion'

import '../styles/About.css'
import aboutUpper from '../assets/images/aboutUpper.webp'
import aboutLower from '../assets/images/aboutLower.webp'


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
            I'm a software engineering student and front-end developer. I help craft aesthetic,  responsive, and user-centric software experiences.
          </p>
          <a href='#contact'>Contact me.</a>
 
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
            With a passion for cinematic arts and digital technology, I found a home in front-end development. I levarage my unique perspective and attention-to-detail to enhance the user experience.
          </p>
          <p>
            Interacting with software should be easy – My goal is for users to feel confident in the software they interact with daily.
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
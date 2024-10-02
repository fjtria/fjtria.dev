import { motion } from 'framer-motion'

import '../styles/Contact.css'
import resume from '../assets/images/resume.svg'
import linkedin from '../assets/images/linkedin.svg'
import email from '../assets/images/email.svg'
import resumePDF from '../assets/documents/Tria_FJ_Resume.pdf'

function Contact() {
  return(
    <div id='contact'>

      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0}}
        transition={{ duration: 0.9, ease:'easeInOut' }}
      >
        Still here? Let's connect.
      </motion.h2>

      
      <motion.div className='ctaList'
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0}}
        transition={{ duration: 1, ease:'easeInOut' }}
      >

        <div className='ctaCard'>
          <img src={resume} alt='Personal Document Icon'></img>
          <h3>View my resume.</h3>
          <a href={resumePDF} target='_blank'>I'd love to.</a>
        </div>

        <div className='ctaCard'>
          <img src={linkedin} alt='Add Person Icon'></img>
          <h3>Add me on LinkedIn.</h3>
          <a href="https://www.linkedin.com/in/fjstria/" target="_blank" rel="noopener noreferrer">Sure thing.</a>
        </div>

        <div className='ctaCard'>
          <img src={email} alt='Email Icon'></img>
          <h3>Send me an email.</h3>
          <a href="mailto:fjstria@gmail.com" target="_blank" rel="noopener noreferrer">Let's do it.</a>
        </div>

      </motion.div>
    </div>
  );
}

export default Contact;
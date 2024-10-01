import '../styles/Contact.css'
import resume from '../assets/images/resume.svg'
import linkedin from '../assets/images/linkedin.svg'
import email from '../assets/images/email.svg'
import resumePDF from '../assets/documents/Tria_FJ_Resume.pdf'

function Contact() {
  return(
    <div id='contact'>
      <h2>Still here? Let's connect.</h2>
      <div className='ctaList'>

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

      </div>
    </div>
  );
}

export default Contact;
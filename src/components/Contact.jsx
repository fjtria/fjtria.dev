import '../styles/Contact.css'
import resume from '../assets/images/resume.svg'
import linkedin from '../assets/images/linkedin.svg'
import email from '../assets/images/email.svg'

function Contact() {
  return(
    <div id='contact'>
      <h2>Still here? Let's connect.</h2>
      <div className='ctaList'>

        <div className='ctaCard'>
          <img src={resume} alt='Personal Document Icon'></img>
          <h3>Download my resume.</h3>
          <button>I'd love to.</button>
        </div>

        <div className='ctaCard'>
          <img src={linkedin} alt='Add Person Icon'></img>
          <h3>Add me on LinkedIn.</h3>
          <button>Sure thing.</button>
        </div>

        <div className='ctaCard'>
          <img src={email} alt='Email Icon'></img>
          <h3>Send me an email.</h3>
          <button>Let's do it.</button>
        </div>

      </div>
    </div>
  );
}

export default Contact;
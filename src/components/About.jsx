import '../styles/About.css'
import aboutUpper from '../assets/images/aboutUpper.jpg'
import aboutLower from '../assets/images/aboutLower.jpg'


function About() {
  return(
    <div id='about'>
      <div className='aboutUpper'>
        <div className='aboutUpperImage'>
          <img src={aboutUpper} alt='FJ Tria'></img>
        </div>
        <div className='aboutUpperDescription'>
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
        </div>
      </div>
      <div className='aboutLower'>
        <div className='aboutLowerDescription'>
          <h2>More about me.</h2>
          <p>
            I'm a recent grad from UC Santa Cruz and a current student in Software Engineering at Cal State Fullerton. I value  self-improvement and self-expression.
          </p>
        </div>
        <div className='aboutLowerImage'>
          <img src={aboutLower} alt='FJ Tria'></img>
        </div>
      </div>
      
    </div>
  );
}

export default About;
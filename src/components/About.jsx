import '../styles/About.css'
import aboutUpper from '../assets/images/aboutUpper.jpg'
import aboutLower from '../assets/images/aboutLower.jpg'


function About() {
  return(
    <div id='about'>
      <div className='aboutUpper'>
        <div className='aboutUpperImage'>
          <img src={aboutUpper} alt='FJ Tria @ Big Sur'></img>
        </div>
        <div className='aboutUpperDescription'>
          <h2>Hi, my name is FJ.</h2>
          <p>
            I am a software engineer with a specialty for front-end development. I help design and develop aesthetically pleasing and user-centric software systems.
          </p>
          <button>Contact me.</button>
        </div>
      </div>
      <div className='aboutLower'>
        <div className='aboutLowerDescription'>
          <h2>More about me.</h2>
          <p>
            I am a graduate student in Software Engineering at Cal State Fullerton. In the meantime, I am working on personal projects and expanding my professional network. I value continuous self-improvement and unapologetic self-expression. My goal is to improve the perception of and the experience using software products.
          </p>
        </div>
        <div className='aboutLowerImage'>
          <img src={aboutLower} alt='FJ Tria @ UC Santa Cruz'></img>
        </div>
      </div>
      
    </div>
  );
}

export default About;
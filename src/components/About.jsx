import '../styles/About.css'
import image from '../assets/images/placeholder.jpg'

function About() {
  return(
    <div id='about'>
      <div className='aboutUpper'>
        <div className='aboutUpperImage'>
          <img src={image} alt='Upper'></img>
        </div>
        <div className='aboutUpperDescription'>
          <h2>Hi, my name is FJ.</h2>
          <p>
            I am a detail-oriented software developer with a strong foundation in full-stack development. I am currently a graduate student at Cal State Fullerton pursuing a M.S. in Software Engineering. My current goals are developing my skillset as a software developer and expanding my professional network.
          </p>
        </div>
      </div>
      <div className='aboutLower'>
        <div className='aboutLowerDescription'>
          <h2>More about me.</h2>
          <p>
            I hold a B.A. in Network and Digital Technology from UC Santa Cruz, where I developed a strong foundation in engineering design and computer technology. Throughout my undergrad, I worked on a variety of projects where I learned a breadth of technical skills; including mobile app development, full-stack development, and graphics programming. With previous experience as both a leader and a mentor, I believe in continuous self-improvement and self-expression.
          </p>
        </div>
        <div className='aboutLowerImage'>
          <img src={image} alt='Lower'></img>
        </div>
      </div>
      
    </div>
  );
}

export default About;
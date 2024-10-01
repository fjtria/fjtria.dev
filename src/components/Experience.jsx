import '../styles/Experience.css'
import sproutlabs from '../assets/images/sproutlabs.png'
import spacelab from '../assets/images/spacelab.png'


function Experience() {
  return(
    <div id='experience'>
      <h2>My work experience.</h2>
      <div className='experienceList'>

        <div className='experienceCard'>
          <img src={sproutlabs}></img>
          <div className='experienceDescription'>
            <h3>SproutLabs</h3>
            <h3>Software Engineer Intern</h3>
            <p>Jan '24 - Jun '24</p>
          </div>
        </div>

        <div className='experienceCard'>
          <img src={spacelab}></img>
          <div className='experienceDescription'>
            <h3>SpaceLab</h3>
            <h3>Front-End Developer Intern</h3>
            <p>Jun '23 - Sep '23</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Experience;
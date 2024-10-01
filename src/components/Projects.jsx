import '../styles/Projects.css'
import defaultImg from '../assets/images/github.png'

function Projects() {
  return(
   <div id='projects'>
    <h2>Check out my projects.</h2>
    <div className='projectList'>
      
      <button className='projectCard'>
        <img src={defaultImg}></img>
        <h3>Pantry Pal</h3>
        <p>An Android/iOS mobile app for sharing and discovering recipes.</p>
      </button>

      <button className='projectCard'>
        <img src={defaultImg}></img>
        <h3>Pantry Pal</h3>
        <p>An Android/iOS mobile app for sharing and discovering recipes.</p>
      </button>

      <button className='projectCard'>
        <img src={defaultImg}></img>
        <h3>Pantry Pal</h3>
        <p>An Android/iOS mobile app for sharing and discovering recipes.</p>
      </button>
    
    </div>
   </div>
  );
}

export default Projects;
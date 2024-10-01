import '../styles/Projects.css'
import defaultImg from '../assets/images/github.png'
import pantrypalImg from '../assets/images/pantrypal.png'

function Projects() {
  return(
   <div id='projects'>
    <h2>Check out my projects.</h2>
    <div className='projectList'>
      
      <button className='projectCard'>
        <img src={defaultImg}></img>
        <h3>Coming soon...</h3>
        <p>Check back later for more projects.</p>
      </button>

      <button className='projectCard'>
        <img src={defaultImg}></img>
        <h3>Coming soon...</h3>
        <p>Check back later for more projects.</p>
      </button>

      <button className='projectCard' type='button'
        onClick={(e) => {
          e.preventDefault();
          window.location.href='https://github.com/fjstria/PantryPal';
        }}
      >
        <img src={pantrypalImg}></img>
        <h3>Pantry Pal</h3>
        <p>An Android/iOS mobile app for sharing and discovering recipes.</p>
      </button>
    
    </div>
   </div>
  );
}

export default Projects;
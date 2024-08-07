import '../styles/Navbar.css'
import Resume from '../assets/documents/Tria_FJ_Resume.pdf'

function Navbar() {
  return(
    <nav className='navbar'>
      <div className='navbarRight'>
        <h1>FJ TRIA</h1>
        <ul className='sections'>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
        </ul>
      </div>
      <ul className='navbarLeft'>
        <li><a href="#contact">A</a></li>
        <li><a href="https://www.linkedin.com/in/fjstria/" target="_blank" rel="noopener noreferrer">B</a></li>
        <li><a href={Resume} target='_blank'>C</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
import '../styles/Navbar.css'
import Resume from '../assets/documents/Tria_FJ_Resume.pdf'

function Navbar() {
  return(
    <nav className='navbar'>
      <div className='navbarLeft'>
        <h1>FJ TRIA</h1>
        {/*}
        <ul className='sections'>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#experience">EXPERIENCE</a></li>
          <li><a href="#skills">SKILLS</a></li>
        </ul>
        */}
      </div>
      <ul className='navbarRight'>
        <li><a href={Resume} target='_blank'>RESUME</a></li>
        <li><a href="https://www.linkedin.com/in/fjstria/" target="_blank" rel="noopener noreferrer">LINKEDIN</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
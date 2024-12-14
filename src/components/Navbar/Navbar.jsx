import '../../index.css';
import './Navbar.css'

export default function Navbar() {
    return (
        <div id='navbar'>
            <nav>
                <div className='logo'>
                    <h1><a href='#top'className='title gradient'>FJ TRIA</a></h1>
                </div>

                <ul className='links'>
                    <li>
                        <a href='#works' className='subtitle gradient'>Works</a>
                    </li>
                    <li>
                        <a href='#about' className='subtitle gradient'>About</a>
                    </li>
                    <li>
                        <a href='#contact' className='subtitle gradient'>Contact</a>
                    </li>
                </ul>
            </nav>
            <hr></hr>
        </div>
    );
}
import '../../index.css';
import './Navbar.css';
import lightModeLogo from '../../assets/images/Navbar/logo-dark.svg';
import darkModeLogo from '../../assets/images/Navbar/logo-light.svg';


export default function Navbar( {isDark} ) {
    return (
        <div id='navbar'>
            <nav>
                <div className='logo'>
                    <h1>FJ TRIA</h1>
                    <a href='#top'>
                        <img
                            className='logo-image'
                            src={isDark ? darkModeLogo : lightModeLogo}
                            alt='FJ Tria'
                        >
                        </img>
                    </a>
                </div>

                <ul className='links'>
                    <li>
                        <a href='#works' className='subtitle'>Works.</a>
                    </li>
                    <li>
                        <a href='#about' className='subtitle'>About.</a>
                    </li>
                    <li>
                        <a href='#contact' className='subtitle'>Contact.</a>
                    </li>
                </ul>
            </nav>
            <hr></hr>
        </div>
    );
}
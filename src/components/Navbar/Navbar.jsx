import '../../index.css';
import './Navbar.css'

export default function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <div className='logo'>
                    <a href='#'className='title'>FJ TRIA</a>
                </div>

                <div className='links'>
                    <ul>
                        <li>
                            <a href='#works' className='subtitle'>Works</a>
                        </li>
                        <li>
                            <a href='#about' className='subtitle'>About</a>
                        </li>
                        <li>
                            <a href='#contact' className='subtitle'>Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <hr></hr>
        </>
    );
}
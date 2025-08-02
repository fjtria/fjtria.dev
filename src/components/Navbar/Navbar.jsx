import { Link, NavLink } from 'react-router';
import copy from 'copy-to-clipboard';
import { motion } from 'motion/react';
import '../../index.css';
import './Navbar.css';
import EmailIcon from '../../assets/images/Navbar/email.svg';
import GitHubIcon from '../../assets/images/Navbar/github.svg';
import LinkedInIcon from '../../assets/images/Navbar/linkedin.svg';

export const Navbar = () => {

    const copyToClipboard = () => {
        copy('fjtria.dev' + '@' + 'gmail' + '.' + 'com');
        alert(`Email copied to clipboard!`);
    }

    return (
        <motion.nav
            initial="initial"
            animate="animate"
            transition="transition"
        >
            <div className='logo'>
                <Link to="/" className='title' title='Home'>FJTRIA.DEV</Link>
            </div>

            <div className='nav-items'>
                <ul className='nav-pages'>
                    <li><NavLink to="/" title='Home'>Home</NavLink></li>
                    <li><NavLink to="/projects" title='Projects'>Projects</NavLink></li>
                    <li><NavLink to="/about" title='About'>About</NavLink></li>
                </ul>
                
                <ul className='nav-links'>
                    <li>
                        <button onClick={copyToClipboard} title='Copy Email'>
                            <img src={EmailIcon} alt="Email" />
                        </button>
                    </li>
                    <li>
                        <a href='https://github.com/fjtria' target='_blank' rel='noopener noreferrer' title='GitHub'>
                            <img src={GitHubIcon} alt="GitHub" />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/fjtria/' target='_blank' rel='noopener noreferrer' title='LinkedIn'>
                            <img src={LinkedInIcon} alt="LinkedIn" />
                        </a>
                    </li>
                </ul>
            </div>
        </motion.nav>
    );
}
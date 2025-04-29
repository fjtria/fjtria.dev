import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import copy from 'copy-to-clipboard';
import { motion } from 'motion/react';
import '../../index.css';
import './Navbar.css';
import MenuIcon from '../../assets/images/Navbar/menu.svg';
import Resume from '../../assets/files/TriaFJResume.pdf'

export const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const copyToClipboard = () => {
        copy('fjtria.dev' + '@' + 'gmail' + '.' + 'com');
        alert(`Email copied to clipboard!`);
    }

    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    const variants = isDesktop
    ? {
        initial: { opacity: 0, x: -100 },
        animate: { opacity: [0, 1], x: [-100, 0] },
        transition: { type: "linear" }
    }
    : {
        initial: { opacity: 0, y: -100 },
        animate: { opacity: [0, 1], y: [-100, 0] },
        transition: { type: "linear" }
    };

    return (
        <motion.nav
            variants={variants}
            initial="initial"
            animate="animate"
            transition="transition"
        >
            <Link to="/" className='title' title='Go Home'>✦ fjtria.dev</Link>

            <div className="menu" onClick={() => setOpenMenu(!openMenu)}>
                <img src={MenuIcon} alt="Menu" />
            </div>

            <ul className={openMenu ? "open" : ""}>
                <li><NavLink to="/about" title='Go To About'>About →</NavLink></li>
                <li><NavLink to="/projects" title='Go To Projects'>Projects →</NavLink></li>
                <hr></hr>
                <li><a href={Resume} target='_blank' title='View Resume'>Resume ↗</a></li>
                <li><button onClick={copyToClipboard} title='Copy Email'>Email ↗</button></li>
                <li><a href='https://www.linkedin.com/in/fjtria/' target='_blank' rel='noopener noreferrer' title='Open LinkedIn'>LinkedIn ↗</a></li>
                <li><a href='https://github.com/fjtria' target='_blank' rel='noopener noreferrer' title='Open GitHub'>GitHub ↗</a></li>
            </ul>
        </motion.nav>
    );
}
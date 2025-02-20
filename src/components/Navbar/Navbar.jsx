import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import copy from 'copy-to-clipboard';
import '../../index.css';
import './Navbar.css';
import Resume from '../../assets/files/TriaFJResume.pdf'

export const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [copyText, setCopyText] = useState("");

    const copyToClipboard = () => {
        copy('fjtria.dev@gmail.com');
        alert(`Email copied to clipboard!`);
    }

    return (
        <aside>
            <Link to="/" className='title' title='Go Home'>fjtria.dev</Link>

            <div className="menu" onClick={() => setOpenMenu(!openMenu)}>
                Menu
            </div>

            <ul className={openMenu ? "open" : ""}>
                <li>
                    <NavLink to="/about" title='Go To About'>About →</NavLink>
                </li>
                <li>
                    <NavLink to="/projects" title='Go To Projects'>Projects →</NavLink>
                </li>
                <li>
                    <NavLink to="/feed" title='Go To Feed'>Feed →</NavLink>
                </li>
                <hr></hr>
                <li>
                    <a href={Resume} target='_blank' title='View Resume'>Resume ↗</a>
                </li>
                <li>
                    <button onClick={copyToClipboard} title='Copy Email'>Email ↗</button>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/fjtria/' target='_blank' rel='noopener noreferrer' title='Open LinkedIn'>LinkedIn ↗</a>
                </li>
            </ul>
        </aside>
    );
}
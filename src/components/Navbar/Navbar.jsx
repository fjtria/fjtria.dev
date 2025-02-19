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
            <Link to="/" className='title'>fjtria.dev</Link>

            <div className="menu" onClick={() => setOpenMenu(!openMenu)}>
                Menu
            </div>

            <ul className={openMenu ? "open" : ""}>
                <li>
                    <NavLink to="/about">About →</NavLink>
                </li>
                <li>
                    <NavLink to="/projects">Projects →</NavLink>
                </li>
                <hr></hr>
                <li>
                    <a href={Resume} target='_blank'>Resume ↗</a>
                </li>
                <li>
                    <button onClick={copyToClipboard}>Email ↗</button>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/fjtria/' target='_blank' rel='noopener noreferrer'>LinkedIn ↗</a>
                </li>
            </ul>
        </aside>
    );
}
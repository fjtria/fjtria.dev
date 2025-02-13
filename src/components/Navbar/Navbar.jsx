import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../index.css';
import './Navbar.css';
import Resume from '../../assets/files/TriaFJResume.pdf'

export const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

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
                <li>
                    <a href={Resume} target='_blank'>Resume ↗</a>
                </li>
                <li>
                    <a href='mailto:fjtria.dev@gmail.com' target='_blank'>Email ↗</a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/fjtria/' target='_blank' rel='noopener noreferrer'>LinkedIn ↗</a>
                </li>
            </ul>
        </aside>
    );
}
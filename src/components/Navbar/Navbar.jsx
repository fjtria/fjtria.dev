import React, { useState } from 'react';
import '../../index.css';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';

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
                    <a href='mailto:fjtria.dev@gmail.com' target='_blank'>Email ↗</a>
                </li>
                <li>
                <a href='https://www.linkedin.com/in/fjtria/' target='_blank' rel='noopener noreferrer'>LinkedIn ↗</a>
                </li>
                
            </ul>

        </aside>
    );
}
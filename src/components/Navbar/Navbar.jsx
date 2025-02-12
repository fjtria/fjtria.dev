import React, { useState } from 'react';
import '../../index.css';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <nav>
            <Link to="/" className='title'>fjtria.dev</Link>

            <div className="menu" onClick={() => setOpenMenu(!openMenu)}>
                menu
            </div>

            <ul className={openMenu ? "open" : ""}>
                <li>
                    <NavLink to="/about">about</NavLink>
                </li>
                <li>
                    <NavLink to="/projects">projects</NavLink>
                </li>
            </ul>

        </nav>
    );
}
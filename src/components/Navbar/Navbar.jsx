import React, { useState } from 'react';
import '../../index.css';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <nav>
            <Link to="/">fjtria.dev</Link>

            <ul>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/projects">Projects</NavLink>
                </li>
            </ul>

        </nav>
    );
}
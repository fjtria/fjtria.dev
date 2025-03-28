import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import copy from 'copy-to-clipboard';
import { motion, MotionConfig } from 'motion/react';
import '../../index.css';
import './Navbar.css';
import Resume from '../../assets/files/TriaFJResume.pdf'

export const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const copyToClipboard = () => {
        copy('fjtria.dev' + '@' + 'gmail' + '.' + 'com');
        alert(`Email copied to clipboard!`);
    }

    return (
        <motion.aside
            animate={{
                opacity: [0, 1],
                x: [-100, 0]
            }}
            transition={{
                type: "linear",
            }}
        >
            <Link to="/" className='title' title='Go Home'>fjtria.dev</Link>

            <div className="menu" onClick={() => setOpenMenu(!openMenu)}>
                Menu
            </div>

            <ul className={openMenu ? "open" : ""}>
                <MotionConfig
                    animate={{
                        opacity: [0, 1],
                        y: [100, 0]
                    }}
                >

                    <motion.li
                        transition={{
                            delay: 0.2
                        }}
                    >
                        <NavLink to="/about" title='Go To About'>About →</NavLink>
                    </motion.li>

                    <motion.li
                        transition={{
                            delay: 0.25
                        }}
                    >
                        <NavLink to="/projects" title='Go To Projects'>Projects →</NavLink>
                    </motion.li>

                    <motion.hr
                        transition={{
                            delay: 0.3
                        }}
                    ></motion.hr>

                    <motion.li
                        transition={{
                            delay: 0.35
                        }}
                    >
                        <a href={Resume} target='_blank' title='View Resume'>Resume ↗</a>
                    </motion.li>
                    
                    <motion.li
                        transition={{
                            delay: 0.4
                        }}
                    >
                        <button onClick={copyToClipboard} title='Copy Email'>Email ↗</button>
                    </motion.li>

                    <motion.li
                        transition={{
                            delay: 0.45
                        }}
                    >
                        <a href='https://www.linkedin.com/in/fjtria/' target='_blank' rel='noopener noreferrer' title='Open LinkedIn'>LinkedIn ↗</a>
                    </motion.li>
                </MotionConfig>
            </ul>
        </motion.aside>
    );
}
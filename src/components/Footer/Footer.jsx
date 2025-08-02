import { motion } from 'motion/react';
import '../../index.css';
import './Footer.css';
import EmailIcon from '../../assets/images/Navbar/email.svg';
import GitHubIcon from '../../assets/images/Navbar/github.svg';
import LinkedInIcon from '../../assets/images/Navbar/linkedin.svg';

export const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "linear" }}
        >
            <hr></hr>

            <div className='footer-text'>
                <div>
                    <h2>Let&apos;s create together.</h2>
                    <p>Based in California.</p>
                </div>

                <div className='links-container'>
                    <a className='footer-links' href='https://github.com/fjtria' target='_blank' rel='noopener noreferrer' title='GitHub'>
                        <img src={GitHubIcon}></img>
                        <p>@fjtria ↗</p>
                    </a>
                    <a className='footer-links' href='https://www.linkedin.com/in/fjtria/' target='_blank' rel='noopener noreferrer' title='LinkedIn'>
                        <img src={LinkedInIcon}></img>
                        <p>@fjtria ↗</p>
                    </a>
                </div>
            </div>
            
            <h6>FJTRIA.DEV</h6>
        </motion.footer>
    );
}
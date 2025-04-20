import '../../index.css';
import './Home.css';
import { motion } from 'framer-motion';

export const Home = () => {
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    const variants = isDesktop
    ? {
        initial: { opacity: 0, x: 100 },
        animate: { opacity: [0, 1], x: [100, 0] },
        transition: { type: "linear" }
    }
    : {
        initial: { opacity: 0, y: 100 },
        animate: { opacity: [0, 1], y: [100, 0] },
        transition: { type: "linear" }
    };

    return (
        <motion.section id='home'
            variants={variants}
            initial="initial"
            animate="animate"
            transition="transition"
        >
            <h2 className='page-title'>fjtria.dev</h2>

            <div className='hero-text'>
                <h3 className='section-title'>Hello world!</h3>
                <p>
                    I'm FJ, a software engineer building responsive web 
                    applications and managing software projects. This site 
                    showcases my software development work and some 
                    of my own thoughts.
                </p>
                <p>
                    Thanks for stopping by!
                </p>
                <p className='signature'>
                    - @fjtria.dev
                </p>
            </div>
        </motion.section>
    );
}
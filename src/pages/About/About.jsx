import '../../index.css';
import './About.css';
import { motion } from 'motion/react';
import { Summary } from '../../components/Summary/Summary';
import { Experience } from '../../components/Experience/Experience';

export const About = () => {
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    const variants = isDesktop
    ? {
        initial: { opacity: 0, x: 100 },
        animate: { opacity: [0, 1], x: [100, 0] },
        exit: { opacity: 0, x: 100 }
    }
    : {
        initial: { opacity: 0, y: 100 },
        animate: { opacity: [0, 1], y: [100, 0] },
        exit: { opacity: 0, y: 100 }
    };
    const transition = { type: "linear" };

    return (
        <motion.section id='about'
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={transition}
        >
            <h2 className='page-title'>About</h2>
            <Summary></Summary>
            <Experience></Experience>
        </motion.section>
    );
}
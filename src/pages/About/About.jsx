import '../../index.css';
import './About.css';
import { motion } from 'framer-motion';
import { Summary } from '../../components/Summary/Summary';
import { Experience } from '../../components/Experience/Experience';

export const About = () => {
    return (
        <motion.section id='about'
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: [0, 1], x: [100, 0] }}
            transition={{ type: "linear" }}
        >
            <Summary></Summary>
            <Experience></Experience>
        </motion.section>
    );
}
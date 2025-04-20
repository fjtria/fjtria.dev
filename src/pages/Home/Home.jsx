import '../../index.css';
import './Home.css';
import { motion } from 'framer-motion';

export const Home = () => {
    return (
        <motion.section id='home'
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: [0, 1], x: [100, 0] }}
            transition={{ type: "linear" }}
        >
            <h2 className='page-title'>fjtria.dev</h2>

            <div className='hero-text'>
                <h3 className='section-title'>Hello world!</h3>
                <h4>Welcome to my site.</h4>
                <p>
                    I'm FJ, a software engineer with experience developing 
                    responsive web application interfaces. This site showcases my 
                    software development work, alongside some of my own thoughts.
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
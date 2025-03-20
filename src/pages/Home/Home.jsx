import '../../index.css';
import './Home.css';
import { motion } from 'framer-motion';

export const Home = () => {
    return (
        <motion.section id='home'
            animate={{
                opacity: [0, 1],
                x: [100, 0]
            }}
            transition={{
                type: "linear",
            }}
        >
            <pre className='title' aria-label='FJ TRIA in ASCII art text'>
                ███████╗...██╗████████╗██████╗.██╗.█████╗....██████╗.███████╗██╗...██╗<br></br>
                ██╔════╝...██║╚══██╔══╝██╔══██╗██║██╔══██╗...██╔══██╗██╔════╝██║...██║<br></br>
                █████╗.....██║...██║...██████╔╝██║███████║...██║..██║█████╗..██║...██║<br></br>
                ██╔══╝██...██║...██║...██╔══██╗██║██╔══██║...██║..██║██╔══╝..╚██╗.██╔╝<br></br>
                ██║...╚█████╔╝...██║...██║..██║██║██║..██║██╗██████╔╝███████╗.╚████╔╝.<br></br>
                ╚═╝....╚════╝....╚═╝...╚═╝..╚═╝╚═╝╚═╝..╚═╝╚═╝╚═════╝.╚══════╝..╚═══╝..<br></br>
            </pre>

            <div className='hero-text'>
                <h2>Hello world!</h2>
                <h3>Welcome to my site.</h3>
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
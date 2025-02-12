import '../../index.css';
import './About.css';
import { Experience } from '../Experience/Experience';

export const About = () => {
    return (
        <section id='about'>
            <Experience></Experience>
            <div className='summary'>
                <h2>Summary</h2>
                <p>
                    I'm a software engineer dedicated to building web applications that enhance everyday
                    experiences. I follow a user-first approach, creating seamless interactions between
                    users and technology, ensuring every project meets real-world needs.
                </p>
                <p>
                    Outside of coding, I enjoy exploring the intersection of art and technology, constantly
                    seeking inspiration from films, games, and other digital media.
                </p>
            </div>
        </section>
    );
}
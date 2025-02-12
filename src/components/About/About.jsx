import '../../index.css';
import './About.css';

export const About = () => {
    return (
        <section id='about'>

            <h2>Experience</h2>            
            <div className='exp-card'>
                <h3>The Spacelab Nonprofit</h3>
                <h3>Software Engineer, Frontend</h3>
                <p className='exp-dates'>October 2024 - Present</p>
            </div>
            <div className='exp-card'>
                <h3>The Spacelab Nonprofit</h3>
                <h3>Software Engineering Intern, Frontend</h3>
                <p className='exp-dates'>June 2023 - September 2023</p>
            </div>

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

        </section>
    );
}
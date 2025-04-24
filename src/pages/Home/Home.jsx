import '../../index.css';
import './Home.css';

export const Home = () => {
    return (
        <section id='home'>
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
        </section>
    );
}
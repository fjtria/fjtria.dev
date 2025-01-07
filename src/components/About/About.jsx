import '../../index.css';
import './About.css';
import aboutImage from '../../assets/images/About/about_image.webp';
import experiences from './experience.json';
import educations from './education.json';
import { getLocalURL } from '../../helpers/urlHelper';

export default function About() {
    return (
        <section id='about'>
            <h2 className='title'>About.</h2>
            <div className='about-container'>
                
                <div className='about-left'>
                    <div className='about-image'>
                        <img src={aboutImage}></img>
                    </div>
                    <h3 className='subtitle'>More about me.</h3>
                    <p>
                        I'm a software engineer dedicated to building intuitive and reliable applications that enhance everyday experiences.
                        With expertise in full-stack development, I focus on creating seamless interactions between users and technology.
                    </p>
                    <p>
                        I enjoy being presented with complex challenges and delivering practical solutions. My work blends technical precision with a user-first approach, ensuring every project meets real-world needs.
                    </p>
                    <p>
                        Outside of coding, I enjoy exploring the intersection of technology and creative storytelling,
                        constantly seeking inspiration from films, games, and other digital media.
                    </p>
                </div>
                
                <div className='about-right'>
                    <h3 className='subtitle'>Experience.</h3>
                    <div className='experience-container'>
                        {
                            experiences.map((experience, id) => {
                                return ( 
                                    <div key={id} className='experience-card'>
                                        <div className='experience-image'>
                                            <img src={getLocalURL(experience.icon)} alt={`${experience.company} logo`}></img>
                                        </div>
                                        <div className='experience-details'>
                                            <h4 className='subtitle'>{experience.company}</h4>
                                            <p>{experience.title}</p>
                                            <p className='subtext'>{experience.dates}</p>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <h3 className='subtitle'>Education.</h3>
                    <div className='education-container'>
                        {
                            educations.map((education, id) => {
                                return (
                                    <div key={id} className='education-card'>
                                        <div className='education-images'>
                                            <div className='education-logo'>
                                                <img src={getLocalURL(education.logo)} alt={`${education.degree} logo`}></img>
                                            </div>
                                            <div className='education-program'>
                                                <img src={getLocalURL(education.program)} alt={`${education.degree} logo`} className='education-program'></img>
                                            </div>
                                        </div>
                                        <div className='education-details'>
                                            <h4 className='subtitle'>{education.degree}</h4>
                                            <p className='subtext'>{education.dates}</p>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}
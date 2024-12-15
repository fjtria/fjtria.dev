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
                    <p>With a passion for cinematic arts and digital technology, I found a home in
                        front-end development. I levarage my unique perspective and attention-to-detail
                        to enhance the user experience.
                    </p>
                    <p>
                        Interacting with software should be easy – My goal is for users to feel confident
                        in the software they interact with daily.
                    </p>
                </div>
                
                <div className='about-right'>
                    <div className='experience-container'>
                        <h3 className='subtitle'>Experience.</h3>
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
                    <div className='education-container'>
                        <h3 className='subtitle'>Education.</h3>
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
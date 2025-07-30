import '../../index.css';
import './About.css';
import profileIcon from '../../assets/images/Summary/profile.webp'
import spacelabIcon from '../../assets/images/Experience/spacelab.webp';
import ucscIcon from '../../assets/images/Experience/ucsc.webp';
import csufIcon from '../../assets/images/Experience/csuf.webp';

export const About = () => {
    return (
        <section id='about'>
            <h2 className='page-title'>About</h2>
            <section id='summary'>
                <h3 className='section-title'>Summary</h3>
                <div className='column-container'>
                    <img src={profileIcon} alt='Photo of FJ Tria' loading='lazy'></img>
                    <div className='biography'>
                        <p>
                            I&apos;m a software engineer from Southern California. I believe in building software that
                            promotes quality and authenticity. My goal with what I develop is to ensure seamless
                            user experiences and a encourage positive social impact.
                        </p>
                        <p>
                            I was previously a volunteer at The Spacelab Nonprofit, where I participated in full-stack
                            web development projects and collaborated with other self-motivated tech professionals from
                            underrepresented communities.
                        </p>
                    </div>
                </div>
            </section>

            <section id='experience'>
                <h3 className='section-title'>Experience</h3>    
                <div className='exp-card'>
                    <img src={csufIcon} alt='California State University, Fullerton Logo' loading='lazy'></img>
                    <div>
                        <h4>California State University, Fullerton</h4>
                        <p>Master&apos;s Degree</p>
                        <p className='exp-dates'>Expected December 2025</p>
                    </div>
                </div>   
                <div className='exp-card'>
                    <img src={spacelabIcon} alt='The Spacelab Nonprofit Logo' loading='lazy'></img>
                    <div>
                        <h4>The Spacelab Nonprofit</h4>
                        <p>Software Engineer (Volunteer)</p>
                        <p className='exp-dates'>October 2024 - May 2025</p>
                    </div>
                </div>     
                <div className='exp-card'>
                <img src={ucscIcon} alt='University of California, Santa Cruz Logo' loading='lazy'></img>
                    <div>
                        <h4>University of California, Santa Cruz</h4>
                        <p>Bachelor&apos;s Degree</p>
                        <p className='exp-dates'>June 2024</p>
                    </div>
                </div>
                <div className='exp-card'>
                <img src={spacelabIcon} alt='The Spacelab Nonprofit Logo' loading='lazy'></img>
                    <div>
                        <h4>The Spacelab Nonprofit</h4>
                        <p>Software Engineering Intern</p>
                        <p className='exp-dates'>June 2023 - September 2023</p>
                    </div>
                </div>
            </section>
        </section>
    );
}
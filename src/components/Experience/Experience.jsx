import '../../index.css';
import './Experience.css';
import spacelabIcon from '../../assets/images/Experience/spacelab.webp';
import ucscIcon from '../../assets/images/Experience/ucsc.webp';
import csufIcon from '../../assets/images/Experience/csuf.webp';

export const Experience = () => {
    return (
        <section id='experience'>
            <h3 className='section-title'>Experience</h3>    
            <div className='exp-card'>
                <img src={csufIcon} alt='California State University, Fullerton Logo' loading='lazy'></img>
                <div>
                    <h4>California State University, Fullerton</h4>
                    <p>Master's Degree</p>
                    <p className='exp-dates'>Expected December 2025</p>
                </div>
            </div>   
            <div className='exp-card'>
                <img src={spacelabIcon} alt='The Spacelab Nonprofit Logo' loading='lazy'></img>
                <div>
                    <h4>The Spacelab Nonprofit</h4>
                    <p>Software Engineer</p>
                    <p className='exp-dates'>October 2024 - Present</p>
                </div>
            </div>     
            <div className='exp-card'>
            <img src={ucscIcon} alt='University of California, Santa Cruz Logo' loading='lazy'></img>
                <div>
                    <h4>University of California, Santa Cruz</h4>
                    <p>Bachelor's Degree</p>
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
    );
}
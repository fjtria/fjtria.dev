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
                <img src={csufIcon} alt='California State University, Fullerton Logo'></img>
                <div>
                    <h4>California State University, Fullerton</h4>
                    <h5>Master's Degree</h5>
                    <p className='exp-dates'>Expected December 2025</p>
                </div>
            </div>   
            <div className='exp-card'>
                <img src={spacelabIcon} alt='The Spacelab Nonprofit Logo'></img>
                <div>
                    <h4>The Spacelab Nonprofit</h4>
                    <h5>Frontend Software Engineer</h5>
                    <p className='exp-dates'>October 2024 - Present</p>
                </div>
            </div>     
            <div className='exp-card'>
            <img src={ucscIcon} alt='University of California, Santa Cruz Logo'></img>
                <div>
                    <h4>University of California, Santa Cruz</h4>
                    <h5>Bachelor's Degree</h5>
                    <p className='exp-dates'>June 2024</p>
                </div>
            </div>
            <div className='exp-card'>
            <img src={spacelabIcon} alt='The Spacelab Nonprofit Logo'></img>
                <div>
                    <h4>The Spacelab Nonprofit</h4>
                    <h5>Frontend Software Engineering Intern</h5>
                    <p className='exp-dates'>June 2023 - September 2023</p>
                </div>
            </div>
        </section>
    );
}
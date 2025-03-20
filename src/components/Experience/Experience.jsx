import '../../index.css';
import './Experience.css';
import spacelabIcon from '../../assets/images/Experience/spacelab.webp';
import ucscIcon from '../../assets/images/Experience/ucsc.webp';
import csufIcon from '../../assets/images/Experience/csuf.webp';

export const Experience = () => {
    return (
        <section id='experience'>
            <h2>Experience</h2>      
            <div className='exp-card'>
                <img src={spacelabIcon} alt='The Spacelab Nonprofit Logo'></img>
                <div>
                    <h3>The Spacelab Nonprofit</h3>
                    <h4>Software Engineer, Frontend</h4>
                    <p className='exp-dates'>October 2024 - Present</p>
                </div>
            </div>
            <div className='exp-card'>
                <img src={csufIcon} alt='California State University, Fullerton Logo'></img>
                <div>
                    <h3>California State University, Fullerton</h3>
                    <h4>Master's Degree</h4>
                    <p className='exp-dates'>Expected December 2025</p>
                </div>
            </div>      
            <div className='exp-card'>
            <img src={ucscIcon} alt='University of California, Santa Cruz Logo'></img>
                <div>
                    <h3>University of California, Santa Cruz</h3>
                    <h4>Bachelor's Degree</h4>
                    <p className='exp-dates'>June 2024</p>
                </div>
            </div>
            <div className='exp-card'>
            <img src={spacelabIcon} alt='The Spacelab Nonprofit Logo'></img>
                <div>
                    <h3>The Spacelab Nonprofit</h3>
                    <h4>Software Engineering Intern, Frontend</h4>
                    <p className='exp-dates'>June 2023 - September 2023</p>
                </div>
            </div>
        </section>
    );
}
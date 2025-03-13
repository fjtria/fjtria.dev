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
                <img src={csufIcon} alt='The Spacelab Nonprofit Logo' loading='lazy'></img>
                <div>
                    <h3>California State University, Fullerton</h3>
                    <h3>Master's Degree</h3>
                    <p className='exp-dates'>Expected December 2025</p>
                </div>
            </div>      
            <div className='exp-card'>
                <img src={spacelabIcon} alt='The Spacelab Nonprofit Logo' loading='lazy'></img>
                <div>
                    <h3>The Spacelab Nonprofit</h3>
                    <h3>Software Engineer, Frontend</h3>
                    <p className='exp-dates'>October 2024 - Present</p>
                </div>
            </div>
            <div className='exp-card'>
            <img src={ucscIcon} alt='The Spacelab Nonprofit Logo' loading='lazy'></img>
                <div>
                    <h3>University of California, Santa Cruz</h3>
                    <h3>Bachelor's Degree</h3>
                    <p className='exp-dates'>June 2024</p>
                </div>
            </div>
            <div className='exp-card'>
            <img src={spacelabIcon} alt='The Spacelab Nonprofit Logo' loading='lazy'></img>
                <div>
                    <h3>The Spacelab Nonprofit</h3>
                    <h3>Software Engineering Intern, Frontend</h3>
                    <p className='exp-dates'>June 2023 - September 2023</p>
                </div>
            </div>
        </section>
    );
}
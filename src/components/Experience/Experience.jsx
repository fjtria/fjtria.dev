import '../../index.css';
import './Experience.css';
import spacelabIcon from '../../assets/images/Experience/spacelab.webp'

export const Experience = () => {
    return (
        <section id='experience'>
            <h2>Experience</h2>            
            <div className='exp-card'>
                <img src={spacelabIcon}></img>
                <div>
                    <h3>The Spacelab Nonprofit</h3>
                    <h3>Software Engineer, Frontend</h3>
                    <p className='exp-dates'>October 2024 - Present</p>
                </div>
            </div>
            <div className='exp-card'>
            <img src={spacelabIcon}></img>
                <div>
                    <h3>The Spacelab Nonprofit</h3>
                    <h3>Software Engineering Intern, Frontend</h3>
                    <p className='exp-dates'>June 2023 - September 2023</p>
                </div>
            </div>
        </section>
    );
}
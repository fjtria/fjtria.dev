import '../../index.css';
import './Experience.css';

export const Experience = () => {
    return (
        <section id='experience'>
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
        </section>
    );
}
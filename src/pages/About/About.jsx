import '../../index.css';
import './About.css';
import { Summary } from '../../components/Summary/Summary';
import { Experience } from '../../components/Experience/Experience';

export const About = () => {
    return (
        <section id='about'>
            <h2 className='page-title'>About</h2>
            <Summary></Summary>
            <Experience></Experience>
        </section>
    );
}
import '../../index.css';
import './About.css';
import { Summary } from '../../components/Summary/Summary';
import { Experience } from '../../components/Experience/Experience';

export const About = () => {
    return (
        <section id='about'>
            <Summary></Summary>
            <Experience></Experience>
        </section>
    );
}
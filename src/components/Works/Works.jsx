import '../../index.css';
import './Works.css';
import projects from './projects.json';
import { getLocalURL } from '../../helpers/urlHelper';

export default function Works() {
    return (
        <section id='works'>
            <h2 className='title'>💻 Works.</h2>
            <div className='works-container'>
                {
                    projects.map((project, id) => {
                        return (
                            <a key={id} href={project.link} target='_blank' rel='noopener noreferrer' className='project-card'>
                                <div className='project-image'>
                                    <img src={getLocalURL(project.icon)} alt={`${project.name} preview`} loading='lazy'></img>
                                </div>
                                <div className='project-details'>
                                    <h3 className='subtitle works-text'>{project.name} ↗</h3>
                                    <p className='subtext works-subtext'>{project.skills}</p>
                                    <p className='works-text'>{project.description}</p>
                                </div>
                            </a>
                        );
                    })
                }
            </div>
        </section>
    );
}
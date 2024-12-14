import '../../index.css';
import './Works.css';
import projects from './projects'

// Card Component: https://www.youtube.com/watch?v=YQCDUJ6hhNY

export default function Works() {
    return (
        <section id='works'>
            <h2 className='title'>Works.</h2>
            <ul className='works-container'>
                {
                    projects.map((project, id) => {
                        return (
                            <li key={id}>
                                <a href={project.link} target='_blank' rel='noopener noreferrer' className='project-card'>
                                    <img src={project.icon} alt={`${project.name} icon`}></img>
                                    <h3 className='subtitle'>{project.name}</h3>
                                    <p>{project.description}</p>
                                </a>
                            </li>
                        );
                    })
                }
            </ul>
        </section>
    );
}
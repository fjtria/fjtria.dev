import '../../index.css';
import './Summary.css';
import profileIcon from '../../assets/images/Summary/profile.webp'

export const Summary = () => {
    return (
        <section id='summary'>
            <h3 className='section-title'>Summary</h3>
            <div className='column-container'>
                <img src={profileIcon} alt='Photo of FJ Tria'></img>
                <div className='biography'>
                    <p>
                        I'm a software engineer from Southern California. I believe in building software that
                        promotes quality and authenticity. My goal with what I develop is to ensure seamless
                        user experiences and a encourage positive social impact.
                    </p>
                    <p>
                        I'm currently an open-source contributor at The Spacelab Nonprofit, where I help develop web
                        applications, manage software projects, and collaborate with other tech professionals.
                    </p>
                </div>
            </div>
        </section>
    );
}
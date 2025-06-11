import '../../index.css';
import './Summary.css';
import profileIcon from '../../assets/images/Summary/profile.webp'

export const Summary = () => {
    return (
        <section id='summary'>
            <h3 className='section-title'>Summary</h3>
            <div className='column-container'>
                <img src={profileIcon} alt='Photo of FJ Tria' loading='lazy'></img>
                <div className='biography'>
                    <p>
                        I'm a software engineer from Southern California. I believe in building software that
                        promotes quality and authenticity. My goal with what I develop is to ensure seamless
                        user experiences and a encourage positive social impact.
                    </p>
                    <p>
                        I was previously a volunteer at The Spacelab Nonprofit, where I participated in full-stack
                        web development projects and collaborated with other self-motivated tech professionals from
                        underrepresented communities.
                    </p>
                </div>
            </div>
        </section>
    );
}
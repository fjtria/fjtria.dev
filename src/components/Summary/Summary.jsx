import '../../index.css';
import './Summary.css';
import profileIcon from '../../assets/images/Summary/profile.webp'

export const Summary = () => {
    return (
        <section id='summary'>
            <h2>About</h2>
            <div className='column-container'>
                <img src={profileIcon}></img>
                <div className='biography'>
                    <p>
                        I'm a software engineer from Southern California. I believe in building software that
                        prioritizes the benefit of its users. My goal is to ensure seamless interactions between
                        users and technology, developing applications that meet the needs of real-world people.
                    </p>
                    <p>
                        Other than coding, I enjoy exploring the intersection of art and technology. I'm
                        constantly seeking inspiration from films, games, and other digital media to fuel my
                        own ideas.
                    </p>
                </div>
            </div>
        </section>
    );
}
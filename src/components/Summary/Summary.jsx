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
                        I'm a software engineer dedicated to building web applications that enhance everyday
                        experiences. I follow a user-first approach, creating seamless interactions between
                        users and technology, ensuring every project meets real-world needs.
                    </p>
                    <p>
                        Outside of coding, I enjoy exploring the intersection of art and technology, constantly
                        seeking inspiration from films, games, and other digital media.
                    </p>
                </div>
            </div>
        </section>
    );
}
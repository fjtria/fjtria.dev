import '../../index.css';
import './About.css';

export default function About() {
    return (
        <section id='about'>
            <h2 className='title'>About.</h2>
            <div className='about-container'>
                <div className='about-left'>
                    <h3 className='subtitle'>More about me.</h3>
                    <p>With a passion for cinematic arts and digital technology, I found a home in
                        front-end development. I levarage my unique perspective and attention-to-detail
                        to enhance the user experience.
                    </p>
                    <p>
                        Interacting with software should be easy – My goal is for users to feel confident
                        in the software they interact with daily.
                    </p>
                </div>
                <div className='about-right'>
                    <div className='experience'>

                    </div>
                    <div className='education'>

                    </div>
                </div>
            </div>
        </section>
    );
}
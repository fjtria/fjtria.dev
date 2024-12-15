import '../../index.css';
import './Contact.css';

export default function Contact() {
    return (
        <section id='contact'>
            <h2 className='title'>Contact.</h2>
            <p className='subtitle'>Email:</p>
            <a href='mailto:fjstria@gmail.com' target='_blank'>📧 fjstria@gmail.com</a>
            <p className='subtitle'>LinkedIn:</p>
            <a href='https://www.linkedin.com/in/fjstria/' target='_blank' rel='noopener noreferrer'>🤝 @fjstria</a>
        </section>
    );
}
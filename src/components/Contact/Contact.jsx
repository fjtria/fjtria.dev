import '../../index.css';
import './Contact.css';

export default function Contact() {
    return (
        <section id='contact'>
            <h2 className='title'>Contact.</h2>
            <p className='subtitle'>Email:</p>
            <a href='mailto:fjstria@gmail.com'>📧 fjstria@gmail.com</a>
            <p className='subtitle'>LinkedIn:</p>
            <a href='https://www.linkedin.com/in/fjstria/'>🤝 @fjstria</a>
        </section>
    );
}
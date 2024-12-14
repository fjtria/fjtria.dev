import '../../index.css';
import './Hero.css';
import heroImage from '../../assets/images/Hero/hero_image.webp';

export default function Hero() {
    return (
        <div id='#' className='hero'>

            <div className='hero-left'>
                <h1 className='title'>👋🏽 Hello world!</h1>
                <p className='text'>I'm FJ, a software engineer and web developer.</p>
            </div>

            <div className='hero-right'>
                <img src={heroImage} alt='FJ Tria'></img>
            </div>

        </div>
    );
}
import '../../index.css';
import './Projects.css';
import exoplanetariumIcon from '../../assets/images/Projects/exoplanetarium_preview.webp';
import spacelabWebsiteIcon from '../../assets/images/Projects/spacelab_preview.webp';
import pantrypalIcon from '../../assets/images/Projects/pantrypal_preview.webp';
import colorcodedIcon from '../../assets/images/Projects/colorcoded_preview.webp';



export const Projects = () => {
    return (
        <section id='projects'>
            <h2>Projects</h2> 

            <div className='proj-card'>
                <img src={exoplanetariumIcon} loading='lazy'></img>
                <div>
                    <a href='https://spacelabdev.github.io/Exoplanetarium-3D/#/' target='_blank' rel='noopener noreferrer'>Exoplanetarium 3D ↗</a>
                    <p className='proj-stack'>React.js, Node.js, Three.js, WebGL</p>
                    <p className='proj-desc'>An open-source 3D web application that renders exoplanets using React.js, Three.js, and the NASA and CalTech APIs.</p>
                </div>
            </div>
            
            <div className='proj-card'>
                <img src={spacelabWebsiteIcon} loading='lazy'></img>
                <div>
                    <a href='https://spacelab.space/' target='_blank' rel='noopener noreferrer'>The Spacelab Nonprofit ↗</a>
                    <p className='proj-stack'>React.js, Node.js, Sass, AWS</p>
                    <p className='proj-desc'>The Spacelab Nonprofit's website, for learning about the organization and discovering the latest findings in space.</p>
                </div>
            </div>  
            
            <div className='proj-card'>
                <img src={colorcodedIcon} loading='lazy'></img>
                <div>
                    <a href='https://fjtria.github.io/colorcoded/' target='_blank' rel='noopener noreferrer'>Colorcoded ↗</a>
                    <p className='proj-stack'>JavaScript, HTML, CSS</p>
                    <p className='proj-desc'>A color code conversion web application capable of converting between HEX, RGB, CMYK, and HSL formats.</p>
                </div>
            </div>

            <div className='proj-card'>
                <img src={pantrypalIcon} loading='lazy'></img>
                <div>
                    <a href='https://github.com/fjtria/PantryPal' target='_blank' rel='noopener noreferrer'>Pantry Pal ↗</a>
                    <p className='proj-stack'>React Native, CSS, Firebase, Expo</p>
                    <p className='proj-desc'>A mobile application that allows users to share and discover cooking recipes and automatically generate grocery shopping lists.</p>
                </div>
            </div>       
        </section>
    );
}
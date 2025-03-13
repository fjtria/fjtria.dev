import '../../index.css';
import './Projects.css';
import DexfetchdPreview from '../../assets/images/Projects/dexfetchd_preview.webp';
import SpacelabPreview from '../../assets/images/Projects/spacelab_preview.webp';
import ExoplanetariumPreview from '../../assets/images/Projects/exoplanetarium_preview.webp';
import ColorcodedPreview from '../../assets/images/Projects/colorcoded_preview.webp';
import PantryPalPreview from '../../assets/images/Projects/pantrypal_preview.webp';




export const Projects = () => {
    return (
        <section id='projects'>
            <h2>Projects</h2> 

            <div className='proj-card'>
                <img src={DexfetchdPreview} loading='lazy'></img>
                <div>
                    <a href='https://fjtria.github.io/dexfetchd/' target='_blank' rel='noopener noreferrer'>Dexfetch'd ↗</a>
                    <p className='proj-stack'>React.js, CSS, PokéAPI</p>
                    <p className='proj-desc'>A web application for looking up basic data about Pokémon species, including types, abilities, and stats.</p>
                </div>
            </div>  

            <div className='proj-card'>
                <img src={SpacelabPreview} loading='lazy'></img>
                <div>
                    <a href='https://spacelab.space/' target='_blank' rel='noopener noreferrer'>The Spacelab Nonprofit ↗</a>
                    <p className='proj-stack'>React.js, Sass, Node.js, CalTech API, AWS</p>
                    <p className='proj-desc'>The Spacelab Nonprofit's website, for learning about the organization and discovering the latest findings in space.</p>
                </div>
            </div>  

            <div className='proj-card'>
                <img src={ExoplanetariumPreview} loading='lazy'></img>
                <div>
                    <a href='https://spacelabdev.github.io/Exoplanetarium-3D/' target='_blank' rel='noopener noreferrer'>Exoplanetarium 3D ↗</a>
                    <p className='proj-stack'>React.js, Node.js, Three.js, WebGL</p>
                    <p className='proj-desc'>A WIP open-source 3D web application for exploring and identifying exoplanets within our galaxy.</p>
                </div>
            </div>
            
            <div className='proj-card'>
                <img src={ColorcodedPreview} loading='lazy'></img>
                <div>
                    <a href='https://fjtria.github.io/colorcoded/' target='_blank' rel='noopener noreferrer'>Colorcoded ↗</a>
                    <p className='proj-stack'>JavaScript, HTML, CSS</p>
                    <p className='proj-desc'>A color code conversion web application capable of converting between HEX, RGB, CMYK, and HSL formats.</p>
                </div>
            </div>

            <div className='proj-card'>
                <img src={PantryPalPreview} loading='lazy'></img>
                <div>
                    <a href='https://github.com/fjtria/PantryPal' target='_blank' rel='noopener noreferrer'>Pantry Pal ↗</a>
                    <p className='proj-stack'>React Native, CSS, Firebase, Expo</p>
                    <p className='proj-desc'>A mobile application that allows users to share and discover cooking recipes and generate grocery shopping lists.</p>
                </div>
            </div>       
        </section>
    );
}
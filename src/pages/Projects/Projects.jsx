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
                <img src={SpacelabPreview} alt='Screenshot of the Spacelab Nonprofit website' loading='lazy'></img>
                <div>
                    <a href='https://spacelab.space/' target='_blank' rel='noopener noreferrer'>The Spacelab Nonprofit ↗</a>
                    <p className='proj-stack'>React, Sass, Node.js, AWS</p>
                    <p className='proj-desc'>The Spacelab Nonprofit's website, describing the goals of the organization and discussing the latest space-related projects.</p>
                </div>
            </div>  

            <div className='proj-card'>
                <img src={ExoplanetariumPreview} alt='Screenshot of the Exoplanetarium 3D web application' loading='lazy'></img>
                <div>
                    <a href='https://spacelabdev.github.io/Exoplanetarium-3D/' target='_blank' rel='noopener noreferrer'>Exoplanetarium 3D ↗</a>
                    <p className='proj-stack'>React, Node.js, Three.js, WebGL</p>
                    <p className='proj-desc'>An educational, interactive, 3D web application that renders and allows users to explore exoplanets within our galaxy.</p>
                </div>
            </div>

            <div className='proj-card'>
                <img src={DexfetchdPreview} alt='Screenshot of the Dexfetchd website' loading='lazy'></img>
                <div>
                    <a href='https://fjtria.github.io/dexfetchd/' target='_blank' rel='noopener noreferrer'>Dexfetch'd ↗</a>
                    <p className='proj-stack'>React, CSS, PokéAPI</p>
                    <p className='proj-desc'>A website for interfacing with a database of Pokémon, allowing users to look up Pokémon species, including types, abilities, and stats.</p>
                </div>
            </div> 
            
            <div className='proj-card'>
                <img src={ColorcodedPreview} alt='Screenshot of the Colorcoded web application' loading='lazy'></img>
                <div>
                    <a href='https://fjtria.github.io/colorcoded/' target='_blank' rel='noopener noreferrer'>Colorcoded ↗</a>
                    <p className='proj-stack'>JavaScript, HTML, CSS</p>
                    <p className='proj-desc'>An all-in-one color code conversion tool capable of converting to and from the HEX, RGB, CMYK, and HSL color models.</p>
                </div>
            </div>

            <div className='proj-card'>
                <img src={PantryPalPreview} alt='Pantry Pal Logo' loading='lazy'></img>
                <div>
                    <a href='https://github.com/fjtria/PantryPal' target='_blank' rel='noopener noreferrer'>Pantry Pal ↗</a>
                    <p className='proj-stack'>React Native, CSS, Firebase, Expo</p>
                    <p className='proj-desc'>A mobile application allowing users to share and discover recipes and automatically generate grocery shopping lists.</p>
                </div>
            </div>       
        </section>
    );
}
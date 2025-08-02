import '../../index.css';
import './Projects.css';
import ZeroTheBlatPreview from '../../assets/images/Projects/zerotheblat_preview.webp';
import DexfetchdPreview from '../../assets/images/Projects/dexfetchd_preview.webp';
import SpacelabPreview from '../../assets/images/Projects/spacelab_preview.webp';
import ExoplanetariumPreview from '../../assets/images/Projects/exoplanetarium_preview.webp';
import ColorcodedPreview from '../../assets/images/Projects/colorcoded_preview.webp';
import PantryPalPreview from '../../assets/images/Projects/pantrypal_preview.webp';

export const Projects = () => {
    return (
        <section id='projects'>
            <h2>Projects</h2>  
            <div className='column-container'>
                <div className='card'>
                    <img src={SpacelabPreview} alt='Screenshot of The Spacelab Nonprofit Website'>
                    </img>
                    <div className='card-text'>
                        <h4>The Spacelab Nonprofit</h4>
                        <p className='card-subtext'>
                            The Spacelab Nonprofit&apos;s website, describing the organization&apos;s mission and highlighting the latest space-related projects.
                        </p>
                        <a className='card-button' href='https://spacelab.space/' target='_blank' rel='noopener noreferrer'>View Project ↗</a>
                    </div>
                </div>

                <div className='card'>
                    <img src={ZeroTheBlatPreview} alt='Screenshot of Zero The Blat'>
                    </img>
                    <div className='card-text'>
                        <h4>Zero The Blat</h4>
                        <p className='card-subtext'>
                            A full-stack web application dedicated to uploading and viewing a gallery of pictures of Zero.
                        </p>
                        <a className='card-button' href='https://zerotheblat.vercel.app' target='_blank' rel='noopener noreferrer'>View Project ↗</a>
                    </div>
                </div>

                <div className='card'>
                    <img src={DexfetchdPreview} alt="Screenshot of Dexfetch'd">
                    </img>
                    <div className='card-text'>
                        <h4>Dexfetch&apos;d</h4>
                        <p className='card-subtext'>
                            A website for interfacing with a database of Pokémon, allowing users to look up Pokémon species, including types, abilities, and stats.
                        </p>
                        <a className='card-button' href='https://fjtria.github.io/dexfetchd/' target='_blank' rel='noopener noreferrer'>View Project ↗</a>
                    </div>
                </div>

                <div className='card'>
                    <img src={ColorcodedPreview} alt='Screenshot of Colorcoded'>
                    </img>
                    <div className='card-text'>
                        <h4>Colorcoded</h4>
                        <p className='card-subtext'>
                            An all-in-one color code conversion tool capable of converting to and from the HEX, RGB, CMYK, and HSL color models.
                        </p>
                        <a className='card-button' href='https://fjtria.github.io/colorcoded/' target='_blank' rel='noopener noreferrer'>View Project ↗</a>
                    </div>
                </div>

                 <div className='card'>
                    <img src={PantryPalPreview} alt='Pantry Pal Logo'>
                    </img>
                    <div className='card-text'>
                        <h4>Pantry Pal</h4>
                        <p className='card-subtext'>
                            A mobile application allowing users to share and discover recipes and automatically generate grocery shopping lists.
                        </p>
                        <a className='card-button' href='https://github.com/fjtria/PantryPal' target='_blank' rel='noopener noreferrer'>View Project ↗</a>
                    </div>
                </div>

                <div className='card'>
                    <img src={ExoplanetariumPreview} alt='Screenshot of Exoplanetarium 3D'>
                    </img>
                    <div className='card-text'>
                        <h4>Exoplanetarium 3D</h4>
                        <p className='card-subtext'>
                            An educational, interactive, 3D web application that renders and allows users to explore exoplanets within our galaxy.
                        </p>
                        <a className='card-button' href='https://spacelabdev.github.io/Exoplanetarium-3D/' target='_blank' rel='noopener noreferrer'>View Project ↗</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
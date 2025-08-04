import '../../index.css';
import './Projects.css';
import ZeroTheBlatPreview from '../../assets/images/Projects/zerotheblat_preview.webp';
import DexfetchdPreview from '../../assets/images/Projects/dexfetchd_preview.webp';
import SpacelabPreview from '../../assets/images/Projects/spacelab_preview.webp';
import ExoplanetariumPreview from '../../assets/images/Projects/exoplanetarium_preview.webp';
import ColorcodedPreview from '../../assets/images/Projects/colorcoded_preview.webp';
import PantryPalPreview from '../../assets/images/Projects/pantrypal_preview.webp';
import MimiPreview from '../../assets/images/Projects/mimi_preview.webp';
import WTHPreview from '../../assets/images/Projects/wth_preview.webp';



export const Projects = () => {
    return (
        <section id='projects'>
            <h2>Projects</h2>  
            <div className='column-container'>
                <div className='card'>
                    <img src={SpacelabPreview} alt='Screenshot of The Spacelab Nonprofit Website' loading='lazy'>
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
                    <img src={ZeroTheBlatPreview} alt='Screenshot of Zero The Blat' loading='lazy'>
                    </img>
                    <div className='card-text'>
                        <h4>Zero The Blat</h4>
                        <p className='card-subtext'>
                            A full-stack web application dedicated to uploading and viewing a gallery of pictures of (the best cat) Zero.
                        </p>
                        <a className='card-button' href='https://zerotheblat.vercel.app' target='_blank' rel='noopener noreferrer'>View Project ↗</a>
                    </div>
                </div>

                <div className='card'>
                    <img src={DexfetchdPreview} alt="Screenshot of Dexfetch'd" loading='lazy'>
                    </img>
                    <div className='card-text'>
                        <h4>Dexfetch&apos;d</h4>
                        <p className='card-subtext'>
                            A web application for browsing a database of Pokémon, allowing users to look up Pokémon species, including types, abilities, and stats.
                        </p>
                        <a className='card-button' href='https://fjtria.github.io/dexfetchd/' target='_blank' rel='noopener noreferrer'>View Project ↗</a>
                    </div>
                </div>

                <div className='card'>
                    <img src={ColorcodedPreview} alt='Screenshot of Colorcoded' loading='lazy'>
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
                    <img src={PantryPalPreview} alt='Pantry Pal Logo' loading='lazy'>
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
                    <img src={ExoplanetariumPreview} alt='Screenshot of Exoplanetarium 3D' loading='lazy'>
                    </img>
                    <div className='card-text'>
                        <h4>Exoplanetarium 3D</h4>
                        <p className='card-subtext'>
                            An educational, interactive, 3D web application that enables users to visualize and explore exoplanets within our galaxy.
                        </p>
                        <a className='card-button' href='https://spacelabdev.github.io/Exoplanetarium-3D/' target='_blank' rel='noopener noreferrer'>View Project ↗</a>
                    </div>
                </div>

                <div className='card'>
                    <img src={WTHPreview} alt='Screenshot of What the Hell?' loading='lazy'>
                    </img>
                    <div className='card-text'>
                        <h4>What the Hell?</h4>
                        <p className='card-subtext'>
                            A casual 2D platformer where, after a turn for the worse, you find yourself in Hell and have to fight your way back to the surface.
                        </p>
                        <a className='card-button' href='https://gameshowcase.ucsc.edu/project/what-the-hell/' target='_blank' rel='noopener noreferrer'>View Project ↗</a>
                    </div>
                </div>

                <div className='card'>
                    <img src={MimiPreview} alt='Mimi Logo' loading='lazy'>
                    </img>
                    <div className='card-text'>
                        <h4>Mimi</h4>
                        <p className='card-subtext'>
                            An HTML interactive fiction game that explores the pet and owner relationship and what happens when a dog loses their owner.
                        </p>
                        <a className='card-button' href='https://fjtria.itch.io/mimi' target='_blank' rel='noopener noreferrer'>View Project ↗</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
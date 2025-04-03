import '../../index.css';
import './Projects.css';
import { motion } from 'motion/react';
import ZeroTheBlatPreview from '../../assets/images/Projects/zerotheblat_preview.webp';
import DexfetchdPreview from '../../assets/images/Projects/dexfetchd_preview.webp';
import SpacelabPreview from '../../assets/images/Projects/spacelab_preview.webp';
import ExoplanetariumPreview from '../../assets/images/Projects/exoplanetarium_preview.webp';
import ColorcodedPreview from '../../assets/images/Projects/colorcoded_preview.webp';
import PantryPalPreview from '../../assets/images/Projects/pantrypal_preview.webp';

export const Projects = () => {
    return (
        <motion.section id='projects'
            animate={{
                opacity: [0, 1],
                x: [100, 0]
            }}
            transition={{
                type: "linear",
            }}
        >
            <h2>Projects</h2>  
            <a className='proj-card' href='https://zerotheblat.vercel.app' target='_blank' rel='noopener noreferrer'>
                <img src={ZeroTheBlatPreview} alt='Screenshot of the Zero the Blat website'></img>
                <div>
                    <h3 className='proj-title'>Zero The Blat ↗</h3>
                    <p className='proj-stack'>React, Node, Express, CSS, Cloudinary, Vercel</p>
                    <p className='proj-desc'>A full-stack web application for uploading to and viewing a gallery of pictures of my friend's black cat, Zero.</p>
                </div>
            </a>

            <a className='proj-card' href='https://spacelab.space/' target='_blank' rel='noopener noreferrer'>
                <img src={SpacelabPreview} alt='Screenshot of the Spacelab Nonprofit website'></img>
                <div>
                    <h3 className='proj-title'>The Spacelab Nonprofit ↗</h3>
                    <p className='proj-stack'>React, CSS, Exoplanet Archive API, AWS</p>
                    <p className='proj-desc'>The Spacelab Nonprofit's website, describing the organization's mission and highlighting the latest space-related projects.</p>
                </div>
            </a>

            <a className='proj-card' href='https://fjtria.github.io/dexfetchd/' target='_blank' rel='noopener noreferrer'>
                <img src={DexfetchdPreview} alt='Screenshot of the Dexfetchd website'></img>
                <div>
                    <h3 className='proj-title'>Dexfetch'd ↗</h3>
                    <p className='proj-stack'>React, CSS, PokéAPI, GitHub Pages</p>
                    <p className='proj-desc'>A website for interfacing with a database of Pokémon, allowing users to look up Pokémon species, including types, abilities, and stats.</p>
                </div>
            </a> 
            
            <a className='proj-card' href='https://fjtria.github.io/colorcoded/' target='_blank' rel='noopener noreferrer'>
                <img src={ColorcodedPreview} alt='Screenshot of the Colorcoded web application'></img>
                <div>
                    <h3 className='proj-title'>Colorcoded ↗</h3>
                    <p className='proj-stack'>JavaScript, HTML, CSS, GitHub Pages</p>
                    <p className='proj-desc'>An all-in-one color code conversion tool capable of converting to and from the HEX, RGB, CMYK, and HSL color models.</p>
                </div>
            </a>

            <a className='proj-card' href='https://github.com/fjtria/PantryPal' target='_blank' rel='noopener noreferrer'>
                <img src={PantryPalPreview} alt='Pantry Pal Logo'></img>
                <div>
                    <h3 className='proj-title'>Pantry Pal ↗</h3>
                    <p className='proj-stack'>React Native, CSS, Firebase, Expo</p>
                    <p className='proj-desc'>A mobile application allowing users to share and discover recipes and automatically generate grocery shopping lists.</p>
                </div>
            </a>      

            <a className='proj-card' href='https://spacelabdev.github.io/Exoplanetarium-3D/' target='_blank' rel='noopener noreferrer'>
                <img src={ExoplanetariumPreview} alt='Screenshot of the Exoplanetarium 3D web application'></img>
                <div>
                    <h3 className='proj-title'>Exoplanetarium 3D ↗</h3>
                    <p className='proj-stack'>React, Three.js, SASS, GitHub Pages</p>
                    <p className='proj-desc'>An educational, interactive, 3D web application that renders and allows users to explore exoplanets within our galaxy.</p>
                </div>
            </a> 
        </motion.section>
    );
}
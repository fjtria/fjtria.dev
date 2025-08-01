import { Link } from 'react-router';
import copy from 'copy-to-clipboard';
import '../../index.css';
import './Home.css';
import SpacelabPreview from '../../assets/images/Projects/spacelab_preview.webp'
import ExoplanetariumPreview from '../../assets/images/Projects/exoplanetarium_preview.webp';
import DexfetchdPreview from '../../assets/images/Projects/dexfetchd_preview.webp';

export const Home = () => {

    const copyToClipboard = () => {
        copy('fjtria' + '@' + 'protonmail' + '.' + 'com');
        alert(`Email copied to clipboard!`);
    }

    return (
        <section id='home'>
            <div>            
                <h2 className='home-title'>I&apos;m a creator building <br></br> impactful digital experiences.</h2>
                <p>
                    I&apos;m passionate about building experiences that are intuitive, engaging, and empowering.
                </p>
                <button className='button' onClick={copyToClipboard} title='Copy Email'>Contact me →</button>
            </div>
            <div>
                <h3>Featured</h3>
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
                </div>
                <Link className='button' to='/projects' title='Projects'>View all projects →</Link>
            </div>
        </section>
    );
}
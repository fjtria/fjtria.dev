import '../../index.css';
import './Home.css';

export const Home = () => {
    return (
        <section id='home'>
            <pre className='title' aria-label='FJ TRIA in ASCII art text'>
                `________````___``_________``________``___``________`````<br></br>
                |\``_____\``|\``\|\___```___\\```__``\|\``\|\```__``\````<br></br>
                \`\``\__/```\`\``\|___`\``\_\`\``\|\``\`\``\`\``\|\``\```<br></br>
                `\`\```__\__`\`\``\```\`\``\`\`\```_``_\`\``\`\```__``\``<br></br>
                ``\`\``\_|\``\\_\``\```\`\``\`\`\``\\``\\`\``\`\``\`\``\`<br></br>
                ```\`\__\\`\________\```\`\__\`\`\__\\`_\\`\__\`\__\`\__\<br></br>
                ````\|__|`\|________|````\|__|``\|__|\|__|\|__|\|__|\|__|<br></br>
            </pre>

            <div className='hero-text'>
                <h2>Hello world!</h2>
                <h3>Welcome to my site.</h3>
                <p>
                    I'm FJ, a software engineer with experience developing cross-platform web 
                    applications. I'm passionate about new tech and collaborating to make a positive impact.
                </p>
                <p>
                    This site showcases my software development work, alongside some of my own thoughts.
                </p>
                <p>
                    Thanks for stopping by!
                </p>
                <p className='signature'>
                    - @fjtria.dev
                </p>
            </div>
        </section>
    );
}
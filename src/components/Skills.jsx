import '../styles/Skills.css'
import image from '../assets/images/image.png'

function Skills() {
  return(
    <div id='skills'>
      <h2>Some of my skills.</h2>
      <div className='skillList'>

        <div className='skillCard'>
          <img src={image}></img>
          <p>React</p>
        </div>

        <div className='skillCard'>
          <img src={image}></img>
          <p>React</p>
        </div>

        <div className='skillCard'>
          <img src={image}></img>
          <p>React</p>
        </div>

        <div className='skillCard'>
          <img src={image}></img>
          <p>React</p>
        </div>

        <div className='skillCard'>
          <img src={image}></img>
          <p>React</p>
        </div>

        <div className='skillCard'>
          <img src={image}></img>
          <p>React</p>
        </div>

        <div className='skillCard'>
          <img src={image}></img>
          <p>React</p>
        </div>

      </div>
    </div>
  );
}

export default Skills;